// CTRL-ALT-V - make const;
// Ctrl + F (выделяются все слова в текущем файле) потом Alt + Enter, теперь изменить можно все слова сразу
// or Ctrl-F2(Fn-F2)
// Ctrl+Alt+O - удалить ненужный импор

import s from "./Users.module.css";
import React from "react";
import userPhoto from "./../../img/avatars/anime.jpeg";
import { NavLink } from "react-router-dom";

const User = ({ isFetching, user, unfollow, follow, followingInProgress }) => {
  return (
    <div key={user.id}>
      <span>
        <div>
          <NavLink to={"/profile/" + user.id}>
            <img
              className={s.img}
              src={user.photos.small != null ? user.photos.small : userPhoto}
              alt=""
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollow(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <span>
        <div>{user.name}</div>
        <div>{user.status}</div>
      </span>
      <span>
        <div>{user.followed}</div>
        <div>{"u.location.country"}</div>
      </span>
    </div>
  );
};
export default User;
