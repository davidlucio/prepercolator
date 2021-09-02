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

      <main>
        <div className="homePage">
          <h1 className="hpWelcome">Welcome back {user.username}!</h1>
          <div>
            <h5>What would you like to do?</h5>
            <div className="btnBox">
              <div className="orderLink">
                <Link to="/order" onClick={newOrderHandle}>
                  New Order
                </Link>
              </div>
              <div className="drinkLink">
                <Link to="/drink">New Drink</Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
