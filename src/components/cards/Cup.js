import React from 'react';

export default function Cup({ cupSize, drinkIngredients, handleDrink }) {
    
    // array of ingredients

    // no drink handler for now

    return (
        <div className={`my-cup cup-${cupSize}`}>

            <div className="ingredient coffee">{ "Dark Roast" }</div>
            <div className="ingredient syrup">{ "Vanilla" }</div>
            <div className="ingredient syrup">{ "Hazelnut" }</div>

        </div>
    );
}
