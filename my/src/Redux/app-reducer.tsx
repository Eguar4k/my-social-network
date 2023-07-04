
import { getAuthUserData } from "./auth-reducer";
import {
  //  AppStateType, 
//   BaseThunkType, 
  // BaseThunkType, 
  InferActionsTypes } from "./redux-store";

export type InitialStateType = typeof initialState

// type ThunkType = BaseThunkType<ActionsTypes>  - выдает ошибку если указывать Promis

const initialState= {
  initialazed: false,

};
// для ts не надо
// const INITIALAZED_SUCCESS = "my/app/INITIALAZED_SUCCESS";


const appReducer = (state: InitialStateType = initialState, action: ActionsTypes):InitialStateType => {
  switch (action.type) {
    case "my/app/INITIALAZED_SUCCESS":
      return {
        ...state,
        initialazed: true,
      };

    default:
      return state;
  }
};


type ActionsTypes =  InferActionsTypes<typeof actions>

export const actions = {
initialazedSuccess : () => ({
  type: "my/app/INITIALAZED_SUCCESS",
}) as const,
}


// type ThunkType = BaseThunkType<ActionsTypes>

export const initialazeApp = () => (dispatch: any) => {
  // debugger
  let promise = dispatch(getAuthUserData());
  Promise.all([promise]).then(() => {
    dispatch(actions.initialazedSuccess());
  });
};

export default appReducer;
