import React from "react";
import s from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogitem" + props.id;
  return (
    <div>
      <NavLink to={path} className={(d) => (d.isActive ? s.active : s.dialog)}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
