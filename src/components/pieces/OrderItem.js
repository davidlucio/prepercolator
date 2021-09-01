import React from "react";

export default function OrderItem({ item }) {
  return (
    <li key={item?.id}>
      {item?.drink_name}
      <span>{item?.price}</span>
    </li>
  );
}
