// CTRL-ALT-V - make const;
// Ctrl + F (выделяются все слова в текущем файле) потом Alt + Enter, теперь изменить можно все слова сразу
// or Ctrl-F2(Fn-F2)
// Ctrl+Alt+O - удалить ненужный импор

import s from "./Users.module.css";
import React from "react";
import Preloader from "../Common/PreLoader/Preloader";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";
import { UsersType } from "../../types/typs";

type PropsType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  onPageChanged: (pageNumber:number)=>void
  isFetching: boolean
  users: Array<UsersType>
  unfollow: (userId: number)=>void
  follow: (userId: number)=>void
  followingInProgress: Array<number>
}

let Users: React.FC<PropsType> = React.memo(
  ({
    totalUsersCount,
    pageSize,
    currentPage,
    onPageChanged,
    isFetching,
    users,
    unfollow,
    follow,
    followingInProgress,
  }) => {
    return isFetching ? (
      <Preloader />
    ) : (
      <div className={s.user}>
        <Paginator
          totalItemsCount={totalUsersCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChanged={onPageChanged}
        />
        {/* При осуществлении запроса в конструкторе обращение Реакта происходит один раз и в кнопке нет необходимости */}
        {/* <button onClick={getUsers}>Get users</button> */}
        {users.map((u) => (
          <User
            user={u}
            key={u.id}
            isFetching={isFetching}
            unfollow={unfollow}
            follow={follow}
            followingInProgress={followingInProgress}
          />
        ))}
      </div>
    );
  }
);
export default Users;
