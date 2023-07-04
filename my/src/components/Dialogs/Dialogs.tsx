import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import { InitialStateType } from "../../redux/dialogs-reducer";
import { AddMessageForm } from "./AddMessageForm";



type OwnPropsType = {
  dialogsPage: InitialStateType
  addMessageText: (text:string)=>void
}

const Dialogs: React.FC<OwnPropsType> = (props) => {
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
      <AddMessageForm addMessageText = {props.addMessageText} />
    </div>
  );
};


export default Dialogs;

