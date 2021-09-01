import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import API from "./utils/API";

/** DEPRECATED **/
// import Home from "./pages/Home";

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
    // let user = sessionStorage.getItem("user")
    let userId = sessionStorage.getItem("userId");
    console.log();
    const [user, setUser] = useState({});
    useEffect(() => {
        API.getUserById(userId).then((user) => {
            setUser(user);
        });
    }, []);
    return (
        <UserContext.Provider value={user}>
            <Router>
                {/* Header Takes in User to check if user is admin and render business link */}
                <Switch>
                    <Route exact path="/">
                        {/** LUCIOWARE OVERRIDES **/}
                        {user ? <Drink /> : <Login />}
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/supersecretbusinessportal">
                        {user ? <BusinessPortal /> : <Redirect to="/login" />}
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
                        {user ? <OrderHistory /> : <Redirect to="/login" />}
                    </Route>
                    <Route path="/user/profile">
                        {user ? <Profile /> : <Redirect to="/login" />}
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}
