import React from 'react';
import { motion } from 'framer-motion';
import type { OnlinePresenceItem } from '../types';

interface ContactProps {
  onlinePresence: OnlinePresenceItem[];
  email: string;
}

const Contact: React.FC<ContactProps> = ({ onlinePresence, email }) => {
  return (
    <motion.section 
      id="contact" 
      className="py-20 md:py-32 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
        <div className="flex items-center justify-center mb-6">
            <div className="flex-grow h-px bg-slate-700 mr-6 max-w-xs sm:max-w-sm md:max-w-md"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 whitespace-nowrap">
                <span className="text-blue-400 font-roboto-mono text-2xl md:text-3xl mr-3">04.</span>
                Get In Touch
            </h2>
            <div className="flex-grow h-px bg-slate-700 ml-6 max-w-xs sm:max-w-sm md:max-w-md"></div>
        </div>
        
        <p className="max-w-xl mx-auto text-slate-400 mb-10">
          I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out. My inbox is always open!
        </p>

        <motion.a 
            href={`mailto:${email}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mb-12 px-10 py-4 bg-blue-400 text-slate-900 font-semibold rounded-lg shadow-lg hover:bg-blue-300 transition-colors duration-300"
        >
          Say Hello
        </motion.a>

        <div className="flex justify-center items-center space-x-8">
          {onlinePresence.map((item) => (
            <motion.a 
              key={item.name} 
              href={item.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={item.name}
              whileHover={{ y: -3, color: '#60a5fa' }} // blue-400
              className="text-slate-400 transition-colors"
            >
              {React.cloneElement(item.icon, { width: 28, height: 28 })}
            </motion.a>
          ))}
        </div>
    </motion.section>
  );
};

export default Contact;