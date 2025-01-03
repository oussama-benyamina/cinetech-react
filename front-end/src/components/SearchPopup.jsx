import React from 'react';
import './SearchPopup.css';

const SearchPopup = ({ results, onClose }) => {
    if (!results) {
        return null; // ou un message d'erreur approprié
    }

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <h2>Résultats de la recherche</h2>
                <button className="close-button" onClick={onClose}>Fermer</button>
                {results.length > 0 ? (
                    <ul>
                        {results.map((anime) => (
                            <li key={anime.mal_id}>
                                <h3>{anime.title}</h3>
                                <p>{anime.synopsis ? anime.synopsis.substring(0, 100) + '...' : 'Pas de synopsis disponible'}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Aucun résultat trouvé.</p>
                )}
            </div>
        </div>
    );
};

export default SearchPopup;
