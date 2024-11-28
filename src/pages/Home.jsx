import React from 'react';
import { useProducts } from '../hooks/useProducts';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import CategoryList from '../components/home/CategoryList';
import Newsletter from '../components/home/Newsletter';

export default function Home() {
  const { products, loading } = useProducts();

  return (
    <div className="w-full">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FeaturedProducts products={products.slice(0, 4)} loading={loading} />
        <CategoryList categories={[/* your categories */]} />
      </div>
      <Newsletter />
    </div>
  );
}
