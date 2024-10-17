// src/components/CartWidget/CartWidget.jsx

import React, { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {
    const { getTotalQuantity } = useContext(CartContext);
    const totalQuantity = getTotalQuantity();

    return (
        <div className="cart-widget">
            <Link to="/checkout">
                🛒
                {totalQuantity > 0 && <span className="cart-count">{totalQuantity}</span>}
            </Link>
        </div>
    );
};

export default CartWidget;

