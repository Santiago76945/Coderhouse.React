// src/App.jsx
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Carousel from './components/Carousel/Carousel';
import FeaturedPhones from './components/FeaturedPhones/FeaturedPhones';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
    return (
        <React.Fragment>
            <NavBar />
            <Carousel />
            <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
            <FeaturedPhones />
            <Footer />
        </React.Fragment>
    );
}

export default App;

