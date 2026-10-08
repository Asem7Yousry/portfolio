import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, FileText, Phone, MapPin, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import './Contact.css';

const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker font-mono">07 // CONNECT</span>
          <h2>Contact</h2>
          <p className="section-subtitle text-secondary">
            Reach out directly for backend engineering roles, technical discussions, or freelance collaborations.
          </p>
        </div>
        
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-identity mb-lg">
              <h3 className="contact-name">{personalInfo.name}</h3>
              <p className="contact-role text-accent font-mono">{personalInfo.title}</p>
            </div>

            <p className="text-secondary mb-xl contact-statement">
              Available for backend opportunities. Whether discussing architecture, Node.js systems, or prospective teams, feel free to get in touch.
            </p>
            
            <div className="contact-links">
              <div className="contact-item card">
                <div className="contact-icon-wrapper">
                  <Mail className="text-accent" size={20} />
                </div>
                <div className="contact-details">
                  <div className="font-mono text-xs text-secondary">DIRECT EMAIL</div>
                  <a href={`mailto:${personalInfo.email}`} className="contact-value email-link">
                    {personalInfo.email}
                  </a>
                </div>
                <button 
                  onClick={handleCopyEmail}
                  className="copy-btn font-mono"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check size={14} className="text-accent" /> : <Copy size={14} />}
                  <span>{copiedEmail ? 'COPIED' : 'COPY'}</span>
                </button>
              </div>
              
              <div className="contact-item card">
                <div className="contact-icon-wrapper">
                  <Phone className="text-accent" size={20} />
                </div>
                <div className="contact-details">
                  <div className="font-mono text-xs text-secondary">PHONE / WHATSAPP</div>
                  <a href={`tel:${personalInfo.phone}`} className="contact-value">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              
              <div className="contact-item card">
                <div className="contact-icon-wrapper">
                  <MapPin className="text-accent" size={20} />
                </div>
                <div className="contact-details">
                  <div className="font-mono text-xs text-secondary">LOCATION</div>
                  <div className="contact-value">{personalInfo.location}</div>
                </div>
              </div>
            </div>
            
            <div className="mt-xl flex gap-md flex-wrap contact-action-row">
              {personalInfo.cvUrl && (
                <a 
                  href={personalInfo.cvUrl} 
                  download 
                  className="btn btn-primary font-mono"
                  title="Download Curriculum Vitae"
                >
                  <FileText size={17} /> Download CV
                </a>
              )}
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary font-mono"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={17} /> GitHub
              </a>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary font-mono"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={17} /> LinkedIn
              </a>
            </div>
          </div>
          
          <div className="contact-visual">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="dot-group">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <span className="terminal-title font-mono">node backend-connect.js</span>
              </div>
              <div className="terminal-body font-mono">
                <p><span className="text-accent">asem@server:~$</span> node init-contact.js</p>
                <p className="term-output mt-sm">✓ Loading profile: <span className="term-highlight">{personalInfo.name}</span></p>
                <p className="term-output">✓ Title: <span className="term-highlight">{personalInfo.title}</span></p>
                <p className="term-output">✓ Core: Express.js · NestJS · PostgreSQL · Redis · RabbitMQ</p>
                <p className="term-output">✓ Server Region: <span className="term-highlight">Cairo, Egypt [UTC+3]</span></p>
                <p className="term-output">✓ Status: <span className="text-accent">Available for Opportunities</span></p>
                <p className="term-output mt-md text-secondary">// Sending TCP connection request...</p>
                <p className="term-output text-secondary">// Ready to collaborate and ship dependable backend systems.</p>
                <p className="mt-xl"><span className="text-accent">asem@server:~$</span> <span className="cursor-blink">_</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
