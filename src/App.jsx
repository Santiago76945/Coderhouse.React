// src/App.jsx

import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Carousel from './components/Carousel/Carousel';
import FeaturedPhones from './components/FeaturedPhones/FeaturedPhones';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Checkout from './components/Checkout/Checkout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './components/CartContext/CartContext';
import './App.css';

function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    {/* Página de inicio con el mensaje de bienvenida, carrusel y teléfonos destacados */}
                    <Route path="/" element={
                        <>
                            {/* Mensaje de bienvenida */}
                            <div className="welcome-message text-center">
                                <h1>Bienvenido a ReactShop!</h1>
                                <p>
                                    Sabemos que cada persona es única, y nuestra misión es ayudarte a encontrar 
                                    el smartphone perfecto para ti. Explora nuestra selección y descubre el teléfono 
                                    que mejor se adapta a tus necesidades y estilo de vida.
                                </p>
                            </div>
                            <Carousel />
                            <FeaturedPhones />
                        </>
                    } />
                    
                    {/* Página de categoría de productos */}
                    <Route path="/category/:id" element={<ItemListContainer />} />

                    {/* Página de detalles del producto */}
                    <Route path="/item/:id" element={<ItemDetailContainer />} />

                    {/* Página de todos los teléfonos */}
                    <Route path="/category/all" element={<ItemListContainer category="all" />} />

                    {/* Página de checkout */}
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;


