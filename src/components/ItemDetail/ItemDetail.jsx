//src/components/ItemDetail/ItemDetail.jsx

import React, { useState, useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import ItemQuantitySelector from './ItemQuantitySelector';
import './ItemDetail.css';

const ItemDetail = ({ item }) => {
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        addToCart(item, quantity);
        alert('Producto añadido al carrito');
    };

    return (
        <div className="item-detail">
            <h2>{item.name}</h2>
            <img src={`/images/${item.image}`} alt={item.name} className="item-image" />
            <p>{item.detailedDescription}</p>
            <h4>Especificaciones:</h4>
            <ul>
                {item.specs.map((spec, index) => (
                    <li key={index}>{spec}</li>
                ))}
            </ul>
            <p><strong>Disponibilidad:</strong> {item.availability}</p>
            <p><strong>Precio:</strong> ${item.price}</p>
            <ItemQuantitySelector quantity={quantity} setQuantity={setQuantity} />
            <button className="btn btn-primary" onClick={handleAddToCart}>Añadir al Carrito</button>
        </div>
    );
};

export default ItemDetail;
