import React, { useState } from "react";

export default function NewDrink() {
  // ingredients array should take in ingredientId, ingredientsAmnt should take in unit number at index of ingredient
  // When adding ingredient, push ID to ingredients, unit# to ingredientsAmnt with each ingredient.
  const [newDrink, setNewDrink] = useState({
    drink_name: "",
    is_vegan: false,
    size: 8,
    is_steamed: false,
    ingredients: [],
    ingredientsAmnt: [],
  });
  return (
    <main className="newDrinkPage">
      <Cup size={newDrink.size} />
    </main>
  );
}
