import React, { useState } from "react";
import Preloader from "../../Common/PreLoader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "./../../../img/avatars/anime.jpeg";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
}) => {
  const [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }
  const onMainFotoChang = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const goToEditMode = () => {
    return setEditMode(true);
  };
  const goOutEditMode = () => {
    return setEditMode(false);
  };

  return (
    <div>
      {/* <img
        src="https://vsegda-pomnim.com/uploads/posts/2022-04/1649343843_1-vsegda-pomnim-com-p-odessa-plyazh-lanzheron-foto-2.jpg"
        alt="#"
      /> */}

      <div className={s.item}>
        <img
          src={profile.photos.large || userPhoto}
          alt=""
          className={s.mainFoto}
        />
        <br />
        {isOwner && <input type={"file"} onChange={onMainFotoChang} />}
        <br />
        <br />
        {editMode ? (
          <ProfileDataForm
            profile={profile}
            saveProfile={saveProfile}
            goOutEditMode={goOutEditMode}
          />
        ) : (
          <ProfileData
            profile={profile}
            isOwner={isOwner}
            goToEditMode={goToEditMode}
          />
        )}
        <ProfileStatusWithHooks
          updateStatus={updateStatus}
          status={status}
          isOwner={isOwner}
        />
      </div>
    </div>
  );
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      <div>
        <b>Full name </b> : {profile.fullName}
      </div>
      <div>
        <b>Looking for a job</b> : {profile.lookingForAJob ? "Yes" : "No"}
      </div>
      {profile.lookingForAJob && (
        <div>
          <b>My professional skills</b> : {profile.lookingForAJobDescription}
        </div>
      )}
      <div>
        <b>About me: </b>
        {profile.aboutMe}
      </div>
      <div>
        <b>Contacts</b> :
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contacts
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
      {isOwner && (
        <div>
          <button onClick={goToEditMode}>edit</button>
        </div>
      )}
    </div>
  );
};

export const Contacts = ({ contactTitle, contactValue }) => {
  return (
    <div className={s.contacts}>
      <b>{contactTitle}</b> : {contactValue}
    </div>
  );
};

export default ProfileInfo;
