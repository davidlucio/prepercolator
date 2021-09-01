import React, { useState, useEffect } from "react";
import Cup from "../cards/Cup";
import { Link } from "react-router-dom";

export default function Home() {
  const [view, setView] = useState("neither");
  const [currentDrinkIngredients, setCurrentDrinkIngredients] = useState([]);

  useEffect(() => {
    // API.getLastDrink().then((res) => {
    //   setCurrentDrinkIngredients(res.data);
    // });
    console.log("data");
  });

  return (
    <main>
      <Cup cupSize="12oz" drinkIngredients={currentDrinkIngredients} />
      <div>
        <Link to="/order">New Order</Link>
        <Link to="/drink">New Drink</Link>
      </div>
    </main>
  );
}
