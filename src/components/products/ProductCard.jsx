import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import { useFavorites } from '../../hooks/useFavorites';

const ProductCard = ({ product, source }) => {
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link to={`/product/${source}/${product.id}`}>
        <img 
          src={product.thumbnail || product.image} 
          alt={product.title}
          className="w-full h-48 object-cover"
        />
      </Link>
      
      <div className="p-4">
        <Link to={`/product/${source}/${product.id}`}>
          <h3 className="text-lg font-semibold mb-2 hover:text-indigo-600">
            {product.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 text-sm mb-4">
          {product.description?.substring(0, 100)}...
        </p>
        
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">${product.price}</span>
                      <div className="space-x-2">
                        <button 
                          onClick={() => isFavorite(product.id) ? removeFromFavorites(product.id) : addToFavorites(product)}
                          className={`p-2 rounded-full ${isFavorite(product.id) ? 'text-red-500' : 'text-gray-400'}`}
                        >
                          <HeartIcon className="h-6 w-6" />
                        </button>
            
                        <button
              onClick={() => addToCart(product)}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
