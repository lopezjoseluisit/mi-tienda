const FAQ = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Preguntas Frecuentes</h1>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">¿Cuánto tarda mi pedido?</h3>
          <p>Los pedidos suelen entregarse en 2-3 días hábiles.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">¿Cómo puedo pagar?</h3>
          <p>Aceptamos tarjetas de crédito, débito y transferencias bancarias.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">¿Tienen garantía los productos?</h3>
          <p>Todos nuestros productos cuentan con garantía de 30 días.</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;