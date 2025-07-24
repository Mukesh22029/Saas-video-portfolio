import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'projects') {
      window.location.hash = '#projects';
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center text-white px-4 md:px-6 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)]" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
        <div className="mb-8">          
          <h1 className="text-4l sm:text-5xl md:text-6xl lg:text-6xl font-bold mb-7 leading-tight">
          Your Vision <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            Expertly Edited
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
          I create sharp, engaging short-form videos that elevate your message and leave a lasting impression — from SaaS to personal brands</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => scrollToSection('contact')}
            className="group bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transform hover:-translate-y-1 w-full sm:w-auto"
          >
            Let's Work Together
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-gray-300 hover:text-white px-6 sm:px-8 py-3 sm:py-4 font-semibold text-base sm:text-lg transition-colors border border-gray-600 hover:border-purple-400 rounded-lg w-full sm:w-auto"
          >
            View Portfolio
          </button>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-20 text-center">
          <p className="text-sm text-gray-400 mb-6">Trusted by 50+ Clients and 10+ companies</p>
          <div className="flex justify-center items-center gap-4 sm:gap-8 opacity-40 flex-wrap">
            <div className="w-24 h-8 bg-gray-700 rounded animate-pulse"></div>
            <div className="w-20 h-8 bg-gray-700 rounded animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-28 h-8 bg-gray-700 rounded animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="w-22 h-8 bg-gray-700 rounded animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;