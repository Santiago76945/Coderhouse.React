// src/components/ItemListContainer/ItemListContainer.jsx

import React, { useEffect, useState } from 'react';
import { getAllProducts, getProductsByCategory } from '../../data/async-mocks';
import { Link } from 'react-router-dom';
import './ItemListContainer.css';  // Importa el archivo CSS

const ItemListContainer = ({ category }) => {
    const [items, setItems] = useState([]); // Estado para los productos
    const [filteredItems, setFilteredItems] = useState([]); // Estado para los productos filtrados
    const [loading, setLoading] = useState(true);
    const [manufacturerFilter, setManufacturerFilter] = useState(''); // Filtro de fabricante
    const [priceFilter, setPriceFilter] = useState(''); // Filtro de precio

    useEffect(() => {
        const fetchItems = async () => {
            setLoading(true);
            try {
                let products;
                if (category === 'all') {
                    products = await getAllProducts(); // Muestra todos los productos
                } else if (category) {
                    products = await getProductsByCategory(category);
                }
                setItems(products || []); // Establecer productos
                setFilteredItems(products || []); // Inicialmente, los productos filtrados son los mismos
            } catch (error) {
                console.error('Error al cargar los productos', error);
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
    }, [category]);

    // Función para aplicar los filtros
    const applyFilters = () => {
        let filtered = items;

        // Filtro por fabricante
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

        // Filtro por precio
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

        setFilteredItems(filtered); // Actualizar los productos filtrados
    };

    // Aplica los filtros cada vez que cambie un filtro
    useEffect(() => {
        applyFilters();
    }, [manufacturerFilter, priceFilter, items]);

    if (loading) {
        return <p>Cargando productos...</p>;
    }

    // src/components/ItemListContainer/ItemListContainer.jsx

    return (
        <div className="item-list-container">
            <h2>{category === 'all' ? 'Todos los Teléfonos' : 'Teléfonos por Categoría'}</h2>

            {/* Mostrar los filtros solo si estamos en la categoría de "todos los teléfonos" */}
            {category === 'all' && (
                <div className="filters">
                    {/* Filtro por fabricante */}
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

                    {/* Filtro por precio */}
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

            <div className="item-list row">
                {filteredItems.map(item => (
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
        </div>
    );

}

export default ItemListContainer;
