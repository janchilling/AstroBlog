import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useRoverImages from "../../hooks/useRoverImages";

function RoverImagesPage() {
    const { roverName } = useParams();
    const { images, loading, fetchRoverImages } = useRoverImages();
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const imagesPerPage = 12;

    useEffect(() => {
        fetchRoverImages(roverName, startDate, endDate);
    }, [roverName, startDate, endDate]);

    const handleDateFilter = () => {
        fetchRoverImages(roverName, startDate, endDate);
    };

    const handlePagination = async (page) => {
        setCurrentPage(page);
        await fetchRoverImages(roverName, startDate, endDate);
    };

    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

    return (
        <div className="relative max-w-screen-xl 3xl:max-w-screen-2xl items-center justify-between mx-auto p-5">
            <div className="container px-5 pt-32 mx-auto lg:px-4 lg:py-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                    <h2 className="text-2xl sm:text-3xl font-semibold mb-4 md:mb-0">{roverName.toUpperCase()} Rover Images</h2>
                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <div className="flex items-center">
                            <label htmlFor="startDate" className="mr-2">Start Date:</label>
                            <input type="date" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                        </div>
                        <div className="flex items-center">
                            <label htmlFor="endDate" className="mr-2">End Date:</label>
                            <input type="date" id="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                        </div>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" onClick={handleDateFilter}>Filter</button>
                    </div>
                </div>
                <hr className="h-0.5 mt-3 mb-6 bg-blue-950 border-0"/>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {currentImages.map((image, index) => (
                                <div key={index} className="overflow-hidden rounded-lg shadow-md">
                                    <img src={image.img_src} alt={`Rover Image ${index}`} className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover" />
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center mt-4">
                            <button disabled={currentPage === 1} onClick={() => handlePagination(currentPage - 1)} className="mr-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Prev</button>
                            <button disabled={currentImages.length < imagesPerPage || loading} onClick={() => handlePagination(currentPage + 1)} className="ml-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Next</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default RoverImagesPage;
