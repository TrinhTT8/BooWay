import React, { useEffect, useState } from 'react';
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import './OriginalTheme.css'; // Ensure this is your default stylesheet
import './Halloween.css'; // This will contain your Halloween styles

const Hero = () => {
  const [isHalloween, setIsHalloween] = useState(false); // Default is not Halloween

  useEffect(() => {
    // Fade-in effect without scroll dependency
    gsap.fromTo(
      ".hero-title",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      ".hero-description",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.5 }
    );

    gsap.fromTo(
      ".cta-section",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.5 }
    );
  }, []);

  return (
    <div className={`flex items-center justify-center min-h-screen ${isHalloween ? 'halloween-bg' : 'original-bg'}`}>
      <div className={`text-center p-6 rounded-lg ${isHalloween ? 'halloween-hero' : 'original-hero'}`}>
        {/* Title */}
        <h1 className={`hero-title logo mb-4 ${isHalloween ? 'halloween-logo' : 'original-logo'}`}>BooWay</h1>
        
        {/* Subtext */}
        <p className={`typing-text hero-description mb-8 ${isHalloween ? 'halloween-typing' : 'original-typing'}`}>We Take You Places.</p>
        
        {/* Call to Action Button */}
        <div className={`cta-section`}>
          <Link to="/create-trip">
            <Button 
              className={`original-button ${isHalloween ? 'halloween-button' : 'original-button'}`}
              style={{ fontSize: '1.5rem' }}> {/* Adjust size as needed */}
              Venture Now
            </Button>
          </Link>
        </div>
      </div>

      {/* Theme Toggle Button */}
      <button
        onClick={() => setIsHalloween(prev => !prev)}
        className={`fixed bottom-5 right-5 p-3 rounded-full ${isHalloween ? 'bg-black text-white' : 'bg-orange-500 text-black'} transition-all duration-300 z-50`}>
        Switch to {isHalloween ? "Original Theme" : "Halloween Theme"}
      </button>
    </div>
  );
};

export default Hero;
