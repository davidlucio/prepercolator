import React, {useState, useEffect} from "react";
import API from "../utils/API";

export default function AddIngredientMenu({ drinkIngredients, setDrinkIngredients, drinkIngredientsAmnt, setDrinkIngredientsAmnt }) {

    const [bases, updateBases] = useState([]);
    const [mains, updateMains] = useState([]);
    const [flavors, updateFlavors] = useState([]);
    const [toppings, updateToppings] = useState([]);

    useEffect(() => {

        // GET BASE INGREDIENTS
        API.getIngredientByTier('base')
        .then( (val) =>{
            updateBases(val.data);
        })
        .catch( (err) =>{
            console.log(err)
        });

        // GET MAIN INGREDIENTS
        API.getIngredientByTier('main')
        .then( (val) =>{
            updateMains(val.data);
        })
        .catch( (err) =>{
            console.log(err)
        });

        // GET FLAVORS
        API.getIngredientByTier('flavor')
        .then( (val) =>{
            updateFlavors(val.data);
        })
        .catch( (err) =>{
            console.log(err)
        });

        // GET TOPPINGS
        API.getIngredientByTier('topping')
        .then( (val) =>{
            updateToppings(val.data);
        })
        .catch( (err) =>{
            console.log(err)
        });

    }, []);

    // TODO: Function for adding ingredient...
    const checkIngredientCount = (id) => {
        // Check if there already are ingredients...
        // <span className="amount">1</span>
    }

    const addToCup = (id) =>{
        let ingredientQueue = [...drinkIngredients];
        let ingredientCount = [...drinkIngredientsAmnt];
        if(ingredientQueue.includes(id)){
            var key = ingredientQueue.indexOf(id);
            ingredientCount[key] += 1;
            setDrinkIngredientsAmnt(ingredientCount);
        }
        else{
            ingredientQueue.push(id);
            var key = ingredientQueue.indexOf(id);
            ingredientCount[key] = 1;

            setDrinkIngredientsAmnt(ingredientCount);
            setDrinkIngredients(ingredientQueue);
        }
        return;
    }

    // Compile HTML!
    return (
        <section className="ingredientList">
            <div className="anti-scroll">
                
                <ul className="ingredients-bases">
                    <label>base</label>
                    {
                        bases.map( ingredient => (
                            <li className={ ingredient.icon ? `ingredient-${ingredient.icon}` : "ingredient-liquid-0"}
                                id={ingredient.id}
                                key={`ingredient-${ingredient.id}`}
                                onClick={ (e) => addToCup(e.target.id) }
                            >
                                { ingredient.ingredient_name }
                            </li>
                        ))
                    }
                </ul>
                
                <ul className="ingredients-mains">
                    <label>main</label>
                    {
                        mains.map( ingredient => (
                            <li className={ ingredient.icon ? `ingredient-${ingredient.icon}` : "ingredient-liquid-0"}
                                id={ingredient.id}
                                key={`ingredient-${ingredient.id}`}
                                onClick={ (e) => addToCup(e.target.id) }
                            >
                                { ingredient.ingredient_name }
                            </li>
                        ))
                    }
                </ul>

                <ul className="ingredients-flavors">
                    <label>flavors</label>
                    {
                        flavors.map( ingredient => (
                            <li className={ ingredient.icon ? `ingredient-${ingredient.icon}` : "ingredient-liquid-0"}
                                id={ingredient.id}
                                key={`ingredient-${ingredient.id}`}
                                onClick={ (e) => addToCup(e.target.id) }
                            >
                                { ingredient.ingredient_name }
                            </li>
                        ))
                    }
                </ul>
                <ul className="ingredients-toppings">
                    <label>toppings</label>
                    {
                        toppings.map( ingredient => (
                            <li className={ ingredient.icon ? `ingredient-${ingredient.icon}` : "ingredient-liquid-0"}
                                id={ingredient.id}
                                key={`ingredient-${ingredient.id}`}
                                onClick={ (e) => addToCup(e.target.id) }
                            >
                                { ingredient.ingredient_name }
                            </li>
                        ))
                    }
                </ul>

            </div>
        </section>
    );
}
