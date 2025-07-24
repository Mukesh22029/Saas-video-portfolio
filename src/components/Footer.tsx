import React from 'react';
import { Play, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <Play className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-xl">VideoPro</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Professional video editing services for SaaS companies. Turning complex products into compelling stories that convert.
            </p>
            <div className="flex space-x-4">
            <a
  href="https://www.linkedin.com/in/mukesh-koraganji-997862282/"
  className="text-gray-400 hover:text-white transition-colors"
  target="_blank"
  rel="noopener noreferrer"
>
  <Linkedin className="w-5 h-5" />
</a>

<a
  href="https://x.com/buildwithclips?t=UXX20Efsc4Ep7M8zgtt2sg&s=09"
  className="text-gray-400 hover:text-white transition-colors"
  target="_blank"
  rel="noopener noreferrer"
>
  <Twitter className="w-5 h-5" />
</a>

<a
  href="https://www.instagram.com/editwithmukesh?igsh=MXN5ZDVoMjkwMXJiYQ=="
  className="text-gray-400 hover:text-white transition-colors"
  target="_blank"
  rel="noopener noreferrer"
>
  <Instagram className="w-5 h-5" />
</a>

<a
  href="mailto:koraganjimukesh@gmail.com"
  className="text-gray-400 hover:text-white transition-colors"
  target="_blank"
  rel="noopener noreferrer"
>
  <Mail className="w-5 h-5" />
</a>

            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Video Editing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Motion Graphics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">UI Animation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sound Design</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2025 VideoPro. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;