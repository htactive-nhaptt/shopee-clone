import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./styles/main.css";
import "antd/dist/antd.css";
import App from "./App";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter as Router } from "react-router-dom";

import configureStore from "./store";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
