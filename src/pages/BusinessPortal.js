import React, { useState, setState } from 'react';

import IngredientsTable from './bpComponents/IngredientsTable';
import DrinksTable from './bpComponents/DrinksTable';

export default function BusinessPortal({ user }) {
    // Basic state...
    const [view, setView] = useState('ingredients');
    const [newIngredient, setNewIngredient] = useState({
        ingredientName: '',
        ingredientType: null,
        isVegan: false,
    })
    const handleInputChange = (event) => {
        switch (event.target.type) {
            case 'checkbox': 
                const value = !this.state.newIngredient.isVegan;
                this.setState({newIngredient: { isVegan: value }})
                break;
            case 'text': 
                this.setState({ingredientName:event.target.value})
                break;
            case 'select':
                this.setState({ingredientType: event.target.key})
                break;
            default:
                break;
        }
    }
    const sellOutIngredient = (event) => {
        // const ingredientId = event.target.key;
        return event.target.key;
    }

    return (
        <div className="businessPortal">
         <div className="bpViewSelect">
          <h1 className="bpWelcome">Welcome, {user.username}</h1>
          <button onClick={()=>setView('ingredients')}>See Existing Ingredients</button>
          <button onClick={()=>setView('drinks')}>See Existing Drinks</button>
         </div>
          { 
            view === 'ingredients' 
            ? <IngredientsTable />
            : <DrinksTable />
          }
        </div>
    )
};
