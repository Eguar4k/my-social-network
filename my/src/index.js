import reportWebVitals from "./reportWebVitals";
// import { rerenderEntierTree } from "./render";
import store from "./Redux/redux-store";
//с файла render.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Provider } from "./storeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
export let rerenderEntierTree = (state) => {
  // debugger;
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
};
rerenderEntierTree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  rerenderEntierTree(state);
});

reportWebVitals();
