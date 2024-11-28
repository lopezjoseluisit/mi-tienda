import React from 'react';
import { FiTruck, FiClock } from 'react-icons/fi';

const ShippingMethod = ({ methods, selectedMethod, onSelect }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold mb-4">Método de Envío</h2>

      {methods.map(method => (
        <label
          key={method.id}
          className={`
            flex items-center p-4 border rounded-lg cursor-pointer
            ${selectedMethod === method.id ? 'border-indigo-600 bg-indigo-50' : 'hover:bg-gray-50'}
          `}
        >
          <input
            type="radio"
            name="shippingMethod"
            value={method.id}
            checked={selectedMethod === method.id}
            onChange={() => onSelect(method.id)}
            className="mr-4"
          />
          
          <div className="flex-grow">
            <div className="flex items-center gap-2 mb-1">
              {method.type === 'express' ? <FiClock /> : <FiTruck />}
              <span className="font-medium">{method.name}</span>
            </div>
            <p className="text-sm text-gray-600">{method.description}</p>
            <p className="text-sm text-gray-600">
              Tiempo estimado: {method.estimatedTime}
            </p>
          </div>

          <span className="font-medium">
            {method.price === 0 ? 'Gratis' : `$${method.price.toFixed(2)}`}
          </span>
        </label>
      ))}
    </div>
  );
};

export default ShippingMethod;
