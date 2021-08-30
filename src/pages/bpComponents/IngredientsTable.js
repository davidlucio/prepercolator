import React, { useState, useEffect } from 'react';
import API from './bpUtils/API';

export default function IngredientsTable() {
  const [ingredients, setIngredients] = useState([]);
  useEffect(()=>{
    API.getIngredients().then((res)=>{
      console.log(res.data);
      setIngredients(res.data);
    })
  },[])
    return (
        <div className="bpViewIngredients">
          <div className="bpAvailable">
            <h3>Available Ingredients:</h3>
              <ul>
                { 
                  ingredients.map((ingredient)=>{
                    return <li key={ingredient.id}>{ingredient.ingredient_name} <span><button>Sell Out</button><button>Remove</button></span></li>
                  })
                }
              </ul>
          </div>
          <div className="bpActions">
            <h3>Add a New Ingredient</h3>
              <div>
                <form>
                  <input name="ingredientName" type="text" placeholder="Name of Ingredient?"/>
                    <select name="ingredientType">
                    
                    </select>
                  <label className="bpActionsCbLabel">
                    Vegan:
                      {/* <input 
                        className="bpActionsCb"
                        name="isVegan" 
                        type="checkbox"
                        checked={this.state.isVegan}
                        onChange={this.handleInputChange}
                      /> */}
                  </label>
                  {/* <button onClick={addNewIngredient}>Add Item</button> */}
                </form>
              </div>
          </div>
        </div>
    )
}