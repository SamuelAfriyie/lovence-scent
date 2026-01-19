import React from 'react';
// import { ShoppingCartIcon } from '@heroicons/react/24/outline';

interface ProductProps {
    name: string;
    price: string;
    imageUrl: string;
}

const ProductCard: React.FC<ProductProps> = ({ name, price, imageUrl }) => {
    return (
        <div className=" p-4 transition duration-300">
            {/* Product Image Area */}
            <div className=" h-48 mb-4">
                <img
                    src={imageUrl}
                    alt={name}
                    className="w-full h-full object-cotain" // object-contain ensures the bottle fits in the box
                />
            </div>

            {/* Product Info */}
            <div className="text-center">
                <h3 className="text-base font-semibold text-gray-600 mb-1">{name}</h3>
                <p className="text-xl font-black text-black mb-3">{price}</p>
            </div>
        </div>
    );
};

export default ProductCard;
