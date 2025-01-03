import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './AnimeDetail.css';

const AnimeDetail = () => {
    const { id } = useParams();
    const [anime, setAnime] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAnimeDetails = async () => {
            try {
                const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
                setAnime(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error('Erreur lors de la récupération des détails de l\'anime:', error);
                setError('Erreur lors de la récupération des détails.');
                setLoading(false);
            }
        };

        fetchAnimeDetails();
    }, [id]);

    const handleRetain = () => {
        // Logique pour retenir l'anime (ajouter à une liste de favoris, par exemple)
        console.log('Anime retenu:', anime.title);
    };

    if (loading) return <div>Chargement...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="anime-detail">
            <h2>{anime.title}</h2>
            <img src={anime.images.jpg.image_url} alt={anime.title} />
            <p>{anime.synopsis}</p>
            <button onClick={handleRetain}>Retenir</button>
        </div>
    );
};

export default AnimeDetail; 