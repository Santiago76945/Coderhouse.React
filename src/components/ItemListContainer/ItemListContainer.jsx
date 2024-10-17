// src/components/ItemListContainer/ItemListContainer.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAllProducts, getProductsByCategory } from '../../data/async-mocks';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = ({ category }) => {
    const { id } = useParams();
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [manufacturerFilter, setManufacturerFilter] = useState('');
    const [priceFilter, setPriceFilter] = useState('');

    const currentCategory = category || id;

    useEffect(() => {
        const fetchItems = async () => {
            setLoading(true);
            try {
                let products;
                if (currentCategory === 'all') {
                    products = await getAllProducts();
                } else if (currentCategory) {
                    products = await getProductsByCategory(currentCategory);
                }
                setItems(products || []);
                setFilteredItems(products || []);
            } catch (error) {
                console.error('Error al cargar los productos', error);
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
    }, [currentCategory]);

    const applyFilters = () => {
        let filtered = items;

        if (manufacturerFilter) {
            filtered = filtered.filter(item => {
                if (manufacturerFilter === 'apple') {
                    return item.name.toLowerCase().includes('iphone');
                } else if (manufacturerFilter === 'samsung') {
                    return item.name.toLowerCase().includes('samsung');
                } else if (manufacturerFilter === 'otros') {
                    return !item.name.toLowerCase().includes('iphone') && !item.name.toLowerCase().includes('samsung');
                }
                return true;
            });
        }

        if (priceFilter) {
            filtered = filtered.filter(item => {
                const price = item.price;
                if (priceFilter === '300') {
                    return price <= 300;
                } else if (priceFilter === '600') {
                    return price <= 600;
                } else if (priceFilter === 'mascaros') {
                    return price > 600;
                }
                return true;
            });
        }

        setFilteredItems(filtered);
    };

    useEffect(() => {
        applyFilters();
    }, [manufacturerFilter, priceFilter, items]);

    if (loading) {
        return <p>Cargando productos...</p>;
    }

    return (
        <div className="item-list-container">
            <h2>{currentCategory === 'all' ? 'Todos los Teléfonos' : 'Teléfonos por Categoría'}</h2>

            {currentCategory === 'all' && (
                <div className="filters">
                    <label htmlFor="manufacturerFilter">Fabricante:</label>
                    <select
                        id="manufacturerFilter"
                        value={manufacturerFilter}
                        onChange={(e) => setManufacturerFilter(e.target.value)}
                    >
                        <option value="">Todos</option>
                        <option value="apple">Apple</option>
                        <option value="samsung">Samsung</option>
                        <option value="otros">Otros</option>
                    </select>

                    <label htmlFor="priceFilter">Precio:</label>
                    <select
                        id="priceFilter"
                        value={priceFilter}
                        onChange={(e) => setPriceFilter(e.target.value)}
                    >
                        <option value="">Todos</option>
                        <option value="300">Hasta 300 euros</option>
                        <option value="600">Hasta 600 euros</option>
                        <option value="mascaros">Más caros</option>
                    </select>
                </div>
            )}

            <ItemList items={filteredItems} />
        </div>
    );
};

export default ItemListContainer;

