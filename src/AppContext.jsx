// src/AppContext.js
import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const resetState = () => {
    setPets([]);
    setLoading(false);
    setError(null);
  };

  return (
    <AppContext.Provider value={{ pets, setPets, loading, setLoading, error, setError, resetState }}>
      {children}
    </AppContext.Provider>
  );
};
