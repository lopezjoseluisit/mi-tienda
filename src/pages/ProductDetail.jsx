import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '@hooks/useCart';
import RelatedProducts from '../components/products/RelatedProducts';
import { useFavorites } from '@hooks/useFavorites';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { addToCart } = useCart();
  const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);

      // Fetch related products from same category
      const relatedResponse = await fetch(`https://fakestoreapi.com/products/category/${data.category}`);
      const relatedData = await relatedResponse.json();
      setRelatedProducts(relatedData.filter(p => p.id !== data.id));
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 1
      });
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Main Product Section */}
      <div className="max-w-5xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="max-w-md mx-auto">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[400px] object-contain"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <div className="text-2xl font-bold mb-6">${product.price}</div>
            
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={() => isFavorite(product.id) ? removeFromFavorites(product.id) : addToFavorites(product)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:bg-gray-50"
              >
                {isFavorite(product.id) ? (
                  <HeartSolidIcon className="h-6 w-6 text-red-500" />
                ) : (
                  <HeartIcon className="h-6 w-6 text-gray-400" />
                )}
                {isFavorite(product.id) ? 'Quitar de favoritos' : 'Agregar a favoritos'}
              </button>
              {/* Otros botones de acción */}
            </div>
            
            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition"
              >
                Agregar al Carrito
              </button>
              
              <Link
                to="/products"
                className="block w-full text-center border border-blue-600 text-blue-600 py-3 px-6 rounded-lg hover:bg-blue-50 transition"
              >
                Seguir Comprando
              </Link>
            </div>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <RelatedProducts products={relatedProducts} />
      )}
    </div>
  );
};

export default ProductDetail;