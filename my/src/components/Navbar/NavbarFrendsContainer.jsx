// import React from "react";
import NavbarFrends from "./NavbarFrends";
// import StoreContext from "../../storeContext";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return { state: state.sidebarPage.avatars };
};

const NavbarFrendsContainer = connect(mapStateToProps)(NavbarFrends);

export default NavbarFrendsContainer;
// const NavbarFrendsContainer = (props) => {
//   // debugger;

//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState().sidebarPage.avatars;

//         return <NavbarFrends state={state} />;
//       }}
//       ;
//     </StoreContext.Consumer>
//   );
// };
// export default NavbarFrendsContainer;
