import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./components/App.js";
import allReducers from "./reducers";

ReactDOM.render(
  <Provider store={createStore(allReducers)}>
    <App />
  </Provider>,

  document.querySelector("#root")
);
