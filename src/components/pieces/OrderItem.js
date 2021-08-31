import React from "react";

export default function OrderItem({ item }) {
  return (
    <li key={item.id}>
      <span></span>
      {item.name}
      <span>{item.price}</span>
    </li>
  );
}
