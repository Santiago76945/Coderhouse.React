// src/components/FeaturedPhones/FeaturedPhones.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link de React Router

const FeaturedPhones = () => {
    return (
        <div className="featured-phones my-5 container">
            <h2 className="text-center mb-4">Teléfonos Destacados</h2>
            <div className="row">
                <div className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                        {/* Enlace al detalle del iPhone 12 */}
                        <Link to="/item/1">
                            <img src="/images/iphone12.jpg" className="card-img-top" alt="iPhone 12" />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">iPhone 12</h5>
                            <p className="card-text">El iPhone 12 ofrece un diseño moderno, pantalla OLED Super Retina XDR y el potente chip A14 Bionic para un rendimiento excepcional.</p>
                            {/* Botón para ver detalles del iPhone 12 */}
                            <Link to="/item/1" className="btn btn-primary">Ver detalles</Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                        {/* Enlace al detalle del iPhone 13 */}
                        <Link to="/item/3">
                            <img src="/images/iPhone13.jpg" className="card-img-top" alt="iPhone 13" />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">iPhone 13</h5>
                            <p className="card-text">El iPhone 13 mejora la cámara con un sistema avanzado de doble cámara, un chip A15 Bionic más rápido y una mejor duración de la batería.</p>
                            {/* Botón para ver detalles del iPhone 13 */}
                            <Link to="/item/3" className="btn btn-primary">Ver detalles</Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                        {/* Enlace al detalle del iPhone 14 */}
                        <Link to="/item/10">
                            <img src="/images/iPhone14.jpg" className="card-img-top" alt="iPhone 14" />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">iPhone 14</h5>
                            <p className="card-text">El iPhone 14 lleva la innovación al siguiente nivel con una pantalla ProMotion, cámaras mejoradas y tecnología avanzada de seguridad y conectividad.</p>
                            {/* Botón para ver detalles del iPhone 14 */}
                            <Link to="/item/10" className="btn btn-primary">Ver detalles</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturedPhones;
