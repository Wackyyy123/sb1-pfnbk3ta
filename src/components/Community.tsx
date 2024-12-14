import React from 'react';
import Section from './ui/Section';
import Button from './ui/Button';

export default function Community() {
  return (
    <Section id="community" className="bg-emerald-800 text-white">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-8">Join Our Community</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Become part of our growing family of coffee enthusiasts and friendly players.
          Share experiences, make friends, and create memories together.
        </p>
        <Button variant="secondary" size="lg">
          Join Discord
        </Button>
      </div>
    </Section>
  );
}