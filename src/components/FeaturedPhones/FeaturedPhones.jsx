// src/components/FeaturedPhones/FeaturedPhones.jsx
import React from 'react';

const FeaturedPhones = () => {
    return (
        <div className="featured-phones my-5 container">
            <h2 className="text-center mb-4">Teléfonos Destacados</h2>
            <div className="row">
                <div className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                        <img src="/images/iPhone12.jpeg" className="card-img-top" alt="iPhone 12"/>
                        <div className="card-body">
                            <h5 className="card-title">iPhone 12</h5>
                            <p className="card-text">El iPhone 12 ofrece un diseño moderno, pantalla OLED Super Retina XDR y el potente chip A14 Bionic para un rendimiento excepcional.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                        <img src="/images/iPhone13.jpg" className="card-img-top" alt="iPhone 13"/>
                        <div className="card-body">
                            <h5 className="card-title">iPhone 13</h5>
                            <p className="card-text">El iPhone 13 mejora la cámara con un sistema avanzado de doble cámara, un chip A15 Bionic más rápido y una mejor duración de la batería.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                        <img src="/images/iPhone14.jpg" className="card-img-top" alt="iPhone 14"/>
                        <div className="card-body">
                            <h5 className="card-title">iPhone 14</h5>
                            <p className="card-text">El iPhone 14 lleva la innovación al siguiente nivel con una pantalla ProMotion, cámaras mejoradas y tecnología avanzada de seguridad y conectividad.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturedPhones;
