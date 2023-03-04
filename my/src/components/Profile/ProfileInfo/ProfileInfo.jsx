import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <img
        src="https://vsegda-pomnim.com/uploads/posts/2022-04/1649343843_1-vsegda-pomnim-com-p-odessa-plyazh-lanzheron-foto-2.jpg"
        alt="#"
      />
      <div className={s.item}>ava + discrption</div>
    </div>
  );
};
export default ProfileInfo;
