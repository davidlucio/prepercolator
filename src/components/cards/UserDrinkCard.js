<<<<<<< HEAD
import React from 'react';
import Cup from './UserCurrentCup';
=======
import React from "react";
import Cup from "./Cup";
>>>>>>> b2a0430cb83c6b415e10e285f7476b67afdb3c1d

export default function UserDrinkCard({ drink, user }) {
  return (
    <div className="userDrinkCard">
      <div>
        <h3>{drink.name}</h3>
      </div>
      <Cup drink={drink} />
      <div>
        <button>Last</button>
        {user.order ? <button>Add to your order</button> : null}
        <button>Next</button>
      </div>
    </div>
  );
}
