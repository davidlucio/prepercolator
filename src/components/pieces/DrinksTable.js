import React, { useState, useEffect } from "react";

import DrinkTemplateCard from "../cards/DrinkTemplateCard";
import API from "../utils/API";

export default function DrinksTable({ user }) {
  const [drinks, setDrinks] = useState([]);
  useEffect(() => {
    let token = localStorage.getItem("token");
    API.getDrinkTemplates(token).then((res) => {
      let drinks = res.data;
      setDrinks(drinks);
    });
  });
  return (
    <div className="bpViewDrinks">
      <div className="bpDrinkTemplates">
        <h3>Current Drink Templates:</h3>
        <div className="bpDrinkTemplateCardBox">
          {user.drinks ? (
            user.drinks.map((drink) => {
              return <DrinkTemplateCard key={drink.id} drink={drink} />;
            })
          ) : (
            <>Loading...</>
          )}
        </div>
      </div>
    </div>
  );
}
