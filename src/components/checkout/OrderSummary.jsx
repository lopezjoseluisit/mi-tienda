import React from 'react';

const OrderSummary = ({ items, subtotal, shipping, tax, total }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Resumen del Pedido</h2>
      
      <div className="space-y-4 mb-6">
        {items.map(item => (
          <div key={item.id} className="flex items-center gap-4">
            <img 
              src={item.image} 
              alt={item.title}
              className="w-16 h-16 object-contain"
            />
            <div className="flex-grow">
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-gray-500">Cantidad: {item.quantity}</p>
            </div>
            <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>

      <div className="space-y-2 border-t pt-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Envío</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Impuestos</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-semibold text-lg border-t pt-2 mt-2">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
