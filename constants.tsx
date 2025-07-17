import React from 'react';
import type { EducationItem, Project, Skill, OnlinePresenceItem, NavLink } from './types';
import { 
    CIcon, JavaIcon, PythonIcon, HtmlIcon, CssIcon, TypeScriptIcon, JavaScriptIcon, NodeIcon, 
    ExpressIcon, NextJsIcon, ReactIcon, MongoDbIcon, GitIcon, GitHubIcon, PostmanIcon, 
    SocketIoIcon, GcpIcon, RestApiIcon, SqlIcon
} from './components/icons';

export const GITHUB_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6.1 0-1.3-.5-2.4-1.2-3.2.1-.3.5-1.5-.1-3.2 0 0-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1c-.6 1.7-.2 2.9-.1 3.2-.7.8-1.2 1.9-1.2 3.2 0 4.7 2.7 5.8 5.5 6.1-.6.5-.9 1.2-.9 2.2v3.5"></path></svg>
);

export const LINKEDIN_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

export const LEETCODE_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 5.844a.75.75 0 0 1-1.06 0L.65 1.438a1.374 1.374 0 0 0-.961-.438H0v24h24V0h-2.131a1.374 1.374 0 0 0-.961.438L15.302 5.844a.75.75 0 0 1-1.06 0L8.836.438A1.374 1.374 0 0 0 7.875 0H5.744v24h12.512V0h-2.131a1.374 1.374 0 0 0-.961.438L9.957 5.844a.75.75 0 0 1-1.061 0L3.49.438A1.374 1.374 0 0 0 2.529 0H2.13v24h19.74V0h-.387ZM12 11.245l-1.336 1.34a.75.75 0 0 1-1.06 0l-2.444-2.45a.75.75 0 0 1 0-1.061l2.444-2.449a.75.75 0 0 1 1.06 0l1.336 1.339a.75.75 0 0 1 0 1.061Zm3.818-1.061l2.444 2.45a.75.75 0 0 1 0 1.06l-2.444 2.45a.75.75 0 0 1-1.06 0l-1.337-1.34a.75.75 0 0 1 0-1.06l1.337-1.34a.75.75 0 0 1 1.06 0Z"/>
    </svg>
);

export const navLinks: NavLink[] = [
  { href: '#home', label: 'Home' },
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export const resumeData = {
  name: "Hemanth Bhavana",
  location: "Bangalore, India",
  email: "hemanthb008@gmail.com",
  phone: "7829204072",
  summary: "I am an enthusiastic and empathetic engineering student with a strong passion for technology and innovation. Recognized for my ability to learn quickly and adapt to new environments, I am always eager to explore emerging tools, platforms, and concepts. My goal is to bridge the gap between theoretical knowledge and real-world application by engaging in hands-on experiences.",
  education: [
    {
      institution: "Dayananda Sagar University, Bangalore",
      degree: "Bachelor of Technology in Computer Science",
      period: "Aug 2022 - Jul 2026",
    },
    {
      institution: "Sri Chaitanya JUNIOR COLLEGE",
      degree: "11th And 12th (CBSE)",
      period: "May 2020 - May 2022",
    },
  ] as EducationItem[],
  skills: [
    { name: "React", icon: ReactIcon },
    { name: "SQL", icon: SqlIcon },
    { name: "MongoDB", icon: MongoDbIcon },
    { name: "Node.js", icon: NodeIcon },
    { name: "JavaScript", icon: JavaScriptIcon },
    { name: "TypeScript", icon: TypeScriptIcon },
    { name: "Next.js", icon: NextJsIcon },
    { name: "Express.js", icon: ExpressIcon },
    { name: "Python", icon: PythonIcon },
    { name: "Java", icon: JavaIcon },
    { name: "C", icon: CIcon },
    { name: "HTML", icon: HtmlIcon },
    { name: "CSS", icon: CssIcon },
    { name: "Git", icon: GitIcon },
    { name: "GitHub", icon: GitHubIcon },
    { name: "Postman", icon: PostmanIcon },
    { name: "Socket.io", icon: SocketIoIcon },
    { name: "Google Cloud", icon: GcpIcon },
    { name: "REST API", icon: RestApiIcon },
  ] as Skill[],
  projects: [
    {
      title: "Advanced Survival Assistant v2.0",
      description: [
        "Developed an offline AI survival assistant with real-time voice interaction using Vosk, Ollama, and Tkinter, offering emergency guidance through natural voice commands.",
        "Implemented features like wake word detection, live speech recognition, text-to-speech, and a modern GUI with configuration management.",
      ],
    },
    {
      title: "Poisonous Food Detector",
      description: [
          "Detects whether a food is poisonous or not, which can be used in a forest setting.",
          "Built using React and TypeScript which uses Gemini API to check and analyse whether a food found in a forest is poisonous or not and is edible or not.",
      ],
    },
    {
      title: "Znapkart",
      subtitle: "(Groceries Shopping Website)",
      description: [
        "Developed a modern grocery shopping web application using the MERN Stack (MongoDB, Express.js, React.js, Node.js) with full user authentication and session management.",
        "Implemented features like product browsing, cart management, and a responsive user interface for a seamless shopping experience.",
      ],
    },
  ] as Project[],
  onlinePresence: [
    {
      name: "Github",
      url: "https://github.com/hemanth10134",
      icon: GITHUB_ICON,
    },
    {
      name: "Leetcode",
      url: "https://leetcode.com/u/hemanthb1412/",
      icon: LEETCODE_ICON,
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/hemanth-b-19377b249/",
      icon: LINKEDIN_ICON,
    },
  ] as OnlinePresenceItem[],
};