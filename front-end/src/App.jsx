import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AnimeList from './components/AnimeList';
import Footer from './components/Footer';
import AnimeDetail from './components/AnimeDetail';
import FlightSearch from './components/FlightSearch';
import Login from './components/Login';
import Register from './components/Register';
import SearchPopup from './components/SearchPopup';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSearch = async (term) => {
    setSearchTerm(term);
    if (term) {
      try {
        const response = await fetch(`https://api.jikan.moe/v4/anime?q=${term}`);
        const data = await response.json();
        setSearchResults(data.data || []);
        setIsPopupOpen(true);
      } catch (error) {
        console.error('Erreur lors de la recherche:', error);
      }
    } else {
      setSearchResults([]);
      setIsPopupOpen(false);
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
          <Header onSearch={handleSearch} />
          <main>
            <Routes>
              <Route path="/" element={<AnimeList searchTerm={searchTerm} />} />
              <Route path="/anime/:id" element={<AnimeDetail />} />
              <Route path="/flights" element={<FlightSearch />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
          <Footer />
          {isPopupOpen && <SearchPopup results={searchResults} onClose={closePopup} />}
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
