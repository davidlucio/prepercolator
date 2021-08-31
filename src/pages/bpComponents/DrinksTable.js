import React, { useState, useEffect } from 'react';
import API from './bpUtils/API';

export default function DrinksTable() {
    const [drinks, setDrinks] = useState([]);

    useEffect(()=>{
        API.getDrinkTemplates().then(res=>{
            console.log(res.data);
            setDrinks(res.data);
        })
    },[]);

    return (
        <div className="bpViewDrinks">
          <div className="bpDrinkTemplates">
              <h3>Current Drink Templates:</h3>
              {/* { drinks.map(drink=>{
                  return(
                      <>
                        <h5 key={drink.id}>{drink.drink_name}</h5>
                        <p>Hot or Iced? { drink.is_steamed ? "Hot!" : "Iced!"}</p>
                        <p>Size? { drink.unit_amount }</p>
                        <ul> 
                          <li>{drink.ingredient.ingredient_name} <span>Vegan? {drink.ingredient.is_vegan === true ? "yes!" : "no!"}</span></li>
                        </ul>
                      </>
                  )
              })} */}
          </div>
        </div>
    )
}