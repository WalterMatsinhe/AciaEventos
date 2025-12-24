// DropdownNav component for Coleções
function DropdownNav({ label, items, handleAnchorNav }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (e) => {
      if (!e.target.closest('.dropdown-nav')) setOpen(false);
    };
    if (open) document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [open]);
  return (
    <div className="relative dropdown-nav" tabIndex={0} onBlur={() => setOpen(false)}>
      <button
        className='text-xl text-foreground/80 text-glow text-primary hover:text-primary-red transition-colors duration-300 hover:scale-110 px-1'
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
      >
        {label}
      </button>
      <div
        className={
          'absolute left-0 mt-2 w-40 bg-white border rounded shadow-lg transition-opacity duration-200 z-50 ' +
          (open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none')
        }
      >
        {items.map((sub, subKey) => (
          <a
            key={subKey}
            href={'/#' + sub.hash}
            className='block px-4 py-2 text-foreground/80 text-primary hover:text-primary-red hover:bg-primary/10 transition-colors duration-200 rounded'
            onClick={(e) => {
              handleAnchorNav(sub.hash)(e);
              setOpen(false);
            }}
          >
            {sub.name}
          </a>
        ))}
      </div>
    </div>
  );
}
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { AuroraText } from "./magicui/aurora-text";

  const navItems = [
    { name: 'Início', isHome: true },
    {
      name: 'Coleções',
      subItems: [
        { name: 'Cadeiras', hash: 'chairs' },
        { name: 'Mesas', hash: 'tables' },
        { name: 'Som', hash: 'sound' },
        { name: 'Tendas', hash: 'tents' },
        { name: 'Loiça', hash: 'dishes' },
        { name: 'Outros Itens', hash: 'other-items' },
      ],
    },
    { name: 'Serviços', href: '/servicos', isRoute: true },
    { name: 'Galeria', href: '/gallery', isRoute: true },
    { name: 'Sobre', hash: 'about' },
    { name: 'Contato', hash: 'contact' },
  ];

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to handle anchor navigation from any page
  const handleAnchorNav = (hash) => (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.location.hash = '#' + hash;
        }
      }, 200);
    } else {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.hash = '#' + hash;
      }
    }
    setIsMenuOpen(false);
  };

  // Helper for 'Início' (Home) navigation
  const handleHomeNav = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 200);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>

      <nav
        className={cn(
          'fixed w-full z-40 transition-all duration-300',
          isScrolled
            ? 'py-0 bg-background/80 backdrop-blur-md shadow-xs'
            : 'py-0.5'
        )}
        style={{ boxShadow: '0 2px 12px 0 rgba(0,0,0,0.06)' }}
      >
        <div className='max-w-7xl mx-auto flex items-center justify-between px-1 md:px-2 ml-2'>
          <a href='#hero' className='flex items-center bg-white shadow-md shadow-black/30 px-0.5 py-0 rounded-md'>
            <img 
              src="/assets/logo-rm.png" 
              alt="Acia Eventos Logo" 
              className="h-6 md:h-15" 
            />
            <span
              className='text-sm md:text-2xl font-bold ml-2'
              style={{ fontFamily: "'Lobster', cursive", letterSpacing: '0.1em' }}
            >
              Acia
              <AuroraText colors={["#ff0000", "#ef4444", "#ff5252"]}>Eventos</AuroraText>
            </span>
          </a>

          <div className='hidden md:flex gap-6 items-center'>
          {navItems.map((item, key) => (
            item.isHome ? (
              <a
                key={key}
                href="/"
                className='text-xl text-foreground/80 bg-white text-glow text-primary hover:text-primary-red transition-colors duration-300 hover:scale-110 px-1'
                onClick={handleHomeNav}
              >
                {item.name}
              </a>
            ) : item.subItems ? (
              <DropdownNav
                key={key}
                label={item.name}
                items={item.subItems}
                handleAnchorNav={handleAnchorNav}
              />
            ) : item.isRoute ? (
              <Link
                key={key}
                to={item.href}
                className='text-xl text-foreground/80 text-glow text-primary hover:text-primary-red transition-colors duration-300 hover:scale-110 px-1'
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ) : (
                <a
                  key={key}
                  href={'/#' + item.hash}
                  className='text-xl text-foreground/80 text-glow text-primary hover:text-primary-red transition-colors duration-300 hover:scale-110 px-1'
                  onClick={handleAnchorNav(item.hash)}
                >
                  {item.name}
                </a>
            )
          ))}
        </div>
 
        <button 
          onClick={() => setIsMenuOpen((prev) => !prev)} 
          className='md:hidden p-2 text-foreground z-50 ml-2'
          aria-label= {isMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={cn(
            'fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center',
            'transition-all duration-300 text-glow',
            isMenuOpen
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          )}
        >
          <div className='flex flex-col space-y-6 text-xl'>
            {navItems.map((item, key) => (
              item.isHome ? (
                <a
                  key={key}
                  href="/"
                  className='text-foreground/80 text-primary hover:text-primary-red transition-colors duration-300  '
                  onClick={handleHomeNav}
                >
                  {item.name}
                </a>
              ) : item.subItems ? (
                <div key={key} className='flex flex-col items-center'>
                  <span className='font-semibold mb-2'>{item.name}</span>
                  {item.subItems.map((sub, subKey) => (
                    <a
                      key={subKey}
                      href={'/#' + sub.hash}
                      className='text-foreground/80 text-primary hover:text-primary-red transition-colors duration-300 mb-1'
                      onClick={handleAnchorNav(sub.hash)}
                    >
                      {sub.name}
                    </a>
                  ))}
                </div>
              ) : item.isRoute ? (
                <Link
                  key={key}
                  to={item.href}
                  className='text-foreground/80 text-primary hover:text-primary-red transition-colors duration-300  '
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={key}
                  href={'/#' + item.hash}
                  className='text-foreground/80 text-primary hover:text-primary-red transition-colors duration-300  '
                  onClick={handleAnchorNav(item.hash)}
                >
                  {item.name}
                </a>
              )
            ))}
          </div>
        </div>
      </div>
    </nav>
  </>
  );
};

export default NavBar;