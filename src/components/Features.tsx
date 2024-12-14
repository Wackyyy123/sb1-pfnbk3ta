import React from 'react';
import Feature from './Feature';
import Section from './ui/Section';
import { features } from '../data/features';

export default function Features() {
  return (
    <Section id="features" className="bg-white">
      <h2 className="text-3xl font-bold text-center mb-12 text-emerald-900">Game Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Feature 
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </Section>
  );
}