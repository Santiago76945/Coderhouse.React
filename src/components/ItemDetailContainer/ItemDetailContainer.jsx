// src/components/ItemDetailContainer/ItemDetailContainer.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../data/async-mocks';
import './ItemDetailModal.css'; // Asegúrate de importar el CSS

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItem = async () => {
            const product = await getProductById(id);
            setItem(product);
            setLoading(false);
        };

        fetchItem();
    }, [id]);

    if (loading) {
        return <p>Cargando detalles del producto...</p>;
    }

    if (!item) {
        return <p>Producto no encontrado</p>;
    }

    return (
        <div className="item-detail-container">
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
        </div>
    );
}

export default ItemDetailContainer;
