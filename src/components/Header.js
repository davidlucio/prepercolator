import React from "react";
import { Link, useHistory } from "react-router-dom";

import Logo from "../assets/images/logo_bold.png";

export default function Header({ user }) {
  let history = useHistory();
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    history.push("/");
  };
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <img className="logo" src={Logo} alt="Prepercolator Logo"></img>
          </li>
          <li>
            <Link to="/user/profile">Profile</Link>
          </li>
          {user.admin ? (
            <li>
              <Link to="/supersecretbusinessportal" />
            </li>
          ) : null}
          <li>
            <Link to="/supersecretbusinessportal">Business</Link>
          </li>
          {user ? (
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          ) : null}
          {user.newOrder ? (
            <li>
              <Link to="/order">Your Current Order</Link>
            </li>
          ) : null}
        </ul>
      </nav>
    </header>
  );
}
