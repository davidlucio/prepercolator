import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import API from "../utils/API";

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
        console.log(loginUser);
        const res = await API.login(loginUser);
        const user = res.data;
        console.log(user);
        if (user !== undefined) {
            localStorage.setItem("token", user.token);
            console.log(user);
            props.setUser(user.user);
            history.push("/");
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
