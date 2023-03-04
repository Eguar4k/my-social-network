import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://klike.net/uploads/posts/2019-03/1551511791_8.jpg"
        alt=""
      />
      {props.message}
      <div>
        <button>Like</button>
        {props.LiksCounter}
      </div>
    </div>
  );
};
export default Post;
