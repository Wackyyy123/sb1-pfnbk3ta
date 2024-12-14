import React from 'react';
import Section from './ui/Section';
import Button from './ui/Button';
import { GAME_URL } from '../utils/constants';

export default function Hero() {
  return (
    <Section id="home" className="pt-24 pb-12 md:pt-32 md:pb-24">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-emerald-900 mb-6">
          Welcome to Evergreen Bar
        </h1>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl">
          Experience the coziest virtual café in Roblox where friends gather, baristas craft, and memories are made.
        </p>
        <div className="flex gap-4">
          <a 
            href={GAME_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg">Play Now</Button>
          </a>
          <a href="#features">
            <Button variant="outline" size="lg">Learn More</Button>
          </a>
        </div>
      </div>
    </Section>
  );
}