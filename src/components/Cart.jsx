import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
    const { cartItems } = useCart();

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index} className="border-b py-2">
                            {item.name} - ${item.price}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
