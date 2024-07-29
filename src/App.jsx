// src/App.jsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PetDetails from './pages/PetDetails'
import { AppProvider } from './AppContext'
import ErrorBoundary from './components/ErrorBoundary'

const App = () => {
  return (
    <AppProvider>
      <ErrorBoundary>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pets/:id" element={<PetDetails />} />
          </Routes>
        </Router>
      </ErrorBoundary>
    </AppProvider>
  )
}

export default App
