import reportWebVitals from "./reportWebVitals";
// import { rerenderEntierTree } from "./render";
import store from "./redux/redux-store";
//с файла render.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";

// использовали когда проверяли библиотеку reselect
// setInterval(() => {
//   store.dispatch({ type: "FAKE" });
// }, 1000);

const root = ReactDOM.createRoot(document.getElementById("root"));
// export let rerenderEntierTree = (state) => {
// debugger;
root.render(
  <React.StrictMode>
    <Provider store={store}>
    {/* basename - для правильной настройки окружения(окружение - это где работоет преложение будь то локально (lokalhost, для тестировщиков)),process - глобальная переменная  */}
      <BrowserRouter basename = {process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
// };

// rerenderEntierTree();

// Убрали после внесения функции connect в контейнерных компонентах, так как в них скрытта подписка на изменение их части стейта

// store.subscribe(() => {
//   let state = store.getState();
//   rerenderEntierTree(state);
// });

reportWebVitals();
