// import React from "react";
import MyPosts from "./MyPosts";
import { actions } from "../../../redux/profile-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    posts: state.postsPage.posts,
  };
};

const addPost = actions.addPost

const MyPostsContainer = connect(mapStateToProps, { addPost })(MyPosts);

export default MyPostsContainer;
