import React from 'react';
import NeoWsData from '../../components/neoWsComponent/neoWsData';

function NeoWsPage() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>NASA NeoWs Data</h1>
            </header>
            <NeoWsData />
        </div>
    );
}

export default NeoWsPage;
