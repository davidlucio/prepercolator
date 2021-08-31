import React, { useState, useEffect } from "react";
import API from "../utils/API";

import IngredientChoice from "../pieces/IngredientChoice";

export default function NewDrinkTemplateForm({ ingredients, user }) {
  // Storing ingredient ID and Unit # for Base tier
  const [ingredientBase, setIngredientBase] = useState(0);
  const [ingredientBaseAmnt, setIngredientBaseAmnt] = useState(0);
  // Storing ID and Unit # for Main
  const [ingredientMain, setIngredientMain] = useState(0);
  const [ingredientMainAmnt, setIngredientMainAmnt] = useState(0);
  // Storing ID and Unit # for Flavor(s)
  const [ingredientFlavors, setIngredientFlavors] = useState(0);
  const [ingredientFlavorsAmnt, setIngredientFlavorsAmnt] = useState(0);
  // Sotring ID and Unit # for Topping(s)
  const [ingredientToppings, setIngredientToppings] = useState(0);
  const [ingredientToppingsAmnt, setIngredientToppingsAmnt] = useState(0);
  // Storing drink itself and total price, sum of ingredient prices
  const [basePrice, setBasePrice] = useState(0);
  const [mainPrice, setMainPrice] = useState(0);
  const [flavorPrice, setFlavorPrice] = useState(0);
  const [toppingPrice, setToppingPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const [newDrinkTemplate, setNewDrinkTemplate] = useState({
    drink_name: "",
    is_vegan: false,
    size: 8,
    is_steamed: false,
    userId: user.id,
    ingredients: [0, 0, 0, 0],
    ingredient_amount: [0, 0, 0, 0],
    price: totalPrice,
  });

  useEffect(() => {
    ingredients.forEach((ingredient) => {
      if (ingredient.id === ingredientBase) {
        let price = ingredient.price_per_unit;
        setBasePrice(price * ingredientBaseAmnt);
      }
    });
    ingredients.forEach((ingredient) => {
      if (ingredient.id === ingredientMain) {
        let price = ingredient.price_per_unit;

        setMainPrice(price * ingredientMainAmnt);
      }
    });
    ingredients.forEach((ingredient) => {
      if (ingredient.id === ingredientFlavors) {
        let price = ingredient.price_per_unit;

        setFlavorPrice(price * ingredientFlavorsAmnt);
      }
    });
    ingredients.forEach((ingredient) => {
      if (ingredient.id === ingredientToppings) {
        let price = ingredient.price_per_unit;

        setToppingPrice(price * ingredientToppingsAmnt);
      }
    });
  });

  const handleInputChange = (event) => {
    let value;
    let units;
    switch (event.target.name) {
      case "newDrinkSize":
        value = {
          ...newDrinkTemplate,
          size: event.target.value,
        };
        setNewDrinkTemplate(value);
        break;
      case "newDrinkName":
        value = {
          ...newDrinkTemplate,
          drink_name: event.target.value,
        };
        setNewDrinkTemplate(value);
        break;
      case "newDrinkBase":
        units = ingredientBaseAmnt;
        ingredients.forEach((ingredient) => {
          if (ingredient.id === ingredientBase) {
            let price = ingredient.price_per_unit * units;
            setTotalPrice(...(totalPrice + price));
          }
        });
        setIngredientBase(event.target.value);
        break;
      case "newDrinkMain":
        units = ingredientMainAmnt;
        ingredients.forEach((ingredient) => {
          if (ingredient.id === ingredientMain) {
            let price = ingredient.price_per_unit * units;
            setTotalPrice(...(totalPrice + price));
          }
        });

        setIngredientMain(event.target.value);
        break;
      case "newDrinkFlavor":
        units = ingredientFlavorsAmnt;
        ingredients.forEach((ingredient) => {
          if (ingredient.id === ingredientFlavors) {
            let price = ingredient.price_per_unit * units;
            setTotalPrice(...(totalPrice + price));
          }
        });

        setIngredientFlavors(event.target.value);
        break;
      case "newDrinkToppings":
        units = ingredientToppingsAmnt;
        ingredients.forEach((ingredient) => {
          if (ingredient.id === ingredientToppings) {
            let price = ingredient.price_per_unit * units;
            setTotalPrice(...(totalPrice + price));
          }
        });

        setIngredientToppings(event.target.value);
        break;
      case "newDrinkSteamed":
        value = {
          ...newDrinkTemplate,
          is_steamed: !newDrinkTemplate.is_steamed,
        };
        setNewDrinkTemplate(value);
        break;
      case "newDrinkBaseAmnt":
        units = event.target.value;

        setIngredientBaseAmnt(event.target.value);
        break;
      case "newDrinkMainAmnt":
        units = event.target.value;

        setIngredientMainAmnt(event.target.value);
        break;
      case "newDrinkFlavorAmnt":
        units = event.target.value;

        setIngredientFlavorsAmnt(event.target.value);
        break;
      case "newDrinkToppingsAmnt":
        units = event.target.value;

        setIngredientToppingsAmnt(event.target.value);
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
    ingredients.push(ingredientFlavors);
    ingredients.push(ingredientToppings);
    console.log(`Array of IngredientIDs ${ingredients}`);
    let ingredientsAmnt = [];
    ingredientsAmnt.push(ingredientBaseAmnt);
    ingredientsAmnt.push(ingredientMainAmnt);
    ingredientsAmnt.push(ingredientFlavorsAmnt);
    ingredientsAmnt.push(ingredientToppingsAmnt);
    console.log(`Array of Unit Amounts${ingredientsAmnt}`);
    let value = {
      ...newDrinkTemplate,
      ingredient_amount: [...ingredientsAmnt],
      ingredients: [...ingredients],
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
        <div className="bpNewDrinkNameBlock">
          <input
            name="newDrinkName"
            type="text"
            placeholder="New Drink Template Name"
            onChange={handleInputChange}
            value={newDrinkTemplate.drink_name}
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
        </div>
        <div className="bpNewDrinkBaseBlock">
          <IngredientChoice
            tier={"Base"}
            ingredients={ingredients}
            handleInputChange={handleInputChange}
            newDrinkTemplate={newDrinkTemplate}
            setNewDrinkTemplate={setNewDrinkTemplate}
            ingredientBaseAmnt={ingredientBaseAmnt}
          />
        </div>
        <div className="bpNewDrinkMainBlock">
          <IngredientChoice
            tier={"Main"}
            ingredients={ingredients}
            handleInputChange={handleInputChange}
            newDrinkTemplate={newDrinkTemplate}
            setNewDrinkTemplate={setNewDrinkTemplate}
            ingredientMain={ingredientMain}
            ingredientMainAmnt={ingredientMainAmnt}
          />
        </div>
        <div className="bpNewDrinkHotBlock">
          <label>
            Hot:
            <input
              name="newDrinkSteamed"
              type="checkbox"
              checked={newDrinkTemplate.is_steamed}
              onChange={handleInputChange}
              value={newDrinkTemplate.is_steamed}
            />
          </label>
          {newDrinkTemplate.is_steamed === true ? (
            <label>
              Ratio:
              <input type="text" placeholder="80 liquid/20 foam"></input>
            </label>
          ) : null}
        </div>
        <div className="bpNewDrinkFlavorsBlock">
          <IngredientChoice
            tier={"Flavors"}
            ingredients={ingredients}
            handleInputChange={handleInputChange}
            newDrinkTemplate={newDrinkTemplate}
            setNewDrinkTemplate={setNewDrinkTemplate}
            ingredientFlavors={ingredientFlavors}
            ingredientFlavorsAmnt={ingredientFlavorsAmnt}
          />
        </div>
        <div className="bpNewDrinkToppingsBlock">
          <IngredientChoice
            tier={"Toppings"}
            ingredients={ingredients}
            handleInputChange={handleInputChange}
            newDrinkTemplate={newDrinkTemplate}
            setNewDrinkTemplate={setNewDrinkTemplate}
            ingredientToppings={ingredientToppings}
            ingredientToppingsAmnt={ingredientToppingsAmnt}
          />
          <p>Current Price: {totalPrice}</p>
        </div>
        <button type="submit" onClick={addNewDrinkTemplate}>
          Add New Drink Template
        </button>
      </form>
    </div>
  );
}
