import React, { useState, useEffect } from "react";
import API from "../utils/API";

export default function NewIngredientForm() {
  const [newExistingType, setNewExistingType] = useState(false);
  const [types, setTypes] = useState([]);
  const [newIngredient, setNewIngredient] = useState({
    ingredient_name: "",
    type_id: null,
    is_vegan: false,
  });

  useEffect(() => {
    API.getTypes().then((res) => {
      console.log(res.data);
      setTypes(res.data);
    });
  }, []);

  const handleInputChange = (event) => {
    switch (event.target.type) {
      case "checkbox":
        setNewExistingType(!newExistingType);
        break;
      case "text":
        if (event.target.name === "ingredientName") {
          const value = {
            ...newIngredient,
            ingredient_name: event.target.value,
          };
          setNewIngredient(value);
        }
        break;
      case "select":
        if (event.target.name === "ingredientType") {
          console.log(event.target.value);
          const value = {
            ...newIngredient,
            type_id: event.target.value,
          };
          setNewIngredient(value);
          break;
        }
    }
  };

  const addNewIngredient = (event) => {
    event.preventDefault();
    console.log(newIngredient);
    if (newIngredient.ingredient_name.length > 0) {
      console.log(`New Ingredient to add: ${newIngredient}`);
      API.addNewIngredient(newIngredient).then((res) => {
        console.log(`New Ingredient added: ${res}`);
      });
    }
  };

  return (
    <div className="bpActions">
      <h3>Add a New Ingredient</h3>
      <div>
        <form>
          <label>
            <label>
              New Type?
              <input
                name="newExisting"
                type="checkbox"
                checked={newExistingType}
                onChange={handleInputChange}
                value={newExistingType}
              />
            </label>
          </label>
          {newExistingType === false ? (
            // User hasn't checked the new type checkbox, so display the select element with our existing types, the values of each being their id,
            <select
              name="ingredientType"
              value={newIngredient.type_id}
              onChange={handleInputChange}
            >
              {types.map((type) => {
                return (
                  <option key={type.id} value={type.id}>
                    {type.type_name}
                  </option>
                );
              })}
            </select>
          ) : (
            <>
              <input
                name="newTypeName"
                type="text"
                placeholder="New Type Name"
                onChange={handleInputChange}
              />
              <input
                name="newTypeUnit"
                type="text"
                placeholder="New Type Measurement Unit"
                onChange={handleInputChange}
              ></input>
            </>
          )}
          <input
            name="ingredientName"
            type="text"
            placeholder="Name of Ingredient?"
            onChange={handleInputChange}
            value={newIngredient.ingredient_name}
          />
          <label className="bpActionsCbLabel">
            Vegan:
            <input
              className="bpActionsCb"
              name="isVegan"
              type="checkbox"
              checked={newIngredient.is_vegan}
              onChange={handleInputChange}
            />
          </label>
          <button
            name="submitNewIngredient"
            type="submit"
            onClick={addNewIngredient}
          >
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
}
