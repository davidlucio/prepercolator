import React from "react";

export default function Settings({ user }) {
  return (
    <div className="settings">
      <h1 style={{ fontSize: "2rem" }}>Settings</h1>
      <div className="userAvatar">
        <h1>{user.username}</h1>
      </div>
      <ul className="userOptions">
        <li>Update Email</li>
        <li>Update Password</li>
        <li>Report a problem</li>
      </ul>
    </div>
  );
}
