import React from "react";

import OrderCard from "../cards/OrderCard";

export default function NewOrder({ order }) {
  return (
    <main className="newOrderPage">
      <OrderCard order={order} />
    </main>
  );
}
