import React from 'react';
import { formatDate } from '../../utility/formatDate';

// Posts Section component
const PostsSection = ({ pictureData, latestRoverImage }) => (
    <section className="w-full md:w-2/3 flex flex-col items-center px-3">
        {pictureData && (
            <article className="flex flex-col shadow my-4">
                {/* Article Image */}
                <a href="#" className="hover:opacity-75">
                    <img src={pictureData.url} alt="Article" />
                </a>
                <div className="bg-white flex flex-col justify-start p-6">
                    <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">Photography</a>
                    <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">NASA Picture of the Day</a>
                    <p className="text-sm pb-3">
                        {pictureData.title}, Published on {formatDate(pictureData.date)}
                    </p>
                    <a href="#" className="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</a>
                    <a href="#" className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fas fa-arrow-right"></i></a>
                </div>
            </article>
        )}

        {/* Render latest rover image if available */}
        {latestRoverImage &&(
            <article className="flex flex-col shadow my-4">
                {/* Article Image */}
                <a href="#" className="hover:opacity-75">
                    <img src={latestRoverImage.img_src} alt="Article" />
                </a>
                <div className="bg-white flex flex-col justify-start p-6">
                    <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">Scientific, Expedition</a>
                    <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">NASA Mars Rover Images</a>
                    <p className="text-sm pb-3">
                        By <a href="#" className="font-semibold hover:text-gray-800">{latestRoverImage.rover.name} Rover</a>, Published on {formatDate(latestRoverImage.earth_date)}
                    </p>
                    <a href="#" className="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</a>
                    <a href="#" className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fas fa-arrow-right"></i></a>
                </div>
            </article>
        )}

        {/* Pagination */}
        <div className="flex items-center py-8">
            <a href="#" className="h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center">1</a>
            <a href="#" className="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center">2</a>
            <a href="#" className="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3">Next <i className="fas fa-arrow-right ml-2"></i></a>
        </div>
    </section>
);

export default PostsSection;
