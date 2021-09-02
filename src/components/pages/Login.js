import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import API from "../utils/API";
import Footer from "../Footer";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  useEffect(() => {
    if (props.user?.username) {
      history.push("/");
    }
  }, [props.user?.username]);
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
      localStorage.setItem("token", user.token);
      console.log(user);
      props.setUser(user.user);
      history.push("/");
    } else {
      return <div>Incorrect Username, email or password</div>;
    }
    setPassword("");
    setEmail("");
    setUsername("");
  };
  return (
    <>
      <main className="login-page">
        <div className="login-window">
          <img
            className="logo"
            src="../assets/images/logo_bold_white.png"
          ></img>
          <h1>Welcome to Prepercolator!</h1>
          <h3>Please Login</h3>
          <div>
            <input
              name="username"
              type="text"
              value={username}
              onChange={handleChange}
              placeholder="Username"
            />
            {/** }
                        <input
                            name="email"
                            type="email"
                            value={email}
                            onChange={handleChange}
                            placeholder="Email"
                            required autocomplete="on"
                            autocompletetype="email"
                        />
                        { /**/}
            <input
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
              placeholder="Password"
            />
          </div>
          <button type="submit" name="login" onClick={handleLogin}>
            Login
          </button>
        </div>
      </main>

      <Footer />
    </>
  );
}
