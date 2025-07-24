import React from 'react';
import { Video, Zap, FileText, Layers, Volume2, Clapperboard, Images } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Video,
      title: "Video Editing for SaaS",
      description: "Professional editing that transforms raw footage into polished product demos and explainer videos."
    },
    {
      icon: Zap,
      title: "Motion Graphics",
      description: "Dynamic animations and visual effects that bring your software features to life with engaging motion."
    },
    {
      icon: Clapperboard,
      title: "2D Animation",
      description: "Engaging character and explainer animations that simplify complex ideas and captivate your audience."
    },
    {
      icon: Layers,
      title: "UI/UX Animation",
      description: "Smooth interface animations and micro-interactions that showcase your product's user experience."
    },
    {
      icon: Images,
      title: "Custom Illustrations",
      description: "Unique, brand-aligned illustrations crafted to enhance storytelling and elevate visual appeal."
   }
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Services
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            End-to-end video production services designed specifically for SaaS companies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div className="bg-gradient-to-br from-[oklch(43.8% 0.218 303.724)] to-[oklch(20%_0.141_291.089)] border border-slate-700 rounded-2xl p-8 max-w-3xl mx-auto relative overflow-hidden">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/25">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
        <div className="bg-gradient-to-br from-[oklch(43.8% 0.218 303.724)] to-[oklch(20%_0.141_291.089)] border border-slate-700 rounded-2xl p-8 max-w-3xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Custom Video Solutions
              </h3>
              <p className="text-gray-300 mb-6">
                Need something specific? I create custom video solutions tailored to your unique SaaS product and marketing goals.
              </p>
              <a
                href="https://calendly.com/koraganjimukesh/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-purple-500/25">
                  Discuss Your Project
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;