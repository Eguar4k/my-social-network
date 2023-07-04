import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import NavbarFrendsContainer from "./NavbarFrendsContainer";




const Navbar = (props) => {
  // debugger;
  const [mode, setMode] = React.useState(false)
  const chengeMode =()=>{
    setMode(true)
  }
  return (
  <nav className={s.nav}>
    {mode && <div>
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
      </div>
      <div>
        <NavLink
          to="/users"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Users
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/login"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Login
        </NavLink>
      </div>
      <div>
        <NavbarFrendsContainer />
      </div>
      <div>
        <NavLink
          to="/fcc" onClick={chengeMode}
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          FreeCodeCamp
        </NavLink>
      </div>
      </div>}
      {!mode&&<div>
        <div>
        <NavLink
          to="/fcc/drummachin"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Dram Machine
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/fcc/calculator"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Calculator
        </NavLink></div>
        <div><button onClick={chengeMode}>Back</button></div>
        </div>}
        </nav>);
  };

export default Navbar
