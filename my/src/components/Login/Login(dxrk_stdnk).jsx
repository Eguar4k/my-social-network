// dxrk_stdnk
// 11 месяцев назад
// Делал через react-hook-form, валидация есть как на клиенте (библиотека yup) так и приходит с сервера.
// В thunk'е выглядит это так:
// export const login = (data, setError) => {
//   const {email, password, rememberMe, captcha} = data
//   return (dispatch) => {
//     authAPI.login(email, password, rememberMe, captcha)
//       .then(data => {
//         const {fieldsErrors, resultCode, messages} = data

//         const setFieldsError = () => {
//           if (fieldsErrors.length > 0) {
//             for (let key in fieldsErrors) {
//               let message = fieldsErrors[key].error
//               setError(fieldsErrors[key].field, {type: 'server', message})
//             }
//           } else for (let key in messages) {
//             let message = messages[key]
//             setError('common', {type: 'server', message})
//           }
//         }

//         switch (resultCode) {
//           case 0:
//             dispatch(getAuthUserData())
//             break
//           case 1:
//             setFieldsError()
//             break
//           case 10:
//             authAPI.getCaptcha()
//               .then(data => {
//                 dispatch(setCaptcha(data))
//               })
//             setFieldsError()
//             break
//           default:
//             throw Error('Error Auth')
//         }
//       })
//   }
// }

// // setError - функция из библиотеки react-hook-form
