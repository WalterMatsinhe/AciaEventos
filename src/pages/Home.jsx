import React, { useEffect } from "react";

import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import ColeccaoSection from "../components/ColeccaoSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const scrollToHash = () => {
  if (window.location.hash) {
    const el = document.getElementById(window.location.hash.replace('#', ''));
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
};

const Home = () => {
  useEffect(() => {
    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);
    return () => window.removeEventListener('hashchange', scrollToHash);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection/>
        <ColeccaoSection />
        <ContactSection/>
      </main>
      <Footer/>
    </div>
  );
};

export default Home;
