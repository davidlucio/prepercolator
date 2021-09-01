import React from "react";

import OrderCard from "../cards/OrderCard";
import Header from "../Header";

export default function NewOrder({ order, user }) {
  return (
    <main className="newOrderPage">
      <Header user={user} />
      <OrderCard order={order} />
    </main>
  );
}
