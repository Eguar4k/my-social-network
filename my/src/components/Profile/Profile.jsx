import React from "react";
import s from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({
  isOwner,
  profile,
  updateStatus,
  status,
  posts,
  savePhoto,
  saveProfile,
}) => {
  // console.log(props);
  return (
    <div className={s.profile}>
      <ProfileInfo
        isOwner={isOwner}
        profile={profile}
        updateStatus={updateStatus}
        status={status}
        savePhoto={savePhoto}
        saveProfile={saveProfile}
      />
      <MyPostsContainer posts={posts} />
    </div>
  );
};
export default Profile;
