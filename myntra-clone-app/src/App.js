import React, { useState } from 'react';
import './App.css'; // assuming you have a CSS file for styling
import Header from './Components/Header';

function App() {
    const [bagItemCount, setBagItemCount] = useState(0);

    return (
        <div>
            <Header/>
            <main>
                <div className="items-container">
                    {/* Render your items here */}
                </div>
            </main>
            
        </div>
    );
}

export default App;
