import React from 'react';
import { Link } from 'react-router-dom';

const OrderHistory = ({ orders }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Historial de Pedidos</h2>

      {orders.length === 0 ? (
        <p className="text-gray-500">No hay pedidos realizados aún.</p>
      ) : (
        <div className="space-y-4">
          {orders.map(order => (
            <div key={order.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="font-medium">Pedido #{order.id}</p>
                  <p className="text-sm text-gray-500">{order.date}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  order.status === 'completed' ? 'bg-green-100 text-green-800' :
                  order.status === 'processing' ? 'bg-blue-100 text-blue-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {order.status}
                </span>
              </div>

              <div className="space-y-2">
                {order.items.map(item => (
                  <div key={item.id} className="flex items-center gap-4">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-16 h-16 object-contain"
                    />
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-gray-500">
                        Cantidad: {item.quantity} - ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t flex justify-between items-center">
                <p className="font-medium">Total: ${order.total.toFixed(2)}</p>
                <Link 
                  to={`/orders/${order.id}`}
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  Ver detalles
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
