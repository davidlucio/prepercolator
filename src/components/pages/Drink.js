import React, { useState, useEffect } from "react";

import Cup from "../cards/Cup";
import Content from "../Content";
import API from "../utils/API";

import Header from "../Header";

export default function Drink({ user }) {
  const [size, setSize] = useState(12);
  const [drinkName, setDrinkName] = useState("");
  const [drinkIngredients, setDrinkIngredients] = useState([]);
  const [drinkIngredientsAmnt, setDrinkIngredientsAmnt] = useState([]);

  useEffect(() => {
    // TODO: (MAYBE) Check drink size against sum of drinkIngredients to see if drink has room for more ingredients
    // const sumIngr = 0;
    // drinkIngredients.forEach((drink) => {
    //   sumIngr = sumIngr + drink.unitAmount;
    // });
    // if (sumIngr > size) {
    //   return <div>You've added more than fits in your cup!!</div>;
    // }
  }, []);

  const addIngredient = (id) => {
    API.getIngredients().then((res) => {
      res.data.forEach((element) => {
        if (element.id === id) {
          drinkIngredients.push(element);
        }
      });
    });
  };

  const removeIngredient = (id) => {
    let index = drinkIngredients.findIndex(function (o) {
      return o.id === id;
    });
    if (index !== -1) drinkIngredients.splice(index, 1);
  };

  const saveDrink = (drink) => {
    let drinkToSave = {
      drink_name: drinkName,
      ingredients: [...drinkIngredients],
      ingredient_amounts: [...drinkIngredientsAmnt],
    };
    drinkToSave.ingredients.forEach((ingredient) => {
      if (ingredient.is_vegan === false) {
        drinkToSave.is_vegan = false;
      } else {
        drinkToSave.is_vegan = true;
      }
    });
  };

  return (
    <main>
      <Header user={user} />
      <Cup cupSize={size} drinkIngredients={drinkIngredients} />
      <Content
        size={size}
        setSize={setSize}
        drinkName={drinkName}
        setDrinkName={setDrinkName}
        drinkIngredients={drinkIngredients}
        setDrinkIngredients={setDrinkIngredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
        saveDrink={saveDrink}
        drinkIngredientsAmnt={drinkIngredientsAmnt}
        setDrinkIngredientsAmnt={setDrinkIngredientsAmnt}
      />
    </main>
  );
}
