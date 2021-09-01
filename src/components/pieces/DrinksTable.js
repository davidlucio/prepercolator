import React from "react";

import DrinkTemplateCard from "../cards/DrinkTemplateCard";

export default function DrinksTable({ user }) {
  return (
    <div className="bpViewDrinks">
      <div className="bpDrinkTemplates">
        <h3>Current Drink Templates:</h3>
        <div className="bpDrinkTemplateCardBox">
          {user.drinks.map((drink) => {
            return <DrinkTemplateCard key={drink.id} drink={drink} />;
          })}
        </div>
      </div>
    </div>
  );
}
