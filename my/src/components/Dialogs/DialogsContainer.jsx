// import React from "react";
import Dialogs from "./Dialogs";

import {
  addMessageText,
  // updateMessageText,
} from "../../redux/dialogs-reducer.js";
// import StoreContext from "../../storeContext";
import { connect } from "react-redux";
import { withAuthNavigate } from "./../../hoc/withAuthNavigate";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     upMessageText: (text) => {
//       dispatch(updateMessageText(text));
//     },
//     newMessage: () => {
//       dispatch(addMessageText());
//     },
//   };
// };

export default compose(
  connect(mapStateToProps, { addMessageText }),
  withAuthNavigate
)(Dialogs);
