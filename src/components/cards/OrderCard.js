import React from "react";
import { Link } from "react-router-dom";
import OrderItem from "../pieces/OrderItem";

export default function OrderCard({ order }) {
  return (
    <div>
      <h2>Your Order:</h2>
      <ul>
        {/* {order.length === 0 ? (
          <li>
            Add a Drink to your order<a>+</a>
            <Link to="/user/drinks">View Saved Drinks</Link>
          </li>
        ) : (
          order.map((item) => {
            return <OrderItem item={item} />;
          })
        )} */}
      </ul>
    </div>
  );
}
