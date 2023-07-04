import React, { Suspense } from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
// import ProfileContainer from "./components/Profile/ProfileContainer";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { Route, Routes } from "react-router-dom";
// import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login.jsx";
import { connect } from "react-redux";
import { initialazeApp } from "./redux/app-reducer";
import Preloader from "./components/Common/PreLoader/Preloader";
import { withSuspense } from "./hoc/withSuspense";
// import { DrumMachine } from "./FreeCodeCamp/DrumMachine";
import { AppStateType } from "./redux/redux-store";
// import { Calculator } from "./FreeCodeCamp/Calculator";

const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);
const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);

type PropsType = {
  initialazeApp: ()=>void
  initialazed: boolean
  
}

type StateType = {
}


class App extends React.Component<PropsType,StateType> {
  catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
    // debugger
    alert("Something error occured");
    console.error(PromiseRejectionEvent);
  };
  componentDidMount = () => {
    this.props.initialazeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  };
  componentWillUnmount = () => {
    window.removeEventListener(
      "unhandledrejection",
      this.catchAllUnhandledErrors
    );
  };

  render() {
    const DialogsContainerWithSuspense = withSuspense(DialogsContainer);

    if (!this.props.initialazed) {
      return <Preloader />;
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            {/* <Route exact path="/" element={<Navigate path="/profile/*" />} />// неработает */}
            <Route
              path="/profile/:userId?"
              element={
                <Suspense fallback={<div>Загрузка...</div>}>
                  <ProfileContainer />
                </Suspense>
              }
            />
            <Route
              path="/dialogscontainer/*"
              element={<DialogsContainerWithSuspense />}
            />
            <Route path="/users/*" element={<UsersContainer 
            // pageTitle = { 'Samuray'}
            />} />
            {/* <Route path="/news/*" element={<News />} /> */}
            <Route path="/music/*" element={<Music />} />
            <Route path="/settings/*" element={<Settings />} />
            {/* <Route path="/login/facebook*" element={<div>facebook</div>} /> */}
            <Route path="/login/*" element={<Login />} />
            {/* <Route path="/fcc.drumMachine/*" element={<DrumMachine />} /> */}
            {/* <Route path="/fcc.calculator/*" element={<Calculator />} /> */}
            <Route path="*" element={<div>ERORR 404 - NOT FOUND</div>} />
          </Routes>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppStateType) => ({
  initialazed: state.app.initialazed,
});

export default connect(mapStateToProps, { initialazeApp })(App);
