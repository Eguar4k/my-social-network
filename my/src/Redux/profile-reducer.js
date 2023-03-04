let initialState = {
  posts: [
    { id: "1", message: "Hello,world", liksCounter: "0" },
    { id: "2", message: "It's my first post", liksCounter: "12" },
    { id: "3", message: "It's my second post", liksCounter: "25" },
    { id: "4", message: "It's my therd post", liksCounter: "48" },
    { id: "5", message: "It's my four post", liksCounter: "15" },
  ],
  newPostText: "Igor krasavchik",
};

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (state = initialState, action) => {
  // debugger;
  switch (action.type) {
    case ADD_POST:
      let mes = {
        id: "6",
        message: state.newPostText,
        liksCounter: "0",
      };

      state.posts.push(mes);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
