// src/components/ItemList/ItemList.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './ItemList.css';

const ItemList = ({ items }) => {
    console.log('Items en ItemList:', items);

    if (!items || items.length === 0) {
        return <p>No hay productos disponibles.</p>;
    }

    return (
        <div className="item-list">
            {items.map(item => (
                <div key={item.id} className="item-card">
                    <h3>{item.name}</h3>
                    <div className="image-container">
                        <img src={`/images/${item.image}`} alt={item.name} />
                    </div>
                    <p>{item.description}</p>
                    <p><strong>Precio:</strong> ${item.price}</p>
                    <Link to={`/item/${item.id}`} className="btn btn-primary">
                        Ver detalles
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ItemList;


