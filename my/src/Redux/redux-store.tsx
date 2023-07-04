import {
  Action,
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";
// import { reduser as formReducer } from "redux-form";
import ThunkMiddleware, { ThunkAction } from "redux-thunk";
import compose from "../components/Users/UsersContainer";


let rootReducer = combineReducers({
  dialogsPage: dialogsReducer,
  postsPage: profileReducer,
  // form: formReducer,
  sidebarPage: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
});

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

// что б убрать @ts-ignore
declare global {
  interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any,
      store: any
  }
}

// подключили redux dev tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(ThunkMiddleware))
);
// 01. TypeScript / Generic and Conditional Type / as const / infer

// type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never;
// export type InferActionsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesType<T>>

export type InferActionsTypes<T> =  T extends {[key: string]: (...args: any[]) => infer U}? U : never // сокращенная 47-48 строки

export type BaseThunkType <A extends Action, R = Promise<void> > = ThunkAction<R,AppStateType,unknown,A>



//@ts-ignore

window.__store__ = store;

export default store;
