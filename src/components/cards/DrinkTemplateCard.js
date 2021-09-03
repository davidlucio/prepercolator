import React from "react";

export default function DrinkTemplateCard({ drink, setCurrentDrink }) {

    const changeDrinkDisplay = (id) => {
        if(id){
            setCurrentDrink(id);
        }
        else{
            console.log(`Error changing drink menu at ${id}.`);
        }
    }

    return (
        <div key={drink.id}
            className="bpDrinkTemplateCard"
            onClick={ (e) => changeDrinkDisplay(drink.id) }
        >
            <h5>
                {drink.drink_name ? drink.drink_name : "Unnamed Drink"}
            </h5>

            <p>
                A {drink.size} ounce {drink.is_steamed ? "Hot " : "Iced "} drink.
            </p>
            <h6>Ingredients:</h6>
            <ul>
                {drink.ingredients ? (
                    drink.ingredients.length > 0 ? (
                        drink.ingredients.map((ingredient) => {
                            return (
                                <li key={ingredient.id}>
                                    <span>{ingredient.ingredient_name}</span>
                                    <span>
                                        {ingredient.drinkIngredients.amount}{" "}
                                        {ingredient.type.type_units}
                                    </span>
                                </li>
                            );
                        })
                    ) : (
                        <li>...</li>
                    )
                ) : null}
            </ul>
        </div>
    );
}
