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

const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

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
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};

export const addPost = (text) => ({ type: ADD_POST, newPostText: text });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const getUserProfile = (userId) => (dispatch) => {
  UsersAPI.profile(userId).then((data) => {
    dispatch(setUserProfile(data));
  });
};

export const getStatus = (userId) => (dispatch) => {
  //debugger;
  ProfileAPI.getStatus(userId).then((response) => {
    dispatch(setStatus(response.data));
  });
};

export const updateStatus = (status) => (dispatch) => {
  ProfileAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};
export default profileReducer;
// module.exports = profileReducer;
// module.exports = addPost;
