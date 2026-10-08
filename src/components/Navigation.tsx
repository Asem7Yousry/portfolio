import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './Navigation.css';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Engineering', href: '#engineering' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#" className="navbar-logo">
          <span className="font-mono text-accent">{'<'}</span>
          Asem Yousry
          <span className="font-mono text-accent">{' />'}</span>
        </a>

        {/* Desktop Nav */}
        <div className="navbar-desktop-menu">
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="nav-link">{link.name}</a>
              </li>
            ))}
          </ul>
          <div className="navbar-social">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${personalInfo.email}`} aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="navbar-mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <div className="navbar-mobile-menu">
          <ul className="navbar-mobile-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="nav-mobile-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
