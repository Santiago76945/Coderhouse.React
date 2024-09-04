// src/components/ItemListContainer/ItemListContainer.jsx
import React from 'react';

const ItemListContainer = ({ greeting }) => {
    return (
        <div>
            <h1>{greeting}</h1>
            {/* Aquí iría el listado de items */}
        </div>
    );
};

export default ItemListContainer;
