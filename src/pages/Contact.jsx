const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Contacto</h1>
      <form className="max-w-lg space-y-6">
        <div>
          <label className="block mb-2">Nombre</label>
          <input type="text" className="w-full border rounded-lg px-4 py-2" />
        </div>
        <div>
          <label className="block mb-2">Email</label>
          <input type="email" className="w-full border rounded-lg px-4 py-2" />
        </div>
        <div>
          <label className="block mb-2">Mensaje</label>
          <textarea className="w-full border rounded-lg px-4 py-2 h-32"></textarea>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
};

export default Contact;