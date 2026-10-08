import React from 'react';
import { whatIBuild, engineeringFocusList } from '../data/portfolioData';
import { Server, Database, Zap, Lock, CreditCard, Cpu, CheckCircle2 } from 'lucide-react';
import './EngineeringFocus.css';

const getCategoryIcon = (title: string) => {
  if (title.includes('REST APIs')) return <Server className="text-accent" size={24} />;
  if (title.includes('Data')) return <Database className="text-accent" size={24} />;
  if (title.includes('Caching')) return <Zap className="text-accent" size={24} />;
  if (title.includes('Authentication')) return <Lock className="text-accent" size={24} />;
  if (title.includes('Payments')) return <CreditCard className="text-accent" size={24} />;
  return <Cpu className="text-accent" size={24} />;
};

const EngineeringFocus: React.FC = () => {
  return (
    <section id="engineering" className="section engineering-section">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker font-mono">02 // CAPABILITIES</span>
          <h2>What I Build</h2>
          <p className="section-subtitle text-secondary">
            Engineering robust server-side architectures, real-time channels, and reliable data pipelines.
          </p>
        </div>

        {/* 6 What I Build Pillars */}
        <div className="grid grid-cols-3 gap-lg focus-grid">
          {whatIBuild.map((item, idx) => (
            <div key={idx} className="card focus-card">
              <div className="focus-card-top">
                <div className="focus-icon-wrapper">
                  {getCategoryIcon(item.title)}
                </div>
                <span className="focus-index font-mono">0{idx + 1}</span>
              </div>
              <h3 className="focus-title">{item.title}</h3>
              <p className="focus-desc text-secondary">{item.description}</p>
              
              <div className="focus-tech-tags">
                {item.technologies.map((t, tIdx) => (
                  <span key={tIdx} className="focus-tag font-mono">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Focus & Mindset Section */}
        <div className="card focus-mindset-card mt-2xl">
          <div className="mindset-header">
            <div>
              <span className="section-kicker font-mono">CORE DISCIPLINES</span>
              <h3 className="mindset-title">Engineering Focus</h3>
              <p className="text-secondary mindset-desc">
                The technical principles, design patterns, and systemic concepts that guide how I architect and write backend code.
              </p>
            </div>
          </div>

          <div className="mindset-tags-grid">
            {engineeringFocusList.map((focus, idx) => (
              <div key={idx} className="mindset-chip">
                <CheckCircle2 size={15} className="text-accent" />
                <span className="font-mono">{focus}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default EngineeringFocus;
