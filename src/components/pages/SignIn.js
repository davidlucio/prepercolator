import React, { useState } from "react";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <h3>Sign in</h3>
      <div>
        <input name="username" type="text" value={username} />
        <input name="email" type="email" value={email} />
        <input name="password" type="password" value={password} />
      </div>
    </div>
  );
}
