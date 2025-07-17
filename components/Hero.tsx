
import React from 'react';
import { motion, Variants } from 'framer-motion';

interface HeroProps {
    name: string;
    location: string;
    summary: string;
}

const Hero: React.FC<HeroProps> = ({ name, location, summary }) => {
    const titleContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const titleItem: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
    };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center -mt-8">
      <motion.div 
        className="w-full"
        variants={titleContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-200 tracking-tight">
          <motion.span variants={titleItem} className="block">I'm {name.split(' ')[0]},</motion.span>
          <motion.span variants={titleItem} className="block">a <span className="text-blue-400">Software Engineer</span></motion.span>
          <motion.span variants={titleItem} className="block">based in <span className="text-blue-400">{location.split(',')[0]}</span></motion.span>
        </motion.h1>

        <motion.p 
            className="mt-8 max-w-2xl mx-auto text-slate-400 text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
        >
          {summary}
        </motion.p>
      </motion.div>
      
      <motion.a 
        href="#skills" 
        className="absolute bottom-16 left-1/2 -translate-x-1/2 mt-20 text-sm font-medium text-slate-400 flex items-center gap-2 group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        Scroll to explore more info
        <span className="transition-transform group-hover:translate-y-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14m7-7l-7 7-7-7"/></svg>
        </span>
      </motion.a>
    </section>
  );
};

export default Hero;