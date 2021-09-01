import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";

import UserDrinkCard from "./UserDrinkCard";

export default function SavedDrinks({ user }) {
  const [savedDrinks, setSavedDrinks] = useState([]);

  useEffect(() => {
    API.getUserSavedDrinks(user.id).then((res) => {
      setSavedDrinks(res.data);
    });
  });

  return (
    <main>
      <h2>{user.username}'s Saved Drinks</h2>
      <div className="drinkSlideshow">
        {savedDrinks.map((drink) => {
          return <UserDrinkCard drink={drink} user={user} />;
        })}
      </div>
      <Link to="/drink">Create a new drink</Link>
    </main>
  );
}
