import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import './Footer.css';

const CURRENT_YEAR = new Date().getFullYear();

const Footer: React.FC = () => {
  return (
    <footer className="footer-root">
      <div className="container footer-container">
        <div className="footer-identity">
          <div className="footer-name">{personalInfo.name}</div>
          <div className="text-accent font-mono footer-title">
            {personalInfo.title}
          </div>
        </div>

        <p className="text-secondary footer-tagline">
          Node.js · Express.js · NestJS · Backend Engineering
        </p>
        
        <div className="footer-social-links">
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
            className="footer-social-btn"
          >
            <Mail size={18} />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="footer-social-btn"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="footer-social-btn"
          >
            <LinkedinIcon size={18} />
          </a>
        </div>
        
        <div className="footer-copyright font-mono">
          &copy; {CURRENT_YEAR} {personalInfo.name} · All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
