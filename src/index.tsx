import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import App from "./components/App";
import * as initialStateJson from "./initialState.json";
import { storeFactory } from "./store";

const initialState = localStorage["redux-store"]
  ? JSON.parse(localStorage["redux-store"])
  : initialStateJson;

const saveState = () =>
  (localStorage["redux-store"] = JSON.stringify(store.getState()));

const store = storeFactory(initialState);
store.subscribe(saveState);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
