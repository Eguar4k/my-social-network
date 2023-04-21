import React from "react";
import s from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  // console.log(props);
  return (
    <div className={s.profile}>
      <ProfileInfo
        profile={props.profile}
        updateStatus={props.updateStatus}
        status={props.status}
      />
      <MyPostsContainer posts={props.posts} />
    </div>
  );
};
export default Profile;
