import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Parallax } from "react-scroll-parallax"; // Ensure this is installed

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
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
    <div className="bg-zinc-800 text-white h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Parallax Background Image */}
      <Parallax className="absolute top-0 left-0 w-full h-full " y={[-50, 50]}>
        <img
          src="/spookybg.jpg"
          alt="Background"
          className="w-full h-full object-cover "
          style={{ opacity: 0.25 }}
        />
      </Parallax>

      {/* Hero Section */}
      <div className="relative bg-white from-[#dcebfe] bg-opacity-30 p-6 rounded-lg shadow-md">
        <div className="relative z-10 text-center mb-12 text-black">
        <div className="dark" style={{color: '#EE0606', fontSize: 80, fontFamily: 'Nosifer', fontWeight: '400', wordWrap: 'break-word'}}>Boo-Way</div>
          <p className="text-xl hero-description mb-3 font-semibold">
            We take you places.
          </p>
        </div>

        {/* Call to Action Section */}
        <div className="cta-section relative z-10 text-center mb-12">
          <Link to="/create-trip">
            <Button className="py-3 px-6 text-lg font-bold bg-white-500 hover:bg-white-600">
              Venture If You Dare!
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
