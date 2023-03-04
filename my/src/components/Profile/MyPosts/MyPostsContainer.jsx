// import React from "react";
import MyPosts from "./MyPosts";
import { addPostActionCreator } from "./../../../Redux/profile-reducer";
import { updateNewPostTextActionCreator } from "./../../../Redux/profile-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    posts: state.postsPage.posts,
    newPostText: state.postsPage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    upNewPostText: (text) => dispatch(updateNewPostTextActionCreator(text)),
    addPost: () => dispatch(addPostActionCreator()),
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

// const MyPostsContainer = (props) => {
//   // debugger;

//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState();
//         const addPost = () => {
//           store.dispatch(addPostActionCreator());
//         };
//         const onPostChangeContainer = (text) => {
//           let action = updateNewPostTextActionCreator(text);
//           store.dispatch(action);
//         };
//         return (
//           <MyPosts
//             upNewPostText={onPostChangeContainer}
//             addPost={addPost}
//             posts={state.postsPage.posts}
//             newPostText={state.postsPage.newPostText}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };
