import React, { useState, useEffect } from 'react';
import API from './bpUtils/API';

export default function IngredientsTable() {

  const [ingredients, setIngredients] = useState([]);
  const [deleteStage, setDeleteStage] = useState(0);
  useEffect(()=>{
    API.getIngredients().then((res)=>{
      console.log(res.data);
      setIngredients(res.data);
    })
  },[])

  const sellOutIngredient = (event) => {
    let id = event.target.value;
    console.log(`Setting IngredientID:${id} to sold out`);
    
  }
  const promptDelete = (event) => {
    setDeleteStage('X')
  }
  const deleteIngredient = (event) => {
    console.log('User double-clicked delete, move to delete item')
    setDeleteStage(0);
    
  }

    return (
        <div className="bpViewIngredients">
          <div className="bpAvailable">
            <h3>Available Ingredients:</h3>
              <ul>
                { 
                  ingredients.map((ingredient)=>{
                    return (
                      <li>
                        <p key={ingredient.id}>{ingredient.ingredient_name}</p> 
                        <button value={ingredient.id} onClick={sellOutIngredient}>Sell Out</button>
                        <button value={ingredient.id} onClick={promptDelete} onDoubleClick={deleteIngredient}>Delete</button>
                      </li>
                    )
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