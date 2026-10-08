import React from 'react';
import { tasawakProject, standardProjects } from '../data/portfolioData';
import { 
  ArrowRight, 
  Layers, 
  Workflow, 
  ShieldCheck, 
  CreditCard, 
  Database, 
  Zap, 
  Radio, 
  Box, 
  GitBranch, 
  Mail, 
  Calendar, 
  MapPin, 
  Server
} from 'lucide-react';
import './Projects.css';

const getCapabilityIcon = (category: string) => {
  switch (category) {
    case 'AUTHENTICATION':
      return <ShieldCheck size={18} className="text-accent" />;
    case 'PAYMENTS':
      return <CreditCard size={18} className="text-accent" />;
    case 'DATA':
      return <Database size={18} className="text-accent" />;
    case 'CACHING':
      return <Zap size={18} className="text-accent" />;
    case 'MESSAGING':
      return <Radio size={18} className="text-accent" />;
    case 'INFRASTRUCTURE':
      return <Box size={18} className="text-accent" />;
    case 'CI/CD':
      return <GitBranch size={18} className="text-accent" />;
    case 'NOTIFICATIONS':
      return <Mail size={18} className="text-accent" />;
    default:
      return <Server size={18} className="text-accent" />;
  }
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker font-mono">03 // IMPLEMENTATIONS</span>
          <h2>Featured Projects</h2>
          <p className="section-subtitle text-secondary">
            Production systems, architectural decisions, and backend engineering workflows.
          </p>
        </div>

        {/* 1. TASAWAK CASE STUDY */}
        <div className="tasawak-case-study card">
          <div className="case-study-hero">
            <div className="cs-meta-bar font-mono">
              <span className="cs-tag-primary">FLAGSHIP CASE STUDY</span>
              <span className="cs-meta-item">
                <Calendar size={13} /> {tasawakProject.timeline}
              </span>
              <span className="cs-meta-item">
                {tasawakProject.context} · {tasawakProject.role}
              </span>
            </div>

            <div className="cs-headline">
              <h3 className="cs-title">{tasawakProject.name}</h3>
              <span className="cs-type badge">{tasawakProject.type}</span>
            </div>

            <p className="cs-desc text-secondary">{tasawakProject.description}</p>
          </div>

          {/* Core Modules & Architecture Split */}
          <div className="cs-breakdown-grid">
            {/* Overview / Modules */}
            <div className="cs-module-card">
              <div className="cs-section-header">
                <Layers size={18} className="text-accent" />
                <h4 className="font-mono">COMMERCE FUNCTIONALITY</h4>
              </div>
              <ul className="cs-feature-list">
                {tasawakProject.overview?.map((item, idx) => (
                  <li key={idx} className="cs-feature-item">
                    <ArrowRight size={14} className="text-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="cs-tech-inline">
                <span className="cs-tech-label font-mono">STACK:</span>
                <div className="cs-tags-row">
                  {tasawakProject.technologies?.map((tech, idx) => (
                    <span key={idx} className="cs-pill font-mono">{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Tasawak Architecture Visual Diagram */}
            <div className="cs-arch-card">
              <div className="cs-section-header">
                <Workflow size={18} className="text-accent" />
                <h4 className="font-mono">SYSTEM TOPOLOGY & DATA FLOW</h4>
              </div>

              <div className="cs-diagram-container">
                <div className="diag-node diag-client">
                  <span className="diag-label font-mono">INGRESS</span>
                  <span className="diag-val">Client / Consumer</span>
                </div>

                <div className="diag-flow">↓ REST API Requests</div>

                <div className="diag-node diag-api">
                  <span className="diag-label font-mono">HTTP FRAMEWORK</span>
                  <span className="diag-val font-bold">Express.js API Router</span>
                </div>

                <div className="diag-flow">↓ Business Logic & Routing</div>

                <div className="diag-node diag-core">
                  <span className="diag-label font-mono">LOGIC CONTROLLER</span>
                  <span className="diag-val">Backend Business Logic & Auth</span>
                </div>

                <div className="diag-branch-header">
                  <span className="font-mono">┌──────────────┼──────────────┼──────────────┐</span>
                </div>

                <div className="diag-services-grid">
                  <div className="diag-service-item">
                    <span className="svc-name font-mono">MongoDB</span>
                    <span className="svc-role">Mongoose Store</span>
                  </div>
                  <div className="diag-service-item">
                    <span className="svc-name font-mono">Redis</span>
                    <span className="svc-role">TTL Cache</span>
                  </div>
                  <div className="diag-service-item">
                    <span className="svc-name font-mono">Stripe</span>
                    <span className="svc-role">Billing & Hooks</span>
                  </div>
                  <div className="diag-service-item">
                    <span className="svc-name font-mono">RabbitMQ</span>
                    <span className="svc-role">Job Broker</span>
                  </div>
                </div>

                <div className="diag-flow">↓ Asynchronous Job Pipeline</div>

                <div className="diag-node diag-worker">
                  <span className="diag-label font-mono">ASYNC EXECUTION</span>
                  <span className="diag-val">Background Worker Process (Nodemailer, Events)</span>
                </div>

                {/* Infrastructure layer */}
                <div className="diag-infra-layer">
                  <span className="infra-label font-mono">INFRASTRUCTURE LAYER:</span>
                  <div className="infra-badges">
                    <span className="infra-chip font-mono">Docker Container</span>
                    <span className="infra-chip font-mono">AWS EC2</span>
                    <span className="infra-chip font-mono">AWS S3</span>
                    <span className="infra-chip font-mono">Nginx Reverse Proxy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Deep-Dive Technical Capabilities */}
          <div className="cs-capabilities-section">
            <h4 className="font-mono cs-cap-heading">ENGINEERED SUBSYSTEMS</h4>
            <div className="cs-capabilities-grid">
              {tasawakProject.capabilities?.map((cap, idx) => (
                <div key={idx} className="cs-cap-box">
                  <div className="cs-cap-header">
                    {getCapabilityIcon(cap.category)}
                    <h5 className="font-mono">{cap.category}</h5>
                  </div>
                  <div className="cs-cap-tags">
                    {cap.details.map((detail, dIdx) => (
                      <span key={dIdx} className="cs-cap-tag font-mono">{detail}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2. OTHER FEATURED PROJECTS */}
        <div className="other-projects-heading">
          <span className="section-kicker font-mono">SYSTEMS & PLATFORMS</span>
          <h3>Additional Engineering Projects</h3>
        </div>

        <div className="other-projects-grid">
          {standardProjects.map((project) => (
            <div key={project.id} className="card standard-project-card">
              <div className="std-header">
                <div>
                  <div className="std-meta-row font-mono">
                    {project.timeline && (
                      <span className="std-timeline">
                        <Calendar size={13} /> {project.timeline}
                      </span>
                    )}
                    {project.location && (
                      <span className="std-location">
                        <MapPin size={13} /> {project.location}
                      </span>
                    )}
                    {project.role && (
                      <span className="std-role font-mono">{project.role}</span>
                    )}
                  </div>
                  <h4 className="std-name">{project.name}</h4>
                  {project.context && (
                    <div className="std-context font-mono text-secondary">{project.context}</div>
                  )}
                </div>
                <span className="badge std-badge">{project.type}</span>
              </div>

              <p className="std-desc text-secondary">{project.description}</p>

              {/* Technologies */}
              {project.technologies && project.technologies.length > 0 && (
                <div className="std-tech-row">
                  {project.technologies.map((t, idx) => (
                    <span key={idx} className="std-tech-tag font-mono">{t}</span>
                  ))}
                </div>
              )}

              {/* Business Capabilities if present */}
              {project.businessCapabilities && (
                <div className="std-features-block">
                  <span className="std-features-label font-mono">BUSINESS CAPABILITIES</span>
                  <ul className="std-features-list">
                    {project.businessCapabilities.map((item, idx) => (
                      <li key={idx}>
                        <ArrowRight size={13} className="text-accent shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technical Capabilities if present */}
              {project.technicalCapabilities && (
                <div className="std-features-block">
                  <span className="std-features-label font-mono">TECHNICAL CAPABILITIES</span>
                  <ul className="std-features-list">
                    {project.technicalCapabilities.map((item, idx) => (
                      <li key={idx}>
                        <ArrowRight size={13} className="text-accent shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* General Features */}
              {project.features && (
                <div className="std-features-block">
                  <span className="std-features-label font-mono">SYSTEM CAPABILITIES</span>
                  <ul className="std-features-list">
                    {project.features.map((item, idx) => (
                      <li key={idx}>
                        <ArrowRight size={13} className="text-accent shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.type.toLowerCase().includes('graduation') && (
                <div className="graduation-notice font-mono">
                  <span>Academic Graduation Project · Modern Academy</span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
