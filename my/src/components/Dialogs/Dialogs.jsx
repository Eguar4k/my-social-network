import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {
  // debugger;
  let state = props.dialogsPage;

  let dialogsElements = state.dialog.map((d) => (
    <DialogItem name={d.name} key = {d.id} id={d.id} />
  ));
  let messagesElements = state.message.map((m) => (
    <MessageItem message={m.message} key = {m.id}/>
  ));

  let onNewMessage = () => {
    props.newMessage();
  };

  const onMessageChange = (event) => {
    let text = event.target.value;
    props.upMessageText(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <div>
        <button onClick={onNewMessage}>Send message</button>
      </div>
      <div>
        <textarea onChange={onMessageChange} value={state.newMessageText} />
      </div>
    </div>
  );
};
export default Dialogs;
