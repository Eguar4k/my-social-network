// import React from "react";
import Dialogs from "./Dialogs";
import {
  addMessageTextActionCreator,
  updateMessageTextActionCreator,
} from "../../Redux/dialogs-reducer";
// import StoreContext from "../../storeContext";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return { dialogsPage: state.dialogsPage };
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
