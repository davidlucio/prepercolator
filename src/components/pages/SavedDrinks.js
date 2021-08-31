import React from 'react';

export default function SavedDrinks({ user }){

    return (
        <div>
            <h2>{user.username}'s Saved Drinks</h2>
            <div className="drinkSlideshow">
                { user.SavedDrinks.map(drink=>{
                    return ( <UserDrinkCard drink={drink} user={user}/> )
                })}
            </div>
            <button>Create a new drink</button>
        </div>
    )
}