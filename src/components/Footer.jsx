import { ArrowUp } from 'lucide-react';
import React, { useEffect, useRef } from 'react';

const Footer = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // slow motion
    }
  }, []);

  return (
    <footer className="relative py-12 px-4 bg-white border-2 border-red-600 mt-12 pt-8 flex flex-wrap justify-between items-center overflow-hidden shadow-xl">
      {/* Background Video */}
        
      {/* Dark Overlay */}

      {/* Footer Content */}
      <div className="relative z-10 w-full flex flex-wrap justify-between items-center">
        <p className="text-base font-semibold text-black drop-shadow-md tracking-wide flex items-center gap-2">
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-red-600 font-lobster">AciaEventos.co</span>
          <span className="hidden md:inline">|</span>
          <span>&copy; {new Date().getFullYear()} Todos os direitos reservados.</span>
        </p>
        <a
          href="#hero"
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-red-600 hover:text-white shadow-lg transition-all duration-300 border border-white/20"
          title="Voltar ao topo"
        >
          <ArrowUp size={22} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
