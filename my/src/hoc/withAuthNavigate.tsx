import React from "react";
import { Navigate } from "react-router";
import { connect } from "react-redux";
import { InitialStateType } from "../redux/app-reducer";

type PropsType = {
  state: InitialStateType
  isAuth: boolean
  Component: React.Component
}

const mapStateToPropsForNavigate = (state) => ({
  isAuth: state.auth.isAuth,
});

export const withAuthNavigate: PropsType = (Component) => {
  
  class NavigateComponent extends React.Component {
    render() {
      if (!this.props.isAuth) {
        return <Navigate to={"/login"} />;
      }
      return <Component {...this.props} />;
    }
  }

  let ConnectedAuthNavigateComponent = connect(mapStateToPropsForNavigate)(
    NavigateComponent
  );

  return ConnectedAuthNavigateComponent;
};
