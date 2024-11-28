import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    setItems([...items, product]);
    setTotal(total + product.price);
  };

  const removeFromCart = (productId) => {
    const newItems = items.filter((item) => item.id !== productId);
    setItems(newItems);
    setTotal(newItems.reduce((sum, item) => sum + item.price, 0));
  };

  return (
    <CartContext.Provider value={{ items, total, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
