import React from "react";
import MyPosts from "./MyPosts";
import { addPostActionCreator } from "./../../../Redux/profile-reducer";
import { updateNewPostTextActionCreator } from "./../../../Redux/profile-reducer";
import StoreContext from "../../../storeContext";

const MyPostsContainer = (props) => {
  // debugger;

  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        const addPost = () => {
          store.dispatch(addPostActionCreator());
        };
        const onPostChangeContainer = (text) => {
          let action = updateNewPostTextActionCreator(text);
          store.dispatch(action);
        };
        return (
          <MyPosts
            upNewPostText={onPostChangeContainer}
            addPost={addPost}
            posts={state.postsPage.posts}
            newPostText={state.postsPage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};
export default MyPostsContainer;
