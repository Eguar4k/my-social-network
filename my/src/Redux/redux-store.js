import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "../redux/profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "../redux/auth-reducer";
import appReducer from "../redux/app-reducer";
// import { reduser as formReducer } from "redux-form";
import ThunkMiddleware from "redux-thunk";
import compose from "./../components/Users/UsersContainer";

let reducers = combineReducers({
  dialogsPage: dialogsReducer,
  postsPage: profileReducer,
  // form: formReducer,
  sidebarPage: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
});
// подключили redux dev tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(ThunkMiddleware))
);

window.__store__ = store;

export default store;
