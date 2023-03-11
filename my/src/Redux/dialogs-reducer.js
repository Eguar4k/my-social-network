let initialState = {
  dialog: [
    { id: 1, name: "Igor" },
    { id: 2, name: "Vasya" },
    { id: 3, name: "Lina" },
    { id: 4, name: "Yasya" },
    { id: 5, name: "Yarik" },
    { id: 6, name: "Alla" },
  ],
  newDialog: "",
  message: [
    { id: 1, message: "Hi" },
    { id: 2, message: "Yo" },
    { id: 3, message: "What" },
    { id: 4, message: "Hi" },
    { id: 5, message: "Yo" },
    { id: 6, message: "Hi" },
  ],
  newMessageText: "Igor molodchina",
};

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

const dialogsReducer = (state = initialState, action) => {
  // debugger;
  //Смотри пояснения в readme к 47 уроку

  // let stateCopy = {
  //   ...state,
  //   dialog: [...state.dialog],
  //   message: [...state.message],
  // };

  // ...state - раскрывает уже dialog и message, но dialog: [...state.dialog] и message: [...state.message] затирают их
  // данные и записывают свои, переопределяют и формируют новый объект
  switch (action.type) {
    case ADD_MESSAGE:
      let body = state.newMessageText;
      return {
        ...state,
        newMessageText: "",
        message: [...state.message, { id: 7, message: body }],
        dialog: [...state.dialog, { id: 7, name: "Igor" }],
      };

    // let mes = {
    //   id: "7",
    //   message: state.newMessageText,
    // };
    // let dialog = {
    //   id: "7",
    //   name: "Igor",
    // };
    // stateCopy.message.push(mes);
    // stateCopy.dialog.push(dialog);
    // stateCopy.newMessageText = "";
    // return stateCopy;

    case UPDATE_MESSAGE_TEXT:
      // stateCopy.newMessageText = action.newText;
      return { ...state, newMessageText: action.newText };
    default:
      return state;
  }
};

export const addMessageTextActionCreator = () => ({ type: ADD_MESSAGE });

export const updateMessageTextActionCreator = (text) => ({
  type: UPDATE_MESSAGE_TEXT,
  newText: text,
});

export default dialogsReducer;
