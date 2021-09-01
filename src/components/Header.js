import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/images/logo_bold.png";
import UserContext from "./context/UserContext";

export default function Header() {
  const user = useContext(UserContext);

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("userId");
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
          {user.admin === true ? (
            <li>
              <Link to="/supersecretbusinessportal">Business</Link>
            </li>
          ) : null}
          {user ? (
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          ) : null}
        </ul>
      </nav>
    </header>
  );
}
