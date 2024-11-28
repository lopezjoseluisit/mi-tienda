import api from './api';

export const ProductsService = {
  getAll: async ({ category = null, sort = 'default', limit = 20 } = {}) => {
    let url = '/products';
    if (category && category !== 'all') {
      url = `/products/category/${category}`;
    }

    const response = await api.get(url);
    let products = response.data;

    // Apply sorting
    switch (sort) {
      case 'price-asc':
        products.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        products.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        products.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'name-desc':
        products.sort((a, b) => b.title.localeCompare(a.title));
        break;
    }

    return products.slice(0, limit);
  },

  getById: async (id) => {
    const response = await api.get(`/products/${id}`);
    return response.data;
  },

  getCategories: async () => {
    const response = await api.get('/products/categories');
    return response.data;
  },

  search: async (query) => {
    const response = await api.get('/products');
    const products = response.data;
    return products.filter(product => 
      product.title.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase())
    );
  }
};