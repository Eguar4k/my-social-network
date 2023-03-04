import React from "react";
import s from "./Avatar.module.css";

const Avatar = (props) => {
  return (
    <div>
      <img className={s.avatars} src={props.img} alt={props.name} />
    </div>
  );
};
export default Avatar;
