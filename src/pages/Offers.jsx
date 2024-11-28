const Offers = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Ofertas Especiales</h1>
      <div className="grid gap-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">Ofertas del Mes</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border p-4 rounded">
              <h3 className="font-medium">Descuento 30%</h3>
              <p>En productos seleccionados</p>
            </div>
            <div className="border p-4 rounded">
              <h3 className="font-medium">2x1</h3>
              <p>En segunda unidad</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">Próximas Ofertas</h2>
          <p>¡Mantente atento a nuestras próximas promociones!</p>
        </div>
      </div>
    </div>
  );
};

export default Offers;
