import React, { useState, useEffect } from "react";

import DrinkTemplateCard from "../cards/DrinkTemplateCard";
import API from "../utils/API";

export default function DrinksTable({ user }) {
  const [drinks, setDrinks] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let token = localStorage.getItem("token");
      API.getUserDrinks(token).then((res) => {
        setDrinks(res.data);
      });
    }
    // API.getDrinkTemplates(token).then((res) => {
    //   let drinks = res.data;
    //   setDrinks(drinks);
    // });
    fetchData();
  });
  return (
    <div className="bpViewDrinks">
      <div className="bpDrinkTemplates">
        <h3>Current Drink Templates:</h3>
        <div className="bpDrinkTemplateCardBox">
          {drinks ? (
            drinks.map((drink) => {
              return <DrinkTemplateCard key={drink.id} drink={drink} />;
            })
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
}
