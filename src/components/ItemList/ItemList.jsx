// src/components/ItemList/ItemList.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../data/async-mocks';
import ItemDetail from '../ItemDetail/ItemDetail';

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

    return <ItemDetail item={item} />;
};

export default ItemDetailContainer;


