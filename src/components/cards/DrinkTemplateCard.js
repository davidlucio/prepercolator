import React from "react";

export default function DrinkTemplateCard({ drink }) {
  return (
    <div key={drink.id} className="bpDrinkTemplateCard">
      <h5>{drink.drink_name}</h5>
      <p>
        A {drink.size} ounce {drink.is_steamed ? "Hot " : "Iced "} drink.
      </p>
      <h6>Ingredients:</h6>
      <ul>
        {drink.ingredients ? (
          drink.ingredients.length > 0 ? (
            drink.ingredients.map((ingredient) => {
              return (
                <li key={ingredient.id}>
                  <span>{ingredient.ingredient_name}</span>
                  <span>
                    {ingredient.drinkIngredients.amount}{" "}
                    {ingredient.type.type_units}
                  </span>
                </li>
              );
            })
          ) : (
            <li>Looks like theres nothing here...</li>
          )
        ) : null}
      </ul>
    </div>
  );
}
