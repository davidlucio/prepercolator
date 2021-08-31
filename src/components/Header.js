import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/images/logo_bold.png";

export default function Header({ user }) {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <img className="logo" src={Logo} alt="Prepercolator Logo"></img>
          </li>
          {user.admin ? (
            <li>
              <Link to="/supersecretbusinessportal">Business</Link>
            </li>
          ) : null}
        </ul>
      </nav>
    </header>
  );
}
