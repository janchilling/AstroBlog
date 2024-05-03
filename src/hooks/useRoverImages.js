import { useState, useEffect } from 'react';

const useRoverImages = () => {
    const [images, setImages] = useState([]);
    const [latestImages, setLatestImages] = useState([]);
    const [latestImage, setLatestImage] = useState(null);
    const [loading, setLoading] = useState(true);
    const apiKey = process.env.REACT_APP_NASA_API_KEY;

    const fetchRoverImages = async (page, limit, date) => {
        try {
            let apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=${page}&per_page=${limit}&api_key=${apiKey}`;
            if (date) {
                apiUrl += `&earth_date=${date}`;
            }
            const response = await fetch(apiUrl);
            const data = await response.json();
            console.log(data);
            setImages(data.photos || []);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching images:', error);
            setLoading(false); // Ensure loading state is set to false even in case of error
        }
    };

    const fetchLatestRoverImages = async (limit) => {
        try {
            const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=${apiKey}&page=1&per_page=${limit}`);
            const data = await response.json();
            console.log(data.latest_photos);
            if (data.latest_photos && data.latest_photos.length > 0) {
                setLatestImages(data.latest_photos);
                console.log(latestImages)
                setLatestImage(data.latest_photos[0]);
                console.log(latestImage)
            } else {
                setLatestImage(null);
            }
            setLoading(false);
        } catch (error) {
            console.error('Error fetching latest images:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLatestRoverImages(10);
        fetchRoverImages(1, 1);
    }, [apiKey]);

    return { images, latestImage, latestImages, loading };
};

export default useRoverImages;
