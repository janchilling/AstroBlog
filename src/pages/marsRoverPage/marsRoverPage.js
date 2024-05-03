import React, {useState} from 'react';
import useRoverImages from "../../hooks/useRoverImages";

function MarsRoverPage() {
    const { latestImages, loading: roverLoading } = useRoverImages();
    console.log(latestImages)

    const [currentIndex, setCurrentIndex] = useState(0);

    const incrementIndex = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % latestImages.length);
    };

    const decrementIndex = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? latestImages.length - 1 : prevIndex - 1));
    };

    return (
        <div>
            <div className="container px-5 pt-32 mx-auto lg:px-4 lg:py-4">
                <div className="flex flex-col w-full mb-2 text-left md:text-center ">
                    <h1 className="mb-2 text-4xl font-bold tracking-tighter text-black lg:text-6xl md:text-5xl">
                        <span>Dive into the Realms of </span>
                        <br className="hidden lg:block"></br>
                        the Martian Land
                    </h1>
                    <br></br>
                    <p className="mx-auto  text-xl font-normal leading-relaxed text-gray-600 dark:text-gray-300 lg:w-2/3">
                        nine4 is a free to use template website for websites made with{" "}
                        <a href="https://nextjs.org/" className="underline">
                            Next.js
                        </a>{" "}
                        and styled with Tailwind CSS
                    </p>
                </div>
            </div>
            <main className="my-8 px-20">
                <div className="container mx-auto px-6">
                    <div className="h-64 rounded-md overflow-hidden bg-cover bg-center"
                         style={{backgroundImage: "url('https://plus.unsplash.com/premium_photo-1714618891990-f9b67e32d543?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}>
                        <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                            <div className="px-10 max-w-xl">
                                <h2 className="text-2xl text-white font-semibold">Curiosity Rover</h2>
                                <p className="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing
                                    elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
                                <button
                                    className="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                    <span>Explore</span>
                                    <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round"
                                         strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"
                                         stroke="currentColor">
                                        <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex mt-8 md:-mx-4">
                        <div className="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2"
                             style={{backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/NASA_Mars_Rover.jpg/1024px-NASA_Mars_Rover.jpg')"}}>
                            <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                                <div className="px-10 max-w-xl">
                                    <h2 className="text-2xl text-white font-semibold">Opportunity Rover</h2>
                                    <p className="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum
                                        pariatur.</p>
                                    <button
                                        className="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                        <span>Explore</span>
                                        <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round"
                                             strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"
                                             stroke="currentColor">
                                            <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div
                            className="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2"
                            style={{backgroundImage: "url('https://cdna.artstation.com/p/assets/images/images/046/579/870/large/russ-schwenkler-spirit-rover-01.jpg?1645462474')"}}>
                            <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                                <div className="px-10 max-w-xl">
                                    <h2 className="text-2xl text-white font-semibold">Spirit Rover</h2>
                                    <p className="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum
                                        pariatur.</p>
                                    <button
                                        className="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                        <span>Explore</span>
                                        <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round"
                                             strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"
                                             stroke="currentColor">
                                            <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <div className="container px-20 mx-auto">
                <div className="leading-relaxed pb-4">
                    <h3 className="text-2xl font-bold tracking-tighter text-black lg:text-4xl md:text-3xl">About the Martian Mission</h3>
                    <ul className="pl-8 mb-4">
                        <li className="list-disc list-inside">At vero eos et accusamus et iusto odio dignissimos ducimus
                            qui blanditiis praesentium
                            <ol className="pl-8 mb-4">
                                <li className="list-decimal list-inside">Itaque earum rerum hic tenetur a sapiente
                                    delectus
                                </li>
                                <li className="list-decimal list-inside">which of us ever undertakes laborious physical
                                    exercise
                                </li>
                            </ol>
                        </li>
                        <li className="list-disc list-inside">Et harum quidem rerum facilis est et expedita distinctio
                        </li>
                        <li className="list-disc list-inside">Itaque earum rerum hic tenetur a sapiente delectus</li>
                        <li className="list-disc list-inside">which of us ever undertakes laborious physical exercise
                        </li>
                    </ul>
                    <p className="mb-5">Cras justo velit, ultrices vel vehicula eu, viverra in turpis. Donec lobortis at
                        lorem ac semper. Mauris malesuada ligula in interdum pharetra. Interdum et malesuada fames ac
                        ante ipsum primis in faucibus.</p>

                    <p className="mb-5">Integer egestas ipsum eget metus sodales consectetur. Nullam ultricies posuere
                        cursus. Duis vitae lorem porta, venenatis nibh ac, laoreet massa. Nam risus lacus, porta eu diam
                        id, fringilla porta risus. Aenean sit amet malesuada diam.</p>
                    <blockquote
                        className="relative p-4 border-l-4 border-red-700 bg-gray-100 dark:bg-gray-900 dark:bg-opacity-40 mb-4 text-xl">
            <span className="absolute opacity-80 w-8 h-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-red-700" viewBox="0 0 270.000000 270.000000"><g
                    transform="translate(0.000000,270.000000) scale(0.100000,-0.100000)" fill="currentColor"
                    stroke="none"><path
                    d="M920 2182 c-290 -124 -482 -341 -540 -610 -30 -140 -40 -296 -40 -644 l0 -328 370 0 370 0 0 370 0 370 -181 0 -181 0 7 63 c26 243 129 387 342 477 35 15 66 29 69 32 7 7 -132 298 -143 298 -4 0 -37 -13 -73 -28z"></path><path
                    d="M2179 2186 c-249 -103 -442 -295 -520 -516 -50 -142 -61 -247 -66 -677 l-5 -393 371 0 371 0 0 370 0 370 -181 0 -181 0 7 53 c21 170 67 281 150 363 51 49 143 107 215 134 19 7 39 17 44 21 10 9 -124 298 -139 298 -5 0 -35 -10 -66 -23z"></path></g></svg>
            </span>
                        <p className="ml-16 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                            posuere erat a ante.</p>
                        <footer>- John Doe</footer>
                    </blockquote>

                    <p className="mb-5">Cras justo velit, ultrices vel vehicula eu, viverra in turpis. Donec lobortis at
                        lorem ac semper. Mauris malesuada ligula in interdum pharetra. Interdum et malesuada fames ac
                        ante ipsum primis in faucibus.</p>
                    <div className="container mx-auto">
                        <div className="leading-relaxed pb-4">
                            <h3 className="text-2xl font-bold tracking-tighter text-black lg:text-4xl md:text-3xl">Latest Rover Images</h3>
                            <div className="relative w-full flex items-center">
                                <button
                                    className="absolute bg-blue-800 hover:bg-blue-700 text-white text-2xl font-bold hover:shadow rounded-full w-16 h-16 ml-12"
                                    onClick={decrementIndex} // Use decrementIndex function on button click
                                >
                                    &#8592;
                                </button>
                                <div className="flex w-full overflow-x-auto">
                                    {latestImages && latestImages.length > 0 ? (
                                        latestImages.map((image, index) => (
                                            <img key={index} className={`w-64 h-64 object-cover mr-4 ${index === currentIndex ? 'opacity-100' : 'opacity-50 hover:opacity-75'}`} src={image.img_src} alt={`Rover Image ${index}`} />
                                        ))
                                    ) : (
                                        <p>No latest images available</p>
                                    )}
                                </div>
                                <button
                                    className="absolute right-0 bg-blue-800 hover:bg-blue-700 text-white text-2xl font-bold hover:shadow rounded-full w-16 h-16 mr-12"
                                    onClick={incrementIndex} // Use incrementIndex function on button click
                                >
                                    &#8594;
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MarsRoverPage;
