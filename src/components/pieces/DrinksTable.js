import React, { useState, useEffect } from "react";
import API from "../utils/API";

import DrinkTemplateCard from "../cards/DrinkTemplateCard";
import NewDrinkTemplateForm from "../forms/NewDrinkTemplateForm";

export default function DrinksTable() {
  const [drinks, setDrinks] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    API.getDrinkTemplates().then((res) => {
      console.log(res.data);
      setDrinks(res.data);
    });
    API.getIngredients().then((res) => {
      console.log(res.data);
      setIngredients(res.data);
    });
  }, []);

  return (
    <div className="bpViewDrinks">
      <div className="bpDrinkTemplates">
        <h3>Current Drink Templates:</h3>
        <div className="bpDrinkTemplateCardBox">
          {drinks.map((drink) => {
            return <DrinkTemplateCard key={drink.id} drink={drink} />;
          })}
        </div>
        <NewDrinkTemplateForm ingredients={ingredients} />
      </div>
    </div>
  );
}
