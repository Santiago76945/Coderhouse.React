// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot desde react-dom/client
import App from './App';
import './index.css';

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

