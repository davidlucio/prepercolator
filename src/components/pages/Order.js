import React, { useState } from "react";


import Header from "../Header";
import OrderCard from "../cards/OrderCard";
import Footer from "../Footer";


export default function Order({ user }) {
    const [order, setOrder] = useState([]);

    return (
        <>
            <Header user={user} />
            <main className="newOrderPage">
                <OrderCard user={user} order={order} setOrder={setOrder} />
            </main>
            <Footer/>
        </>
    );
}
