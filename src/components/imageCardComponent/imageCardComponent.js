import React from 'react';

const ImageCard = ({ imageUrl, cameraName, earthDate }) => {
    // Check if the image URL is present and not empty
    const imageAvailable = imageUrl && imageUrl !== '';
    console.log(imageUrl)

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <p>The Images are {imageUrl}</p>
            {imageAvailable ? (
                <img className="w-full" src={imageUrl} alt="Rover" />
            ) : (
                <div className="w-full h-48 flex items-center justify-center bg-gray-300">
                    Image Not Available
                </div>
            )}
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Camera: {cameraName}</div>
                <p className="text-gray-700 text-base">Date: {earthDate}</p>
            </div>
        </div>
    );
};

export default ImageCard;
