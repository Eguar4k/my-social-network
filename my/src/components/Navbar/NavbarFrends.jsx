import React from "react";
import s from "./Navbar.module.css";
import Avatar from "./Avatar/Avatar";

const NavbarFrends = (props) => {
  // debugger;

  let AvatarElements = props.state.map((a) => (
    <Avatar name={a.name} img={a.img} />
  ));
  return (
    <div>
      <div className={s.friends}>Friends</div>
      <div className={s.avatars}>{AvatarElements}</div>
    </div>
  );
};
export default NavbarFrends;
