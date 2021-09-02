import React, { useState, useEffect } from "react";
import API from "../utils/API";

import { useHistory } from "react-router-dom";

import Header from "../Header";
import UserAddIngredientMenu from "../cards/UserAddIngredientMenu";
import UserCurrentCup from "../cards/UserCurrentCup";
// import DrinksTable from "../pieces/DrinksTable"; //TODO
import Footer from "../Footer";
import { forEachLimit } from "async";

export default function Drink({ user }) {
  const [cupSize, setCupSize] = useState(12);
  const [drinkName, setDrinkName] = useState("");
  const [drinkIngredients, setDrinkIngredients] = useState([]);
  const [drinkIngredientsINT, setDrinkIngredientsINT] = useState([]);
  const [drinkIngredientsAmnt, setDrinkIngredientsAmnt] = useState([]);
  const [drinkPrice, setDrinkPrice] = useState(0);
  const [sum, setSum] = useState(0);
  const [priceArr, setPriceArr] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  let history = useHistory();

  useEffect(() => {
    API.getIngredients().then((res) => {
      setIngredients(res.data);
    });
    let temp = [];
    drinkIngredients.forEach((item) => {
      temp.push(parseInt(item));
    });
    setDrinkIngredientsINT(temp);
  }, []);
  // SAVE, SAVE + ADD TO ORDER BUTTONS =? on save, add to saved drinks and go home? on saveand order, pull order from ls, add, send to order page
  const addIngredient = (id) => {
    API.getIngredients().then((res) => {
      res.data.forEach((element) => {
        if (element.id === id) {
          drinkIngredients.push(element);
        }
      });
    });
  };

  const removeIngredient = (id) => {
    let index = drinkIngredients.findIndex(function (o) {
      return o.id === id;
    });
    if (index !== -1) drinkIngredients.splice(index, 1);
  };

  const handleName = (e) => {
    setDrinkName(e.target.value);
  };

  const saveDrink = () => {
    let drinkToSave = {
      size: cupSize,
      drink_name: drinkName,
      ingredients: [...drinkIngredients],
      ingredient_amount: [...drinkIngredientsAmnt],
      price: drinkPrice,
      is_steamed: false,
      userId: user.id,
    };
    drinkToSave.ingredients.forEach((ingredient) => {
      if (ingredient.is_vegan === false) {
        drinkToSave.is_vegan = false;
      } else {
        drinkToSave.is_vegan = true;
      }
    });

    // FROM USE EFFECT
    let prices = [];
    let sum = 0;
    ingredients.forEach((ingredient) => {
      for (let i = 0; i < drinkIngredientsINT.length; i++) {
        const drinkId = drinkIngredientsINT[i];
        if (ingredient.id === drinkId) {
          prices.push(ingredient.price_per_unit);
        }
      }
    });

    console.log(prices);
    prices.forEach((price) => {
      drinkIngredientsAmnt.forEach((units) => {
        let val = price * units;
        sum += val;
      });
    });

    console.log(sum);
    setDrinkPrice(sum);
    drinkToSave.price = sum;

    // END

    console.log(drinkToSave);
    API.addNewDrinkTemplate(drinkToSave).then((res) => {
      if (res.status === 200) {
        console.log("Drink added!");
      } else console.log("something went wrong...");
    });
    //  DRINK IS SAVED
    // history.push("/profile");
  };

  const saveAndAddDrink = () => {
    let drinkToSave = {
      drink_name: drinkName,
      ingredients: [...drinkIngredients],
      ingredient_amounts: [...drinkIngredientsAmnt],
      is_steamed: false,
      userId: user.id,
    };
    drinkToSave.ingredients.forEach((ingredient) => {
      if (ingredient.is_vegan === false) {
        drinkToSave.is_vegan = false;
      } else {
        drinkToSave.is_vegan = true;
      }
    });

    // FROM USE EFFECT
    let temp = [];
    drinkIngredients.forEach((ingredient) => {
      let price = ingredient.price;
      temp.push(price);
    });
    setPriceArr(temp);
    for (let i = 0; i < priceArr.length; i++) {
      let price = priceArr[i];
      let amnt = drinkIngredientsAmnt[i];
      setSum((sum = price * amnt));
    }
    setDrinkPrice(sum);
    // END

    API.addNewDrinkTemplate(drinkToSave).then((res) => {
      if (res.status === 200) {
        console.log("Drink added!");
      } else console.log("something went wrong...");
    });

    // DRINK IS SAVED
    let token = localStorage.getItem("token");
    API.getUserByToken(token).then((res) => {
      let drinks = res.data.drinks;
      drinks.forEach((drink) => {
        if (drink.drink_name === drinkToSave.drink_name) {
          user.drinkWhoseIdINeed = drink.id;
        }
      });
    });
  };
  return (
    <>
      <Header user={user} />

      <input
        name="drinkName"
        type="text"
        value={drinkName}
        onChange={handleName}
      />

      <main>
        <UserCurrentCup
          cupSize={cupSize}
          setCupSize={setCupSize}
          drinkIngredients={drinkIngredients}
          setDrinkIngredients={setDrinkIngredients}
        />

        <UserAddIngredientMenu
          cupSize={cupSize}
          setCupSize={setCupSize}
          drinkName={drinkName}
          setDrinkName={setDrinkName}
          drinkIngredients={drinkIngredients}
          setDrinkIngredients={setDrinkIngredients}
          addIngredient={addIngredient}
          removeIngredient={removeIngredient}
          saveDrink={saveDrink}
          drinkIngredientsAmnt={drinkIngredientsAmnt}
          setDrinkIngredientsAmnt={setDrinkIngredientsAmnt}
        />
        <div>
          <button onClick={saveDrink}>Save</button>
          <button onClick={saveAndAddDrink}>Save and Add to Order</button>
        </div>
      </main>

      <Footer />
    </>
  );
}
