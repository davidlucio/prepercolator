import React, { useContext } from 'react';

// REQUIRED ON ALL COMPONENTS THAT NEED USER OBJ
import UserContext from './context/UserContext';

const MyComponent =() => {
    
    const user = useContext(UserContext)

    return (
        <div>
            {/* Component goes here! Can refer to user.settings, user.username, etc.*/}
            <div>
      <h1>TEST RENDER OF USER DATA FROM GLOBAL VARS</h1>
      <ul>
        <li>Username: {user.username}</li>
        <li>Email: {user.email}</li>
        <li>Theme: {user.settings.theme}</li>
      </ul>
      { user.savedDrinks.map((drink) => {
        return (
          
          <div>
            <p>{drink.userDrinkName}</p>
            <div>
            { drink.ingredients.map((ingredient) => {
              return (
                <ul>
                  <li>Ingredient: {ingredient.ingredient}</li>
                  <li>Amount: {ingredient.amount} {ingredient.units}</li>
                </ul>
              )
            })}
            </div>
          </div>
        )
      })}
      </div>
        </div>
    )
};

export default MyComponent;