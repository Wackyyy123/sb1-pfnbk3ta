import React from 'react';
import Section from './ui/Section';
import { galleryImages } from '../data/gallery';

export default function Gallery() {
  return (
    <Section id="gallery" className="bg-emerald-50">
      <h2 className="text-3xl font-bold text-center mb-12 text-emerald-900">Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <img 
            key={index}
            src={image.src}
            alt={image.alt}
            className="rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          />
        ))}
      </div>
    </Section>
  );
}