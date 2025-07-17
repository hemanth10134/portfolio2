import React from 'react';
import { resumeData, navLinks } from './constants';
import Header from './components/Header';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Sparkles from './components/Sparkles';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#0A101E] text-slate-300">
      <Sparkles />
      <Header navLinks={navLinks} />
      <main id="main-content" className="px-6 sm:px-12 md:px-24 py-12 relative z-10">
        <Hero name={resumeData.name} location={resumeData.location} summary={resumeData.summary} />
        <Skills skills={resumeData.skills} />
        <Projects projects={resumeData.projects} />
        <Education educationItems={resumeData.education} />
        <Contact onlinePresence={resumeData.onlinePresence} email={resumeData.email} />
        
        <footer className="text-center pt-16 pb-8 text-slate-500 text-sm">
            <p>Designed with inspiration & Built by Hemanth Bhavana</p>
            <p>&copy; {new Date().getFullYear()}. All Rights Reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;