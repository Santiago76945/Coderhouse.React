import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Añadir producto al carrito
    const addToCart = (item, quantity) => {
        const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            setCartItems(cartItems.map(cartItem =>
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + quantity } : cartItem
            ));
        } else {
            setCartItems([...cartItems, { ...item, quantity }]);
        }
    };

    // Eliminar producto del carrito
    const removeFromCart = (id) => {
        setCartItems(cartItems.filter(cartItem => cartItem.id !== id));
    };

    // Vaciar carrito
    const clearCart = () => {
        setCartItems([]);
    };

    // Obtener cantidad total de productos
    const getTotalQuantity = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    // Obtener precio total
    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            clearCart,
            getTotalQuantity,
            getTotalPrice
        }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
