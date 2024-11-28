const Categories = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Categorías</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Electrónica</h2>
          <ul className="space-y-2">
            <li>Smartphones</li>
            <li>Laptops</li>
            <li>Accesorios</li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Ropa</h2>
          <ul className="space-y-2">
            <li>Hombre</li>
            <li>Mujer</li>
            <li>Accesorios</li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Hogar</h2>
          <ul className="space-y-2">
            <li>Decoración</li>
            <li>Muebles</li>
            <li>Jardín</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Categories;
