import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ApiService } from '../services/api.service';
import ProductCard from '../components/products/ProductCard';

const CategoryProducts = () => {
  const { source, category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = source === 'junin' 
          ? await ApiService.getJuninProducts()
          : await ApiService.getFakeStoreProducts();
        
        const filteredProducts = data.products || data;
        setProducts(filteredProducts.filter(p => p.category === category));
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [category, source]);

  if (loading) {
    return <div className="text-center py-8">Loading products...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 capitalize">{category} Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={`${source}-${product.id}`} product={product} source={source} />
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
