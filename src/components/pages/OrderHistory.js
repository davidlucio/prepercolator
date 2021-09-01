import React from "react";

import OrderCard from "../cards/OrderCard";

export default function OrderHistory({ user }) {
  return (
    <main className="userOrderHistory">
      <h2>Your Previous Orders:</h2>
      {user.orderHistory.map((order) => {
        <OrderCard order={order} />;
      })}
    </main>
  );
}
