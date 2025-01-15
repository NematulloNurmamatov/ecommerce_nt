import React from "react";
import { useCart } from "../context/CartContext";

const products = [
    { id: 1, name: "Mahsulot 1", price: 10, image: "https://static.xabar.uz/crop/3/9/720_460_95_3978449311.jpg" },
    { id: 2, name: "Mahsulot 2", price: 15, image: "https://storage.kun.uz/source/3/-oCkAFvziblW7M6Fh6Cb-Z6YiZ_VMhby.jpg" },
    { id: 3, name: "Mahsulot 3", price: 20, image: "https://storage.kun.uz/source/3/76qAtqmAO51rc80taE22EU9rwrXrMcDd.jpg" },
    { id: 4, name: "Mahsulot 4", price: 25, image: "https://www.norma.uz/img/b7/3d/966400381295ea3b74e9688ac843.jpg" },
    { id: 5, name: "Mahsulot 5", price: 30, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN0zalp9UNtYchyOPU46YrcD_lrznpGQPTPHuE4oqRwMuGKrVGy1Ypn_lKMv5Mb4VcC5s&usqp=CAU" },
    { id: 6, name: "Mahsulot 6", price: 35, image: "https://xorazmstat.uz/images/novosti/05.02.2023.jpg" },
];

const ProductList = () => {
    const { addToCart } = useCart();

    return (
        <div className=" container p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="border shadow rounded-lg p-4 flex flex-col items-center"
                >
                    <img className="w-full h-52" src={product.image} alt={product.name} />
                    <h2 className="text-lg font-bold">{product.name}</h2>
                    <p className="text-gray-500">${product.price}</p>
                    <button
                        onClick={() => addToCart(product)}
                        className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
                    >
                        Savatchaga qo'shish
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
