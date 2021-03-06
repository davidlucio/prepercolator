import React from "react";
import { Link, useHistory } from "react-router-dom";

import Logo from "../assets/images/logo_bold.png";

export default function Header({ user }) {
    let history = useHistory();
    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        history.push("/");
        window.location.reload();
    };
    return (
        <header>
            <Link to="/" className="logo">
                {/****}
                <img className="logo" src={Logo} alt="Prepercolator Logo" />
                {/***/}
            </Link>
            
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/user/profile">Profile</Link>
                    </li>
                    {user.is_admin === true ? (
                        <li>
                            <Link to="/supersecretbusinessportal">Business</Link>
                        </li>
                    ) : null}
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
