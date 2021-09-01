import React, { useState } from "react";

import OrderCard from "../cards/OrderCard";
import Header from "../Header";

export default function Order({ user }) {
  const [order, setOrder] = useState([]);

  return (
    <main className="newOrderPage">
      <Header user={user} />
      <OrderCard user={user} order={order} setOrder={setOrder} />
    </main>
  );
}
