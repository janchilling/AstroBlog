import { useState, useEffect } from 'react';
import axios from 'axios';

const useNasaAPOD = () => {
    const [pictureData, setPictureData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const apiKey = process.env.REACT_APP_NASA_API_KEY;

    useEffect(() => {
        const fetchPictureOfTheDay = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
                setPictureData(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPictureOfTheDay();

    }, [apiKey]);

    return { pictureData, isLoading, error };
};

export default useNasaAPOD;
