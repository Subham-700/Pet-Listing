// src/components/SearchForm.jsx
import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [animal, setAnimal] = useState('');
  const [location, setLocation] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [size, setSize] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(animal, location, breed, age, size);
    setAnimal('');
    setLocation('');
    setBreed('');
    setAge('');
    setSize('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 bg-white p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <input
          type="text"
          value={animal}
          onChange={(e) => setAnimal(e.target.value)}
          placeholder="Animal"
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          placeholder="Breed"
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          placeholder="Size"
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
