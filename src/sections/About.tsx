import React from 'react';
import { personalInfo } from '../data/portfolioData';

const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2>About Me</h2>
        <div className="card">
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            {personalInfo.about}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
