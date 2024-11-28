import { useCart } from '@hooks/useCart';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Checkout = () => {
  const { items, getTotal } = useCart();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('¡Orden procesada con éxito!');
    navigate('/order-success');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Checkout Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Nombre completo</label>
              <input
                type="text"
                required
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                required
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Dirección</label>
              <textarea
                required
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Teléfono</label>
              <input
                type="tel"
                required
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Confirmar Pedido
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-medium mb-4">Resumen de la Orden</h2>
            
            {items.map(item => (
              <div key={item.id} className="flex justify-between py-2">
                <span>{item.title} x {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            
            <div className="border-t mt-4 pt-4">
              <div className="flex justify-between font-medium text-lg">
                <span>Total</span>
                <span>${getTotal().toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;