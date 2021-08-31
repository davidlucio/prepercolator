import React from "react";

export default function OrderHistory({ user }) {
  return (
    <main className="userOrderHistory">
      <h2>Your Previous Orders:</h2>
      {user.orderHistory.map((order) => {
        <Order order={order} />;
      })}
    </main>
  );
}
