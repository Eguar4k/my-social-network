// import React from "react";
import Dialogs from "./Dialogs";
import {actions} from "../../redux/dialogs-reducer";
import { connect } from "react-redux";
import { withAuthNavigate } from "../../hoc/withAuthNavigate";
import {compose } from "redux";
import { AppStateType } from "../../redux/redux-store";

const mapStateToProps = (state:AppStateType) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};


export default compose <React.ComponentType> (
  connect (mapStateToProps, {...actions}),
  withAuthNavigate
)(Dialogs);
