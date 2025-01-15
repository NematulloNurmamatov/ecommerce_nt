import React from "react";
import { useCart } from "../context/CartContext";

const CartModal = ({ onClose }) => {
    const { cart, clearCart } = useCart();

    const handlePurchase = () => {
        alert("Mahsulotlar sotib olindi!");
        clearCart(); // Savatchani tozalash
        onClose(); // Modalni yopish
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>Cart Items</h2>
                {cart.length > 0 ? (
                    <>
                        <ul>
                            {cart.map((item, index) => (
                                <li key={index} className="flex items-center py-2">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-16 h-16 object-cover mr-4"
                                    />
                                    <div>
                                        <p>{item.name} - ${item.price}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4">
                            <p className="font-bold">
                                Umumiy narx: ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}
                            </p>
                        </div>
                        <button
                            onClick={handlePurchase}
                            className="bg-blue-500 text-white px-4 py-[9px] rounded mt-4"
                        >
                            Sotib olish
                        </button>
                    </>
                ) : (
                    <p>Savatcha bo‘sh.</p>
                )}
                <button
                    onClick={onClose}
                    className="close-button bg-gray-300 text-black px-4 ml-2 h-[42px]  rounded mt-4"
                >
                    Yopish
                </button>
            </div>
        </div>
    );
};

export default CartModal;
