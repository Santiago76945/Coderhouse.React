// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS (incluye Popper.js)

// Encuentra el contenedor de tu aplicación en el DOM
const container = document.getElementById('root');

// Crea un root utilizando createRoot
const root = createRoot(container);

// Renderiza la aplicación utilizando el método render del root
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);


