import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer style={{ 
      borderTop: '1px solid var(--border-color)', 
      padding: 'var(--spacing-xl) 0',
      backgroundColor: 'var(--bg-secondary)'
    }}>
      <div className="container" style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: 'var(--spacing-xs)' }}>
          {personalInfo.name}
        </div>
        <div className="text-accent font-mono" style={{ fontSize: '0.9rem', marginBottom: 'var(--spacing-md)' }}>
          {personalInfo.title}
        </div>
        <p className="text-secondary" style={{ fontSize: '0.85rem', marginBottom: 'var(--spacing-lg)' }}>
          Node.js · Express.js · NestJS · Backend Engineering
        </p>
        
        <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
          <a href={`mailto:${personalInfo.email}`} aria-label="Email" style={{ color: 'var(--text-secondary)' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
            <Mail size={20} />
          </a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ color: 'var(--text-secondary)' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
            <Github size={20} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: 'var(--text-secondary)' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
            <Linkedin size={20} />
          </a>
        </div>
        
        <div style={{ marginTop: 'var(--spacing-xl)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
