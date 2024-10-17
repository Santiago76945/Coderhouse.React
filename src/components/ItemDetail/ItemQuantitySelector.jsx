//src/components/ItemDetail/ItemQuantitySelector.jsx

import React from 'react';
import './ItemQuantitySelector.css';

const ItemQuantitySelector = ({ quantity, setQuantity }) => {
    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="quantity-selector">
            <button className="btn btn-secondary" onClick={handleDecrease}>-</button>
            <span className="quantity">{quantity}</span>
            <button className="btn btn-secondary" onClick={handleIncrease}>+</button>
        </div>
    );
};

export default ItemQuantitySelector;

