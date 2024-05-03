import React from 'react';

function NeoWsItem({ neo }) {
    const missDistanceKilometers = neo.close_approach_data?.miss_distance?.kilometers;

    return (
        <div className="neo-item">
            <h2>{neo.name}</h2>
            <p>Close Approach Date: {neo.close_approach_date}</p>
            <p>Miss Distance: {missDistanceKilometers ? `${missDistanceKilometers} km` : 'N/A'}</p>
        </div>
    );
}

export default NeoWsItem;
