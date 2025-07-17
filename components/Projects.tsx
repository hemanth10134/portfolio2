
import React from 'react';
import { motion, Variants } from 'framer-motion';
import type { Project } from '../types';

interface ProjectsProps {
  projects: Project[];
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <motion.div 
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="group relative flex flex-col h-full bg-slate-900/50 rounded-lg shadow-lg border border-slate-800 transition-colors duration-300 hover:border-blue-500/50 backdrop-blur-sm overflow-hidden"
        >
            <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <div className="text-blue-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                          <line x1="12" y1="22.08" x2="12" y2="12"></line>
                      </svg>
                    </div>
                    {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="External link to project" className="text-slate-400 hover:text-blue-400 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        </a>
                    )}
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                {project.subtitle && <p className="text-sm text-slate-400 mb-4">{project.subtitle}</p>}
                <ul className="text-slate-400 space-y-3 list-disc list-inside text-sm">
                    {project.description.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

  return (
    <motion.section 
        id="work" 
        className="py-20 md:py-32"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
    >
        <div className="flex items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
            <span className="text-blue-400 font-roboto-mono text-2xl md:text-3xl mr-3">02.</span>
            My Work
        </h2>
        <div className="flex-grow h-px bg-slate-700 ml-6"></div>
        </div>
        <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            {projects.map((project) => (
                <motion.div key={project.title} variants={itemVariants}>
                    <ProjectCard project={project} />
                </motion.div>
            ))}
        </motion.div>
      </motion.section>
  );
};

export default Projects;
