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

let reducers = combineReducers({
  dialogsPage: dialogsReducer,
  postsPage: profileReducer,
  // form: formReducer,
  sidebarPage: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
});

let store = createStore(reducers, applyMiddleware(ThunkMiddleware));

window.store = store;

export default store;
