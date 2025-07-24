import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Ellton Linsayan",
      quote: "He’s amazing!! Skillful editor and very straight forward.He left me speechless with his editing skills. I have no comment on his video I requested. I amazed with his magic editing skills!",
      avatar: "Saas/client.png",
      rating: 4
    },
    {
      name: "Michael Rodriguez",
      role: "CEO at DataFlow Pro",
      quote: "Professional, creative, and delivered exactly what we needed. Our product demo video has become our highest-converting asset.",
      avatar: "Saas/client.png",
      rating: 5
    },
    {
      name: "Emily Johnson",
      role: "Product Manager at TechVault",
      quote: "Incredible attention to detail and fast turnaround. The motion graphics perfectly captured our brand essence and product features.",
      avatar: "Saas/client.png",
      rating: 5
    },
    {
      name: "David Kim",
      role: "Founder at StartupFlow",
      quote: "Amazing work! The video helped us explain our complex SaaS product in just 60 seconds. Conversion rates went up by 60%.",
      avatar: "Saas/client.png",
      rating: 5
    },
    {
      name: "Lisa Wang",
      role: "Marketing Director at TechCorp",
      quote: "Outstanding quality and creativity. The animated explainer video became our most shared content across all platforms.",
      avatar: "Saas/client.png",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    const count = window.innerWidth < 768 ? 1 : 3; // Show 1 on mobile, 3 on desktop
    for (let i = 0; i < count; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="testimonials" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Hear from SaaS founders and marketing teams who've seen real results
          </p>
        </div>
        
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white p-2 md:p-3 rounded-full shadow-lg shadow-purple-500/25 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white p-2 md:p-3 rounded-full shadow-lg shadow-purple-500/25 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
          </button>

          {/* Testimonials Grid */}
          <div className={`grid gap-6 md:gap-8 ${isMobile ? 'grid-cols-1 px-12' : 'md:grid-cols-3 px-16'}`}>
            {getVisibleTestimonials().map((testimonial, index) => (
              <div key={`${currentIndex}-${index}`} className="bg-gradient-to-br from-[oklch(43.8% 0.218 303.724)] to-[oklch(20%_0.141_291.089)] border border-slate-700 rounded-2xl p-8 max-w-3xl mx-auto relative overflow-hidden">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/25">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-purple-500 shadow-lg shadow-purple-500/50' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-br from-purple-500/20 to-purple-600/20 text-purple-400 px-6 py-3 rounded-full border border-purple-500/30">
            <Star className="w-5 h-5 fill-current" />
            <span className="font-semibold">4.9/5 average rating</span>
            <span className="text-purple-300">• {testimonials.length}+ client reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;