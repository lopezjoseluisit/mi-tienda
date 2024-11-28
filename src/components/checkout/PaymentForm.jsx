import React, { useState } from 'react';
import Input from '../common/Input';
import Button from '../common/Button';

const PaymentForm = ({ onSubmit, total }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    try {
      await onSubmit(data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Información de Pago</h2>
      
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <p className="text-lg font-medium">Total a Pagar: ${total.toFixed(2)}</p>
      </div>

      <Input
        label="Número de Tarjeta"
        name="cardNumber"
        placeholder="1234 5678 9012 3456"
        required
      />

      <div className="grid grid-cols-2 gap-6">
        <Input
          label="Fecha de Expiración"
          name="expiry"
          placeholder="MM/YY"
          required
        />
        <Input
          label="CVV"
          name="cvv"
          type="password"
          maxLength="4"
          required
        />
      </div>

      <Input
        label="Nombre en la Tarjeta"
        name="cardName"
        required
      />

      <Button 
        type="submit" 
        variant="primary" 
        className="w-full"
        loading={loading}
      >
        Pagar ${total.toFixed(2)}
      </Button>
    </form>
  );
};

export default PaymentForm;
