import React, { useState } from "react";
import { Link } from "react-router-dom";
import OrderItem from "../pieces/OrderItem";

export default function OrderCard({ user, order, setOrder }) {
  const [drinkToAdd, setDrinkToAdd] = useState({});

  const handleSelect = (e) => {
    e.preventDefault();
    setDrinkToAdd(e.target.value);
  };
  const addDrink = (e) => {
    e.preventDefault();
    let updatedOrder = [...order];
    updatedOrder.push(e.target.value);
    setOrder(updatedOrder);
  };

  return (
    <div>
      <h2>Your Order:</h2>
      <ul>
        {order.length === 0 ? (
          <>
            <li>Add a Drink to your order</li>
            <li>
              <form name="orderform">
                <select
                  name="savedDrinkSelect"
                  value={drinkToAdd}
                  onChange={handleSelect}
                >
                  {user.drinks ? (
                    user.drinks.map((drink) => {
                      return (
                        <option key={drink.id} value={drink.id}>
                          {drink.drink_name}
                        </option>
                      );
                    })
                  ) : (
                    <>Loading...</>
                  )}
                </select>
                <button name="addDrink" type="submit" onClick={addDrink}>
                  Add
                </button>
              </form>
            </li>

            <li>
              <Link to="/user/drinks">View Saved Drinks</Link>
            </li>
          </>
        ) : (
          <>
            {order.map((item) => {
              return <OrderItem item={item} />;
            })}
          </>
        )}
      </ul>
    </div>
  );
}
