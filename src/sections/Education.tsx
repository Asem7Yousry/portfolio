import React from 'react';
import { education } from '../data/portfolioData';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="section bg-tertiary-subtle">
      <div className="container">
        <h2>Education</h2>
        
        <div className="grid grid-cols-1 gap-lg" style={{ maxWidth: '800px', margin: '0 auto' }}>
          {education.map((edu, idx) => (
            <div key={idx} className="card">
              <div className="flex items-center gap-md mb-md">
                <div style={{ padding: '12px', background: 'rgba(74, 222, 128, 0.1)', borderRadius: '50%', color: 'var(--accent-primary)' }}>
                  <GraduationCap size={28} />
                </div>
                <div>
                  <h3 style={{ marginBottom: '4px' }}>{edu.faculty}</h3>
                  <div className="text-secondary">{edu.institution}</div>
                </div>
                <div className="badge" style={{ marginLeft: 'auto' }}>{edu.timeline}</div>
              </div>
              
              <div style={{ marginTop: 'var(--spacing-md)' }}>
                <div className="font-mono text-accent" style={{ marginBottom: 'var(--spacing-xs)', fontSize: '0.9rem' }}>
                  MAJOR
                </div>
                <p>{edu.major}</p>
              </div>

              {edu.graduationProject && (
                <div style={{ marginTop: 'var(--spacing-lg)', borderTop: '1px solid var(--border-color)', paddingTop: 'var(--spacing-md)' }}>
                  <div className="font-mono text-accent" style={{ marginBottom: 'var(--spacing-xs)', fontSize: '0.9rem' }}>
                    GRADUATION PROJECT: {edu.graduationProject.name.toUpperCase()}
                  </div>
                  <p className="text-secondary" style={{ fontSize: '0.95rem' }}>
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
