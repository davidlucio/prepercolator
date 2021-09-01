import React from "react";

import Header from "../Header";

export default function Settings({ user }) {
  return (
    <main className="userSettings">
      <div className="userAvatar">
        <img>{user.photo}</img>
        <h1>{user.username}</h1>
        <p>Email:{user.email}</p>
      </div>
      <ul className="userOptions">
        <li>Update Photo</li>
        <li>Update Email</li>
        <li>Update Password</li>
        <li>Change theme</li>
        <li>Report a problem</li>
      </ul>
    </main>
  );
}