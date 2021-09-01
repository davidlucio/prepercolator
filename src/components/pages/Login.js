import React, { useState, createContext } from "react";
import { Redirect } from "react-router-dom";
import API from "../utils/API";

import Nav from "../Nav";

export default function Login({ user, setUser }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = (e) => {
    switch (e.target.name) {
      case "username":
        setUsername(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;

      default:
        break;
    }
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    let loginUser = {
      username: username,
      email: email,
      password: password,
    };

    const res = await API.login(loginUser);
    const user = res.data;
    if (user !== undefined) {
      console.log(user);
      sessionStorage.setItem("userId", user.id);
      localStorage.setItem("userId", user.id);
      return <Redirect to="/" />;
    } else {
      return <div>Incorrect Username, email or password</div>;
    }
  };

  return (
    <main>
      <h3>Sign in</h3>
      <div>
        <input
          name="username"
          type="text"
          value={username}
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
        />
      </div>
      <button type="submit" name="login" onClick={handleLogin}>
        Login
      </button>
    </main>
  );
}
