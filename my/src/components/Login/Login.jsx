import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { getLogin } from "../../redux/auth-reducer";
import s from "../../components/Login/Login.module.css";
// Хто використовує react hook form ось рішення:

function LoginForm({ getLogin, captchaUrl }) {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    clearErrors,
    setError,
    reset,
  } = useForm({
    mode: "onBlur",
  });
  // режим для просмотра пароля
  const [seePass, setSeePass] = useState("password");

  const onSeePass = () => {
    setSeePass("text");
  };

  const onHidePass = () => {
    setSeePass("password");
  };

  const onSubmit = (data) => {
    // debugger;
    getLogin(
      data.email,
      data.password,
      data.rememberMe,
      data.captcha,
      setError
    );
    reset(
      {
        email: "",
        password: "",
        rememberMe: false,
        captcha: null,
      },
      { keepErrors: true }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Email:
        <br />
        <input
          {...register("email", {
            required: "This field is requiered.",
            minLength: {
              value: 5,
              message: "Your login must be at least 5 symbols long.",
            },
          })}
          onFocus={() => clearErrors(["email", "server"])}
        />
      </label>
      <br />
      <div className={s.errorMessage}>
        {errors.email && <span>{errors.email?.message || "Error!"}</span>}
      </div>
      <label>
        Password:
        <br />
        <input
          type={seePass}
          {...register("password", {
            required: "This field is requiered.",
          })}
          onFocus={() => clearErrors(["password", "server"])}
        />
        <button onClick={onSeePass}>See</button>
        <button onClick={onHidePass}>Hide</button>
      </label>
      <br />
      <div className={s.errorMessage}>
        {errors.password && <span>{errors.password.message || "Error!"}</span>}
      </div>
      <label>
        <input type="checkbox" {...register("rememberMe")} /> Remember me
      </label>
      <br />
      {errors.server && (
        <div className={s.errorMessage}>
          <span>{errors.server.message}</span>
        </div>
      )}

      {captchaUrl && <img src={captchaUrl} alt={3} />}
      {captchaUrl && (
        <div>
          <input {...register("captcha")} />
        </div>
      )}
      <div>
        <input type="submit" disabled={!isValid} value="Log in" />
      </div>
    </form>
  );
}

const Login = ({ isAuth, captchaUrl, getLogin }) => {
  if (isAuth) {
    // debugger;
    return <Navigate to={"/profile"} />;
  }
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginForm getLogin={getLogin} captchaUrl={captchaUrl} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});
export default connect(mapStateToProps, { getLogin })(Login);
