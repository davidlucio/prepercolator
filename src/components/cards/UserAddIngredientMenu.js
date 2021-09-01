import React, {useState, useEffect} from "react";
import API from "../utils/API";

// function organizeMenu(unsortedMenu){
//     let sortedMenu = [];
//     unsortedMenu.map( (oneIngredient) => {
//         var tierName = oneIngredient.tier;
//         if( !sortedMenu[tierName] ){
//             sortedMenu[tierName] = [];
//         }
//         var tempObj = {
//             "id" : oneIngredient.id,
//             "name" : oneIngredient.ingredient_name
//         };
//         sortedMenu[oneIngredient.tier].push(tempObj);
//     });
//     return sortedMenu;
// }

export default function AddIngredientMenu({ drinkIngredients, handleDrink }) {

    // Get Ingredient List!
    const [ingredientMenu, setIngredientMenu] = useState([]);
    // let sortedArray = [];
    useEffect(() => {
        API.getIngredients()
        .then( (val) =>{
            // Here are your ingredients...
            setIngredientMenu(val.data);
        })
        .catch( (err) =>{
            // Something's broken, idiot...
            console.log(err)
        });
    }, []);

    // // Sort Ingredient List!
    // if(ingredientMenu !== [] && ingredientMenu !== null){
    //     sortedArray = organizeMenu(ingredientMenu);
    // }

    // console.log( sortedArray.length );
    // console.log( sortedArray );

    // if( sortedArray !== null && sortedArray !== [] ){
        
    //     sortedArray.map( (tier) => {
    //         console.log(tier);
    //     });

    //     // sortedArray.forEach(element => {
    //     //     console.log(element);
    //     // });
    // }

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
