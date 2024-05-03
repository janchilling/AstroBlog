import { useState, useEffect } from 'react';

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
                const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=' + apiKey);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                console.log(data);
                setPictureData(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPictureOfTheDay();

    }, []);

    return { pictureData, isLoading, error };
};

export default useNasaAPOD;
