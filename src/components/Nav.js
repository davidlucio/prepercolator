import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import API from "./utils/API";
import UserContext from "./context/UserContext";

/** DEPRECATED **/
// import Home from "./pages/Home";

import BusinessPortal from "./pages/BusinessPortal";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SavedDrinks from "./cards/SavedDrinks";
import Drink from "./pages/Drink";
import OrderHistory from "./pages/OrderHistory";
import Order from "./pages/Order";

import "../assets/styles/core.css";

export default function Nav() {
  // let user = sessionStorage.getItem("user")
  const [user, setUser] = useState({});
  let token = localStorage.getItem("token");

  // const [history, setHistory] = useState([]);
  useEffect(() => {
    // userId = sessionStorage.getItem("userId");
    if (token !== null || undefined) {
      token = localStorage.getItem("token");
      API.getUserByToken(token).then((res) => {
        setUser(res.data);
      });
    }
  }, []);

  return (
    <UserContext.Provider value={user}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home user={user} setUser={setUser} />
          </Route>
          <Route path="/login">
            <Login user={user} setUser={setUser} />
          </Route>
          <Route path="/supersecretbusinessportal">
            <BusinessPortal user={user} setUser={setUser} />
          </Route>
          <Route path="/drink">
            <Drink user={user} setUser={setUser} />
          </Route>
          <Route path="/order">
            <Order user={user} setUser={setUser} />
          </Route>
          <Route path="/user/drinks">
            <SavedDrinks user={user} setUser={setUser} />
          </Route>
          <Route path="/user/orders">
            <OrderHistory user={user} setUser={setUser} />
          </Route>
          <Route path="/user/profile">
            <Profile user={user} setUser={setUser} />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}
