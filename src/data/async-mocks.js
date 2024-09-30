// src/data/async-mocks.js

const products = [
    { 
        id: 1, 
        name: 'iPhone 12', 
        category: 'smartphones', 
        description: 'Pantalla OLED Super Retina XDR de 6.1 pulgadas.', 
        detailedDescription: 'El iPhone 12 tiene una pantalla OLED Super Retina XDR de 6.1 pulgadas, chip A14 Bionic, tecnología 5G, y cámaras duales con Modo Noche. Disponible en capacidades de 64GB, 128GB, y 256GB, con resistencia al agua IP68 y una duración mejorada de la batería.',
        price: 799, 
        image: 'iphone12.jpg',
        specs: ['Pantalla: 6.1 pulgadas OLED', 'Chip: A14 Bionic', 'Cámara: 12MP dual', 'Capacidad: 64GB, 128GB, 256GB', 'Resistencia al agua: IP68'],
        availability: 'En stock'
    },
    { 
        id: 2, 
        name: 'Samsung Galaxy S21', 
        category: 'smartphones', 
        description: 'Pantalla Dynamic AMOLED 2X de 6.2 pulgadas.', 
        detailedDescription: 'El Galaxy S21 cuenta con una pantalla Dynamic AMOLED 2X de 6.2 pulgadas, tecnología 5G y el chip Exynos 2100. Incluye una cámara principal de 64MP y resistencia al agua IP68. Disponible en versiones de 128GB y 256GB.',
        price: 699, 
        image: 'samsunggalaxys21.png',
        specs: ['Pantalla: 6.2 pulgadas AMOLED', 'Chip: Exynos 2100', 'Cámara: 64MP principal', 'Capacidad: 128GB, 256GB', 'Resistencia al agua: IP68'],
        availability: 'En stock'
    },
    { 
        id: 3, 
        name: 'iPhone 13', 
        category: 'smartphones', 
        description: 'Mejora la cámara y la batería.', 
        detailedDescription: 'El iPhone 13 tiene una pantalla OLED Super Retina XDR de 6.1 pulgadas, chip A15 Bionic, cámaras duales con Modo Noche, y tecnología 5G. Disponible en capacidades de 128GB, 256GB, y 512GB, con resistencia al agua IP68.',
        price: 899, 
        image: 'iphone13.jpg.avif',
        specs: ['Pantalla: 6.1 pulgadas OLED', 'Chip: A15 Bionic', 'Cámara: 12MP dual', 'Capacidad: 128GB, 256GB, 512GB', 'Resistencia al agua: IP68'],
        availability: 'En stock'
    },
    { 
        id: 4, 
        name: 'Google Pixel 5', 
        category: 'smartphones', 
        description: 'Cámara avanzada y Android puro.', 
        detailedDescription: 'El Google Pixel 5 incluye una pantalla OLED de 6 pulgadas y el chip Snapdragon 765G. Destaca por su cámara avanzada de 12.2MP con modo de astrofotografía. Está disponible con 128GB de almacenamiento y es resistente al agua con clasificación IP68.',
        price: 649, 
        image: 'googlepixel5.jpg',
        specs: ['Pantalla: 6 pulgadas OLED', 'Chip: Snapdragon 765G', 'Cámara: 12.2MP', 'Capacidad: 128GB', 'Resistencia al agua: IP68'],
        availability: 'Pocas unidades'
    },
    { 
        id: 5, 
        name: 'OnePlus 9 Pro', 
        category: 'smartphones', 
        description: 'Pantalla AMOLED de 120Hz y carga ultrarrápida.', 
        detailedDescription: 'El OnePlus 9 Pro ofrece una pantalla AMOLED de 6.7 pulgadas con tasa de refresco de 120Hz. Está equipado con el chip Snapdragon 888 y una cámara principal de 48MP. Disponible en versiones de 128GB y 256GB, con resistencia al agua IP68.',
        price: 729, 
        image: 'oneplus9pro.jpg',
        specs: ['Pantalla: 6.7 pulgadas AMOLED 120Hz', 'Chip: Snapdragon 888', 'Cámara: 48MP principal', 'Capacidad: 128GB, 256GB', 'Resistencia al agua: IP68'],
        availability: 'En stock'
    },
    { 
        id: 6, 
        name: 'Xiaomi Mi 11', 
        category: 'smartphones', 
        description: 'Cámara de 108MP y pantalla AMOLED.', 
        detailedDescription: 'El Xiaomi Mi 11 tiene una cámara de 108MP y una pantalla AMOLED de 6.81 pulgadas con resolución WQHD+. Está equipado con el chip Snapdragon 888 y está disponible con 128GB y 256GB de almacenamiento. No cuenta con certificación de resistencia al agua.',
        price: 599, 
        image: 'xiaomimi11.jpeg.webp',
        specs: ['Pantalla: 6.81 pulgadas AMOLED', 'Chip: Snapdragon 888', 'Cámara: 108MP', 'Capacidad: 128GB, 256GB', 'Resistencia al agua: No especificada'],
        availability: 'En stock'
    },
    { 
        id: 7, 
        name: 'Motorola Edge', 
        category: 'smartphones', 
        description: 'Pantalla curva y conectividad 5G.', 
        detailedDescription: 'El Motorola Edge cuenta con una pantalla OLED curva de 6.7 pulgadas y conectividad 5G. Incorpora el chip Snapdragon 765, una cámara principal de 64MP y una batería de larga duración. Tiene 128GB de almacenamiento y resistencia al agua IP52.',
        price: 649, 
        image: 'motorolaedge.jpg.avif',
        specs: ['Pantalla: 6.7 pulgadas OLED curva', 'Chip: Snapdragon 765', 'Cámara: 64MP', 'Capacidad: 128GB', 'Resistencia al agua: IP52'],
        availability: 'Pocas unidades'
    },
    { 
        id: 8, 
        name: 'Sony Xperia 5', 
        category: 'smartphones', 
        description: 'Pantalla cinematográfica en un teléfono compacto.', 
        detailedDescription: 'El Sony Xperia 5 tiene una pantalla OLED de 6.1 pulgadas con formato cinematográfico 21:9. Está equipado con el chip Snapdragon 855 y una cámara triple de 12MP. Ofrece 128GB de almacenamiento y resistencia al agua IP65/IP68.',
        price: 799, 
        image: 'sonyxperia5.jpg',
        specs: ['Pantalla: 6.1 pulgadas OLED', 'Chip: Snapdragon 855', 'Cámara: 12MP', 'Capacidad: 128GB', 'Resistencia al agua: IP65/IP68'],
        availability: 'En stock'
    },
    { 
        id: 9, 
        name: 'Nokia 8.3 5G', 
        category: 'smartphones', 
        description: 'Un teléfono 5G con cámara PureView.', 
        detailedDescription: 'El Nokia 8.3 5G cuenta con una pantalla FHD+ de 6.81 pulgadas y el chip Snapdragon 765G. Tiene una cámara principal de 64MP con tecnología PureView, y está disponible en versiones de 64GB y 128GB de almacenamiento. No especifica resistencia al agua.',
        price: 679, 
        image: 'nokia83.png',
        specs: ['Pantalla: 6.81 pulgadas FHD+', 'Chip: Snapdragon 765G', 'Cámara: 64MP', 'Capacidad: 64GB, 128GB', 'Resistencia al agua: No especificada'],
        availability: 'En stock'
    }
];

export const getAllProducts = async () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(products), 500);
    });
};

export const getProductsByCategory = async (category) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(products.filter(p => p.category === category)), 500);
    });
};

export const getProductById = async (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const product = products.find(p => p.id === parseInt(id)); // Asegúrate de convertir id a entero
            resolve(product);
        }, 500); // Simulación de retraso
    });
};

