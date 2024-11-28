import React from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../../hooks/useCart';
import { useFavorites } from '../../hooks/useFavorites';
import { motion } from 'framer-motion';
import { formatPrice } from '../../utils/formatters';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { addToFavorites, isFavorite } = useFavorites();
  const { id, title, price, image } = product;

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const handleAddToFavorites = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToFavorites(product);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative aspect-square p-4">
        <Link to={`/products/${id}`}>
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
          />
        </Link>
        <button
          onClick={handleAddToFavorites}
          className={`absolute top-2 right-2 p-2 rounded-full bg-white shadow-md
            ${isFavorite(id) ? 'text-red-500' : 'text-gray-400'} 
            hover:text-red-500 transition-colors z-10`}
        >
          <FiHeart className="w-5 h-5" />
        </button>
      </div>

      <div className="p-4 border-t">
        <Link to={`/products/${id}`}>
          <h3 className="text-lg font-medium text-gray-900 hover:text-indigo-600 line-clamp-2 mb-2">
            {title}
          </h3>
        </Link>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            {formatPrice(price)}
          </span>
          <button
            onClick={handleAddToCart}
            className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <FiShoppingCart className="w-5 h-5" />
            <span>Agregar</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;