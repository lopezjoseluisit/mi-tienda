import React from 'react';
import { FiTrash2, FiMinus, FiPlus } from 'react-icons/fi';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
      <img 
        src={item.image} 
        alt={item.title}
        className="w-24 h-24 object-contain"
      />
      
      <div className="flex-grow">
        <h3 className="font-medium">{item.title}</h3>
        <p className="text-gray-500">${item.price}</p>
      </div>

      <div className="flex items-center gap-2">
        <button 
          onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
          className="p-1 hover:bg-gray-100 rounded"
        >
          <FiMinus />
        </button>
        
        <span className="w-8 text-center">{item.quantity}</span>
        
        <button 
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          className="p-1 hover:bg-gray-100 rounded"
        >
          <FiPlus />
        </button>
      </div>

      <button 
        onClick={() => onRemove(item.id)}
        className="p-2 text-red-500 hover:bg-red-50 rounded"
      >
        <FiTrash2 />
      </button>
    </div>
  );
};

export default CartItem;
