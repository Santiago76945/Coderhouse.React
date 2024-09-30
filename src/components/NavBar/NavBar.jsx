// src/components/NavBar/NavBar.jsx

import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'; 
import reactLogo from '../../assets/react-logo.svg';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={reactLogo} alt="React Logo" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                    ReactShop
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/smartphones">Smartphones</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/allphones">Todos los Teléfonos</Link> {/* Enlace a todos los teléfonos */}
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
