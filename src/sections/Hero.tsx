import React from 'react';
import { ArrowRight } from 'lucide-react';
import { personalInfo, coreTechnologies } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import profileImg from '../assets/img.jpeg';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        
        <div className="hero-content">
          <div className="hero-badge animate-fade-in">
            <span className="badge">
              <span className="pulse-indicator"></span>
              Backend Developer · Cairo, Egypt
            </span>
          </div>
          
          <h1 className="hero-title animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {personalInfo.name}
            <span className="hero-title-accent text-accent">.</span>
          </h1>

          <h2 className="hero-subtitle animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {personalInfo.title}
          </h2>
          
          <p className="hero-description animate-fade-in text-secondary" style={{ animationDelay: '0.3s' }}>
            {personalInfo.heroStatement}
          </p>

          <div className="hero-tech-stack-wrapper animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <span className="tech-stack-label font-mono">CORE TECHNOLOGIES:</span>
            <div className="hero-tech-stack">
              {coreTechnologies.map(tech => (
                <span key={tech} className="tech-item font-mono">{tech}</span>
              ))}
            </div>
          </div>

          <div className="hero-actions animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={17} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>

          <div className="hero-social-links animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={18} />
              <span>GitHub</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hero-social-link"
              aria-label="Send Email"
            >
              <span className="font-mono text-accent">@</span>
              <span>{personalInfo.email}</span>
            </a>
          </div>
        </div>

        <div className="hero-visual animate-fade-in" style={{ animationDelay: '0.35s' }}>
          <div className="hero-image-frame">
            <img src={profileImg} alt={personalInfo.name} className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
