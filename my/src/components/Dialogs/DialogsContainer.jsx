// import React from "react";
import Dialogs from "./Dialogs";

import {
  addMessageTextActionCreator,
  updateMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
// import StoreContext from "../../storeContext";
import { connect } from "react-redux";
import { withAuthNavigate } from "./../../hoc/withAuthNavigate";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    upMessageText: (text) => {
      dispatch(updateMessageTextActionCreator(text));
    },
    newMessage: () => {
      dispatch(addMessageTextActionCreator());
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthNavigate
)(Dialogs);
