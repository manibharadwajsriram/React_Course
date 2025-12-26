import React from "react";
import { Link } from "react-router";

function Cart({items}){
    console.log(items);
    const totalPrice=items.reduce((acc,item)=> acc + item.price * item.count,0);

    return(
        <>
            <Link to="/" style={{'color':'white'}}>back</Link>
            <h2>Your Shopping Cart</h2>
            {items.length === 0 ? <p>No Items in the Cart</p> :
                <ul>
                    {items.map((item)=>
                    <li key={item.id}>{item.title} -${item.price} (brought {item.count})</li>)}
                </ul>            
            }
            <h3>Total Price: ${totalPrice}</h3>
        </>
    );
}

export default Cart;