import React, { useState, useEffect } from "react";

import Header from "../Header";
import OrderCard from "../cards/OrderCard";
import Footer from "../Footer";

export default function Order({ user }) {
  const [order, setOrder] = useState([]);

  useEffect(() => {});

  return (
    <>
      <Header user={user} order={order} />
      <main>
        <OrderCard user={user} order={order} setOrder={setOrder} />
      </main>
      <Footer />
    </>
  );
}
