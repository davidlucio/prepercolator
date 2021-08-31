import React from 'react';

export default function Cup({ cupSize, drinkIngredients, handleDrink }) {
    
    // array of ingredients

    // no drink handler for now

    return (
        <section className="cup-holder">
            <div className={`my-cup cup-${cupSize}`}>
                <div className="ingredient coffee percent-70">{ "Dark Roast" }</div>
                <div className="ingredient syrup percent-10">{ "Vanilla" }</div>
                <div className="ingredient syrup percent-10">{ "Hazelnut" }</div>
            </div>
        </section>
        
    );
}
