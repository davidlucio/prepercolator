import React from "react";

export default function ProfileCupCard({ usersDrinks, currentDrink }) {

    /** CUPDATE (Check if the currentDrink is in the usersDrink table) **/
    const cupdate = (drinkID) => {
        if(drinkID && drinkID > 0){

            const drinkListCopy = [...usersDrinks];
            let holdMyDrink = drinkListCopy.find( item => { 
                return item.id == drinkID; 
            });
            
            // Workaround for cup sizes...
            const possibleSizes = [8,12,16];
            if(holdMyDrink && possibleSizes.includes(holdMyDrink.size) ){
                return(
                    <>
                        <div className={`my-cup cup-${ holdMyDrink.size }oz`}>
                            { fillcup( holdMyDrink.ingredients ) }
                        </div>
                        <h3>{holdMyDrink.drink_name}</h3>
                    </>
                )
            }
            else{
                return(<p className="error">Incompatible Drink</p>);
            }
            
        }
        else{ return(<p>Select a drink to learn more</p>); }
    }

    /** FILL CUP (Checks against ingredients list given by saved drinks) */
    const fillcup = (ingredients) => {
        if( ingredients.length !== 0 ){
            let renderedHTML = [];
            ingredients.map( (ingredient) => {
                for(var i=0; i < ingredient.drinkIngredients.amount; i++){
                    renderedHTML.push( oneAtATime(ingredient.ingredient_name, ingredient.tier, i+1) );
                }
            });
            return(renderedHTML);
        }
        else{
            return(<p className="error">Selected drink has no ingredients listed.</p>);
        }

    }

    /** Render HTML for one ingredient at a time **/
    const oneAtATime = (name, tier, count) => {
        if(name && tier && count){
            return(
                <div key={ `cupcontent-${name}-${count}`} className={`ingredient ${ tier }`}>
                    <span>
                        {name}
                    </span>
                </div>
            )
        }
        else{
            return;
        }
    }

    return (
        <section className="cup-holder">
                { cupdate(currentDrink) }
        </section>
    );

}
