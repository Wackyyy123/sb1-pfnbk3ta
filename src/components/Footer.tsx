import React from 'react';
import Container from './ui/Container';
import { CURRENT_YEAR } from '../utils/constants';

export default function Footer() {
  return (
    <footer className="bg-emerald-900 text-white py-8">
      <Container>
        <div className="text-center">
          <p className="mb-4">© {CURRENT_YEAR} Evergreen Bar. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-emerald-200 transition-colors">Terms</a>
            <a href="#" className="hover:text-emerald-200 transition-colors">Privacy</a>
            <a href="#" className="hover:text-emerald-200 transition-colors">Contact</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}