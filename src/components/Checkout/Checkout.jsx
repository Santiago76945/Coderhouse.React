//src/components/Checkout/Checkout.jsx

import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
    const { cartItems, removeFromCart, clearCart, getTotalPrice } = useContext(CartContext);
    const [orderCompleted, setOrderCompleted] = useState(false);

    const handleCheckout = () => {
        // Aquí podrías implementar la lógica para procesar el pedido
        setOrderCompleted(true);
        clearCart();
    };

    if (orderCompleted) {
        return (
            <div className="checkout-container">
                <h2>¡Gracias por tu compra!</h2>
                <p>Tu pedido ha sido procesado exitosamente.</p>
                <Link to="/" className="btn btn-primary">Volver al Inicio</Link>
            </div>
        );
    }

    if (cartItems.length === 0) {
        return (
            <div className="checkout-container">
                <h2>Tu carrito está vacío</h2>
                <Link to="/" className="btn btn-primary">Volver al Inicio</Link>
            </div>
        );
    }

    return (
        <div className="checkout-container">
            <h2>Resumen de tu compra</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio Unitario</th>
                        <th>Subtotal</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>${item.price}</td>
                            <td>${item.price * item.quantity}</td>
                            <td>
                                <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h3>Total: ${getTotalPrice()}</h3>
            <button className="btn btn-success" onClick={handleCheckout}>Finalizar Compra</button>
        </div>
    );
};

export default Checkout;
