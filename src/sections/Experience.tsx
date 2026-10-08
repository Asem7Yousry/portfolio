import React from 'react';
import { experience } from '../data/portfolioData';
import { Briefcase, ArrowRight } from 'lucide-react';
import './Experience.css';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section bg-tertiary-subtle">
      <div className="container">
        <h2>Professional Experience</h2>
        
        <div className="timeline">
          {experience.map((exp, idx) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-marker">
                <Briefcase size={16} className="text-primary" />
              </div>
              <div className="timeline-content card">
                <div className="timeline-header">
                  <div>
                    <h3>{exp.title}</h3>
                    <div className="timeline-company text-accent">
                      {exp.company} {exp.location && `— ${exp.location}`} {exp.type && `— ${exp.type}`}
                    </div>
                  </div>
                  <div className="timeline-date badge">{exp.timeline}</div>
                </div>
                
                <ul className="timeline-responsibilities">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx}>
                      <ArrowRight size={14} className="text-secondary shrink-0 mt-1" />
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
