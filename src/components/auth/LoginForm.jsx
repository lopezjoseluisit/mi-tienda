import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Input from '../common/Input';
import Button from '../common/Button';
import { useAuth } from '@hooks/useAuth';

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleQuickLogin = () => {
    const apiCredentials = {
      username: "mor_2314",
      password: "83r5^_"
    };
    handleLogin(apiCredentials);
  };

  const handleLogin = async (credentials) => {
    setLoading(true);
    try {
      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });
      
      const data = await response.json();
      
      if (data.token) {
        toast.success('¡Inicio de sesión exitoso!');
        localStorage.setItem('token', data.token);
        navigate('/products');
      } else {
        throw new Error('Error en la autenticación');
      }
    } catch (error) {
      toast.error('Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-6 bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          Iniciar Sesión
        </h2>

        <Button
          onClick={handleQuickLogin}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg transition"
        >
          Acceso con API
        </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Credenciales de la API</span>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg text-sm">
          <p><strong>Username:</strong> mor_2314</p>
          <p><strong>Password:</strong> 83r5^_</p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;