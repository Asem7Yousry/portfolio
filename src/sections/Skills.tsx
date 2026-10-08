import React from 'react';
import { skills } from '../data/portfolioData';
import { 
  Code, 
  Server, 
  Database, 
  Network, 
  Layers, 
  CreditCard, 
  Cloud, 
  Cpu 
} from 'lucide-react';
import './Skills.css';

const getSkillCategoryIcon = (category: string) => {
  switch (category) {
    case 'Languages':
      return <Code size={18} className="text-accent" />;
    case 'Backend':
      return <Server size={18} className="text-accent" />;
    case 'Databases':
      return <Database size={18} className="text-accent" />;
    case 'APIs & Integration':
      return <Network size={18} className="text-accent" />;
    case 'Caching & Queues':
      return <Layers size={18} className="text-accent" />;
    case 'Payments':
      return <CreditCard size={18} className="text-accent" />;
    case 'Cloud & DevOps':
      return <Cloud size={18} className="text-accent" />;
    case 'Problem Solving & Architecture':
      return <Cpu size={18} className="text-accent" />;
    default:
      return <Server size={18} className="text-accent" />;
  }
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker font-mono">05 // ARSENAL</span>
          <h2>Technical Skills</h2>
          <p className="section-subtitle text-secondary">
            Categorized technical capabilities and engineering tooling. No percentage meters—only verified systems applied in production.
          </p>
        </div>
        
        <div className="skills-grid">
          {skills.map((skillGroup, idx) => (
            <div key={idx} className="skill-category card">
              <div className="skill-category-header">
                {getSkillCategoryIcon(skillGroup.category)}
                <h4 className="font-mono text-accent">{skillGroup.category}</h4>
              </div>
              <div className="skill-items">
                {skillGroup.items.map((item, iIdx) => (
                  <span key={iIdx} className="skill-tag font-mono">{item}</span>
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
