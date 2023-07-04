// //Классовая компонента. Объект создается в самаом Реакте и Реакт при изменении обращается к методу РЕНДЕР данного объекта.
// import React from "react";
// import axios from "axios";
// import Users from "./Users";

// class UsersAPIComponent extends React.Component {
//   componentDidMount = () => {
//     // debugger;
//     axios
//       .get(
//         `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
//       )
//       .then((response) => {
//         // if (this.props.users.length === 1)
//         // debugger;
//         this.props.setUsers(response.data.items);
//         this.props.setTotalUsersCount(response.data.totalCount);
//       });
//   };
//   // currentPage = () => {};
//   onPageChanged = (pageNumber) => {
//     this.props.setCurrentPage(pageNumber);
//     axios
//       .get(
//         `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
//       )
//       .then((response) => {
//         this.props.setUsers(response.data.items);
//       });
//   };
//   render() {
//     // debugger;
//     return (
//       <Users
//         totalUsersCount={this.props.totalUsersCount}
//         pageSize={this.props.pageSize}
//         currentPage={this.props.currentPage}
//         unfollow={this.props.unfollow}
//         follow={this.props.follow}
//         onPageChanged={this.onPageChanged}
//         users={this.props.users}
//       />
//     );
//   }
// }

// export default UsersAPIComponent;
