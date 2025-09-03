import React, { useEffect, useRef } from 'react';

const brands = [
  'IKEA',
  'Ashley',
  'Wayfair',
  'La-Z-Boy',
  'Havertys',
  'Urban Ladder',
  'Pottery Barn',
  'West Elm',
];

function BrandSlider() {
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const container = containerRef.current;
      if (container) {
        container.scrollLeft += 1;
        if (container.scrollLeft >= container.scrollWidth / 4) {
          container.scrollLeft = 0;
        }
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-10">
      <h2 className="text-xl md:text-2xl font-bold text-start ml-6 md:ml-12 mb-6">Top Furniture Brands</h2>
      <div
        ref={containerRef}
        className="overflow-hidden whitespace-nowrap w-full"
      >
        <div className="inline-flex gap-8 md:gap-8 text-lg md:text-5xl font-bold text-gray-800 tracking-wide">
          {brands.concat(brands).map((brand, index) => (
            <div
              key={index}
              className="min-w-[180px] md:min-w-[300px] text-center hover:scale-105 transition-transform duration-300"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrandSlider;
