import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { storeFactory } from "./store";
import { Provider } from "react-redux";
import { defaultState } from "./store/state";
import { App } from "./containers/AppContainer";

const appInitialState = localStorage["redux-store"]
  ? JSON.parse(localStorage["redux-store"])
  : defaultState;

const saveState = () =>
  (localStorage["redux-store"] = JSON.stringify(store.getState()));

const store = storeFactory(appInitialState);
store.subscribe(saveState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
