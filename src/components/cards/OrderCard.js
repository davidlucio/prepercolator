import React, { useState, useEffect } from "react";
import OrderItem from "../pieces/OrderItem";
import API from "../utils/API";

export default function OrderCard({ user, order, setOrder }) {
  const [drinkToAdd, setDrinkToAdd] = useState(1);
  const [runningPrice, setRunningPrice] = useState(0.0);
  const [drinks, setDrinks] = useState([
    {
      id: 0,
      drink_name: "loading...",
    },
  ]);

  const handleSelect = (e) => {
    e.preventDefault();
    setDrinkToAdd(e.target.value);
  };

  const addDrink = async (e) => {
    e.preventDefault();
    console.log(`ID OF ITEM TO ADD: ${drinkToAdd}`);
    let updatedOrder = [...order];
    console.log("OLD ORDER:");
    console.log(updatedOrder);
    drinks.forEach((element) => {
      if (element.id == drinkToAdd) {
        updatedOrder.push(element);
      }
    });
    console.log("NEW DRINK ADDED FROM DRINKS");
    setOrder(updatedOrder);
    window.alert("Drink Added!");
    localStorage.setItem("currentOrder", order);
  };

  const sendOrder = (e) => {
    e.preventDefault();
    if (e.target.name === "sendOrder") {
      let orderToAdd = {
        userId: user.id,
        total_price: runningPrice,
        drinks: order,
      };
      console.log(orderToAdd);
      if (orderToAdd.drinks.length === 0) {
        window.alert("Looks like your order is empty..");
        return;
      }
      API.addOrder(orderToAdd).then((res) => {
        if (res.status !== 200) {
          return <>ERROR SENDING NEW ORDER</>;
        } else {
          window.alert("Your order has been submitted!");
          setOrder([]);
          return;
        }
      });
    }
  };

  useEffect(() => {
    let sum = 0;
    order.forEach((item) => {
      sum += item.price;
    });
    sum = sum.toFixed(2);
    setRunningPrice(sum);
    async function getDrinks() {
      let token = localStorage.getItem("token");
      let res = await API.getUserDrinks(token);
      setDrinks(res.data);
    }
    getDrinks();
  }, [order]);

  return (
    <div className="orderCard">
      <h2>Your Order:</h2>
      <ul>
        {order ? (
          order.map(function (currentelement, index, arrayobj) {
            return (
              <OrderItem
                key={index}
                index={index}
                item={currentelement}
                order={order}
                setOrder={setOrder}
              />
            );
          })
        ) : (
          <>Loading...</>
        )}
        <hr />
        <p>Total: ${runningPrice}</p>
      </ul>
      <div>
        <p>Add a Drink to your order</p>
        <form name="orderform">
          <select
            name="savedDrinkSelect"
            value={drinkToAdd}
            onChange={handleSelect}
            onSubmit={handleSelect}
          >
            {drinks ? (
              drinks.map((drink) => {
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
          <button name="sendOrder" type="submit" onClick={sendOrder}>
            Complete Order
          </button>
        </form>
      </div>
    </div>
  );
}
