import React from "react";


import Header from "../Header";
import OrderCard from "../cards/OrderCard";
import Footer from "../Footer";

export default function OrderHistory({ user }) {
    return (
        <>
            <Header user={user} />
            <main className="userOrderHistory">
                
                <h2>Your Previous Orders:</h2>
                {user.orderHistory.map((order) => {
                    return <OrderCard order={order} />;
                })}
            </main>
            <Footer/>
        </>
    );
}
