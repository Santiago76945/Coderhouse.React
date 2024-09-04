// src/components/Carousel/Carousel.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css'; // Importa el CSS específico para el carrusel

const Carousel = () => {
    return (
        <div id="carouselExample" className="carousel slide carousel-container" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/images/phone1.webp" className="d-block w-100" alt="Teléfono 1"/>
                </div>
                <div className="carousel-item">
                    <img src="/images/phone2.png" className="d-block w-100" alt="Teléfono 2"/>
                </div>
                <div className="carousel-item">
                    <img src="/images/phone3.webp" className="d-block w-100" alt="Teléfono 3"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Carousel;


