import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import RegisterForm from '../components/auth/RegisterForm';
import { register } from '../store/slices/authSlice';

export default function Register() {
  const dispatch = useDispatch();
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  const handleSubmit = (userData) => {
    dispatch(register(userData));
  };

  if (isAuthenticated) {
    return <Navigate to="/profile" />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow">
        <RegisterForm onSubmit={handleSubmit} loading={loading} />
      </div>
    </div>
  );
}
