import React from "react";

export default function Settings({ user }) {
  return (
    <div className="settings">
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
