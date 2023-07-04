import React from "react";
import logo from "./../../logo.svg";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
    <div className={s.wrapper}>
      <img src={logo} className="App-logo" alt="logo" />
      <div className={s.profetion}>Front-End Developer on React</div>
      <div className={s.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login} - <button onClick={props.getLogout}>Log out</button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
      </div>
    </header>
  );
};
export default Header;
