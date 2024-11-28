import api from './api';

export const FavoritesService = {
  getFavorites: async () => {
    const response = await api.get('/favorites');
    return response.data;
  },

  addToFavorites: async (productId) => {
    const response = await api.post('/favorites', {
      productId,
    });
    return response.data;
  },

  removeFromFavorites: async (productId) => {
    const response = await api.delete(`/favorites/${productId}`);
    return response.data;
  },

  checkIsFavorite: async (productId) => {
    const response = await api.get(`/favorites/check/${productId}`);
    return response.data.isFavorite;
  },

  syncFavorites: async (productIds) => {
    const response = await api.post('/favorites/sync', {
      productIds,
    });
    return response.data;
  },

  clearAllFavorites: async () => {
    const response = await api.delete('/favorites');
    return response.data;
  },
};
