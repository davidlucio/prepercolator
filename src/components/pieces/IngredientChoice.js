import React, { useState } from "react";

export default function IngredientChoice({
  tier,
  ingredients,
  newDrinkTemplate,
}) {
  const [selected, setSelected] = useState(0);
  const [units, setUnits] = useState(0);
  const [ingredient, setIngredient] = useState({
    ingredientTier: { tier },
    ingredientId: selected,
    ingredientUnitsAmnt: 0,
  });
  const handleInputChange = () => {
    console.log("input changed");
  };
  return (
    <div className="bpNewDrinkBaseBlock">
      <label>
        {tier}:
        <select
          name={tier + " ingredient"}
          value=""
          onChange={handleInputChange}
        >
          {ingredients.map((ingredient) => {
            return (
              <option key={ingredient.id} price={ingredient.price_per_unit}>
                {ingredient.ingredient_name}
              </option>
            );
          })}
        </select>
      </label>
      <label>
        Base Unit Amount:
        <input
          name="newDrinkBaseAmnt"
          type="number"
          onChange={handleInputChange}
          value={
            tier === "Base"
              ? newDrinkTemplate.ingredients[0]
              : tier === "Main"
              ? newDrinkTemplate.ingredients[1]
              : tier === "Flavors"
              ? newDrinkTemplate.ingredients[2]
              : tier === "Toppings"
              ? newDrinkTemplate.ingredients[3]
              : null
          }
        />
      </label>
    </div>
  );
}
