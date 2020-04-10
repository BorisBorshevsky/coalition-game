import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { App } from "./components/containers/AppContainer";
import { storeFactory } from "./store";
import { Provider } from "react-redux";
import { initialState } from "./store/state";

const appInitialState = localStorage["redux-store"]
  ? JSON.parse(localStorage["redux-store"])
  : initialState;

const saveState = () =>
  (localStorage["redux-store"] = JSON.stringify(store.getState()));

const store = storeFactory(appInitialState);
store.subscribe(saveState);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
