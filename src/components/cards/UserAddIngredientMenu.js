import React, {useState, useEffect} from "react";
import API from "../utils/API";

export default function AddIngredientMenu({ drinkIngredients, setDrinkIngredients, drinkIngredientsAmnt, setDrinkIngredientsAmnt }) {

    const [ingredientMenu, setIngredientMenu] = useState([]);
    useEffect(() => {
        API.getIngredientByTier()
        .then( (val) =>{
            setIngredientMenu(val.data);
        })
        .catch( (err) =>{
            console.log(err)
        });
    }, []);


    // Compile HTML!
    return (
        <section className="ingredientList">
            <div className="anti-scroll">
                
                {/**}

                <ul className="ingredients-bases">
                    <label>Base</label>
                    <li id="" className="ingredient-bean-1">
                        Espresso<span className="amount">1</span>
                    </li>
                    <li id="" className="ingredient-bean-2">
                        Medium Roast
                    </li>
                    <li id="" className="ingredient-bean-3">
                        Blonde Roast
                    </li>
                    <li id="" className="ingredient-leaf-2">
                        Green Tea
                    </li>
                    <li id="" className="ingredient-leaf-1">
                        Earl Grey - Hot
                    </li>
                </ul>

                <ul className="ingredients-main">
                    <label>Main</label>
                    <li id="" className="ingredient-liquid-1">
                        Whole Milk
                    </li>
                    <li id="" className="ingredient-liquid-1">
                        Skim Milk
                    </li>
                    <li id="" className="ingredient-liquid-1">
                        2% Milk
                    </li>
                    <li id="" className="ingredient-liquid-4">
                        Almond Milk
                    </li>
                    <li id="" className="ingredient-liquid-3">
                        Oat Milk
                    </li>
                    <li id="" className="ingredient-liquid-2">
                        Soy Milk
                    </li>
                </ul>

                <ul className="ingredients-flavors">
                    <label>Flavors</label>
                    <li id="" className="ingredient-syrup-1">
                        Chocolate Syrup
                    </li>
                    <li id="" className="ingredient-syrup-2">
                        Vanilla Syrup<span className="amount">1</span>
                    </li>
                    <li id="" className="ingredient-syrup-0">
                        Hazelnut Syrup<span className="amount">1</span>
                    </li>
                    <li id="" className="ingredient-powder-1">
                        Chocolate Powder
                    </li>
                    <li id="" className="ingredient-powder-2">
                        Vanilla Powder
                    </li>
                </ul>

                <ul className="ingredients-toppings">
                    <label>Toppings</label>
                    <li id="" className="ingredient-liquid-0">
                        Milk Foam
                    </li>
                    <li id="" className="ingredient-powder-3">
                        Cinnamon
                    </li>
                </ul>
                {/**/}

            </div>
        </section>
    );
}
