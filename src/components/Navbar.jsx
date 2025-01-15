import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import CartModal from "./CartModal";
import { Link } from "react-router-dom";

const Navbar = () => {
    const { cart } = useCart();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalToggle = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <header class="text-black body-font p-4 bg-slate-400 mb-10">
            <div class="container mx-auto flex flex-wrap justify-between  flex-col md:flex-row items-center">
                <Link to={'https://movie-nt.vercel.app/'} class=" title-font font-medium">
                    <span class="ml-3 text-xl">Nur Ecommerece</span>
                </Link>
                <button onClick={handleModalToggle}>
                    Cart: {cart.length} items
                </button>
                {isModalOpen && (
                    <CartModal onClose={handleModalToggle} cart={cart} />
                )}
            </div>
        </header>
    );
};

export default Navbar;
