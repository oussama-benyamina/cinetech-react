import React from 'react';
import './Header.css'; // Vous pouvez ajouter des styles spécifiques pour le header

const Header = React.memo(({ onSearch }) => {
  return (
    <header className="header">
      <h1>Cienetch Anime</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/login">Connexion</a></li>
          <li><a href="/register">Inscription</a></li>
        </ul>
      </nav>
      <input
        type="text"
        placeholder="Rechercher un anime..."
        onChange={(e) => onSearch(e.target.value)}
        className="search-input"
      />
      <hr className="header-line" />
    </header>
  );
};

export default Header; 