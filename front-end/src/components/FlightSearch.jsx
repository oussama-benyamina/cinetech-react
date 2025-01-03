import React, { useState } from 'react';

const FlightSearch = () => {
    const [flights, setFlights] = useState([]);
    const [error, setError] = useState(null);
    const apiKey = "VOTRE_CLE_API"; // Remplacez par votre clé API
    const origin = "CDG-sky"; // Paris-Charles de Gaulle
    const destination = "JFK-sky"; // New York-JFK
    const date = "2024-12-15";

    const fetchFlights = async () => {
        try {
            const response = await fetch(`https://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/FR/EUR/fr/${origin}/${destination}/${date}?apiKey=${apiKey}`);
            if (!response.ok) {
                throw new Error('Erreur lors de la récupération des données');
            }
            const data = await response.json();
            setFlights(data.Quotes); // Assurez-vous que 'Quotes' est la bonne clé
        } catch (error) {
            setError(error.message);
            console.error("Erreur :", error);
        }
    };

    return (
        <div>
            <h2>Recherche de Vols</h2>
            <button onClick={fetchFlights}>Rechercher des vols</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {flights.map((flight) => (
                    <li key={flight.QuoteId}>
                        <p>Prix : {flight.MinPrice} EUR</p>
                        <p>Compagnie : {flight.OutboundLeg.CarrierIds.join(', ')}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FlightSearch; 