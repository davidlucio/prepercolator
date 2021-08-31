import React from 'react';

export default function OrderHistory({ user }){
    return (
        <div className="userOrderHistory">
            <h2>Your Previous Orders:</h2>
            { user.orderHistory.map((order)=>{ <Order order={order} /> }) }
        </div>
    )
}