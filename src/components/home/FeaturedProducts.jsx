import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const FeaturedProducts = ({ products }) => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Productos Destacados</h2>
          <Link 
            to="/products" 
            className="flex items-center text-indigo-600 hover:text-indigo-700 transition-colors duration-200"
          >
            Ver todos <FiArrowRight className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Link 
              key={product.id} 
              to={`/products/${product.id}`}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300" />
              </div>
              
              <div className="mt-4 space-y-2">
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600 transition-colors duration-200">
                  {product.title}
                </h3>
                <p className="text-gray-500">{product.category}</p>
                <p className="text-xl font-bold text-gray-900">
                  ${product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

