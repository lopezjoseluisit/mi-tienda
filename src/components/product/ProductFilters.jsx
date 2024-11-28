import React from 'react';
import { motion } from 'framer-motion';
import { FiFilter, FiX } from 'react-icons/fi';

const ProductFilters = ({ filters, onFilterChange, onSort, sortBy, onReset }) => {
  const categories = ['all', 'electronics', 'jewelery', "men's clothing", "women's clothing"];
  const sortOptions = [
    { value: 'default', label: 'Default' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'name-asc', label: 'Name: A-Z' },
    { value: 'name-desc', label: 'Name: Z-A' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="sticky top-4 space-y-6"
    >
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <FiFilter className="w-5 h-5 text-indigo-600" />
            <h3 className="text-lg font-semibold">Filters</h3>
          </div>
          <button
            onClick={onReset}
            className="text-sm text-gray-500 hover:text-indigo-600 flex items-center space-x-1"
          >
            <FiX className="w-4 h-4" />
            <span>Reset</span>
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="font-medium mb-3">Sort By</h4>
            <select
              value={sortBy}
              onChange={(e) => onSort(e.target.value)}
              className="input"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <h4 className="font-medium mb-3">Categories</h4>
            <div className="space-y-2">
              {categories.map(category => (
                <label key={category} className="flex items-center cursor-pointer group">
                  <input
                    type="radio"
                    name="category"
                    value={category}
                    checked={filters.category === category}
                    onChange={(e) => onFilterChange({ category: e.target.value })}
                    className="form-radio text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="ml-2 text-gray-700 group-hover:text-indigo-600 transition-colors">
                    {category.split('-').map(word => 
                      word.charAt(0).toUpperCase() + word.slice(1)
                    ).join(' ')}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-3">Price Range</h4>
            <div className="space-y-4">
              <input
                type="range"
                min="0"
                max="1000"
                step="10"
                value={filters.priceRange[1]}
                onChange={(e) => onFilterChange({ 
                  priceRange: [0, parseInt(e.target.value)] 
                })}
                className="w-full accent-indigo-600"
              />
              <div className="flex items-center justify-between">
                <span className="badge-secondary">$0</span>
                <span className="badge-primary">${filters.priceRange[1]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductFilters;