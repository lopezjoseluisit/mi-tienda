import React, { useState } from 'react';

const ProductGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-2 space-y-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`w-full aspect-square border rounded-lg overflow-hidden
              ${selectedImage === image ? 'ring-2 ring-indigo-500' : ''}
            `}
          >
            <img
              src={image}
              alt={`Product thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
      
      <div className="col-span-10">
        <div className="aspect-square rounded-lg overflow-hidden">
          <img
            src={selectedImage}
            alt="Selected product image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
