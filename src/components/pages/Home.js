import React, { useEffect } from "react";

import { useHistory, Link } from "react-router-dom";

import Header from "../Header";

export default function Home({ user }) {
  let history = useHistory();

  useEffect(() => {
    if (!user.username) {
      history.push("/login");
    }
  });

  return (
    <main>
      <Header user={user} />
      <h1>Welcome back {user.username}!</h1>
      <div>
        <h5>What would you like to do?</h5>
        <Link to="/order">New Order</Link>
        <Link to="/drink">New Drink</Link>
      </div>
    </main>
  );
}
