import { ProfileAPI } from "../api/ProfileAPI";
import { PhotosType, PostsType, ProfileType } from "../types/typs";
import { BaseThunkType, InferActionsTypes } from "./redux-store";
import { ResultCodesEnum } from "../api/api";



let initialState = {
  posts: [
    { id: 1, message: "Hello,world", liksCounter: 0 },
    { id: 2, message: "It's my first post", liksCounter: 12 },
    { id: 3, message: "It's my second post", liksCounter: 25 },
    { id: 4, message: "It's my therd post", liksCounter: 48 },
    { id: 5, message: "It's my four post", liksCounter: 15 },
  ] as Array<PostsType>,
  newPostText: "Igor krasavchik",
  profile: null as ProfileType | null,
  status: "",
};



// const ADD_POST = "my/profile/ADD-POST";
// const DELETE_POST = "my/profile/DELETE_POST";
// const SET_USER_PROFILE = "my/profile/SET_USER_PROFILE";
// const SET_STATUS = "my/profile/SET_STATUS";
// const SAVE_PHOTO_SUCCESS = "my/profile/SAVE_PHOTO_SUCCESS";

const profileReducer = (state = initialState, action: ActionsTypes):InitialStateType => {
  switch (action.type) {
    case "my/profile/ADD-POST":
      return {
        ...state,
        posts: [
          ...state.posts,
          { id: 6, message: action.newPostText, liksCounter: 0 },
        ],
      };
    case "my/profile/DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    case "my/profile/SET_USER_PROFILE":
      return {
        ...state,
        profile: action.profile,
      };
    case "my/profile/SET_STATUS":
      return {
        ...state,
        status: action.status,
      };
    case "my/profile/SAVE_PHOTO_SUCCESS":
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as ProfileType,
      };
    default:
      return state;
  }
};

// types of actioncreators

// type ActionsTypes = AddPostActionType | DeletePostActionType | SavePhotoSuccessActionType | SetUserProfileActionType | SetStatusActionType

// type AddPostActionType = {
//   type: typeof ADD_POST
//    newPostText: string
// }
// type DeletePostActionType = {
//   type: typeof DELETE_POST
//   postId: number
// }
// type SavePhotoSuccessActionType = {
//   type: typeof SAVE_PHOTO_SUCCESS,
//   photos: PhotosType
// }
// type SetUserProfileActionType = {
//   type: typeof SET_USER_PROFILE,
//   profile: ProfileType
// }
// type SetStatusActionType = {
//   type: typeof SET_STATUS,
//   status: string
// }

// actioncreators

export const actions = {
addPost : (text: string)  => ({ type: "my/profile/ADD-POST", newPostText: text }) as const,
deletePost : (postId: number) => ({ type: "my/profile/DELETE_POST", postId })as const,
savePhotoSuccess : (photos: PhotosType)=> ({
  type: "my/profile/SAVE_PHOTO_SUCCESS",
  photos,
})as const,
setUserProfile : (profile: ProfileType) => ({
  type: "my/profile/SET_USER_PROFILE",
  profile,
})as const,

setStatus : (status: string) => ({
  type: "my/profile/SET_STATUS",
  status,
})as const,
}
// thunks

// export const getUserProfile = (userId) => (dispatch) => {
//   UsersAPI.profile(userId).then((data) => {
//     dispatch(setUserProfile(data));
//   });
// };


export const getUserProfile = (userId: number | null):ThunkType => async (dispatch) => {
  const data = await ProfileAPI.profile(userId);
  dispatch(actions.setUserProfile(data));
};

// export const getStatus = (userId) => (dispatch) => {
//   ProfileAPI.getStatus(userId).then((response) => {
//     dispatch(setStatus(response.data));
//   });
// };

export const getStatus = (userId: number) :ThunkType => async (dispatch) => {
  const data = await ProfileAPI.getStatus(userId);
  dispatch(actions.setStatus(data));
};

export const updateStatus = (status: string):ThunkType => async (dispatch) => {
  try {
    const data = await ProfileAPI.updateStatus(status);
    if (data.resultCode === ResultCodesEnum.Success) {
      dispatch(actions.setStatus(status));
    }
  } catch (error) {
    //
  }
};

export const savePhoto = (file:File):ThunkType => async (dispatch) => {
  // debugger;
  const data = await ProfileAPI.savePhoto(file);
  if (data.resultCode === 0) {
    dispatch(actions.savePhotoSuccess(data.data.photos));
  }
};

export const saveProfile =
  (profile:ProfileType, setError:any):ThunkType => async (dispatch, getState) => {
    // debugger;
    const userId = getState().auth.userId;
    const data = await ProfileAPI.saveProfile(profile);
    if (data.resultCode === ResultCodesEnum.Success) {
     if(userId!==0){
      dispatch(getUserProfile(userId))}
    else {throw new Error ('userId can`t be null')}
    } else {
      setError("server", {
        type: "custom",
        message: data.messages,
      });
      return Promise.reject(data.messages);
    }
  };

export default profileReducer;
// 10 lesson methods of im/ex
// module.exports = profileReducer;
// module.exports = addPost;
export type InitialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>
