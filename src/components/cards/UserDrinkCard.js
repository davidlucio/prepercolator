import React from 'react';
import Cup from './UserCurrentCup';

export default function UserDrinkCard({ drink, user }){
    return (
        <div className="userDrinkCard">
            <div>
                <h3>{drink.name}</h3>
            </div>
            <Cup />
            <div>
                <button>Last</button>
                { user.order ? <button>Add to your order</button> : null }
                <button>Next</button>
            </div>
        </div>
    )
}