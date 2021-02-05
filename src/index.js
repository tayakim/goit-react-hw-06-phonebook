import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./component/App";
import store from "./component/redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
