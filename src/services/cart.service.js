import api from './api';

export const CartService = {
  getCart: async () => {
    const response = await api.get('/cart');
    return response.data;
  },

  addToCart: async (productId, quantity = 1) => {
    const response = await api.post('/cart/items', {
      productId,
      quantity
    });
    return response.data;
  },

  updateQuantity: async (itemId, quantity) => {
    const response = await api.patch(`/cart/items/${itemId}`, {
      quantity
    });
    return response.data;
  },

  removeFromCart: async (itemId) => {
    const response = await api.delete(`/cart/items/${itemId}`);
    return response.data;
  },

  clearCart: async () => {
    const response = await api.delete('/cart');
    return response.data;
  },

  applyCoupon: async (couponCode) => {
    const response = await api.post('/cart/apply-coupon', {
      code: couponCode
    });
    return response.data;
  },

  getShippingMethods: async () => {
    const response = await api.get('/cart/shipping-methods');
    return response.data;
  },

  setShippingMethod: async (methodId) => {
    const response = await api.post('/cart/shipping-method', {
      methodId
    });
    return response.data;
  }
};
