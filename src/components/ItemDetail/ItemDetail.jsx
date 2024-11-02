//src/components/ItemDetail/ItemDetail.jsx

import React, { useState, useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import ItemQuantitySelector from './ItemQuantitySelector';
import './ItemDetail.css';
import { doc, getDoc } from "firebase/firestore";
import db from '../../config';

const ItemDetail = ({ item }) => {
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = async () => {
        // Verificar la disponibilidad de stock en Firestore antes de añadir al carrito
        try {
            const itemRef = doc(db, "items", item.id);
            const itemSnap = await getDoc(itemRef);

            if (itemSnap.exists()) {
                const itemData = itemSnap.data();
                if (itemData.stock >= quantity) {
                    addToCart(item, quantity);
                    alert('Producto añadido al carrito');
                } else {
                    alert(`Solo quedan ${itemData.stock} unidades disponibles.`);
                }
            } else {
                alert('El producto no existe en la base de datos.');
            }
        } catch (error) {
            console.error("Error al verificar el stock:", error);
            alert('Hubo un error al verificar el stock. Inténtalo de nuevo más tarde.');
        }
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
            {/* Componente para seleccionar la cantidad */}
            <ItemQuantitySelector quantity={quantity} setQuantity={setQuantity} />
            {/* Botón para añadir al carrito */}
            <button className="btn btn-primary" onClick={handleAddToCart}>Añadir al Carrito</button>
        </div>
    );
};

export default ItemDetail;


