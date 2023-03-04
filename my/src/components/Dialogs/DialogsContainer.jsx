import React from "react";
import Dialogs from "./Dialogs";
import {
  addMessageTextActionCreator,
  updateMessageTextActionCreator,
} from "../../Redux/dialogs-reducer";
import StoreContext from "../../storeContext";

const DialogsContainer = (props) => {
  // debugger;

  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().dialogsPage;

        let addMessage = () => {
          store.dispatch(addMessageTextActionCreator());
        };

        const upMessageChangeContainer = (text) => {
          let action = updateMessageTextActionCreator(text);
          store.dispatch(action);
        };
        return (
          <Dialogs
            upMessageText={upMessageChangeContainer}
            newMessage={addMessage}
            dialogsPage={state}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};
export default DialogsContainer;
