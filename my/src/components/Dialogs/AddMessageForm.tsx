import React from "react";
import s from "./Dialogs.module.css";
import { Resolver, useForm } from "react-hook-form";

type FormTyps ={
  newMessageText: string
  errors: {}

}
type PropsTyps ={
  addMessageText: (text:string)=>void
}

const resolver: Resolver<FormTyps> = async (values) => {
  return {
    values: values.newMessageText? values : {},
    errors: !values.newMessageText
      ? {
        newMessageText: {
            type: "required",
            message: "This is required."},
        }
      : {},
  }
}

export const AddMessageForm: React.FC <PropsTyps> = ({addMessageText}) => {
  const {
    register, handleSubmit, formState: { errors }, reset,
  } = useForm <FormTyps>({resolver});
  const onSubmit = handleSubmit ((data) => {
    // debugger
    addMessageText(data.newMessageText);
    reset()
  })
  const hasError = errors?.newMessageText;
  return (
    <form onSubmit={onSubmit}>
      <div>
        <button>Send message</button>
      </div>
      <div>
        <textarea
          className={hasError && s.formControl}
          {...register("newMessageText", {
            required: "Message is require field!",
            maxLength: { value: 50, message: "Max length is 50 simbols" },
          })}
          placeholder="add new text" />
        {hasError && (
          <div className={s.error}>{errors.newMessageText.message}</div>
        )}
      </div>
    </form>
  );
};
