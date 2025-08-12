'use client';

import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Achieve Your Dreams with Us</h1>
        <p className="text-lg md:text-xl mb-6">
          Expert faculty • Smart classrooms • Personalized mentoring — get exam-ready with structured coaching.
        </p>
        <a href="#contact" className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100">
          Enquire Now
        </a>
      </div>
    </section>
  );
};

export default Hero;
