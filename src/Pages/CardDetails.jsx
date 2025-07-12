import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../config/Api';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProductById(id);
        setProduct(productData);
        setSelectedImage(productData.thumbnail);
      } catch (err) {
        console.error('Error fetching product:', err);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-6 flex flex-col md:flex-row gap-6">
      {/* Left Section */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <img
          src={selectedImage}
          alt={product.title}
          className="w-64 h-64 object-cover rounded-lg shadow-lg"
        />
        <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
        <p className="text-gray-700 mt-2 text-center">{product.description}</p>
        <p className="mt-2 text-lg font-bold">${product.price}</p>
      </div>

      {/* Right Carousel */}
      <div className="flex-1 flex items-center justify-center">
        <div className="flex gap-3 overflow-x-auto scrollbar-hide max-w-full p-2">
          {[product.thumbnail, ...(product.images || [])].map((img, index) => (
            <img
              key={index}
              src={img}
              onClick={() => setSelectedImage(img)}
              alt={`product-${index}`}
              className={`w-24 h-24 object-cover rounded-lg cursor-pointer border-2 ${
                selectedImage === img ? 'border-indigo-600' : 'border-transparent'
              } transition-transform hover:scale-105`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
