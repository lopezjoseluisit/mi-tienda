import React from 'react';
import Input from '../common/Input';
import Button from '../common/Button';

const CheckoutForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Información de Envío</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Nombre"
          name="firstName"
          required
        />
        <Input
          label="Apellidos"
          name="lastName"
          required
        />
      </div>

      <Input
        label="Email"
        type="email"
        name="email"
        required
      />

      <Input
        label="Teléfono"
        type="tel"
        name="phone"
        required
      />

      <Input
        label="Dirección"
        name="address"
        required
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Input
          label="Ciudad"
          name="city"
          required
        />
        <Input
          label="Estado"
          name="state"
          required
        />
        <Input
          label="Código Postal"
          name="zipCode"
          required
        />
      </div>

      <Button type="submit" variant="primary" className="w-full">
        Continuar al Pago
      </Button>
    </form>
  );
};

export default CheckoutForm;
