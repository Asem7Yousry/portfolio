import React from 'react';
import { engineeringFocus } from '../data/portfolioData';
import { Server, Database, Zap, Lock, CreditCard, LayoutDashboard } from 'lucide-react';
import './EngineeringFocus.css';

const getIcon = (title: string) => {
  if (title.includes('API')) return <Server className="text-accent" size={24} />;
  if (title.includes('Data')) return <Database className="text-accent" size={24} />;
  if (title.includes('Async')) return <Zap className="text-accent" size={24} />;
  if (title.includes('Auth')) return <Lock className="text-accent" size={24} />;
  if (title.includes('Payment')) return <CreditCard className="text-accent" size={24} />;
  return <LayoutDashboard className="text-accent" size={24} />;
};

const EngineeringFocus: React.FC = () => {
  return (
    <section id="engineering" className="section bg-tertiary-subtle">
      <div className="container">
        <h2>What I Build</h2>
        <div className="grid grid-cols-3 gap-lg focus-grid">
          {engineeringFocus.map((item, idx) => (
            <div key={idx} className="card focus-card">
              <div className="focus-icon-wrapper">
                {getIcon(item.title)}
              </div>
              <h3>{item.title}</h3>
              <p className="text-secondary">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringFocus;
