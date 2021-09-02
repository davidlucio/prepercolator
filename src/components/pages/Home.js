import React, { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";

export default function Home({ user }) {
  let history = useHistory();

  useEffect(() => {
    if (!user.username) {
      history.push("/login");
    }
  });

  const newOrderHandle = () => {
    user.newOrder = true;
  };

  return (
    <>
      <Header user={user} />

      <main className="landing-page">
        <h1>Welcome back, <span className="username">{user.username}</span>!</h1>
        <div>
          <h2>What would you like to do?</h2>

          <Link to="/order" onClick={newOrderHandle}>New Order</Link>

          <Link to="/drink">New Drink</Link>
          
        </div>
      </main>

      <Footer />
    </>
  );
}
