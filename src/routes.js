import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/app";
import HomePage from "./components/home-page";
import NotFoundPage from "./components/not-found-page";
import Playground from "./components/playground";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/playground" component={Playground} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
