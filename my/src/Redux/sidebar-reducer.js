import igor from "./../img/avatars/igor.jpg";
import lina from "./../img/avatars/lina.jpg";
import yarik from "./../img/avatars/yarik.jpg";
import yasya from "./../img/avatars/yasya.jpg";
import vasya from "./../img/avatars/vasya.jpg";
import alla from "./../img/avatars/alla.jpg";

let initialState = {
  avatars: [
    { id: "1", name: "Igor", img: igor },
    { id: "2", name: "Vasya", img: vasya },
    { id: "3", name: "Lina", img: lina },
    { id: "4", name: "Yasya", img: yasya },
    { id: "5", name: "Yarik", img: yarik },
    { id: "6", name: "Alla", img: alla },
  ],
};

const sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;
