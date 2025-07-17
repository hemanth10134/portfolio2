
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../constants';
import type { NavLink } from '../types';

interface SidebarProps {
  navLinks: NavLink[];
}

const Sidebar: React.FC<SidebarProps> = ({ navLinks }) => {
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;

    const handleScroll = () => {
      let current = '';
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (mainContent.scrollTop >= sectionTop - 100) {
          current = `#${section.getAttribute('id')}`;
        }
      });
      
      if (current) {
        setActiveLink(current);
      } else if (mainContent.scrollTop < 200) {
        setActiveLink('#home');
      }
    };

    mainContent.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => mainContent.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const mainContent = document.getElementById('main-content');
    const targetElement = document.querySelector(href);
    if (targetElement && mainContent) {
        mainContent.scrollTo({
            top: (targetElement as HTMLElement).offsetTop,
            behavior: 'smooth'
        });
        // Manually set active link on click for immediate feedback
        setActiveLink(href);
    }
  };

  return (
    <aside className="hidden lg:flex w-[300px] h-screen bg-slate-50 text-slate-800 p-8 flex-col fixed top-0 left-0 border-r border-slate-200/80">
      <div className="text-center mb-10">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="w-24 h-24 rounded-full bg-slate-800 text-white flex items-center justify-center mx-auto mb-4 shadow-lg"
        >
          <span className="text-4xl font-bold">HB</span>
        </motion.div>
        <h1 className="text-2xl font-bold text-slate-900">{resumeData.name}</h1>
        <p className="text-sm text-slate-500">@{resumeData.onlinePresence[0].url.split('/').pop()}</p>
        <p className="text-sm text-slate-600 mt-1">Engineering Student</p>
      </div>
      <motion.nav 
        className="flex flex-col space-y-2"
        initial="hidden"
        animate="visible"
        variants={{
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
        }}
      >
        {navLinks.map(link => (
          <motion.a
            key={link.href}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
            className={`px-4 py-2.5 text-sm font-medium rounded-md transition-all duration-200 flex items-center relative ${
              activeLink === link.href ? 'text-slate-900' : 'hover:bg-slate-200/70 text-slate-600'
            }`}
          >
            {activeLink === link.href && (
                <motion.span
                    layoutId="active-nav-item"
                    className="absolute inset-0 bg-slate-200 rounded-md"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
            )}
            <span className="relative z-10">{link.label}</span>
          </motion.a>
        ))}
      </motion.nav>
      <div className="mt-auto text-center text-xs text-slate-400">
        <p>Built with React & Gemini</p>
      </div>
    </aside>
  );
};

export default Sidebar;
