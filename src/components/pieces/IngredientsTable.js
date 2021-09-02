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

  const updateTable = () => {
    API.getIngredients().then((res) => {
      console.log(res.data);
      setIngredients(res.data);
    });
  };

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
    let token = localStorage.getItem("token");
    console.log("User double-clicked delete, move to delete item");
    API.deleteIngredientById(id, token).then((res) => {
      console.log(`Successfully deleted Ingredient. ${res}`);
    });
    updateTable();
  };

  return (
    <div className="bpViewIngredients">
      <div className="bpAvailable">
        <h3>Available Ingredients:</h3>
        <ul>
          {ingredients ? (
            ingredients.map((ingredient) => {
              return (
                <li key={ingredient.id}>
                  <span>{ingredient.ingredient_name}</span>
                  <button value={ingredient.id} onClick={sellOutIngredient}>
                    Sell Out
                  </button>
                  <button
                    value={ingredient.id}
                    onDoubleClick={deleteIngredient}
                  >
                    Delete
                  </button>
                  {ingredient.isSoldOut ? <p>Sold Out</p> : null}
                </li>
              );
            })
          ) : (
            <li>Loading...</li>
          )}
        </ul>
      </div>
      <NewIngredientForm className="newIngredient" updateTable={updateTable} />
    </div>
  );
}
