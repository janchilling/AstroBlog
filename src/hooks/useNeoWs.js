import { useState, useEffect } from 'react';

function useNeoWs() {
    const [neoWsData, setNeoWsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const apiKey = process.env.REACT_APP_NASA_API_KEY;

    useEffect(() => {
        const fetchNeoWsData = async () => {
            try {
                const response = await fetch('https://api.nasa.gov/neo/rest/v1/feed?api_key=' + apiKey);
                if (!response.ok) {
                    throw new Error('Failed to fetch NEO data');
                }
                const data = await response.json();
                setNeoWsData(Object.values(data.near_earth_objects).flat());
                setIsLoading(false);
            } catch (error) {
                setError(error.message);
                setIsLoading(false);
            }
        };

        fetchNeoWsData();
    }, []);

    return { neoWsData, isLoading, error };
}

export default useNeoWs;
