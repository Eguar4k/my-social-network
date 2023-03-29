import React from "react";
import s from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <ProfileInfo
        {...props}
        // status={props.status}
        // updateStatus={props.updateStatus}
      />
      <MyPostsContainer {...props} />
    </div>
  );
};
export default Profile;
