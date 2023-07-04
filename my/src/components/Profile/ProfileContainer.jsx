import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
// import { withAuthNavigate } from "./../../hoc/withAuthNavigate";
import { withRouter } from "../../hoc/withRouter1";
import { compose } from "redux";
import {
  actions,
  getStatus,
  savePhoto,
  getUserProfile,
  saveProfile,
} from "./../../redux/profile-reducer";
import { withRouter2 } from "./../../hoc/withRouter2";

class ProfileContainerAPI extends React.PureComponent {
  refreshProfile = () => {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.router.navigate("/login");
      }
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  };

  componentDidMount = () => {
    this.refreshProfile();
  };
  //для того чтобы мы попадали на свой профайл если мы находились на профайле какогото юзера (так как
  // компонента один раз отрисовалась, и перерисовываться больше не собирается) можно было также создать метод componentWillUnmount

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.match.params.userId !== prevProps.match.params.userId)
      this.refreshProfile();
  };

  render() {
    // console.log(this.props);
    // console.log("render Profile");
    return (
      <div>
        <Profile
          {...this.props}
          isOwner={!this.props.match.params.userId}
          savePhoto={this.props.savePhoto}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log("mstp Profile");
  return {
    profile: state.postsPage.profile,
    status: state.postsPage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
  };
};

const updateStatus = actions.updateStatus

export default compose(
  withRouter2,
  connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile,
  }),
  withRouter
  // withAuthNavigate
)(ProfileContainerAPI);
