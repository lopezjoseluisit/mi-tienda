import { useFavorites } from '@hooks/useFavorites';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const { favorites, removeFromFavorites } = useFavorites();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Mis Favoritos</h1>

      {favorites.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl mb-4">No tienes productos favoritos</p>
          <Link 
            to="/products" 
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Explorar productos
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow p-4">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="font-medium mb-2 truncate">{product.title}</h3>
              <p className="text-blue-600 font-bold mb-4">${product.price}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => removeFromFavorites(product.id)}
                  className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
                >
                  Eliminar
                </button>
                <Link 
                  to={`/products/${product.id}`}
                  className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 text-center"
                >
                  Ver Detalles
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;