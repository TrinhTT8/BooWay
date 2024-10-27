import React, { useEffect, useState } from 'react';
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Parallax } from "react-scroll-parallax"; // Ensure this is installed
import './OriginalTheme.css';

const Hero = () => {
  const [isHalloween, setIsHalloween] = useState(false);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      ".hero-title",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".hero-title",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".hero-description",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
        scrollTrigger: {
          trigger: ".hero-description",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".cta-section",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
        scrollTrigger: {
          trigger: ".cta-section",
          start: "top 60%",
        },
      }
    );
  }, []);

  return (
    <div className={`text-white h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden ${isHalloween ? 'halloween-bg' : 'original-bg'}`}>
    <div className={`absolute top-0 left-0 w-full h-full ${isHalloween ? 'halloween-bg' : 'original-bg'}`}></div>


      {/* Hero Section */}
      <div className={`relative p-6 rounded-lg ${isHalloween ? 'halloween-hero' : 'original-hero'}`}>
        <div className={`relative z-10 text-center mb-12 ${isHalloween ? 'text-white' : 'text-black'}`}>
          <h1 className="logo">BooWay</h1>
          <p className="typing-text">We Take You Places.</p>
        </div>

      {/* Call to Action Button */}
      <div className="cta-section">
        <Link to="/create-trip">
          <Button 
            variant={isHalloween ? 'destructive' : 'default'} // Set variant based on theme
            className="py-4 px-8 text-lg font-regular transition duration-300 ease-in-out hover:shadow-lg hover:bg-opacity-80">
            Venture Now
          </Button>
        </Link>
        </div>
      </div>

      {/* Theme Toggle Button */}
      <button
        onClick={() => setIsHalloween((prev) => !prev)}
        className={`fixed bottom-5 right-5 p-3 rounded-full ${isHalloween ? 'bg-black text-white' : 'bg-orange-500 text-black'} transition-all duration-300 z-50`}
      >
        Switch to {isHalloween ? "Original Theme" : "Halloween Theme"}
      </button>
    </div>
  );
};

export default Hero;