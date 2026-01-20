import { useCartStoreListener } from '@/lib/store/cart-store';
import { cn } from '@/lib/utils';
import React from 'react';
import { MdAddShoppingCart, MdStar, MdStarHalf, MdStarOutline } from "react-icons/md";
import { useNavigate } from 'react-router';

interface ProductProps {
  className?: string,
  product: any
}

const ProductCard: React.FC<ProductProps> = ({ className, product }) => {
  const navigate = useNavigate();
  const { setItem, items } = useCartStoreListener();

  const isAddedToCart = items.find((p) => p.id === product.id);

  const handleNavigate = () => {
    navigate("/shopping");
  }

  const handleAddToCart = () => {
    setItem(product);
  }


  return (
    <div className={cn(" p-4 transition duration-300", className)}>
      {/* Product Image Area */}
      <div className=" h-48 mb-4">
        <img
          src={product?.imageUrl}
          alt={product?.name}
          className={cn("w-full h-full object-contain")} // object-contain ensures the bottle fits in the box
        />
      </div>
      <div className="text-center flex flex-col items-center">
        <h3 className="text-base font-semibold text-gray-600 mb-1 hover:underline hover:cursor-pointer" onClick={handleNavigate}>{product?.name} <br /><span className='font-sans'>By {product?.brand}</span></h3>
        <div className='w-full flex items-center space-x-4 justify-center'>
          <p className="text-xl font-black text-black"><span className='text-xs'>GH₵ </span>{product?.price?.toFixed(2)}</p>
          <button
            className='relative group cursor-pointer px-4 ring-1 ring-inset rounded-full ring-gray-500 w-fit py-1 hover:ring-2 hover:ring-black transition-all'
            onClick={handleAddToCart}
          >
            <div className="relative">
              <MdAddShoppingCart color='black' size={18} />

              {/* Item-specific Quantity Badge */}
              {isAddedToCart && (
                <span className="absolute -top-3 -right-3 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[9px] font-black text-white ring-2 ring-white">
                  {isAddedToCart.qty}
                </span>
              )}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;


export const ProductCardV2 = ({
  rating = 4.5,
  discount = 20,
  viewMode = 'grid',
  className,
  product
}: any) => {
  const { setItem, items } = useCartStoreListener();

  const isList = viewMode === 'list';
  const isAddedToCart = items.find((p) => p.id === product.id);

  // Helper to render 5 stars based on rating
  const renderStars = (rating: any) => {
    return [...Array(5)].map((_, i) => {
      const index = i + 1;
      if (index <= rating) return <MdStar key={i} className="text-yellow-400" size={16} />;
      if (index - 0.5 <= rating) return <MdStarHalf key={i} className="text-yellow-400" size={16} />;
      return <MdStarOutline key={i} className="text-gray-300" size={16} />;
    });
  };

  const handleAddToCart = () => {
    setItem(product);
  }

  return (
    <div className={cn(
      "group relative p-4 transition-all duration-300 ring-inset bg-white rounded-lg",
      isList ? "flex flex-row items-center gap-6" : "flex flex-col",
      className
    )}>
      {/* Discount Badge */}
      {discount > 0 && (
        <span className="absolute top-2 left-2 bg-accent text-white text-[10px] font-bold font-serif px-2 py-1 rounded-full z-10">
          -{discount}%
        </span>
      )}

      {/* Product Image Area */}
      <div className={cn(
        "bg-gray-50 rounded-md overflow-hidden flex items-center justify-center",
        isList ? "h-32 w-32 shrink-0" : "h-48 w-full mb-4"
      )}>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-contain p-2 transition-transform group-hover:scale-105"
        />
      </div>

      {/* Content Area */}
      <div className={cn(
        "flex flex-col",
        isList ? "flex-1 text-left" : "items-center text-center"
      )}>
        {/* Full Stars Rating */}
        <div className="flex items-center gap-0.5 mb-2">
          {renderStars(rating)}
          <span className="text-[11px] ml-1 text-gray-400">({rating})</span>
        </div>

        <h3 className="text-base font-semibold text-gray-800 hover:underline cursor-pointer leading-tight">
          {product.name} <br />
          <span className='font-sans text-sm text-gray-400 font-normal'>{"By Kelvin Klein"}</span>
        </h3>

        <div className={cn(
          'w-full flex items-center mt-3',
          isList ? "justify-start space-x-6" : "justify-center space-x-4"
        )}>
          <div className="flex flex-col">
            {/* Original Price (Strikethrough) if discount exists */}
            <p className="text-xl font-black text-black leading-none">
              <span className='text-xs mr-0.5'>GH₵</span>
              {product?.price?.toFixed(2)}
            </p>
          </div>

          <button
            className='relative group cursor-pointer px-4 ring-1 ring-inset rounded-full ring-gray-500 w-fit py-1 hover:ring-2 hover:ring-black transition-all'
            onClick={handleAddToCart}
          >
            <div className="relative">
              <MdAddShoppingCart color='black' size={18} />

              {/* Item-specific Quantity Badge */}
              {isAddedToCart && (
                <span className="absolute -top-3 -right-3 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[9px] font-black text-white ring-2 ring-white">
                  {isAddedToCart.qty}
                </span>
              )}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

