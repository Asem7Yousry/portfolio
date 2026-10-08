import React from 'react';
import { experience } from '../data/portfolioData';
import { Briefcase, ArrowRight, Calendar, MapPin } from 'lucide-react';
import './Experience.css';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker font-mono">04 // CAREER HISTORY</span>
          <h2>Professional Experience</h2>
          <p className="section-subtitle text-secondary">
            Roles, production responsibilities, and engineering duties delivered across commercial environments.
          </p>
        </div>
        
        <div className="timeline-container">
          {experience.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-axis">
                <div className="timeline-marker">
                  <Briefcase size={16} className="text-accent" />
                </div>
                <div className="timeline-line"></div>
              </div>

              <div className="timeline-content-card card">
                <div className="timeline-header">
                  <div className="timeline-title-area">
                    <h3 className="timeline-role">{exp.title}</h3>
                    <div className="timeline-company-row font-mono">
                      <span className="company-name text-accent">{exp.company}</span>
                      {exp.location && (
                        <span className="timeline-loc text-secondary">
                          <MapPin size={12} /> {exp.location}
                        </span>
                      )}
                      {exp.type && (
                        <span className="timeline-type text-secondary">
                          · {exp.type}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="timeline-badge font-mono badge">
                    <Calendar size={13} />
                    <span>{exp.timeline}</span>
                  </div>
                </div>

                <div className="timeline-duty-label font-mono">CORE RESPONSIBILITIES:</div>
                <ul className="timeline-responsibilities">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="responsibility-item">
                      <ArrowRight size={14} className="text-accent shrink-0 duty-arrow" />
                      <span>{resp}</span>
                    </li>
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

export default Experience;
