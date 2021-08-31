import React from "react";
import OrderItem from "../pieces/OrderItem";

export default function OrderCard({ order }) {
  return (
    <div>
      <h2>Your Order:</h2>
      <ul>
        {order.map((item) => {
          return <OrderItem item={item} />;
        })}
      </ul>
    </div>
  );
}
