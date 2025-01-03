import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <h3>Cienetch Anime</h3>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/login">Connexion</a></li>
          <li><a href="/register">Inscription</a></li>
        </ul>
      </nav>
      <p>&copy; {new Date().getFullYear()} Cienetch Anime. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;
