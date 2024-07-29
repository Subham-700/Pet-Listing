// src/components/Carousel.jsx
import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const fade = useSpring({
    key: currentIndex,
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });

  return (
    <div className="relative">
      <animated.img src={images[currentIndex]} alt="pet" style={fade} className="w-full h-50 object-cover rounded-md mb-4" />
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white px-2 py-1 rounded-full"
          >
            &lt;
          </button>
          <button
            onClick={nextImage}
            className="absolute right-0 top-1/2 transform -translate-y-1/2  text-white px-2 py-1 rounded-full"
          >
            &gt;
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;
