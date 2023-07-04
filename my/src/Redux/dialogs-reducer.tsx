import { InferActionsTypes } from "./redux-store";



const initialState = {
  dialog: [
    { id: 1, name: "Igor" },
    { id: 2, name: "Vasya" },
    { id: 3, name: "Lina" },
    { id: 4, name: "Yasya" },
    { id: 5, name: "Yarik" },
    { id: 6, name: "Alla" },
  ] as Array<DialogType>,
  message: [
    { id: 1, message: "Hi" },
    { id: 2, message: "Yo" },
    { id: 3, message: "What" },
    { id: 4, message: "Hi" },
    { id: 5, message: "Yo" },
    { id: 6, message: "Hi" },
  ]as Array<MessageType>,
};

// const ADD_MESSAGE = "ADD-MESSAGE";

const dialogsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case "ADD-MESSAGE":
      let body = action.newText;
      const id: number = state.dialog.pop().id+1
      return {
        ...state,
        message: [...state.message, { id: id, message: body }],
        dialog: [...state.dialog, { id: id, name: "Igor" }],
      };

    default:
      return state;
  }
};

// type ActionsTypes = addMessageTextActionType

// type addMessageTextActionType = {
//   type: typeof ADD_MESSAGE
//   newText: string
//   id: number
// }


export const actions = {addMessageText: (text: string) => ({
  type: "ADD-MESSAGE",
  newText: text,
}) as const,
}
// export const updateMessageText = (text) => ({
//   type: UPDATE_MESSAGE_TEXT,

// });

export default dialogsReducer;

export type InitialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>

type DialogType = {
  id: number
  name: string
}

type MessageType = {
  id: number
  message: string
}