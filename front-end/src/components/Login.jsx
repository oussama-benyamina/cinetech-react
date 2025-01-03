import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique de connexion
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Connexion</h2>
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
        <button type="submit">Se connecter</button>
        <p>
          Pas encore de compte ? <Link to="/register">S'inscrire</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
