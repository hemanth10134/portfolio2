import React, { useState, useEffect } from 'react';
import type { NavLink } from '../types';
import { motion } from 'framer-motion';

interface HeaderProps {
  navLinks: NavLink[];
}

const Header: React.FC<HeaderProps> = ({ navLinks }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      let current = '#home';
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 80) { // 80px offset for header height
          current = `#${section.getAttribute('id')}`;
        }
      });
      
      if (current !== activeLink) {
        setActiveLink(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeLink]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className={`
        container mx-auto transition-all duration-300
        ${isScrolled ? 'max-w-4xl mt-4' : 'max-w-full mt-0'}
      `}>
        <motion.div 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-between items-center bg-slate-900/60 backdrop-blur-lg rounded-full shadow-lg px-6 py-3"
        >
          <a href="#home" className="text-xl font-bold text-white transition-colors hover:text-blue-400">
            Hemanth<span className="text-blue-400">.</span>
          </a>
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className={`relative transition-colors duration-300 text-sm font-medium ${activeLink === link.href ? 'text-white' : 'text-slate-400 hover:text-white'}`}>
                {link.label}
                {activeLink === link.href && (
                  <motion.div
                    className="absolute bottom-[-6px] left-0 right-0 h-[2px] bg-blue-400"
                    layoutId="underline"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>
          <button className="md:hidden text-white z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isMenuOpen ? <line x1="18" y1="6" x2="6" y2="18"></line> : <line x1="3" y1="12" x2="21" y2="12"></line>}
              {isMenuOpen ? <line x1="6" y1="6" x2="18" y2="18"></line> : <line x1="3" y1="6" x2="21" y2="6"></line>}
              {isMenuOpen ? null : <line x1="3" y1="18" x2="21" y2="18"></line>}
            </svg>
          </button>
        </motion.div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-slate-900/95 backdrop-blur-md transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-2xl font-semibold ${activeLink === link.href ? 'text-blue-400' : 'text-slate-200 hover:text-blue-400'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;