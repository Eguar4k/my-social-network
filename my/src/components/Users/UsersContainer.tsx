import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
  // followSuccess,
  // unfollowSuccess,
  // toggleIsFollowingProgress,
} from "../../redux/users-reducer";
import Preloader from "../Common/PreLoader/Preloader";
import { requestUsers, unfollow, follow } from "../../redux/users-reducer";
// import { withAuthNavigate } from "./../../hoc/withAuthNavigate";
import { compose } from "redux";
import {
  getUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress,
} from "../../redux/users-selectors";
import { UsersType } from "../../types/typs";
import { AppStateType } from "../../redux/redux-store";


type MapStatePropsType = {
  users: Array<UsersType>
  currentPage: number
  pageSize: number
  totalUsersCount: number
  isFetching: boolean
  followingInProgress: Array<number>
}

type MapDispatchPropsType = {
  unfollow:(userId: number)=> void
  follow:(userId: number)=> void
  requestUsers: (currentPage: number, pageSize: number)=> void
  // toggleIsFetching: boolean

}
type OwnPropsType = {
  pageTitle: string
}

type PropsType = MapStatePropsType&MapDispatchPropsType&OwnPropsType


class UsersAPIComponent extends React.Component<PropsType> {
  componentDidMount = () => {
    // локальная диструктуризация внутри метода классовой компоненты
    const { currentPage, pageSize } = this.props;
    this.props.requestUsers(currentPage, pageSize);
  };
  onPageChanged = (pageNumber:number) => {
    const { pageSize } = this.props;
    this.props.requestUsers(pageNumber, pageSize);
  };
  render() {
    // использовали когда проверяли библиотеку reselect
    // console.log("rerendering");
    return (
      <>
      <h1>{this.props.pageTitle}</h1>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            followingInProgress={this.props.followingInProgress}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            isFetching={this.props.isFetching}
            // toggleIsFetching={this.props.toggleIsFetching}
          />
        )}
      </>
    );
  }
}

// let mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress,
//   };
// };

let mapStateToProps = (state: AppStateType):MapStatePropsType => {
  // использовали когда проверяли библиотеку reselect
  // console.log("mstp rer");
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};
// Dimma MapStatePropsType,MapDispatchPropsType, OwnPropsType, AppStateType

export default compose <React.ComponentType> (
  connect(mapStateToProps, {
    // followSuccess,
    // unfollowSuccess,
    // toggleIsFollowingProgress,
    requestUsers,
    follow,
    unfollow,
  })
  // withAuthNavigate
)(UsersAPIComponent);
