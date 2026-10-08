import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';
import { personalInfo, coreTechnologies } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
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
          <div className="architecture-diagram">
            <div className="arch-header">
              <div className="arch-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="arch-title font-mono">
                <Terminal size={14} className="text-accent" />
                <span>ARCH_TOPOLOGY.sys</span>
              </div>
            </div>

            <div className="arch-body">
              <div className="arch-node arch-client">
                <span className="arch-tag font-mono">REQUEST</span>
                <span>Client (Web / Mobile)</span>
              </div>
              
              <div className="arch-stream-line">
                <span className="stream-pipe">│</span>
                <span className="stream-badge font-mono">HTTP / REST</span>
                <span className="stream-arrow">↓</span>
              </div>

              <div className="arch-node arch-api">
                <span className="arch-tag font-mono">GATEWAY / ROUTING</span>
                <span>REST API Layer</span>
              </div>

              <div className="arch-stream-line">
                <span className="stream-pipe">│</span>
                <span className="stream-badge font-mono">DISPATCH</span>
                <span className="stream-arrow">↓</span>
              </div>

              <div className="arch-node arch-backend">
                <span className="arch-tag font-mono">CORE RUNTIME</span>
                <span className="font-bold">Backend Application (Node.js)</span>
              </div>

              <div className="arch-stream-line">
                <span className="stream-pipe">┌───────────────┼───────────────┐</span>
                <span className="stream-arrow">↓               ↓               ↓</span>
              </div>

              <div className="arch-row">
                <div className="arch-subnode arch-db">
                  <span className="subnode-title font-mono">MongoDB</span>
                  <span className="subnode-sub font-mono">Data Store</span>
                </div>
                <div className="arch-subnode arch-cache">
                  <span className="subnode-title font-mono">Redis</span>
                  <span className="subnode-sub font-mono">Caching / TTL</span>
                </div>
                <div className="arch-subnode arch-mq">
                  <span className="subnode-title font-mono">RabbitMQ</span>
                  <span className="subnode-sub font-mono">Message Broker</span>
                </div>
              </div>

              <div className="arch-footer font-mono">
                <span className="status-ping"></span>
                <span>System Pipeline Active · Event-Driven Architecture</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
