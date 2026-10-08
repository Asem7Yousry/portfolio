import React from 'react';
import { skills } from '../data/portfolioData';
import './Skills.css';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>Technical Skills</h2>
        
        <div className="skills-grid">
          {skills.map((skillGroup, idx) => (
            <div key={idx} className="skill-category card">
              <h4 className="font-mono text-accent mb-md">{skillGroup.category}</h4>
              <div className="skill-items">
                {skillGroup.items.map((item, iIdx) => (
                  <span key={iIdx} className="skill-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
