import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TuTienda</h3>
            <p className="text-gray-400">
              Tu destino para las mejores compras online.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-indigo-400"><FiFacebook size={20} /></a>
              <a href="#" className="hover:text-indigo-400"><FiTwitter size={20} /></a>
              <a href="#" className="hover:text-indigo-400"><FiInstagram size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-gray-400 hover:text-white">Productos</Link></li>
              <li><Link to="/categories" className="text-gray-400 hover:text-white">Categorías</Link></li>
              <li><Link to="/offers" className="text-gray-400 hover:text-white">Ofertas</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">Sobre Nosotros</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Ayuda</h4>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
              <li><Link to="/shipping" className="text-gray-400 hover:text-white">Envíos</Link></li>
              <li><Link to="/returns" className="text-gray-400 hover:text-white">Devoluciones</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@tutienda.com</li>
              <li>Teléfono: (123) 456-7890</li>
              <li>Dirección: Calle Principal 123</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TuTienda. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
