import React from "react";

export default function OrderItem({ item, order, setOrder, index }) {
  const removeDrink = (e) => {
    let index = e.target.value;
    let prev = [...order];
    prev.splice(index, 1);
    setOrder(prev);
  };

  return (
    <li style={{ display: "flex", justifyContent: "space-evenly" }}>
      <span>{item?.drink_name}</span>
      <span>${item?.price.toFixed(2)}</span>
      <button value={index} onClick={removeDrink}>
        x
      </button>
    </li>
  );
}
