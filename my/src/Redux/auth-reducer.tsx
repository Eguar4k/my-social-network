
import { ResultCodesEnum} from "../api/api";
import { securityAPI } from "../api/securityAPI";
import { authAPI } from "../api/authAPI";
import { BaseThunkType, InferActionsTypes } from "./redux-store";


let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isFetching: false,
  isAuth: false,
  captchaUrl: null as string | null, //if 0 captcha is not required
};


// const SAT_USER_DATA = "my/auth/SAT_USER_DATA";
// const GET_CAPTCHA_URL_SUCCESS = "my/auth/GET_CAPTCHA_URL_SUCCESS";



const authReducer = (state = initialState, action: ActionsTypes): InitialStateType  => {
  
  switch (action.type) {
    case "my/auth/SAT_USER_DATA":
    case "my/auth/GET_CAPTCHA_URL_SUCCESS":
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

// type ActionsTypes = setAuthUserDataActionType | getCaptchaUrlSuccessActionType

// type setAuthUserDataActionPayloadType = {
//    userId: number | null
//    email: string | null
//    login: string | null
//    isAuth: boolean | null
// }
// type setAuthUserDataActionType = {
//   type: typeof SAT_USER_DATA,
//   payload: setAuthUserDataActionPayloadType
// }

// type getCaptchaUrlSuccessActionType = {
//   type: typeof GET_CAPTCHA_URL_SUCCESS,
//   payload: { captchaUrl:string  },
// }



const actions = {

  setAuthUserData : (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: "my/auth/SAT_USER_DATA",
    payload: { userId, email, login, isAuth },
  }) as const,
  
  getCaptchaUrlSuccess : (captchaUrl:string) => ({
    type: "my/auth/GET_CAPTCHA_URL_SUCCESS",
    payload: { captchaUrl },
  }) as const,

}
// old versiy
// export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): setAuthUserDataActionType => ({
//   type: SAT_USER_DATA,
//   payload: { userId, email, login, isAuth },
// });

// export const getCaptchaUrlSuccess = (captchaUrl:string):getCaptchaUrlSuccessActionType => ({
//   type: GET_CAPTCHA_URL_SUCCESS,
//   payload: { captchaUrl },
// });

// thunks

//получение данных с сервера при помощи then
// export const getAuthUserData = () => (dispatch) => {
//   return authAPI.me().then((data) => {
//     if (data.resultCode === 0) {
//       let { login, id, email } = data.data;
//       dispatch(setAuthUserData(id, email, login, true));
//     }
//   });
// };
//получение данных с сервера при помощи async...await
// type ThunkType = ThunkAction <Promise<void>, AppStateType, unknown, ActionsTypes>
 
export const getAuthUserData = ():ThunkType => async (dispatch) => {
  const data = await authAPI.me();
  if (data.resultCode === ResultCodesEnum.Success) {
    // debugger
    const { login, id, email } = data.data;
    dispatch(actions.setAuthUserData(id, email, login, true));
  }
};

// export const getLogin = (email, password, rememberMe) => (dispatch) => {
//   authAPI.login(email, password, rememberMe).then((data) => {
//     // debugger;
//     if (data.resultCode === 0) {
//       dispatch(getAuthUserData());
//     }
//   });
// };

// export const getLogout = () => (dispatch) => {
//   authAPI.logout().then((data) => {
//     if (data.resultCode === 0) {
//       dispatch(setAuthUserData(null, null, null, false));
//     }
//   });
// };

export const getLogout = ():ThunkType => async (dispatch) => {
  // rкакойто бок с resultCode ,для того чтобы убрать пришлесь типизировать data
  const data: any = await authAPI.logout();
  if (data.resultCode === ResultCodesEnum.Success) {
    dispatch(actions.setAuthUserData(null, null, null, false));
  }
};

//from Miront
// export const getLogin =
//   (email, password, rememberMe, setError) => (dispatch) => {
//     authAPI.login(email, password, rememberMe).then((data) => {
//       if (data.resultCode === 0) {
//         dispatch(getAuthUserData());
//       } else {
//         setError("server", {
//           type: "custom",
//           message: data.messages,
//         });
//       }
//     });
//   };

export const getLogin =
  (email: string, password: string, rememberMe: boolean, captcha: string, setError: any):ThunkType => async (dispatch) => {
    //setError обязательно в конце аргументов
    // debugger;
    const data = await authAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === ResultCodesEnum.Success) {
      //success auth data
      dispatch(getAuthUserData());
    } else {
      if (data.resultCode === ResultCodesEnum.CaptchaIsRequired) {
        dispatch(getCaptchaUrl());
      }
    }
    setError("server", {
      type: "custom",
      message: data.messages,
    });
  };

export const getCaptchaUrl = ():ThunkType => async (dispatch) => {
  const data = await securityAPI.getCaptchaUrl();
  const captchaUrl = data.url;
  dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
};
export default authReducer;

export type InitialStateType = typeof initialState;
type ThunkType = BaseThunkType<ActionsTypes>
type ActionsTypes =  InferActionsTypes<typeof actions>
