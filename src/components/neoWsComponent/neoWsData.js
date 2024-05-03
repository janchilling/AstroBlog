import React from 'react';
import NeoWsItem from "./neoWsItems";
import useNeoWs from "../../hooks/useNeoWs";

function NeoWsData() {
    const { neoWsData, isLoading, error } = useNeoWs();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            {neoWsData.map(neo => (
                <NeoWsItem key={neo.id} neo={neo} />
            ))}
        </div>
    );
}

export default NeoWsData;
