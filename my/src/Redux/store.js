// import { rerenderEntierTree } from "../render";
import igor from "./../img/avatars/igor.jpg";
import lina from "./../img/avatars/lina.jpg";
import yarik from "./../img/avatars/yarik.jpg";
import yasya from "./../img/avatars/yasya.jpg";
import vasya from "./../img/avatars/vasya.jpg";
import alla from "./../img/avatars/alla.jpg";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

// const ADD_POST = "ADD-POST";
// const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
// const ADD_MESSAGE = "ADD-MESSAGE";
// const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

let store = {
  _state: {
    dialogsPage: {
      dialog: [
        { id: "1", name: "Igor" },
        { id: "2", name: "Vasya" },
        { id: "3", name: "Lina" },
        { id: "4", name: "Yasya" },
        { id: "5", name: "Yarik" },
        { id: "6", name: "Alla" },
      ],
      newDialog: "",
      message: [
        { id: "1", message: "Hi" },
        { id: "2", message: "Yo" },
        { id: "3", message: "What" },
        { id: "4", message: "Hi" },
        { id: "5", message: "Yo" },
        { id: "6", message: "Hi" },
      ],
      newMessageText: "Igor molodchina",
    },
    postsPage: {
      posts: [
        { id: "1", message: "Hello,world", liksCounter: "0" },
        { id: "2", message: "It's my first post", liksCounter: "12" },
        { id: "3", message: "It's my second post", liksCounter: "25" },
        { id: "4", message: "It's my therd post", liksCounter: "48" },
        { id: "5", message: "It's my four post", liksCounter: "15" },
      ],
      newPostText: "Igor krasavchik",
    },
    sidebarPage: {
      avatars: [
        { id: "1", name: "Igor", img: igor },
        { id: "2", name: "Vasya", img: vasya },
        { id: "3", name: "Lina", img: lina },
        { id: "4", name: "Yasya", img: yasya },
        { id: "5", name: "Yarik", img: yarik },
        { id: "6", name: "Alla", img: alla },
      ],
    },
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log("state changed");
  },

  dispatch(action) {
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.postsPage = profileReducer(this._state.postsPage, action);
    this._state.sidebarPage.sidebarReducer(this._state.sidebarPage, action);

    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
// window.store = store;

// (урок 35) В state мы не можем импортировать функцию renderEntireTree (может произайти зацикливание), но мы можем
//ее туда передать через метод subscribe,
// который вызывается в index.js.После чего, созданная функция renderEntireTree в state переопределяется на ту,
// которую мы передали в subscribe.И теперь, когда мы добавляем пост, в state вызывается эта функция renderEntireTree
