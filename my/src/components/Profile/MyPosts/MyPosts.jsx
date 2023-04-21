import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { useForm } from "react-hook-form";

// window.props = [];

class MyPosts extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  shouldComponentUpdate(nextProps, nextState) {
    return this.props !== nextProps || this.state !== nextState;
    // const currentProps = this.props;
    // const currentState = this.state;
    // return (
    //   Object.keys(nextProps).some(
    //     (prop) => nextProps[prop] !== currentProps[prop]
    //   ) ||
    //   Object.keys(nextState).some(
    //     (prop) => nextState[prop] !== currentState[prop]
    //   )
    // );
  }
  render() {
    // console.log(this.props);
    const { props } = this;

    // window.props.push(props);
    // console.log("RERENDER");
    let postsElement = props.posts.map((p) => (
      <Post message={p.message} key={p.id} LiksCounter={p.liksCounter} />
    ));

    return (
      <div className={s.myposts}>
        <MyPostsForm {...props} />
        {postsElement}
      </div>
    );
  }
}

const MyPostsForm = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const onSubmit = (data) => {
    props.addPost(data.newPostText);
    reset();
  };
  const hasError = errors?.newPostText;
  // console.log(errors);
  return (
    <form className={s.myposts} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <textarea
          className={hasError && s.formControl}
          {...register("newPostText", {
            required: "Post is require field!",
            maxLength: { value: 30, message: "Max length is 30 simbols" },
          })}
          placeholder="new post"
        />
        {hasError && (
          <div className={s.error}>{errors.newPostText.message}</div>
        )}
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};
export default MyPosts;
