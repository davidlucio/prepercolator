import React from "react";

import OrderCard from "../cards/OrderCard";
import Header from "../Header";

export default function OrderHistory({ user }) {
  return (
    <main className="userOrderHistory">
      <Header user={user} />
      <h2>Your Previous Orders:</h2>
      {user.orderHistory.map((order) => {
        return <OrderCard order={order} />;
      })}
    </main>
  );
}
