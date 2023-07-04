import React from "react";
import { useForm } from "react-hook-form";
import s from "./ProfileInfo.module.css";

const ProfileDataForm = ({ saveProfile, profile, goOutEditMode }) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    clearErrors,
    setValue,
    setError,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    await saveProfile(data, setError);
    goOutEditMode();
    reset();
  };
  // Тоже рабочий вариант
  //  const onSubmit = (data) => {
  //    saveProfile(data, setError).then(() => {
  //      goOutEditMode();
  //      reset();
  //    });
  //  };
  const fillData = () => {
    setValue("fullName", profile.fullName);
    setValue("lookingForAJob", profile.lookingForAJob);
    setValue("aboutMe", profile.aboutMe);
    setValue("lookingForAJobDescription", profile.lookingForAJobDescription);
    Object.keys(profile.contacts).map((key) => {
      return setValue(`contacts.${key}`, profile.contacts[key]);
    });
  };

  return (
    <div>
      <button onClick={fillData}>
        <b>fill data</b>
      </button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            <b>Full name :</b>
            <br />
            <input
              {...register("fullName", {
                required: "This field is requiered.",
                minLength: {
                  value: 20,
                  message: "Your login must be at least 20 symbols long.",
                },
              })}
              onFocus={() => clearErrors(["fullName", "server"])}
            />
          </label>
        </div>
        <div className={s.errorMessage}>
          {errors.fullName && (
            <span>{errors.fullName?.message || "Error!"}</span>
          )}
        </div>
        <label>
          <b>Looking for a job </b>
          <input type="checkbox" {...register("lookingForAJob")} />
        </label>
        <div>
          <label>
            <b>About me:</b>
            <br />
            <input
              {...register("aboutMe", {
                required: "This field is requiered.",
                minLength: {
                  value: 20,
                  message: "Your login must be at least 20 symbols long.",
                },
              })}
              onFocus={() => clearErrors(["aboutMe", "server"])}
            />
          </label>
        </div>
        <div className={s.errorMessage}>
          {errors.aboutMe && <span>{errors.aboutMe?.message || "Error!"}</span>}
        </div>
        <div>
          <label>
            <b>My professional skills:</b>
            <br />
            <textarea
              {...register("lookingForAJobDescription", {
                required: "This field is requiered.",
                minLength: {
                  value: 20,
                  message: "Your login must be at least 20 symbols long.",
                },
              })}
              onFocus={() =>
                clearErrors(["lookingForAJobDescription", "server"])
              }
            />
          </label>
        </div>
        <div className={s.errorMessage}>
          {errors.lookingForAJobDescription && (
            <span>{errors.lookingForAJobDescription?.message || "Error!"}</span>
          )}
        </div>
        <div>
          <b>Contacts:</b>
          {Object.keys(profile.contacts).map((key) => {
            return (
              <div className={s.contacts} key={key}>
                {key}:<br />
                <label>
                  <input
                    {...register(`contacts.${key}`, {
                      required: "This field is requiered.",
                      minLength: {
                        value: 10,
                        message: "Your login must be at least 10 symbols long.",
                      },
                    })}
                    // type="text"
                    onFocus={() => clearErrors([`contacts.${key}`, "server"])}
                  />
                </label>
                <div className={s.errorMessage}>
                  {errors[`contacts.${key}`] && (
                    <span>
                      {errors[`contacts.${key}`]?.message || "Error!"}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
          <br />
        </div>
        {errors.server && (
          <div className={s.errorMessage}>
            <span>{errors.server.message}</span>
          </div>
        )}
        <button disabled={!isValid}>
          <b>save</b>
        </button>
      </form>
    </div>
  );
};

export default ProfileDataForm;
