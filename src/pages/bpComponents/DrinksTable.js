import React, { useState, useEffect } from 'react';
import API from './bpUtils/API';

export default function DrinksTable() {
    const [drinks, setDrinks] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [newDrinkTemplate, setNewDrinkTemplate] = useState({
        drink_name:'',
        size: null,
        is_steamed: null,
        ingredients: [],
    });
    const [ingredientBase, setIngredientBase] = useState(0);
    const [ingredientMain, setIngredientMain] = useState(0);
    const [ingredientFlavor, setIngredientFlavor] = useState(0);
    const [ingredientToppings, setIngredientToppings] = useState(0);
    useEffect(()=>{
        API.getDrinkTemplates().then(res=>{
            console.log(res.data);
            setDrinks(res.data);
        })
        API.getIngredients().then(res=>{
            console.log(res.data);
            setIngredients(res.data);
        })
    },[]);

    const addNewDrinkTemplate = (event) => {
        event.preventDefault();
        let ingredients = [];
        ingredients.push(ingredientBase,ingredientMain,ingredientFlavor,ingredientToppings);
        setNewDrinkTemplate({ ingredients: ingredients})
        console.log(newDrinkTemplate);
        // API.addNewDrinkTemplate(newDrinkTemplate).then(res=>{
        //     console.log(`Drink template added. ${res}`)
        // })
    };
    const handleInputChange = (event) => {
        switch (event.target.name) {
            case 'newDrinkName':
                setNewDrinkTemplate({ drink_name: event.target.value})
                break;
            case 'newDrinkBase':
                setIngredientBase(event.target.value)
                break;
            case 'newDrinkMain':
                setIngredientMain(event.target.value)
                break;
            case 'newDrinkFlavor':
                setIngredientFlavor(event.target.value)
                break;
            case 'newDrinkToppings':
                setIngredientToppings(event.target.value)
                break;
            default:
                break;
        }
    } 

    return (
        <div className="bpViewDrinks">
          <div className="bpDrinkTemplates">
              <h3>Current Drink Templates:</h3>
              <div className="bpDrinkTemplateCardBox">
              { 
                drinks.map(drink=>{
                  return(
                    <div key={drink.id} className="bpDrinkTemplateCard">
                      <h5>{drink.drink_name}</h5>
                      <p>A {drink.size} ounce { drink.is_steamed ? "Hot " : "Iced "} drink.</p>
                      <p>Ingredients:</p>
                        <ul> 
                        { 
                          drink.ingredient !== undefined
                          ? drink.ingredient.length === 1
                          ? <li>{drink.ingredient.ingredient_name} {drink.ingredient.ingredient_amount}</li>
                          ?  drink.ingredient.map((ingredient)=>{
                            return (
                                <li key={ingredient.id}>{ingredient.ingredient_name} {ingredient.ingredient_amount}</li>
                            )
                          })
                          : null : null : <li>Looks like theres nothing here...</li>
                        }
                        </ul>
                    </div>
                  )
                })
              }
              </div>
              <div className="bpNewDrinkTemplate">
                  <h6>Create a new drink template</h6>
                  <form>
                      <input name="newDrinkName" type="text" placeholder="New Drink Template Name" onChange={handleInputChange}/>
                      <select name="newDrinkSize" value={newDrinkTemplate.size} onChange={handleInputChange}>
                          <option value={8} onChange={handleInputChange}>8 Ounce</option>
                          <option value={12} onChange={handleInputChange}>12 Ounce</option>
                          <option value={16} onChange={handleInputChange}>16 Ounce</option>
                      </select>
                    <label>
                      Base:
                      <select name="newDrinkBase" value={ingredientBase} onChange={handleInputChange}>
                        { ingredients.map((ingredient)=>{
                            return (
                                <option key={ingredient.id}>{ingredient.ingredient_name}</option>
                            )
                        })}
                      </select>
                    </label>
                    <div>
                    <label>
                      Main:
                      <select name="newDrinkMain"value={ingredientMain} onChange={handleInputChange}>
                        { ingredients.map((ingredient)=>{
                            return (
                                <option key={ingredient.id} value={ingredient.id}>{ingredient.ingredient_name}</option>
                            )
                        }) }
                      </select>
                    </label>
                    <label>
                        Ratio:
                        <input type="text" placeholder="80 liquid/20 foam"></input>
                    </label>
                    </div>
                    <label>
                      Flavor:
                      <select name="newDrinkFlavor" value={ingredientFlavor} onChange={handleInputChange}>
                        { ingredients.map((ingredient)=>{
                            return (
                                <option key={ingredient.id} value={ingredient.id}>{ingredient.ingredient_name}</option>
                            )
                        }) }
                      </select>
                    </label>
                    <label>
                      Toppings:
                      <select name="newDrinkToppings" value={ingredientToppings} onChange={handleInputChange}>
                        { ingredients.map((ingredient)=>{
                            return (
                                <option key={ingredient.id} value={ingredient.id}>{ingredient.ingredient_name}</option>
                            )
                        }) }
                      </select>
                    </label>
                    <button type="submit" onClick={addNewDrinkTemplate}>Add New Drink Template</button>
                  </form>
              </div>
          </div>
        </div>
    )
}