import React, { useState, useEffect } from "react";
import API from "../utils/API";

/** PAGE CONTENTS */
import Header from "../Header";
import UserAddIngredientMenu from "../cards/UserAddIngredientMenu";
import UserCurrentCup from "../cards/UserCurrentCup";
import DrinksTable from "../pieces/DrinksTable"; //TODO
import Footer from "../Footer";


export default function Drink({ user }) {
    const [size, setSize] = useState(12);
    const [drinkIngredients, setDrinkIngredients] = useState([]);
    const [drinkIngredientsAmnt, setDrinkIngredientsAmnt] = useState([]);
    const [drinkName, setDrinkName] = useState("");

    useEffect(() => {
        // Check drink size against sum of drinkIngredients to see if drink has room for more ingredients
        const sumIngr = 0;
        drinkIngredients.forEach((drink) => {
            sumIngr = sumIngr + drink.unitAmount;
        });
        if (sumIngr > size) {
            return <div>You've added more than fits in your cup!!</div>;
        }
    }, []);

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

    const saveDrink = (drink) => {
        let drinkToSave = {
            drink_name: drinkName,
            ingredients: [...drinkIngredients],
            ingredient_amounts: [...drinkIngredientsAmnt],
        };
        drinkToSave.ingredients.forEach((ingredient) => {
            if (ingredient.is_vegan === false) {
                drinkToSave.is_vegan = false;
            } else {
                drinkToSave.is_vegan = true;
            }
        });
    };

    return (
        <>
            <Header user={user} />
            <main>

                <UserAddIngredientMenu
                    drinkIngredients={drinkIngredients}
                    setDrinkIngredients={setDrinkIngredients}
                />

                <UserCurrentCup 
                    cupSize={size}
                    changeCupSize={setSize}
                    drinkIngredients={drinkIngredients}
                    setDrinkIngredients={setDrinkIngredients}
                />

                {/** <UserCart /> **/}

                {/** <UserSavedDrinks /> */}
                
            </main>
            <Footer/>
        </>
    );
}
