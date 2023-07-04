// import React, { useState } from "react";
// // import { useEffect } from "react";
// import { useForm } from "react-hook-form";

// import { connect } from "react-redux";
// import { Navigate } from "react-router-dom";
// import { getLogin } from "../../redux/auth-reducer";
// // Использую react hook form и в связи с отсутствием stopSubmit сделал так: добавил новый

// actionCreator(  export const errorAC = (error) => ({ type: ERROR_MESSAGE, payload: { error } })    ).Cоответственно в initialState добавил  error изначально равный пустой строке error = ' '.В редьюсере добавил еще один кейс:

//   case ERROR_MESSAGE:
//     return {
//       ...state,
//       ...action.payload
//     }

// ////////////////
//  И в санках loginThunkCreator диспачу его при resutlCode отличном от 0 :
// ///////////////////

// export const loginThunkCreator = (data) => {
//   return (dispatch) => {
//     authAPI.login(data.email, data.password, data.rememberMe)
//     .then((response) => {
//       if (response.data.resultCode === 0) {
//        dispatch(authMeThunkCreator())
//       }

//       else {
//       let serverErrorMessageResponse = response.data.messages[0];
//       dispatch (errorAC(serverErrorMessageResponse))
//       }

//     });
//   }
// }

// И в итоге в компоненте login  добавляю в mapStateToProps добавляю :

// const mapStateToProps = (state) => (
//   {  isAuth : state.auth.isAuth,
//      errorResponse : state.auth.error
//   })

// и в форму добавляю

//   {props.errorResponse.length > 0 &&
//        <div className={style.errorBlock}>
//           {props.errorResponse}
//        </div>}
