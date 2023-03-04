import React from "react";
import s from "./Navbar.module.css";
import Avatar from "./Avatar/Avatar";
import StoreContext from "../../storeContext";

const NavbarFrends = (props) => {
  // debugger;

  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().sidebarPage.avatars;
        let AvatarElements = state.map((a) => (
          <Avatar name={a.name} img={a.img} />
        ));
        return (
          <div>
            <div className={s.friends}>Friends</div>
            <div className={s.avatars}>{AvatarElements}</div>
          </div>
        );
      }}
    </StoreContext.Consumer>
  );
};
export default NavbarFrends;
