import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiUser } from 'react-icons/fi';
import { useCart } from '@hooks/useCart';
import { useAuth } from '../../hooks/useAuth';
import { useFavorites } from '@hooks/useFavorites';
import ThemeToggle from './ThemeToggle';
import SearchBar from '../common/SearchBar';
import CartIcon from '@components/cart/CartIcon';
import CartDropdown from '@components/cart/CartDropdown';
import { HeartIcon } from '@heroicons/react/24/outline';const Navbar = ({ onMenuClick }) => {
  const { items } = useCart();
  const { isAuthenticated, user, logout } = useAuth();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { favorites } = useFavorites();
  
  return (
    <nav className="bg-white shadow-sm dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left section */}
          <div className="flex items-center">
            <button 
              onClick={onMenuClick}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 lg:hidden"
            >
              <FiMenu className="h-6 w-6" />
            </button>
            
            <Link to="/" className="ml-4 flex items-center space-x-2">
              <span className="font-bold text-xl text-indigo-600 dark:text-indigo-400">TuTienda</span>
            </Link>
          </div>

          {/* Center section */}
          <div className="hidden lg:block flex-1 max-w-2xl mx-8">
            <SearchBar />
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link to="/favorites" className="relative">
              <HeartIcon className="h-6 w-6" />
              {favorites.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {favorites.length}
                </span>
              )}
            </Link>
            
            <div className="relative" onMouseEnter={() => setIsCartOpen(true)} onMouseLeave={() => setIsCartOpen(false)}>
              <CartIcon />
              {isCartOpen && <CartDropdown />}
            </div>
            
            {isAuthenticated ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  <FiUser className="h-6 w-6" />
                  <span className="hidden md:block">{user?.name?.firstname}</span>
                </button>
                <div className="absolute right-0 w-48 mt-2 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link 
                    to="/profile" 
                    className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Mi Perfil
                  </Link>
                  <button 
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Cerrar Sesión
                  </button>
                </div>
              </div>
            ) : (
              <Link 
                to="/login"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Iniciar Sesión
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;