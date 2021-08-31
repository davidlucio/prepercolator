import React, { useState, useEffect } from 'react';
import API from './bpUtils/API';

export default function IngredientsTable() {

  const [newExistingType, setNewExistingType] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const [drinkTemplates, setDrinkTemplates] = useState([]);
  const [types, setTypes] = useState([]);
  const [newIngredient, setNewIngredient] = useState({
    ingredientName: '',
    ingredientType: 0,
    isVegan: false,
  });

  useEffect(()=>{
    API.getIngredients().then((res)=>{
      console.log(res.data)
      setIngredients(res.data)
    });
    API.getDrinkTemplates().then((res)=>{
      console.log(res.data);
      setDrinkTemplates(res.data);
    });
    API.getTypes().then((res)=>{
      console.log(res.data);
      setTypes(res.data);
    });
  },[]);

  const handleInputChange = (event) => {
    switch (event.target.type) {
      case 'checkbox':
        setNewExistingType(!newExistingType);
        break;
      case 'text':
        if(event.target.name === 'ingredientName'){
          setNewIngredient({
            ingredientName: event.target.value,
            ingredientType: newIngredient.ingredientType,
            isVegan: newIngredient.isVegan,
          });
        }
        break;
      case 'select':
        if (event.target.name === 'ingredientType') {
          setNewIngredient({ ingredientType: event.taget.value })
        }
    }
  };

  const sellOutIngredient = (event) => {
    let id = event.target.value;
    console.log(`Setting IngredientID:${id} to sold out`);
    API.sellOutIngredientById(id).then((res)=>{
      console.log(`Successfully set IngredientID:${id} to sold out. ${res}`);
    })
    setIngredients();
  };

  const deleteIngredient = (event) => {
    let id = event.target.value;
    console.log('User double-clicked delete, move to delete item');
    API.deleteIngredientById(id).then((res)=>{
      console.log(`Successfully deleted Ingredient. ${res}`);
    });
    setIngredients();
  };

  const addNewIngredient = (event) => {
    event.preventDefault();
    console.log(newIngredient)
    // if(newIngredient.ingredientName.length > 0){
    //   console.log(`New Ingredient to add: ${newIngredient}`);
    //   API.addNewIngredient(newIngredient).then((res)=>{
    //     console.log(`New Ingredient added: ${res}`);
    //   })
    // }
  }

  return (
    <div className="bpViewIngredients">
      <div className="bpAvailable">
        <h3>Available Ingredients:</h3>
          <ul>
            { 
              ingredients.map((ingredient)=>{
                return (
                  <li key={ingredient.id}>
                    {ingredient.ingredient_name}
                    <button value={ingredient.id} onClick={sellOutIngredient}>Sell Out</button>
                    <button value={ingredient.id} onDoubleClick={deleteIngredient}>Delete</button>
                    { ingredient.isSoldOut ? <p>Sold Out</p> : null }
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
              <label>
                <label>New Type?
                  <input name="newExisting" type="checkbox" checked={newExistingType} onChange={handleInputChange} value={newExistingType}/>
                </label>
              </label>
              { 
               newExistingType === false 
               ? <><select name="ingredientType" value={newIngredient.ingredientType} onChange={handleInputChange}>
                  { types.map(type=>{ return ( <option key={type.id} value={type.id}>{type.type_name}</option> ) }) }
                 </select></>
               : <><input name="newTypeName" type="text" placeholder="New Type Name" onChange={handleInputChange}/><input name="newTypeUnit" type="text" placeholder="New Type Measurement Unit" onChange={handleInputChange}></input></>
              }
              <input name="ingredientName" type="text" placeholder="Name of Ingredient?" onChange={handleInputChange}/>
              <label className="bpActionsCbLabel">
                Vegan:
                <input 
                  className="bpActionsCb"
                  name="isVegan" 
                  type="checkbox"
                  checked={newIngredient.isVegan}
                  onChange={handleInputChange}
                />
              </label>
              <button name="submitNewIngredient" type="submit" onClick={addNewIngredient}>Add Item</button>
            </form>
          </div>
      </div>
    </div>
  )
}