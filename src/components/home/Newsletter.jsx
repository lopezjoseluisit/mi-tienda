import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
  };

  return (
    <section className="bg-indigo-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Suscríbete a nuestro Newsletter
        </h2>
        <p className="text-lg mb-8 opacity-90">
          Recibe las últimas ofertas y novedades directamente en tu correo.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu correo electrónico"
              className="flex-grow px-4 py-3 rounded-lg text-gray-900"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-100"
            >
              Suscribirse
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
