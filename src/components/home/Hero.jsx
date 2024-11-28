import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">
            Bienvenido a TuTienda
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            Descubre nuestra selección de productos de alta calidad
          </p>
          <Link
            to="/products"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300"
          >
            Explorar Productos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
