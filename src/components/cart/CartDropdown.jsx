import { useCart } from '@hooks/useCart';
import { Link } from 'react-router-dom';

const CartDropdown = () => {
  const { items, removeFromCart, updateQuantity, getTotal } = useCart();

  return (
    <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg z-50">
      <div className="p-4">
        <div className="max-h-96 overflow-auto">
          {items.map(item => (
            <div key={item.id} className="flex gap-4 mb-4">
              <img src={item.image} alt={item.title} className="w-20 h-20 object-cover" />
              <div className="flex-1">
                <h3 className="text-sm font-medium">{item.title}</h3>
                <div className="flex items-center gap-2">
                  <select 
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                    className="border rounded p-1"
                  >
                    {[1,2,3,4,5].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                  <span>${item.price * item.quantity}</span>
                  <button onClick={() => removeFromCart(item.id)}>×</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="border-t mt-4 pt-4">
          <div className="flex justify-between font-medium">
            <span>Total:</span>
            <span>${getTotal()}</span>
          </div>
          <Link 
            to="/cart" 
            className="block w-full text-center bg-blue-600 text-white py-2 rounded mt-4"
          >
            Ver Carrito
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartDropdown;