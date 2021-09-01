import React, { useState, useEffect } from "react";

import Cup from "../cards/Cup";
import Content from "../Content";

export default function Drink() {
  const [size, seSize] = useState(12);
  const [drinkIngredients, setDrinkIngredients] = useState([]);

  return (
    <main>
      <Cup cupSize={size} drinkIngredients={drinkIngredients} />
      <Content
        drinkIngredients={drinkIngredients}
        setDrinkIngredients={setDrinkIngredients}
      />
    </main>
  );
}
