const Help = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Centro de Ayuda</h1>
      <div className="grid gap-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">¿Cómo podemos ayudarte?</h2>
          <p>Encuentra respuestas rápidas a tus preguntas más frecuentes o contacta con nuestro equipo de soporte.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Canales de Atención</h2>
          <ul className="space-y-4">
            <li>Email: soporte@tienda.com</li>
            <li>WhatsApp: +1234567890</li>
            <li>Horario: Lunes a Viernes 9:00 - 18:00</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Help;