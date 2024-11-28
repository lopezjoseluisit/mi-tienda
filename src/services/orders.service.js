import api from './api';

export const OrdersService = {
  create: async (orderData) => {
    const response = await api.post('/orders', orderData);
    return response.data;
  },

  getAll: async () => {
    const response = await api.get('/orders');
    return response.data;
  },

  getById: async (orderId) => {
    const response = await api.get(`/orders/${orderId}`);
    return response.data;
  },

  updateStatus: async (orderId, status) => {
    const response = await api.patch(`/orders/${orderId}/status`, { status });
    return response.data;
  },

  getOrderHistory: async () => {
    const response = await api.get('/orders/history');
    return response.data;
  },

  cancelOrder: async (orderId) => {
    const response = await api.post(`/orders/${orderId}/cancel`);
    return response.data;
  },

  validatePayment: async (paymentData) => {
    const response = await api.post('/orders/validate-payment', paymentData);
    return response.data;
  }
};
