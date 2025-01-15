import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const AddProduct = () => {
    const { addToCart } = useCart();
    const [product, setProduct] = useState({ name: "", price: "" });

    const handleAdd = () => {
        if (product.name && product.price) {
            addToCart(product);
            setProduct({ name: "", price: "" });
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Add Product</h2>
            <input
                type="text"
                placeholder="Product Name"
                value={product.name}
                onChange={(e) => setProduct({ ...product, name: e.target.value })}
                className="border p-2 mr-2"
            />
            <input
                type="number"
                placeholder="Price"
                value={product.price}
                onChange={(e) => setProduct({ ...product, price: e.target.value })}
                className="border p-2 mr-2"
            />
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleAdd}
            >
                Add Product
            </button>
        </div>
    );
};

export default AddProduct;
