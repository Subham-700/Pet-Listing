// src/pages/Home.jsx
import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../AppContext';
import PetList from '../components/PetList';
import SearchForm from '../components/SearchForm';
import Pagination from '../components/Pagination';
import axios from 'axios';

const Home = () => {
  const { pets, setPets, loading, error, setLoading, setError, resetState } = useContext(AppContext);
  const [searched, setSearched] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 9;

  const handleSearch = async (animal, location, breed, age, size) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}&age=${age}&size=${size}`);
      setPets(response.data.pets);
      setTotalPages(Math.ceil(response.data.pets.length / itemsPerPage));
      setCurrentPage(1);
      setSearched(true);
    } catch (error) {
      setError('Failed to fetch pets');
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleReset = () => {
    resetState();
    setSearched(false);
  };

  const paginatedPets = pets.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="container mx-auto p-4">
      <Link
        to="/"
        onClick={handleReset}
        className="text-3xl font-bold mb-4 text-blue-500 hover:text-blue-700 transition-colors duration-300"
      >
        Pet Listing
      </Link>
      <SearchForm onSearch={handleSearch} />
      {loading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {searched && <PetList pets={paginatedPets} />}
      {searched && pets.length > itemsPerPage && (
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      )}
    </div>
  );
};

export default Home;
