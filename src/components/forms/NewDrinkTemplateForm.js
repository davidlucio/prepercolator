import React, { useState } from "react";
import API from "../utils/API";

export default function NewDrinkTemplateForm({ ingredients }) {
  const [ingredientBase, setIngredientBase] = useState(0);
  const [ingredientMain, setIngredientMain] = useState(0);
  const [ingredientFlavor, setIngredientFlavor] = useState(0);
  const [ingredientToppings, setIngredientToppings] = useState(0);
  const [newDrinkTemplate, setNewDrinkTemplate] = useState({
    drink_name: "",
    size: 8,
    is_steamed: null,
    ingredients: [],
  });

  const handleInputChange = (event) => {
    switch (event.target.name) {
      case "newDrinkSize":
        let val = {
          ...newDrinkTemplate,
          size: event.target.value,
        };
        setNewDrinkTemplate(val);
        break;
      case "newDrinkName":
        let value = {
          ...newDrinkTemplate,
          drink_name: event.target.value,
        };
        setNewDrinkTemplate(value);
        break;
      case "newDrinkBase":
        setIngredientBase(event.target.value);
        break;
      case "newDrinkMain":
        setIngredientMain(event.target.value);
        break;
      case "newDrinkFlavor":
        setIngredientFlavor(event.target.value);
        break;
      case "newDrinkToppings":
        setIngredientToppings(event.target.value);
        break;
      case "newDrinkSteamed":
        let prev = {
          ...newDrinkTemplate,
          is_steamed: !newDrinkTemplate.is_steamed,
        };
        setNewDrinkTemplate(prev);
        break;
      default:
        break;
    }
  };

  const addNewDrinkTemplate = (event) => {
    event.preventDefault();
    let ingredients = [];
    ingredients.push(ingredientBase);
    ingredients.push(ingredientMain);
    ingredients.push(ingredientFlavor);
    ingredients.push(ingredientToppings);
    let value = {
      ...newDrinkTemplate,
      ingredients: ingredients,
    };
    setNewDrinkTemplate(value);
    console.log(newDrinkTemplate);
    API.addNewDrinkTemplate(newDrinkTemplate).then((res) => {
      console.log(`Drink template added. ${res}`);
    });
  };

  return (
    <div className="bpNewDrinkTemplate">
      <h6>Create a new drink template</h6>
      <form>
        <input
          name="newDrinkName"
          type="text"
          placeholder="New Drink Template Name"
          onChange={handleInputChange}
        />
        <select
          name="newDrinkSize"
          value={newDrinkTemplate.size}
          onChange={handleInputChange}
        >
          <option value={8} onChange={handleInputChange}>
            8 Ounce
          </option>
          <option value={12} onChange={handleInputChange}>
            12 Ounce
          </option>
          <option value={16} onChange={handleInputChange}>
            16 Ounce
          </option>
        </select>
        <label>
          Base:
          <select
            name="newDrinkBase"
            value={ingredientBase}
            onChange={handleInputChange}
          >
            {ingredients.map((ingredient) => {
              return (
                <option key={ingredient.id}>
                  {ingredient.ingredient_name}
                </option>
              );
            })}
          </select>
        </label>
        <div>
          <label>
            Main:
            <select
              name="newDrinkMain"
              value={ingredientMain}
              onChange={handleInputChange}
            >
              {ingredients.map((ingredient) => {
                return (
                  <option key={ingredient.id} value={ingredient.id}>
                    {ingredient.ingredient_name}
                  </option>
                );
              })}
            </select>
          </label>
          <label>
            Hot:
            <input
              name="newDrinkSteamed"
              type="checkbox"
              checked={newDrinkTemplate.is_steamed}
              onChange={handleInputChange}
            />
          </label>
          {newDrinkTemplate.is_steamed === true ? (
            <label>
              Ratio:
              <input type="text" placeholder="80 liquid/20 foam"></input>
            </label>
          ) : null}
        </div>
        <label>
          Flavor:
          <select
            name="newDrinkFlavor"
            value={ingredientFlavor}
            onChange={handleInputChange}
          >
            {ingredients.map((ingredient) => {
              return (
                <option key={ingredient.id} value={ingredient.id}>
                  {ingredient.ingredient_name}
                </option>
              );
            })}
          </select>
        </label>
        <label>
          Toppings:
          <select
            name="newDrinkToppings"
            value={ingredientToppings}
            onChange={handleInputChange}
          >
            {ingredients.map((ingredient) => {
              return (
                <option key={ingredient.id} value={ingredient.id}>
                  {ingredient.ingredient_name}
                </option>
              );
            })}
          </select>
        </label>
        <button type="submit" onClick={addNewDrinkTemplate}>
          Add New Drink Template
        </button>
      </form>
    </div>
  );
}
