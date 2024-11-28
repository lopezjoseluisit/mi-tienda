const Shipping = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Información de Envíos</h1>
      <div className="grid gap-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Métodos de Envío</h2>
          <ul className="space-y-4">
            <li>Envío Estándar (2-3 días)</li>
            <li>Envío Express (24 horas)</li>
            <li>Retiro en Tienda (Gratis)</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Zonas de Cobertura</h2>
          <p>Realizamos envíos a todo el país. Consulta los tiempos según tu ubicación.</p>
        </section>
      </div>
    </div>
  );
};

export default Shipping;