import React from "react";
import { Link } from "react-router-dom";

import UserDrinkCard from "./UserDrinkCard";

export default function SavedDrinks({ user }) {
  return (
    <main>
      <h2>{user.username}'s Saved Drinks</h2>
      <div className="drinkSlideshow">
        {user.drinks ? (
          <>
            {user.drinks.map((drink) => {
              return <UserDrinkCard key={drink.id} drink={drink} user={user} />;
            })}{" "}
          </>
        ) : (
          <>Loading...</>
        )}
      </div>
      <Link to="/drink">Create a new drink</Link>
    </main>
  );
}
