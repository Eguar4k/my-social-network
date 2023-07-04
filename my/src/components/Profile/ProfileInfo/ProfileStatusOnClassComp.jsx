// import React from "react";
// // import Preloader from "../../Common/PreLoader/Preloader";
// // import s from "./ProfileStatus.module.css";

// type PropsType = {
//   status: string
//   updateStatus: (status: string)=>void
// }
// type StateType = {
//   editMode: boolean
//   status: string
// }



// class ProfileStatus extends React.Component<PropsType,StateType> {
//   state = {
//     editMode: false,
//     status: this.props.status,
//     userId:
//     //  "Это круто",
//   };
//   // this.forceUpdate() еостыльный аналог setState
//   activatEditMode = () => {
//     this.setState({ editMode: true });
//   };

//   deActivatEditMode = () => {
//     this.setState({ editMode: false });
//     this.props.updateStatus(this.state.status);
//   };

//   onStatusChenge = (e: React.ChangeEvent<HTMLInputElement>) => {
//     this.setState({ status: e.currentTarget.value });
//   };
//   componentDidUpdate(prevProps: PropsType, prevState: StateType) {
//     if (prevProps.status !== this.props.status) {
//       this.setState({ status: this.props.status });
//     }
//   }
//   //   if (!props.profile) {
//   //     return <Preloader />;
//   //   }
//   render() {
//     return (
//       <div>
//         {!this.state.editMode && (
//           <div>
//             <span onDoubleClick={this.activatEditMode}>
//               {this.props.status || "No status"}
//             </span>
//           </div>
//         )}
//         {this.state.editMode && this.state.userId !== 28448 && (
//           <div>
//             <input
//               onChange={this.onStatusChenge}
//               autoFocus={true}
//               onBlur={this.deActivatEditMode}
//               //   onMouseLeave={this.deActivatEditMode}
//               value={this.state.status}
//             />
//           </div>
//         )}
//       </div>
//     );
//   }
// }
// export default ProfileStatus;
