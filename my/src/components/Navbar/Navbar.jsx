import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import NavbarFrends from "./NavbarFrends";

const Navbar = (props) => {
  // debugger;

  return (
    <nav className={s.nav}>
      <div>
        <NavLink
          to="/profile"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/dialogscontainer"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Messags
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/news"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          News
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/music"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Music
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/settings"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Settings
        </NavLink>
        <NavbarFrends />
      </div>
    </nav>
  );
};
export default Navbar;
