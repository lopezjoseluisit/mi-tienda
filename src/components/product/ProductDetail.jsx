import React, { useState } from 'react';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';
import { useFavorites } from '../../context/FavoritesContext';
import Button from '../common/Button';

const ProductDetail = ({ product }) => {
  const { addToCart } = useCart();
  const { addToFavorites, isFavorite } = useFavorites();
  const [quantity, setQuantity] = useState(1);
  
  const { id, title, price, description, image, category } = product;

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-[500px] object-contain"
        />
        <button
          onClick={() => addToFavorites(product)}
          className={`absolute top-4 right-4 p-3 rounded-full bg-white shadow-md
            ${isFavorite(id) ? 'text-red-500' : 'text-gray-400'} 
            hover:text-red-500 transition-colors`}
        >
          <FiHeart className="w-6 h-6" />
        </button>
      </div>

      <div className="space-y-6">
        <div>
          <p className="text-indigo-600 font-medium mb-2">{category}</p>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-gray-600">{description}</p>
        </div>

        <div className="border-t pt-6">
          <div className="flex items-center justify-between mb-6">
            <span className="text-3xl font-bold text-gray-900">
              ${price.toFixed(2)}
            </span>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 border rounded"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 border rounded"
              >
                +
              </button>
            </div>
          </div>

          <Button
            variant="primary"
            className="w-full"
            onClick={() => addToCart({ ...product, quantity })}
          >
            <FiShoppingCart className="mr-2" />
            Añadir al Carrito
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
