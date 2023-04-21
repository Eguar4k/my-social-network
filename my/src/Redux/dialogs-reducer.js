let initialState = {
  dialog: [
    { id: 1, name: "Igor" },
    { id: 2, name: "Vasya" },
    { id: 3, name: "Lina" },
    { id: 4, name: "Yasya" },
    { id: 5, name: "Yarik" },
    { id: 6, name: "Alla" },
  ],
  message: [
    { id: 1, message: "Hi" },
    { id: 2, message: "Yo" },
    { id: 3, message: "What" },
    { id: 4, message: "Hi" },
    { id: 5, message: "Yo" },
    { id: 6, message: "Hi" },
  ],
};

const ADD_MESSAGE = "ADD-MESSAGE";

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      // debugger;
      let body = action.newText;
      let id = action.id;
      return {
        ...state,
        message: [...state.message, { id: id, message: body }],
        dialog: [...state.dialog, { id: id, name: "Igor" }],
      };

    default:
      return state;
  }
};

export const addMessageText = (text) => ({
  type: ADD_MESSAGE,
  newText: text,
});

// export const updateMessageText = (text) => ({
//   type: UPDATE_MESSAGE_TEXT,

// });

export default dialogsReducer;
