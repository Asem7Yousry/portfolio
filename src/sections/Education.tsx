import React from 'react';
import { education } from '../data/portfolioData';
import { GraduationCap, BookOpen, Calendar, MapPin } from 'lucide-react';
import './Education.css';

const Education: React.FC = () => {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker font-mono">06 // ACADEMICS</span>
          <h2>Education</h2>
          <p className="section-subtitle text-secondary">
            Formal foundations in software engineering and web application development.
          </p>
        </div>
        
        <div className="education-card-wrapper">
          {education.map((edu, idx) => (
            <div key={idx} className="card education-card">
              <div className="edu-top-row">
                <div className="edu-badge-icon">
                  <GraduationCap size={28} className="text-accent" />
                </div>
                <div className="edu-info">
                  <h3 className="edu-faculty">{edu.faculty}</h3>
                  <div className="edu-institution-row font-mono text-secondary">
                    <span className="text-primary font-bold">{edu.institution}</span>
                    <span>·</span>
                    <span><MapPin size={12} className="inline mr-1" /> Cairo, Egypt</span>
                  </div>
                </div>
                <div className="badge edu-time-badge font-mono">
                  <Calendar size={13} />
                  <span>{edu.timeline}</span>
                </div>
              </div>
              
              <div className="edu-major-section">
                <div className="edu-label font-mono">MAJOR FIELD OF STUDY:</div>
                <div className="edu-major-pill font-mono">
                  <BookOpen size={15} className="text-accent" />
                  <span>{edu.major}</span>
                </div>
              </div>

              {edu.graduationProject && (
                <div className="edu-grad-project-box">
                  <div className="grad-badge font-mono">GRADUATION PROJECT</div>
                  <h4 className="grad-title">{edu.graduationProject.name}</h4>
                  <p className="grad-desc text-secondary">
                    {edu.graduationProject.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
