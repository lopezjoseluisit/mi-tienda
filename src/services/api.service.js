const API_URL = import.meta.env.VITE_API_URL;

export const ApiService = {
  // Get all products with optional limit and sort
  getAllProducts: async (limit = null, sort = null) => {
    let url = `${API_URL}/products`;
    if (limit) url += `?limit=${limit}`;
    if (sort) url += `${limit ? '&' : '?'}sort=${sort}`;
    const response = await fetch(url);
    return response.json();
  },

  // Get single product by ID
  getProductById: async (id) => {
    const response = await fetch(`${API_URL}/products/${id}`);
    return response.json();
  },

  // Get all categories
  getCategories: async () => {
    const response = await fetch(`${API_URL}/products/categories`);
    return response.json();
  },

  // Get products by category with optional limit and sort
  getProductsByCategory: async (category, limit = null, sort = null) => {
    let url = `${API_URL}/products/category/${category}`;
    if (limit) url += `?limit=${limit}`;
    if (sort) url += `${limit ? '&' : '?'}sort=${sort}`;
    const response = await fetch(url);
    return response.json();
  },

  // Add new product
  addProduct: async (productData) => {
    const response = await fetch(`${API_URL}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData)
    });
    return response.json();
  },

  // Update product
  updateProduct: async (id, productData) => {
    const response = await fetch(`${API_URL}/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData)
    });
    return response.json();
  }
};