import React, { useState } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';

const ProfileInfo = ({ user, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    try {
      await onUpdate(data);
      setIsEditing(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Información Personal</h2>
        <Button 
          variant="outline"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? 'Cancelar' : 'Editar'}
        </Button>
      </div>

      {isEditing ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Nombre"
              name="firstName"
              defaultValue={user.firstName}
              required
            />
            <Input
              label="Apellidos"
              name="lastName"
              defaultValue={user.lastName}
              required
            />
          </div>

          <Input
            label="Email"
            type="email"
            name="email"
            defaultValue={user.email}
            required
          />

          <Input
            label="Teléfono"
            type="tel"
            name="phone"
            defaultValue={user.phone}
          />

          <Button 
            type="submit" 
            variant="primary"
            loading={loading}
          >
            Guardar Cambios
          </Button>
        </form>
      ) : (
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500">Nombre completo</p>
            <p className="font-medium">{user.firstName} {user.lastName}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-medium">{user.email}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Teléfono</p>
            <p className="font-medium">{user.phone || 'No especificado'}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileInfo;
