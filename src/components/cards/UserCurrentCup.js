import React, {useState, useEffect} from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import API from "../utils/API";

export default function UserCurrentCup({ cupSize, setCupSize, drinkIngredients, setDrinkIngredients, drinkIngredientsAmnt, setDrinkIngredientsAmnt}) {
    // Array of ingredients
    const [ingredientTable, setIngredientTable] = useState([]);

    useEffect(() => {
        // GET ALL INGREDIENTS FOR ID COMPARE
        API.getIngredients()
        .then( (val) =>{
            setIngredientTable(val.data);
        })
        .catch( (err) =>{
            console.log(err)
        });
    }, []);

    const cupdate = () =>{
        var renderedObj = [];
        for( const [key, id] of Object.entries(drinkIngredients) ){
            for(var i = drinkIngredientsAmnt[key] ; i>0 ; i-- ){
                renderedObj.push( pourIngredient(id,i) );
            }
        }
        return renderedObj;
    }

    const pourIngredient = (ingredient_id, number) => {
        const tableCopy = [...ingredientTable];
        var ingredient = tableCopy.find( item => { return item.id == ingredient_id; });
        return(
            <CSSTransition
                classNames="pour-in"
                key={ `cupcontent-${ingredient_id}-${number}`}
                timeout={1000}
            >
                <div className={`ingredient ${ ingredient.tier }`}>
                    <span onClick={ (e) => removeFromCup(ingredient_id) }>
                        {ingredient.ingredient_name}
                    </span>
                </div>
            </CSSTransition>
        )
    }

    const removeFromCup = (ingredient_id) =>{
        let ingredientQueue = [...drinkIngredients];
        let ingredientCount = [...drinkIngredientsAmnt];

        var ingredientIndex = ingredientQueue.indexOf(ingredient_id);
        var amountOfIngredient = ingredientCount[ ingredientIndex ];

        var count = parseInt(amountOfIngredient)
        if(count > 1){
            ingredientCount[ ingredientIndex ] = count - 1;
            setDrinkIngredientsAmnt(ingredientCount);
        }
        if(count == 1){
            // If they are all gone, then remove it from the object...
            ingredientQueue.splice(ingredientIndex, 1 );
            ingredientCount.splice(ingredientIndex,1 );

            setDrinkIngredients(ingredientQueue);
            setDrinkIngredientsAmnt(ingredientCount);
        }
    }

    // TODO: Change Cup Size


    return (
        <section className="cup-holder">
            <TransitionGroup className={`my-cup cup-${cupSize}oz`}>
                { cupdate() }
            </TransitionGroup >
                
            {/** CHANGE CUP SIZE **/}
        </section>
    );
}
