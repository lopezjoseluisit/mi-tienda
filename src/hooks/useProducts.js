import { useState, useEffect } from 'react';
import axios from 'axios';

export const useProducts = (initialCategory = 'all') => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    category: initialCategory,
    priceRange: [0, 1000],
    search: ''
  });
  const [sortBy, setSortBy] = useState('default');

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const url = filters.category === 'all' 
          ? `${import.meta.env.VITE_API_URL}/products`
          : `${import.meta.env.VITE_API_URL}/products/category/${filters.category}`;
        
        const response = await axios.get(url);
        let filteredProducts = response.data;

        // Apply price filter
        filteredProducts = filteredProducts.filter(product => 
          product.price >= filters.priceRange[0] && 
          product.price <= filters.priceRange[1]
        );

        // Apply search filter
        if (filters.search) {
          const searchTerm = filters.search.toLowerCase();
          filteredProducts = filteredProducts.filter(product =>
            product.title.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
          );
        }

        // Apply sorting
        switch (sortBy) {
          case 'price-asc':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
          case 'price-desc':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
          case 'name-asc':
            filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
            break;
          case 'name-desc':
            filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
            break;
        }

        setProducts(filteredProducts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [filters, sortBy]);

  const updateFilters = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const resetFilters = () => {
    setFilters({
      category: 'all',
      priceRange: [0, 1000],
      search: ''
    });
    setSortBy('default');
  };

  const sortProducts = (type) => {
    setSortBy(type);
  };

  return {
    products,
    loading,
    error,
    filters,
    updateFilters,
    resetFilters,
    sortProducts,
    sortBy
  };
};