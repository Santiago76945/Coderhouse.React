// src/App.jsx

import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import FeaturedPhones from './components/FeaturedPhones/FeaturedPhones';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer category="all" />} />
                <Route path="/category/:id" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} /> {/* Asegúrate de tener esta ruta */}
            </Routes>
            <FeaturedPhones />
            <Footer />
        </BrowserRouter>
    );
}

export default App;

