import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique d'inscription
    console.log('Registration attempt:', { username, email, password });
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Inscription</h2>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">S'inscrire</button>
        <p>
          Déjà un compte ? <Link to="/login">Se connecter</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
