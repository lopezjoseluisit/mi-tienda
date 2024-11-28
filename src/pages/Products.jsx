import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { useFavorites } from '@hooks/useFavorites';
import Sidebar from '../components/products/Sidebar';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('search');
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const searchResults = products.filter(product => 
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(searchResults);
    } else {
      setFilteredProducts(products);
    }
  }, [searchTerm, products]);

  const fetchProducts = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/products`);
    const data = await response.json();
    setProducts(data);
    setFilteredProducts(data);
  };

  const handleFilterChange = (type, category, checked) => {
    if (type === 'category') {
      let newCategories;
      if (checked) {
        newCategories = [...selectedCategories, category];
      } else {
        newCategories = selectedCategories.filter(c => c !== category);
      }
      setSelectedCategories(newCategories);

      const filtered = products.filter(product => 
        newCategories.length === 0 || newCategories.includes(product.category)
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-8">
        <Sidebar onFilterChange={handleFilterChange} />
        <div className="flex-1">
          {searchTerm && (
            <h2 className="text-xl mb-4">
              Resultados para: "{searchTerm}" ({filteredProducts.length} productos encontrados)
            </h2>
          )}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow p-4 relative">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    isFavorite(product.id) 
                      ? removeFromFavorites(product.id)
                      : addToFavorites(product);
                  }}
                  className="absolute top-4 right-4 z-10"
                >
                  {isFavorite(product.id) ? (
                    <HeartSolidIcon className="h-6 w-6 text-red-500" />
                  ) : (
                    <HeartIcon className="h-6 w-6 text-gray-400 hover:text-red-500" />
                  )}
                </button>
                
                <Link to={`/products/${product.id}`}>
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-48 object-contain mb-4"
                  />
                  <h3 className="font-medium mb-2 truncate">{product.title}</h3>
                  <p className="text-blue-600 font-bold">${product.price}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;