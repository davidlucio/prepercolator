import React, { useState, useEffect } from "react";
import API from "../utils/API";
import NewIngredientForm from "../forms/NewIngredientForm";

export default function IngredientsTable() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    API.getIngredients().then((res) => {
      console.log(res.data);
      setIngredients(res.data);
    });
  }, []);

  const sellOutIngredient = (event) => {
    let id = event.target.value;
    console.log(`Setting IngredientID:${id} to sold out`);
    API.sellOutIngredientById(id).then((res) => {
      console.log(`Successfully set IngredientID:${id} to sold out. ${res}`);
    });
    setIngredients();
  };

  const deleteIngredient = (event) => {
    let id = event.target.value;
    console.log("User double-clicked delete, move to delete item");
    API.deleteIngredientById(id).then((res) => {
      console.log(`Successfully deleted Ingredient. ${res}`);
    });
  };

  return (
    <div className="bpViewIngredients">
      <div className="bpAvailable">
        <h3>Available Ingredients:</h3>
        <ul>
          {ingredients.map((ingredient) => {
            return (
              <li key={ingredient.id}>
                {ingredient.ingredient_name}
                <button value={ingredient.id} onClick={sellOutIngredient}>
                  Sell Out
                </button>
                <button value={ingredient.id} onDoubleClick={deleteIngredient}>
                  Delete
                </button>
                {ingredient.isSoldOut ? <p>Sold Out</p> : null}
              </li>
            );
          })}
        </ul>
      </div>
      <NewIngredientForm />
    </div>
  );
}
