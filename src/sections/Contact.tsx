import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Linkedin, Github, FileText, Phone, MapPin } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Get In Touch</h2>
        
        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="mb-md">Let's build something great.</h3>
            <p className="text-secondary mb-xl">
              I am currently available for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="contact-links">
              <a href={`mailto:${personalInfo.email}`} className="contact-item card">
                <Mail className="text-accent" />
                <div>
                  <div className="font-mono text-xs text-secondary">EMAIL</div>
                  <div>{personalInfo.email}</div>
                </div>
              </a>
              
              <div className="contact-item card">
                <Phone className="text-accent" />
                <div>
                  <div className="font-mono text-xs text-secondary">PHONE</div>
                  <div>{personalInfo.phone}</div>
                </div>
              </div>
              
              <div className="contact-item card">
                <MapPin className="text-accent" />
                <div>
                  <div className="font-mono text-xs text-secondary">LOCATION</div>
                  <div>{personalInfo.location}</div>
                </div>
              </div>
            </div>
            
            <div className="mt-xl flex gap-md flex-wrap">
              <a href={personalInfo.cvUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <FileText size={18} /> Download CV
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <Github size={18} /> GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>
          
          <div className="contact-visual">
            <div className="terminal-window">
              <div className="terminal-header">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="terminal-body font-mono">
                <p><span className="text-accent">~</span> $ node contact.js</p>
                <p className="mt-sm">Contacting {personalInfo.name}...</p>
                <p className="mt-sm">Status: <span className="text-accent">Available</span></p>
                <p className="mt-sm">Ready to connect and build robust backend systems.</p>
                <p className="mt-xl"><span className="text-accent">~</span> $ <span className="cursor-blink">_</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
