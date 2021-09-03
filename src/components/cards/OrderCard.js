import React, { useState, useEffect } from "react";
import OrderItem from "../pieces/OrderItem";
import API from "../utils/API";

export default function OrderCard({ user, order, setOrder }) {
    const [drinkToAdd, setDrinkToAdd] = useState(1);
    const [runningPrice, setRunningPrice] = useState(0.0);

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
        user.drinks.forEach((element) => {
            if (element.id === drinkToAdd) {
                updatedOrder.push(element);
            }
        });
        console.log("NEW DRINK ADDED FROM USER.DRINKS");
        setOrder(updatedOrder);
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
            API.addOrder(orderToAdd).then((res) => {
                if (res.status !== 200) {
                    return <>ERROR SENDING NEW ORDER</>;
                } else {
                    return <>ORDER ADDED TO ORDERHISTORY</>;
                }
            });
        }
    };

    useEffect(async () => {
        let sum = 0;
        order.forEach((item) => {
            sum += item.price;
        });
        setRunningPrice(sum);
    }, []);

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
                    <button name="sendOrder" type="submit" onClick={sendOrder}>
                        Complete Order
                    </button>
                </form>
            </div>
        </div>
    );
}
