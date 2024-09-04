// src/components/CartWidget/CartWidget.jsx
import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
    return (
        <IconButton
            icon={<FaShoppingCart />}
            aria-label="Cart"
            variant="ghost"
            size="lg"
        />
    );
};

export default CartWidget;

