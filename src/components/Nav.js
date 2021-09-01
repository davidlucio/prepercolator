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

export default function Nav() {
  return (
    <UserContext.Provider value={user}>
      <Router>
        {/* Header Takes in User to check if user is admin and render business link */}
        <Switch>
          <Route exact path="/">
            {user.isAuthenticated ? <Home user={user} /> : <Login />}
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/supersecretbusinessportal">
            {user ? <BusinessPortal user={user} /> : <Redirect to="/login" />}
          </Route>
          <Route path="/drink">
            {user ? <Drink /> : <Redirect to="/login" />}
          </Route>
          <Route path="/order">
            {user ? <NewOrder /> : <Redirect to="/login" />}
          </Route>
          <Route path="/user/drinks">
            {user ? <SavedDrinks /> : <Redirect to="/login" />}
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
