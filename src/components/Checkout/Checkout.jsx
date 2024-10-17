//src/components/Checkout/Checkout.jsx

import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
    const { cartItems, removeFromCart, clearCart, getTotalPrice } = useContext(CartContext);
    const [orderCompleted, setOrderCompleted] = useState(false);

    const handleCheckout = () => {
        setOrderCompleted(true);
        clearCart();
    };

    if (orderCompleted) {
        return (
            <div className="checkout-container container">
                <h2>¡Gracias por tu compra!</h2>
                <p>Tu pedido ha sido procesado exitosamente.</p>
                <Link to="/" className="btn btn-primary">Volver al Inicio</Link>
            </div>
        );
    }

    if (cartItems.length === 0) {
        return (
            <div className="checkout-container container">
                <h2>Tu carrito está vacío</h2>
                <Link to="/" className="btn btn-primary">Volver al Inicio</Link>
            </div>
        );
    }

    return (
        <div className="checkout-container container">
            <h2>Resumen de tu compra</h2>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Producto</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio Unitario</th>
                            <th scope="col">Subtotal</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map(item => (
                            <tr key={item.id}>
                                <td className="product-name">{item.name}</td>
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
            </div>
            <h3>Total: ${getTotalPrice()}</h3>
            <button className="btn btn-success" onClick={handleCheckout}>Finalizar Compra</button>
        </div>
    );
};

export default Checkout;



