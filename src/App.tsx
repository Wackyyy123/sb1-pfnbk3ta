import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Community from './components/Community';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-emerald-50">
      <Navbar />
      <Hero />
      <Features />
      <Community />
      <Footer />
    </div>
  );
}

export default App;