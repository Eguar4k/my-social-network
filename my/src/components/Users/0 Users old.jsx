// // Функцианальная компонента
// import s from "./Users.module.css";
// import React from "react";
// import axios from "axios";
// import userPhoto from "./../../img/avatars/igor.jpg";

// const Users = (props) => {
//   // debugger;
//   let getUsers = () => {
//     if (props.users.length === 0) {
//       axios
//         .get("https://social-network.samuraijs.com/api/1.0/users")
//         .then((response) => {
//           // debugger;
//           props.setUsers(response.data.items);
//         });
//     }
//   };
//   //     [
//   //   {
//   //     id: 2,
//   //     followed: true,
//   //     fullName: "Lina",
//   //     photoUrl: "https://klike.net/uploads/posts/2019-03/1551511791_8.jpg",
//   //     status: "I love my family too",
//   //     location: {
//   //       city: "Belgorod-Dnestrovsky",
//   //       rigion: "Odessa rigion",
//   //       country: "Ukrain",
//   //     },
//   //   },
//   //   {
//   //     id: 3,
//   //     followed: true,
//   //     fullName: "Vasy",
//   //     photoUrl: "https://klike.net/uploads/posts/2019-03/1551511791_8.jpg",
//   //     status: "I am a boss",
//   //     location: {
//   //       city: "Belgorod-Dnestrovsky",
//   //       rigion: "Odessa rigion",
//   //       country: "Ukrain",
//   //     },
//   //   },
//   //   // ]);
//   // }
//   // debugger;
//   return (
//     <div className={s.user}>
//       <button onClick={getUsers}>Get users</button>
//       {props.users.map((u) => (
//         <div key={u.id}>
//           <span>
//             <div>
//               <img
//                 className={s.img}
//                 src={u.photos.small != null ? u.photos.small : userPhoto}
//                 alt=""
//               />
//             </div>
//             <div>
//               {u.followed ? (
//                 <button
//                   onClick={() => {
//                     props.follow(u.id);
//                   }}
//                 >
//                   {" "}
//                   Follow
//                 </button>
//               ) : (
//                 <button
//                   onClick={() => {
//                     props.unfollow(u.id);
//                   }}
//                 >
//                   {" "}
//                   Unfollow
//                 </button>
//               )}
//             </div>
//           </span>
//           <span>
//             <div>{u.name}</div>
//             <div>{u.status}</div>
//           </span>
//           <span>
//             <div>{"u.location.city"}</div>
//             <div>{"u.location.country"}</div>
//           </span>
//         </div>
//       ))}
//     </div>
//   );
// };
// export default Users;
