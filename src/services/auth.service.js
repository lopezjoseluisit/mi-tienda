import axios from 'axios';

// Usando la API de prueba para autenticación
const AUTH_API = 'https://fakestoreapi.com';

export const AuthService = {
  login: async (credentials) => {
    try {
      const response = await axios.post(`${AUTH_API}/auth/login`, credentials);
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        // Obtener datos del usuario
        const userResponse = await axios.get(`${AUTH_API}/users/1`);
        localStorage.setItem('user', JSON.stringify(userResponse.data));
        return userResponse.data;
      }
    } catch (error) {
      throw new Error('Usuario o contraseña incorrectos');
    }
  },

  register: async (userData) => {
    try {
      const response = await axios.post(`${AUTH_API}/users`, userData);
      return response.data;
    } catch (error) {
      throw new Error('Error al registrar el usuario');
    }
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  getCurrentUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  isAuthenticated: () => {
    return !!localStorage.getItem('token');
  }
};