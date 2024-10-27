// src/LandingPage.js

import React from 'react';
import './LandingPage.css'; // Optional: CSS file for styling

const LandingPage = () => {
    return (
        <div className="landing-page">
            <header className="landing-header">
                <h1>Boo-way</h1>
                <p>We Take You Places.</p>
                <button className="cta-button">Venture Now</button>
            </header>
        </div>
    );
};

export default LandingPage;
