
import React from 'react';
import { motion } from 'framer-motion';

interface AboutProps {
  summary: string;
}

const About: React.FC<AboutProps> = ({ summary }) => {
  return (
    <motion.section 
      id="about" 
      className="py-20 md:py-32"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
        <div className="flex items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
            <span className="text-teal-400 font-roboto-mono text-2xl md:text-3xl mr-3">01.</span>
            About Me
          </h2>
          <div className="flex-grow h-px bg-slate-700 ml-6"></div>
        </div>
        <div className="text-slate-300 text-lg leading-relaxed max-w-4xl space-y-4 bg-slate-900/50 p-8 rounded-lg border border-slate-800 backdrop-blur-sm">
          <p>{summary}</p>
        </div>
    </motion.section>
  );
};

export default About;
