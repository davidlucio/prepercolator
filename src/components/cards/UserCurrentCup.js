import React from "react";
import API from "../utils/API";

export default function UserCurrentCup({ cupSize, setCupSize, drinkIngredients, setDrinkIngredients }) {
    // array of ingredients



    // no drink handler for now

    return (
        <section className="cup-holder">
            <div className={`my-cup cup-${cupSize}oz`}>

                {/**}
                
                <div className="ingredient coffee percent-70">
                    <span>{"Espresso"}</span>
                </div>
                <div className="ingredient syrup percent-10">
                    <span>{"Vanilla"}</span>
                </div>
                <div className="ingredient syrup percent-10">
                    <span>{"Hazelnut"}</span>
                </div>
                
                {/**/}

            </div>
        </section>
    );
}
