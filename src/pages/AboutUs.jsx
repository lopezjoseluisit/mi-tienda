const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Sobre Nosotros</h1>
      <div className="grid gap-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Nuestra Historia</h2>
          <p className="text-gray-600">
            Somos una empresa comprometida con ofrecer los mejores productos y servicios a nuestros clientes desde 2010.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Misión</h2>
          <p className="text-gray-600">
            Brindar la mejor experiencia de compra online con productos de calidad y excelente servicio al cliente.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Valores</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Calidad</li>
            <li>Compromiso</li>
            <li>Innovación</li>
            <li>Servicio al cliente</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
