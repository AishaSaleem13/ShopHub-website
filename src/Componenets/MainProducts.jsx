import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addtocart } from '../Store/cart';
import { useNavigate } from 'react-router-dom';
import { getFurnitureProducts } from '../config/Api.js';


import pic1 from '../assets/pictures/8.jpg';
import icon2 from '../assets/icons/graph.jpg';
import pic11 from '../assets/pictures/img22.jpg';
import pic2 from '../assets/pictures/img23.jpg';
import pic3 from '../assets/pictures/img24.jpg';
import pic4 from '../assets/pictures/img22.jpg';
import pic5 from '../assets/pictures/img22.jpg';
import pic6 from '../assets/pictures/img22.jpg';

const customImages = [pic11, pic2, pic3, pic4, pic5, pic6];

function MainProducts() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

 useEffect(() => {
  const fetchProducts = async () => {
    try {
      const res = await getFurnitureProducts();

      const repeated = Array.from({ length: 4 }, () => res.products).flat();

      setProducts(repeated);
    } catch (err) {
      console.error('Failed to fetch products:', err);
    }
  };

  fetchProducts();
}, []);


  return (
    <div>
      <div
        className="relative h-[250px] sm:h-[300px] md:h-[300px] w-full object-fit bg-cover bg-center flex items-center justify-center px-4 sm:px-8"
        style={{ backgroundImage: `url(${pic1})` }}
      >
        <div className="mt-16 p-6 rounded-md text-center w-full max-w-3xl">
          <h3 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-4">
            Chairs
          </h3>
          <div className="breadcrumbs text-sm text-white">
            <ul className="flex flex-wrap justify-center gap-2 sm:gap-3">
              <li>
                <a href="#" className="hover:underline flex items-center gap-1">
                  Home
                </a>
              </li>
              <li>/</li>
              <li>
                <a href="#" className="hover:underline flex items-center gap-1">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="p-6 max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">All Latest Designs</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
              className="w-full max-w-[180px] mx-auto overflow-hidden group cursor-pointer"
            >
              <div className="relative bg-gray-50 h-[140px] sm:h-[160px] md:h-[180px] overflow-hidden rounded-md">
                <img
                  src={customImages[index % customImages.length]}
                  alt={product.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full bg-white/30 backdrop-blur-sm py-1 px-2 flex justify-between items-center opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(addtocart(product));
                    }}
                    className="text-sm font-medium hover:text-red-500"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-start px-2 pt-1 pb-1 gap-[2px]">
                <img src={icon2} alt="icon" className="w-12 h-12 mb-1" />
                <h3 className="text-md font-semibold text-gray-800 leading-tight">{product.title}</h3>
                <p className="text-[10px] text-gray-500 leading-tight">{product.category}</p>
                <p className="text-[10px] text-gray-800 font-semibold">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainProducts;
