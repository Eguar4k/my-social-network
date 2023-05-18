import { UsersAPI, ProfileAPI } from "./../api/api";

let initialState = {
  posts: [
    { id: 1, message: "Hello,world", liksCounter: "0" },
    { id: 2, message: "It's my first post", liksCounter: "12" },
    { id: 3, message: "It's my second post", liksCounter: "25" },
    { id: 4, message: "It's my therd post", liksCounter: "48" },
    { id: 5, message: "It's my four post", liksCounter: "15" },
  ],
  newPostText: "Igor krasavchik",
  profile: null,
  status: "",
};

const ADD_POST = "my/profile/ADD-POST";
const DELETE_POST = "my/profile/DELETE_POST";
const SET_USER_PROFILE = "my/profile/SET_USER_PROFILE";
const SET_STATUS = "my/profile/SET_STATUS";
const SAVE_PHOTO_SUCCESS = "my/profile/SAVE_PHOTO_SUCCESS";

const profileReducer = (state = initialState, action) => {
  // debugger;
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          { id: 6, message: action.newPostText, liksCounter: 0 },
        ],
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    case SET_USER_PROFILE:
      // debugger;
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
    default:
      return state;
  }
};

export const addPost = (text) => ({ type: ADD_POST, newPostText: text });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });
export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

// export const getUserProfile = (userId) => (dispatch) => {
//   UsersAPI.profile(userId).then((data) => {
//     dispatch(setUserProfile(data));
//   });
// };

export const getUserProfile = (userId) => async (dispatch) => {
  const data = await UsersAPI.profile(userId);
  dispatch(setUserProfile(data));
};

// export const getStatus = (userId) => (dispatch) => {
//   ProfileAPI.getStatus(userId).then((response) => {
//     dispatch(setStatus(response.data));
//   });
// };

export const getStatus = (userId) => async (dispatch) => {
  const response = await ProfileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
  try {
    const response = await ProfileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  } catch (error) {
    //
  }
};

export const savePhoto = (file) => async (dispatch) => {
  // debugger;
  const response = await ProfileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

export const saveProfile =
  (profile, setError) => async (dispatch, getState) => {
    // debugger;
    const userId = getState().auth.userId;
    const response = await ProfileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
      dispatch(getUserProfile(userId));
    } else {
      setError("server", {
        type: "custom",
        message: response.data.messages,
      });
      return Promise.reject(response.data.messages);
    }
  };

export default profileReducer;
// 10 lesson methods of im/ex
// module.exports = profileReducer;
// module.exports = addPost;
