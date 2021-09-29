import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart}=props
 

    return (
        <div className="cart">
            <h3>{cart.length}</h3>
        </div>
    );
};

export default Cart;