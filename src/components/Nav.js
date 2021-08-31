import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./Header";
import BusinessPortal from "./pages/BusinessPortal";

import "../assets/styles/core.css";

export default function Nav({ user }) {
  return (
    <Router>
      <Header user={user} />
      <Switch>
        <Route exact path="/">
          {/* Feed user prop down as needed */}
          <Home />
        </Route>
        <Route path="/supersecretbusinessportal">
          <BusinessPortal user={user} />
        </Route>
      </Switch>
    </Router>
  );
}
