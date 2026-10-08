import React from 'react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { personalInfo, coreTechnologies } from '../data/portfolioData';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        
        <div className="hero-content">
          <div className="hero-badge animate-fade-in">
            <span className="badge">Status: Available for opportunities</span>
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

          <div className="hero-tech-stack animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {coreTechnologies.map(tech => (
              <span key={tech} className="tech-item font-mono">{tech}</span>
            ))}
          </div>

          <div className="hero-actions animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-visual animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="architecture-diagram">
            <div className="arch-node arch-client">Client</div>
            <div className="arch-arrow">↓</div>
            <div className="arch-node arch-api">REST API</div>
            <div className="arch-arrow">↓</div>
            <div className="arch-node arch-backend">Backend Application</div>
            <div className="arch-arrow">↓</div>
            <div className="arch-row">
              <div className="arch-node arch-db">MongoDB</div>
              <div className="arch-node arch-cache">Redis</div>
              <div className="arch-node arch-mq">RabbitMQ</div>
            </div>
            <div className="arch-row arch-labels">
              <span>Data</span>
              <span>Caching</span>
              <span>Background Jobs</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
