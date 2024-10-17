// src/components/ItemList/ItemList.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './ItemList.css';

const ItemList = ({ items }) => {
    return (
        <div className="item-list row">
            {items.map(item => (
                <div key={item.id} className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                        <img src={`/images/${item.image}`} className="card-img-top" alt={item.name} />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p>{item.description}</p>
                            <p>Precio: ${item.price}</p>
                            <Link to={`/item/${item.id}`} className="btn btn-primary">Ver detalles</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
