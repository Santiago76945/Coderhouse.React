// src/components/NavBar/NavBar.jsx
import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'; // Asegúrate de importar el CSS específico para la barra de navegación
import reactLogo from '../../assets/react-logo.svg'; // Ruta al logo de React, asegúrate de que la ruta sea correcta

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand mx-auto text-center" href="#">
                    <img 
                        src={reactLogo} 
                        alt="React Logo" 
                        style={{ width: '30px', height: '30px', marginRight: '10px' }} 
                    />
                    ReactShop
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#home">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#shop">Tienda</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#smartphones">Smartphones</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#accessories">Accesorios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#offers">Ofertas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contacto</a>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
