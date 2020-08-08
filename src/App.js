import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./containers/ListProductPage";
import CartPage from "./containers/CartPage";
import HeaderPage from "./components/Header";
import TestPage from "./containers/TestPage";
import DetailPage from "./containers/DetailPage";
import LoginPage from "./containers/LoginPage";
function App() {
  return (
    <div>
      <HeaderPage />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/checkout" component={CartPage} />
        <Route path={"/detail/:id"} component={DetailPage} />
        <Route path={"/login"} component={LoginPage} />
        <Route path="/test" component={TestPage} />
      </Switch>
    </div>
  );
}

export default App;
