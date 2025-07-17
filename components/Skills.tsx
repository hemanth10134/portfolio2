import React from 'react';
import { motion } from 'framer-motion';
import type { Skill } from '../types';

interface SkillsProps {
  skills: Skill[];
}

const Scroller: React.FC<{ skills: Skill[]; direction?: 'left' | 'right'; speed?: 'slow' | 'fast' }> = ({
  skills,
  direction = 'left',
  speed = 'slow'
}) => {
  return (
    <div className="scroller" data-direction={direction} data-speed={speed}>
      <ul className="scroller__inner">
        {[...skills, ...skills].map((skill, index) => (
          <li
            key={`${skill.name}-${index}`}
            className="flex items-center justify-center space-x-3 bg-slate-900/60 text-slate-200 rounded-lg px-6 py-3 whitespace-nowrap border border-slate-800 hover:bg-slate-800/80 transition-colors duration-300 cursor-pointer"
          >
            <skill.icon className="h-6 w-6" />
            <span className="font-medium text-base">{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  // Split skills into two arrays for two scrollers
  const half = Math.ceil(skills.length / 2);
  const skills1 = skills.slice(0, half);
  const skills2 = skills.slice(half);

  return (
    <motion.section 
      id="skills" 
      className="py-20 md:py-32"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <style>{`
        .scroller {
          max-width: 100%;
          overflow: hidden;
          -webkit-mask-image: linear-gradient(to right, transparent, white 10%, white 90%, transparent);
          mask-image: linear-gradient(to right, transparent, white 10%, white 90%, transparent);
        }
        .scroller__inner {
          display: flex;
          flex-wrap: nowrap;
          gap: 1.5rem; /* 24px */
          padding-block: 1rem;
          width: max-content;
          animation: scroll 60s linear infinite;
        }
        .scroller[data-direction="right"] .scroller__inner {
          animation-direction: reverse;
        }
        .scroller[data-speed="fast"] .scroller__inner {
          animation-duration: 30s;
        }
        @keyframes scroll {
          to {
            transform: translateX(calc(-50% - 0.75rem));
          }
        }
      `}</style>
      <div className="flex items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
          <span className="text-blue-400 font-roboto-mono text-2xl md:text-3xl mr-3">01.</span>
          My Tech Stack
        </h2>
        <div className="flex-grow h-px bg-slate-700 ml-6"></div>
      </div>

      <div className="space-y-6">
        <Scroller skills={skills1} speed="slow" direction="left" />
        <Scroller skills={skills2} speed="slow" direction="right" />
      </div>
    </motion.section>
  );
};

export default Skills;