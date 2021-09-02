import React, { useState, useEffect } from "react";

import Header from "../Header";
import Settings from "../cards/Settings";
import Footer from "../Footer";

import { useHistory } from "react-router-dom";
import DrinkTemplateCard from "../cards/DrinkTemplateCard";
import API from "../utils/API";

export default function Profile({ user }) {
  let history = useHistory();
  const [usersDrinks, setUsersDrinks] = useState([]);

  useEffect(() => {
    if (!user.username) {
      history.push("/login");
    }
    let token = localStorage.getItem("token");
    API.getUserDrinks(token).then((res) => {
      console.log(res.data);
      setUsersDrinks(res.data);
    });
  }, []);
  return (
    <>
      <Header user={user} />
      <main>
        <div className="profile">
          <h2>{user.username}'s Profile</h2>
          {usersDrinks
            ? usersDrinks.map((drink) => {
                return <DrinkTemplateCard key={drink.id} drink={drink} />;
              })
            : null}
          {/* ADD DRINK CARDS HERE */}
          <Settings user={user} />
        </div>
      </main>
      <Footer />
    </>
  );
}
