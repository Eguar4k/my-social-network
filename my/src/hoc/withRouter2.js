import React from "react";
import {
  // useMatch,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

// export const withRouter = (Component) => {
//   let RouterComponent = (props) => {
//     const match = useMatch("/profile/:userId?");
//     return <Component {...props} match={match} />;
//   };
//   return RouterComponent;
// };

export function withRouter2(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
}
