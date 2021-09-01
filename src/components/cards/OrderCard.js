import React from "react";
import { Link } from "react-router-dom";
import OrderItem from "../pieces/OrderItem";

export default function OrderCard({ user, order, setOrder }) {
  let arr = [];

  const addDrink = (e) => {
    e.preventDefault();
    let drinkToAdd;
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
                <select>
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
                <button type="submit" onClick={addDrink}>
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
