import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
// import { addMessageTextActionCreator } from "./../../redux/dialogs-reducer";
import { useForm } from "react-hook-form";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialog.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));
  let messagesElements = state.message.map((m) => (
    <MessageItem message={m.message} key={m.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <AddMessageForm {...props} />
    </div>
  );
};

const AddMessageForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    props.addMessageText(data.newMessageText);
    reset();
  };
  const hasError = errors?.newMessageText;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
          placeholder="add new text"
        />
        {hasError && (
          <div className={s.error}>{errors.newMessageText.message}</div>
        )}
      </div>
    </form>
  );
};

export default Dialogs;
