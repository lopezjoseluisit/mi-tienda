import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
import { useFavorites } from '@hooks/useFavorites';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';

const RelatedProducts = ({ products }) => {
  const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites();

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Productos Relacionados</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={4}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {products.map(product => (
          <SwiperSlide key={product.id}>
            <div className="relative">
              <button
                onClick={() => isFavorite(product.id) ? removeFromFavorites(product.id) : addToFavorites(product)}
                className="absolute top-2 right-2 z-10"
              >
                {isFavorite(product.id) ? (
                  <HeartSolidIcon className="h-6 w-6 text-red-500" />
                ) : (
                  <HeartIcon className="h-6 w-6 text-gray-400 hover:text-red-500" />
                )}
              </button>
              <Link to={`/products/${product.id}`}>
                <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-48 object-contain mb-4"
                  />
                  <h3 className="font-medium text-sm mb-2 truncate">{product.title}</h3>
                  <p className="text-blue-600 font-bold">${product.price}</p>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RelatedProducts;