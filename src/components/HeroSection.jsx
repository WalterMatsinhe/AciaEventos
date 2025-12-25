import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BorderBeam } from "./magicui/border-beam";


const slides = [
  "/assets/banners/banner1.png",
  "/assets/banners/banner2.png",
  "/assets/banners/banner3.png",
  "/assets/banners/banner4.png",
  "/assets/banners/banner5.png",
  "/assets/banners/banner7.png",
  "/assets/banners/banner8.png",
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Banner slider with anchor for Home */}
      <div
        id="hero"
        className="relative w-full h-[220px] md:h-[320px] lg:h-[420px] overflow-hidden mt-16"
      >
        {slides.map((slide, index) => (
          <div
            key={`slide-${index}`}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{
              pointerEvents: index === currentSlide ? "auto" : "none",
            }}
          >
            <div className="relative w-full h-full">
              <img
                src={slide}
                alt={`Banner ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <BorderBeam
                duration={5}
                size={5800}
                className="absolute left-0 top-0 h-full w-[5px] from-transparent via-primary to-primary z-10"
                borderWidth={1}
                orientation="vertical"
              />
            </div>
          </div>
        ))}

        {/* Navigation buttons */}
        <button
          type="button"
          onClick={() =>
            setCurrentSlide(
              (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
            )
          }
          className="absolute top-58 left-4 transform -translate-y-1/2 text-white hover:scale-105 bg-card border rounded-full p-2 z-50"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() =>
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
          }
          className="absolute top-58 right-4 transform -translate-y-1/2 text-white hover:scale-105 bg-card border rounded-full p-2 z-50"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;