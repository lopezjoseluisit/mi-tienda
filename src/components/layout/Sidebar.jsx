import React from 'react';
import { Link } from 'react-router-dom';
import { FiX, FiHome, FiShoppingBag, FiHeart, FiUser, FiShoppingCart } from 'react-icons/fi';

const Sidebar = ({ isOpen, onClose }) => {
  const menuItems = [
    { icon: FiHome, label: 'Inicio', path: '/' },
    { icon: FiShoppingBag, label: 'Productos', path: '/products' },
    { icon: FiHeart, label: 'Favoritos', path: '/favorites' },
    { icon: FiShoppingCart, label: 'Carrito', path: '/cart' },
    { icon: FiUser, label: 'Mi Cuenta', path: '/profile' },
  ];

  return (
    <div className={`
      fixed inset-0 z-50 transition-opacity duration-300
      ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
    `}>
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      <div className={`
        fixed top-0 left-0 h-full w-64 bg-white shadow-xl
        transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-semibold">Menú</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <FiX size={20} />
          </button>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                    onClick={onClose}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;