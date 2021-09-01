import React, { useState, createContext, useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./pages/Home";
import BusinessPortal from "./pages/BusinessPortal";
import SavedDrinks from "./cards/SavedDrinks";
import Drink from "./pages/Drink";
import OrderHistory from "./pages/OrderHistory";
import NewOrder from "./pages/NewOrder";

import "../assets/styles/core.css";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import UserContext from "./context/UserContext";

export default function Nav() {
  const user = useContext(UserContext);
  return (
    <UserContext.Provider value={user}>
      <Router>
        {/* Header Takes in User to check if user is admin and render business link */}
        <Switch>
          <Route exact path="/">
            {user ? <Home user={user} /> : <Login />}
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/supersecretbusinessportal">
            <BusinessPortal user={user} />
          </Route>
          <Route path="/drink">
            <Drink />
          </Route>
          <Route path="/order">
            {user ? <NewOrder /> : <Redirect to="/login" />}
          </Route>
          <Route path="/user/drinks">
            {user ? <SavedDrinks /> : <Redirect to="/login" />}
            <SavedDrinks />
          </Route>
          <Route path="/user/orders">
            {user ? <OrderHistory user={user} /> : <Redirect to="/login" />}
          </Route>
          <Route path="/user/profile">
            {user ? <Profile user={user} /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}
