// src/components/PetList.jsx
import React from 'react';
import Carousel from './Carousel';
import { useSpring, animated } from '@react-spring/web';

const PetList = ({ pets }) => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      {pets.map((pet) => (
        <animated.div key={pet.id} style={fadeIn} className="bg-white p-4 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
          {pet.images && pet.images.length > 0 && <Carousel images={pet.images} />}
          <h2 className="text-xl font-bold mb-2">{pet.name}</h2>
          <p className="text-gray-700 mb-2">Breed: {pet.breed}</p>
          {/* <p className="text-gray-700 mb-2">Age: {pet.age}</p>
          <p className="text-gray-700 mb-2">Size: {pet.size}</p> */}
          <p className="text-gray-700">{pet.description}</p>
        </animated.div>
      ))}
    </div>
  );
};

export default PetList;
