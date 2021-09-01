import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import BusinessPortal from "./pages/BusinessPortal";

import "../assets/styles/core.css";

export default function Nav({ user }) {
  return (
    <Router>
      {/* Header Takes in User to check if user is admin and render business link */}
      <Header user={user} />
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <SignIn />}
          {/* <Home /> */}
        </Route>
        <Route path="/supersecretbusinessportal">
          <BusinessPortal user={user} />
        </Route>
      </Switch>
    </Router>
  );
}
