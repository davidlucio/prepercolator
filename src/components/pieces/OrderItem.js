import React from 'react';

export default function OrderItem({ item }){
    
    return (
        <li key={item.id}><span>{item.icon}</span>{item.name}<span>{item.price}</span></li>
    )
}