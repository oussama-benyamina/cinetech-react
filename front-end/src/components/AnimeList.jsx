import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './AnimeList.css';

const AnimeList = ({ searchTerm }) => {
    const [animes, setAnimes] = useState([]);
    const [filteredAnimes, setFilteredAnimes] = useState([]);

    useEffect(() => {
        const fetchAnimes = async () => {
            try {
                const response = await axios.get('https://api.jikan.moe/v4/top/anime');
                setAnimes(response.data.data);
                setFilteredAnimes(response.data.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des animes:', error);
            }
        };

        fetchAnimes();
    }, []);

    useEffect(() => {
        setFilteredAnimes(
            animes.filter(anime =>
                anime.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, animes]);

    return (
        <div className="anime-list">
            {filteredAnimes.map((anime) => (
                <div className="anime-card" key={anime.mal_id}>
                    <div className="anime-image">
                        <img src={anime.images.jpg.image_url} alt={anime.title} />
                    </div>
                    <div className="anime-info">
                        <h3>{anime.title}</h3>
                        <p>{anime.synopsis.substring(0, 100)}...</p>
                        <Link to={`/anime/${anime.mal_id}`} className="view-more-button">Voir plus</Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AnimeList;