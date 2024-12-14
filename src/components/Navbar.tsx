import React from 'react';
import { TreePine } from 'lucide-react';
import Container from './ui/Container';
import { navLinks } from '../data/navigation';

export default function Navbar() {
  return (
    <nav className="bg-emerald-800 text-white p-4 fixed w-full top-0 z-50">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <TreePine className="h-6 w-6" />
            <span className="text-xl font-bold">Evergreen Bar</span>
          </div>
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-emerald-200 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a 
            href="https://www.roblox.com/games/8688421471/The-Evergreen-Bar-BETA"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-500 px-4 py-2 rounded-lg transition-colors"
          >
            Play Now
          </a>
        </div>
      </Container>
    </nav>
  );
}