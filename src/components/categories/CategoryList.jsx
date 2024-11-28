import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ApiService } from '../../services/api.service';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await ApiService.getCategories();
        setCategories(data);
      } catch (error) {
        console.error('Error loading categories:', error);
      }
    };
    loadCategories();
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {categories.map(category => (
        <Link
          key={category}
          to={`/category/${category}`}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
        >
          <h3 className="text-lg font-medium capitalize">{category}</h3>
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;