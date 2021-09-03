import React from "react";

export default function Settings({ user }) {
  return (
    <div className="settings">
      <h3>Settings</h3>
      <div className="userAvatar">
        <h4>Username: <span className="username">{user.username}</span></h4>
      </div>
      <ul className="userOptions">
        <li>Update Email</li>
        <li>Update Password</li>
        <li>Report a problem</li>
      </ul>
    </div>
  );
}
