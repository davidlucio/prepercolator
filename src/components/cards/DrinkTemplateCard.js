import React from "react";

export default function DrinkTemplateCard({ drink }) {
  return (
    <div key={drink.id} className="bpDrinkTemplateCard">
      <h5>{drink.drink_name}</h5>
      <p>
        A {drink.size} ounce {drink.is_steamed ? "Hot " : "Iced "} drink.
      </p>
      <p>Ingredients:</p>
      <ul>
        {drink.ingredient ? (
          drink.ingredient.map((ingredient) => {
            return (
              <li key={ingredient.id}>
                {ingredient.ingredient_name} {ingredient.ingredient_amount}
              </li>
            );
          })
        ) : (
          <li>Looks like theres nothing here...</li>
        )}
      </ul>
    </div>
  );
}
