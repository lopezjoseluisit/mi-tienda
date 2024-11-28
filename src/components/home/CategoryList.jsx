import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/products/categories`);
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return null;

  const categoryIcons = {
    "electronics": "🔌",
    "jewelery": "💍",
    "men's clothing": "👔",
    "women's clothing": "👗"
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link 
                to={`/products?category=${category}`}
                className="block group"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden aspect-square flex items-center justify-center text-4xl">
                  <span className="transform group-hover:scale-110 transition-transform duration-300">
                    {categoryIcons[category]}
                  </span>
                </div>
                <h3 className="mt-4 text-center font-medium text-gray-900 group-hover:text-indigo-600 capitalize">
                  {category.replace(/-/g, ' ')}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryList;