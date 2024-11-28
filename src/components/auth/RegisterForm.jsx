import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Input from '../common/Input';
import Button from '../common/Button';
import { AuthService } from '../../services/auth.service';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.target);
      const data = {
        email: formData.get('email'),
        username: formData.get('name'),
        password: formData.get('password'),
        name: {
          firstname: formData.get('name').split(' ')[0],
          lastname: formData.get('name').split(' ').slice(1).join(' ')
        }
      };

      await AuthService.register(data);
      toast.success('¡Registro exitoso! Por favor, inicia sesión.');
      navigate('/login');
    } catch (error) {
      toast.error('Error al registrar el usuario');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-3xl font-bold text-center">Crear Cuenta</h2>

      <Input
        label="Nombre Completo"
        name="name"
        placeholder="Tu nombre completo"
        required
        minLength={3}
      />

      <Input
        label="Email"
        type="email"
        name="email"
        placeholder="ejemplo@correo.com"
        required
      />

      <Input
        label="Contraseña"
        type="password"
        name="password"
        placeholder="Mínimo 6 caracteres"
        required
        minLength={6}
      />

      <Button 
        type="submit" 
        variant="primary" 
        className="w-full"
        loading={loading}
      >
        Registrarse
      </Button>

      <p className="text-center text-gray-600">
        ¿Ya tienes una cuenta?{' '}
        <Link to="/login" className="text-indigo-600 hover:text-indigo-500">
          Inicia Sesión
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;