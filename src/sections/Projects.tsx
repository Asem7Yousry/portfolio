import React from 'react';
import { featuredProjects } from '../data/portfolioData';
import { Layers, Zap, Database, Lock, CreditCard, Activity, ArrowRight } from 'lucide-react';
import './Projects.css';

const Projects: React.FC = () => {
  const tasawak = featuredProjects.find(p => p.id === 'tasawak');
  const otherProjects = featuredProjects.filter(p => p.id !== 'tasawak');

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Featured Projects</h2>
        
        {/* Tasawak Case Study */}
        {tasawak && (
          <div className="case-study-card">
            <div className="case-study-header">
              <h3>{tasawak.name}</h3>
              <div className="badge">{tasawak.type}</div>
            </div>
            
            <p className="case-study-desc">{tasawak.description}</p>
            
            <div className="case-study-grid">
              <div className="cs-column">
                <h4 className="font-mono text-accent">OVERVIEW</h4>
                <ul className="cs-list">
                  {tasawak.overview?.map((item, idx) => (
                    <li key={idx}><ArrowRight size={14} className="text-accent" /> {item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="cs-column">
                <h4 className="font-mono text-accent">ARCHITECTURE</h4>
                <div className="cs-mini-diagram">
                  <div className="cs-node">API <br/> Express.js</div>
                  <div className="cs-arrow">↓</div>
                  <div className="cs-layer">
                    <span>MongoDB</span>
                    <span>Redis</span>
                    <span>RabbitMQ</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="cs-capabilities-grid mt-lg">
              {tasawak.capabilities?.map((cap, idx) => (
                <div key={idx} className="cs-cap-card">
                  <h5 className="font-mono text-secondary">{cap.category}</h5>
                  <div className="cs-tags">
                    {cap.details.map((detail, dIdx) => (
                      <span key={dIdx} className="cs-tag">{detail}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other Projects */}
        <div className="other-projects-grid">
          {otherProjects.map(project => (
            <div key={project.id} className="card project-card">
              <div className="project-header">
                <h3>{project.name}</h3>
                <span className="text-secondary text-sm">{project.type}</span>
              </div>
              
              {project.description && <p className="project-desc">{project.description}</p>}
              
              {project.technologies && (
                <div className="project-tech">
                  {project.technologies.map((t, idx) => (
                    <span key={idx} className="cs-tag">{t}</span>
                  ))}
                </div>
              )}
              
              <div className="project-features">
                <h5 className="font-mono text-secondary mb-xs">KEY FEATURES</h5>
                <ul className="cs-list">
                  {project.businessCapabilities?.slice(0, 3).map((feat, idx) => (
                    <li key={idx}><ArrowRight size={14} className="text-accent" /> {feat}</li>
                  ))}
                  {project.technicalCapabilities?.slice(0, 3).map((feat, idx) => (
                    <li key={idx}><ArrowRight size={14} className="text-accent" /> {feat}</li>
                  ))}
                  {project.capabilities?.map((feat, idx) => (
                    <li key={idx}><ArrowRight size={14} className="text-accent" /> {feat}</li>
                  ))}
                  {project.features?.map((feat, idx) => (
                    <li key={idx}><ArrowRight size={14} className="text-accent" /> {feat}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Projects;
