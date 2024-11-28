import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { toast } from 'react-hot-toast';
import axios from 'axios';

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      loading: false,
      error: null,
      login: async (credentials) => {
        set({ loading: true, error: null });
        try {
          const response = await axios.post('https://fakestoreapi.com/auth/login', credentials);
          const { token } = response.data;
          
          // Get user data
          const userResponse = await axios.get('https://fakestoreapi.com/users/1');
          const user = userResponse.data;
          
          set({ 
            user,
            token,
            isAuthenticated: true,
            loading: false 
          });
          
          toast.success('¡Inicio de sesión exitoso!');
          return true;
        } catch (error) {
          set({ 
            error: error.response?.data?.message || 'Error al iniciar sesión',
            loading: false 
          });
          toast.error('Error al iniciar sesión');
          return false;
        }
      },
      register: async (userData) => {
        set({ loading: true, error: null });
        try {
          const response = await axios.post('https://fakestoreapi.com/users', userData);
          toast.success('¡Registro exitoso! Por favor, inicia sesión.');
          set({ loading: false });
          return true;
        } catch (error) {
          set({ 
            error: error.response?.data?.message || 'Error al registrar',
            loading: false 
          });
          toast.error('Error al registrar usuario');
          return false;
        }
      },
      logout: () => {
        set({ 
          user: null, 
          token: null, 
          isAuthenticated: false 
        });
        toast.success('Sesión cerrada');
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);

export const useAuth = () => {
  const { 
    user, 
    token, 
    isAuthenticated, 
    loading, 
    error,
    login, 
    register, 
    logout 
  } = useAuthStore();
  
  return {
    user,
    token,
    isAuthenticated,
    loading,
    error,
    login,
    register,
    logout
  };
};