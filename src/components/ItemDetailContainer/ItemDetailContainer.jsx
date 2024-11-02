// src/components/ItemDetailContainer/ItemDetailContainer.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import db from '../../config';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItem = async () => {
            setLoading(true);
            try {
                const itemRef = doc(db, "items", id);
                const itemSnap = await getDoc(itemRef);

                if (itemSnap.exists()) {
                    setItem({ id: itemSnap.id, ...itemSnap.data() });
                } else {
                    console.error("Producto no encontrado en Firestore");
                }
            } catch (error) {
                console.error("Error al cargar el producto:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchItem();
    }, [id]);

    if (loading) return <p>Cargando detalles del producto...</p>;
    if (!item) return <p>Producto no encontrado</p>;

    return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
