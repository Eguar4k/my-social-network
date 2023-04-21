import React from "react";
import Preloader from "../../Common/PreLoader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      {/* <img
        src="https://vsegda-pomnim.com/uploads/posts/2022-04/1649343843_1-vsegda-pomnim-com-p-odessa-plyazh-lanzheron-foto-2.jpg"
        alt="#"
      /> */}

      <div className={s.item}>
        <div>
          <img src={props.profile.photos.small} alt="" />
          <div>
            <ProfileStatusWithHooks
              updateStatus={props.updateStatus}
              status={props.status}
            />
          </div>
          <div>
            <span>Name: </span>
            {props.profile.fullName}
          </div>
          <div>
            <span>About me: </span>
            {props.profile.aboutMe}
          </div>
          <div>Contacts: </div>
          <div>{props.profile.contacts.facebook}</div>
          <div>{props.profile.contacts.website}</div>
          <div>{props.profile.contacts.vk}</div>
          <div>{props.profile.contacts.twitter}</div>
          <div>{props.profile.contacts.instagram}</div>
          <div>{props.profile.contacts.youtube}</div>
          <div>{props.profile.contacts.github}</div>
          <div>{props.profile.contacts.mainLink}</div>
          <div>
            <span>lookingForAJob: </span>
            {props.profile.lookingForAJob}
          </div>
          <div>
            <span></span>
            {props.profile.lookingForAJobDescription}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileInfo;
