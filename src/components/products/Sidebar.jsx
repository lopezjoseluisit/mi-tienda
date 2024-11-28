import { useState } from 'react';

const Sidebar = ({ onFilterChange }) => {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
  ];

  return (
    <aside className="w-64 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Filtros</h3>
      
      <div className="mb-6">
        <h4 className="font-medium mb-2">Categorías</h4>
        {categories.map(category => (
          <label key={category} className="flex items-center mb-2">
            <input
              type="checkbox"
              className="mr-2"
              onChange={(e) => onFilterChange('category', category, e.target.checked)}
            />
            {category}
          </label>
        ))}
      </div>

      <div className="mb-6">
        <h4 className="font-medium mb-2">Precio</h4>
        <div className="space-y-2">
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[1]}
            onChange={(e) => {
              setPriceRange([priceRange[0], parseInt(e.target.value)]);
              onFilterChange('price', priceRange);
            }}
            className="w-full"
          />
          <div className="flex justify-between text-sm">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;