import React, { createContext, useContext, useState } from "react";

// Cart kontekstini yarating
const CartContext = createContext();

// Custom hook
export const useCart = () => useContext(CartContext);

// Context Provider
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Savatchaga mahsulot qo'shish funksiyasi
    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    // Savatchani tozalash funksiyasi
    const clearCart = () => {
        setCart([]);
    };

    const value = {
        cart,
        addToCart,
        clearCart, // clearCart funksiyasini kontekstga qo'shish
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
