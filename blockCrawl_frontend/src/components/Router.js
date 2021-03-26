import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Header from "../components/Header";
import Home from "../routes/Home";
import Block from "../routes/Block";
import Team from "../routes/Team";
import Info from "../routes/Info";
import Contact from "../routes/Contact";
import DataService from "../routes/DataService/index";
import TopAuth from "./TopAuth";

export default () => {
  return (
    <BrowserRouter>
      <>
        <TopAuth />
        <Header />
        <Switch>
          <Route
            path={process.env.PUBLIC_URL + "/"}
            exact
            component={Block}
          ></Route>
          <Route
            path={process.env.PUBLIC_URL + "/info"}
            exact
            component={Info}
          ></Route>
          <Route
            path={process.env.PUBLIC_URL + "/block"}
            exact
            component={Home}
          ></Route>
          <Route
            path={process.env.PUBLIC_URL + "/team"}
            exact
            component={Team}
          ></Route>
          <Route
            path={process.env.PUBLIC_URL + "/dataservice"}
            exact
            component={DataService}
          ></Route>
          <Route
            path={process.env.PUBLIC_URL + "/contact"}
            exact
            component={Contact}
          ></Route>
          <Redirect from="*" to="/"></Redirect>
        </Switch>
      </>
    </BrowserRouter>
  );
};
