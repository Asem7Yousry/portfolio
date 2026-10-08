import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Code2, Server, Users2, ShieldCheck } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker font-mono">01 // PROFILE</span>
          <h2>About Me</h2>
        </div>

        <div className="about-grid">
          <div className="about-bio-card card">
            <h3 className="about-heading">
              Backend Engineer focusing on dependable server architectures, robust APIs, and data integrity.
            </h3>
            <p className="about-text text-secondary">
              {personalInfo.about}
            </p>

            <div className="about-highlights-grid">
              <div className="about-highlight-item">
                <div className="highlight-icon-wrapper">
                  <Server size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="highlight-title">Backend Specialization</h4>
                  <p className="highlight-desc text-secondary">
                    Core expertise in Node.js, Express.js, and NestJS building resilient RESTful APIs.
                  </p>
                </div>
              </div>

              <div className="about-highlight-item">
                <div className="highlight-icon-wrapper">
                  <Code2 size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="highlight-title">Relational & NoSQL Data</h4>
                  <p className="highlight-desc text-secondary">
                    Hands-on database architecture with MongoDB, PostgreSQL, and MySQL paired with Redis caching.
                  </p>
                </div>
              </div>

              <div className="about-highlight-item">
                <div className="highlight-icon-wrapper">
                  <ShieldCheck size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="highlight-title">Cloud & Integrations</h4>
                  <p className="highlight-desc text-secondary">
                    Dockerized environments, AWS cloud deployments, and verified Stripe payment workflows.
                  </p>
                </div>
              </div>

              <div className="about-highlight-item">
                <div className="highlight-icon-wrapper">
                  <Users2 size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="highlight-title">Agile Collaboration</h4>
                  <p className="highlight-desc text-secondary">
                    Active contributor in Agile sprints, translating technical specs cleanly for cross-functional teams.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-meta-card card">
            <h4 className="font-mono text-accent mb-md">SYSTEM ATTRIBUTES</h4>
            <div className="meta-list font-mono">
              <div className="meta-row">
                <span className="meta-key">TITLE:</span>
                <span className="meta-val">Backend Developer</span>
              </div>
              <div className="meta-row">
                <span className="meta-key">EXP:</span>
                <span className="meta-val">2 Years</span>
              </div>
              <div className="meta-row">
                <span className="meta-key">LOCATION:</span>
                <span className="meta-val">Cairo, Egypt</span>
              </div>
              <div className="meta-row">
                <span className="meta-key">STACK:</span>
                <span className="meta-val">Node.js · NestJS · TypeScript</span>
              </div>
              <div className="meta-row">
                <span className="meta-key">MESSAGING:</span>
                <span className="meta-val">RabbitMQ · BullMQ</span>
              </div>
              <div className="meta-row">
                <span className="meta-key">CONTAINERS:</span>
                <span className="meta-val">Docker</span>
              </div>
              <div className="meta-row">
                <span className="meta-key">METHODOLOGY:</span>
                <span className="meta-val">Agile / Scrum</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
