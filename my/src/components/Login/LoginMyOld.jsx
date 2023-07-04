// import React, { useState } from "react";
// // import { useEffect } from "react";
// import { useForm } from "react-hook-form";

// import { connect } from "react-redux";
// import { Navigate } from "react-router-dom";
// import { getLogin } from "../../redux/auth-reducer";

// const LoginForm = (props) => {
//   const {
//     register,
//     handleSubmit,
//     // watch,
//     // setValue,
//     // getValues, - не годится для отслеживания постоянного
//     // getFieldState,- не годится для отслеживания постоянного
//     formState: { errors },
//     // reset,
//   } = useForm(
//     // { defaultValues: { email: "test@gmail.com" } },
//     {
//       mode: "onChange",
//     }
//   );

//   const [seePass, setSeePass] = useState("password");

//   const onSeePass = () => {
//     // debugger;
//     setSeePass("text");
//   };

//   const onHidePass = () => {
//     // debugger;
//     setSeePass("password");
//   };

//   // useEffect(() => {
//   //   setSeePass(seePass);
//   // }, [seePass]);

//   const onSubmit = (data) => {
//     props.getLogin(data.email, data.password, data.rememberMe);
//     // reset();
//     // on server
//   };

//   // console.log("values", getValues("email"));
//   // console.log("fieldState", getFieldState("email"));
//   // const watchEmail = watch("email");

//   // useEffect(() => {
//   //   const subscription = watch((value, { name, type }) =>
//   //     console.log(value, name, type)
//   //   );
//   //   return () => subscription.unsubscribe();
//   // }, [watch]);

//   return (
//     <div>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div>
//           <div>
//             <label> e-mail </label>
//           </div>
//           <input
//             {...register("email", {
//               required: "email is require field!",
//               // pattern: {
//               //   value:
//               //     // /([A-zА-я])+([0-9\-_\+\.])*([A-zА-я0-9\-_\+\.])*@([A-zА-я])+([0-9\-_\+\.])*([A-zА-я0-9\-_\+\.])*[\.]([A-zА-я])+/,
//               //      /^[a-zA-Z0-9]{1,}”+”((\\.|\\_|-{0,1})[a-zA-Z0-9]{1,})*”+”@”+”[a-zA-Z0-9]{1,}”+”((\\.|\\_|-{0,1})[a-zA-Z0-9]{1,})*”+”\\.[a-zA-Z]{2,}$/,
//               //   message: "Pleas, enter valid email",
//               // },
//             })}
//             placeholder={"email"}
//           />
//         </div>
//         {errors?.email && (
//           <div style={{ color: "yellow" }}>{errors.email.message}</div>
//         )}
//         <div>
//           <div>
//             <label>password</label>
//           </div>
//           <input
//             {...register("password")}
//             placeholder={"password"}
//             type={seePass}
//           />

//           <button onClick={onSeePass}>See</button>
//           <button onClick={onHidePass}>Hide</button>
//         </div>
//         <div>
//           <input {...register("rememberMe")} type={"checkbox"} />
//           remember me
//         </div>
//         <div>
//           <button onClick={onSubmit}>Login</button>
//         </div>
//       </form>
//       {/* <button
//         onClick={() => {
//           setValue("email", "igor@ukr.net");
//           setValue("Password", "1111");
//         }}
//       >
//         Fill data
//       </button> */}
//     </div>
//   );
// };

// const Login = (props) => {
//   if (props.isAuth) {
//     // debugger;
//     return <Navigate to={"/profile"} />;
//   }
//   return (
//     <div>
//       <h1>LOGIN</h1>
//       <LoginForm {...props} />
//     </div>
//   );
// };

// const mapStateToProps = (state) => ({
//   isAuth: state.auth.isAuth,
// });
// export default connect(mapStateToProps, { getLogin })(Login);
