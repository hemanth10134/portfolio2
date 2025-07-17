
import React from 'react';
import { motion, Variants } from 'framer-motion';
import type { EducationItem } from '../types';

interface EducationProps {
  educationItems: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ educationItems }) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
  };

  return (
    <motion.section 
      id="education" 
      className="py-20 md:py-32"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
        <div className="flex items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
                <span className="text-blue-400 font-roboto-mono text-2xl md:text-3xl mr-3">03.</span>
                Education
            </h2>
            <div className="flex-grow h-px bg-slate-700 ml-6"></div>
        </div>
        <motion.div 
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
            {educationItems.map((item) => (
                <motion.div 
                  key={item.institution}
                  variants={itemVariants}
                  className="p-6 bg-slate-900/50 rounded-lg shadow-lg border border-slate-800 hover:border-blue-500/50 transition-colors duration-300 backdrop-blur-sm"
                >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                        <div>
                            <h3 className="text-xl font-bold text-slate-100">{item.institution}</h3>
                            <p className="text-blue-300 font-medium">{item.degree}</p>
                        </div>
                        <p className="text-sm text-slate-400 font-mono text-right flex-shrink-0 mt-2 sm:mt-0 sm:ml-4">{item.period}</p>
                    </div>
                </motion.div>
            ))}
        </motion.div>
      </motion.section>
  );
};

export default Education;
