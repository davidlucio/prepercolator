import React, { createContext, useState } from "react";
import { Redirect } from "react-router-dom";
import UserContext from "../context/UserContext";
import API from "../utils/API";

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
  const handleLogin = (e) => {
    e.preventDefault();
    let loginUser = {
      username: username,
      email: email,
      password: password,
    };
    API.login(loginUser).then((res) => {
      console.log(res.data);
      const userContext = createContext("User", res.data);
      return <Redirect to="/" />;
    });
  };
  return (
    <div>
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
    </div>
  );
}
