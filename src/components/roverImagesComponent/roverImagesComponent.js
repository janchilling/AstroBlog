import React, { useState } from 'react';
import ImageCard from "../imageCardComponent/imageCardComponent";
import useRoverImages from "../../hooks/useRoverImages";

const RoverImages = () => {
    const [page, setPage] = useState(1);
    const limit = 10; // Number of images per page
    const { images, loading } = useRoverImages(page, limit);

    const nextPage = () => {
        setPage(page + 1);
    };

    const prevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    // Calculate starting and ending image indices for the current page
    const startIndex = (page - 1) * limit + 1;
    const endIndex = Math.min(startIndex + limit - 1, images.length);

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {loading ? (
                    <p className="text-center">Loading...</p>
                ) : (
                    images.length > 0 ? (
                        images.slice(startIndex - 1, endIndex).map((image) => (
                            <ImageCard
                                key={image.id}
                                imageUrl={image.img_src}
                                cameraName={image.camera.full_name}
                                earthDate={image.earth_date}
                            />
                        ))
                    ) : (
                        <p className="text-center">No images available</p>
                    )
                )}
            </div>
            <div className="flex flex-col items-center mt-4">
                {/* Pagination */}
                <span className="text-sm text-white-500 dark:text-gray-400">
                    Showing <span className="font-semibold text-white-500 dark:text-white">{startIndex}</span> to <span className="font-semibold text-white-500 dark:text-white">{endIndex}</span> of <span className="font-semibold text-white-500  dark:text-white">{images.length}</span> Entries
                </span>
                <div className="inline-flex mt-2 xs:mt-0">
                    {/* Previous Page Button */}
                    <button onClick={prevPage} disabled={page === 1} className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                        </svg>
                        Prev
                    </button>
                    {/* Next Page Button */}
                    <button onClick={nextPage} className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Next
                        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RoverImages;
