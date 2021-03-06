import React, { useState, useEffect } from "react";
import API from "../utils/API";

export default function NewIngredientForm({ updateTable }) {
  const [newExistingType, setNewExistingType] = useState(false);
  const [types, setTypes] = useState([]);
  const [newIngredient, setNewIngredient] = useState({
    ingredient_name: "",
    typeId: 0,
    is_vegan: false,
    price_per_unit: 1.0,
    tier: "Base",
  });

  useEffect(() => {
    API.getTypes().then((res) => {
      console.log(res.data);
      setTypes(res.data);
    });
  }, []);

  const handleInputChange = (event) => {
    switch (event.target.name) {
      case "newExisting":
        setNewExistingType(!newExistingType);
        break;
      case "ingredientName":
        if (event.target.name === "ingredientName") {
          const value = {
            ...newIngredient,
            ingredient_name: event.target.value,
          };
          setNewIngredient(value);
        }
        break;
      case "ingredientType":
        if (event.target.name === "ingredientType") {
          const value = {
            ...newIngredient,
            typeId: event.target.value,
          };
          setNewIngredient(value);
          break;
        }
        break;
      case "pricePerUnit":
        let past = {
          ...newIngredient,
          price_per_unit: event.target.value,
        };
        setNewIngredient(past);
        break;
      case "tier":
        let paast = {
          ...newIngredient,
          tier: event.target.value,
        };
        setNewIngredient(paast);
        break;
      default:
        break;
    }
  };

  const addNewIngredient = (event) => {
    let token = localStorage.getItem("token");
    event.preventDefault();
    console.log(newIngredient);
    if (newIngredient.ingredient_name.length > 0) {
      console.log(`New Ingredient to add: ${newIngredient}`);
      API.addNewIngredient(newIngredient, token).then((res) => {
        console.log(`New Ingredient added: ${res}`);
      });
    }
    setNewIngredient({
      ingredient_name: "",
      typeId: 0,
      is_vegan: false,
      price_per_unit: 1.0,
      tier: "Base",
    });
  };
  return (
    <div className="bpActions">
      <h3>Add a New Ingredient</h3>
      <div>
        <form className="bpForm">
          <label className="newTypeLabel">
            <p>
              New Type?
              <input
                name="newExisting"
                type="checkbox"
                checked={newExistingType}
                onChange={handleInputChange}
                value={newExistingType}
              />
            </p>
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
          <label className="newNameLabel">
            <p>
              Tier:
              <select
                name="tier"
                value={newIngredient.tier}
                onChange={handleInputChange}
              >
                <option value={"Base"}>Base</option>
                <option value={"Main"}>Main</option>
                <option value={"Flavor"}>Flavor</option>
                <option value={"Topping"}>Topping</option>
              </select>
            </p>
          </label>
          <label className="newVeganLabel">
            <p>
              Vegan:
              <input
                className="bpActionsCb"
                name="isVegan"
                type="checkbox"
                checked={newIngredient.is_vegan}
                onChange={handleInputChange}
              />
            </p>
          </label>
          <label className="newPriceLabel">
            <p>Price per Unit:</p>
            <input
              className="bpActionsCb"
              name="pricePerUnit"
              type="number"
              value={newIngredient.price_per_unit}
              onChange={handleInputChange}
              placeholder={0.0}
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
