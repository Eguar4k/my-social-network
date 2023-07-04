import { Dispatch } from "redux";
import { UsersAPI } from "../api/UsersAPI";
import { UsersType } from "../types/typs";
import { updateObjectInArray } from "../utilits/validators/object-helpers";
import { BaseThunkType, InferActionsTypes } from "./redux-store";
// import { ThunkAction } from "redux-thunk";
import { ResultCodesEnum } from "../api/api";


let initialState = {
  users: [] as Array<UsersType>,
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>, // array of users ids
  // fake: 10,
};



const usersReducer = (state = initialState, action:ActionsTypes): InitialStateType => {
  switch (action.type) {
    // case FAKE:
    //   return {
    //   //   ...state,
    //   fake: state.fake + 1,
    // };
    case "my/users/FOLLOW":
      return {
        ...state,
        // рефакторинг 90 видио 27 мин
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: true
        }),
        //   state.users.map((u) => {
        //   if (u.id === action.userId) {
        //     return { ...u, followed: true };
        //   }

        //   return u;
        // }),
      };
    case "my/users/UNFOLLOW":
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false,
        }),
        // users: state.users.map((u) => {
        //   if (u.id === action.userId) {
        //     return { ...u, followed: false };
        //   }

        //   return u;
        // }),
      };
    case "my/users/SET_USERS": {
      // if (state.users.length > 1) {
      //   return state;
      // }
      return {
        ...state,
        users: [
          // ...state.users,
          ...action.users,
        ],
      };
    }
    case "my/users/SET_CURRENT_PAGE": {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case "my/users/SET_TOTAL_USERS_COUNT": {
      return {
        ...state,
        totalUsersCount: action.count,
      };
    }
    case "my/users/TOGGLE_IS_FETCHING": {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case "my/users/TOGGLE_IS_FOLLOWING_PROGRESS": {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    }
    default:
      return state;
  }
};

// ACTIONSCREATORS


export const actions ={followSuccess : (userId: number) => ({ type: "my/users/FOLLOW", userId })as const,

unfollowSuccess : (userId: number) => ({ type: "my/users/UNFOLLOW", userId })as const,

setUsers : (users: Array<UsersType>) => ({ type: "my/users/SET_USERS", users })as const,

setCurrentPage : (currentPage: number) => ({
  type: "my/users/SET_CURRENT_PAGE",
  currentPage,
}) as const,

setTotalUsersCount : (totalUsersCount: number) => ({
  type: "my/users/SET_TOTAL_USERS_COUNT",
  count: totalUsersCount,
})as const,

toggleIsFetching : (isFetching: boolean) => ({
  type: "my/users/TOGGLE_IS_FETCHING",
  isFetching,
})as const,

toggleIsFollowingProgress : (isFetching: boolean, userId: number) => ({
  type: "my/users/TOGGLE_IS_FOLLOWING_PROGRESS",
  isFetching,
  userId,
})as const,
}

// THUNKSCREATORS

// первый вариант типизации санок

// type GetStateType =()=>AppStateType
type DispatchType = Dispatch<ActionsTypes>

// export const requestUsers = (page:number, pageSize:number) => {
//   return async (dispatch:DispatchType, getState:GetStateType) => {
//     dispatch(toggleIsFetching(true));
//     dispatch(setCurrentPage(page));
//     const data = await UsersAPI.getUsars(page, pageSize);
//     dispatch(toggleIsFetching(false));
//     dispatch(setUsers(data.items));
//     dispatch(setTotalUsersCount(data.totalCount));
//   };
// };

// type ThunkType = ThunkAction <Promise<void>, AppStateType, unknown, ActionsTypes>

export const requestUsers = (page:number, pageSize:number): ThunkType => {
  return async (dispatch, getState) => {
    dispatch(actions.toggleIsFetching(true));
    dispatch(actions.setCurrentPage(page));
    const data = await UsersAPI.getUsars(page, pageSize);
    dispatch(actions.toggleIsFetching(false));
    dispatch(actions.setUsers(data.items));
    dispatch(actions.setTotalUsersCount(data.totalCount));
  };
}

//рефакторинг на 90 уроке 15 минута (выделяем общую логику в функцию followUnfollowFlow)
const _followUnfollowFlow = async (
  dispatch: DispatchType,
  userId: number,
  apiMethod: any,
  actionCreator: (userId: number)=> ActionsTypes
) => {
  dispatch(actions.toggleIsFollowingProgress(true, userId));
  const data = await apiMethod(userId);
  if (data.resultCode === ResultCodesEnum.Success) {
    dispatch(actionCreator(userId));
  }
  dispatch(actions.toggleIsFollowingProgress(false, userId));
};


export const unfollow = (userId: number):ThunkType => {
  return async (dispatch) => {
    _followUnfollowFlow(
      dispatch,
      userId,
      UsersAPI.unfollowed.bind(UsersAPI),
      actions.unfollowSuccess
    );
  };
};

export const follow = (userId: number):ThunkType => {
  return async (dispatch) => {
    _followUnfollowFlow(
      dispatch,
      userId,
      UsersAPI.followed.bind(UsersAPI),
      actions.followSuccess
    );
  };
};

// // До рефакторинга
// export const unfollow = (userId) => {
//   return async (dispatch) => {
//     dispatch(toggleIsFollowingProgress(true, userId));
//     const data = await UsersAPI.unfollowed(userId);
//     if (data.resultCode === 0) {
//       dispatch(unfollow(userId));
//     }
//     dispatch(toggleIsFollowingProgress(false, userId));
//   };
// };

// export const follow = (userId) => {
//   return async (dispatch) => {
//     dispatch(toggleIsFollowingProgress(true, userId));
//     const data = await UsersAPI.followed(userId);
//     if (data.resultCode === 0) {
//       dispatch(followSuccess(userId));
//     }
//     dispatch(toggleIsFollowingProgress(false, userId));
//   };
// };

export default usersReducer;

type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>