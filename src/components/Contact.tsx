import React, { useState } from 'react';
import { Send, Calendar, Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await fetch("https://formspree.io/f/myzpeanq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        alert("✅ Message sent successfully!");
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        alert("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("⚠️ Something went wrong. Please try again later.");
    }
  };
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Let's Create Something Amazing
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to turn your SaaS product into compelling video content? Let's discuss your project.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors text-white placeholder-gray-400"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors text-white placeholder-gray-400"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-vertical text-white placeholder-gray-400"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-purple-500/25"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Quick Connect</h3>
              
              <a
               href="https://calendly.com/koraganjimukesh/30min"
               target="_blank"
               rel="noopener noreferrer"
               className="w-full bg-gray-900 hover:bg-gray-800 border-2 border-purple-500 text-purple-400 px-6 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-3 group"
               >
               <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Schedule a Call
              </a>

              <div className="flex items-center gap-4 p-4 bg-gray-900 border border-gray-800 rounded-lg">
                <MessageSquare className="w-6 h-6 text-purple-400" />
                <div>
                  <p className="font-medium text-white">Response Time</p>
                  <p className="text-gray-300">Within 24 hours</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
              <h4 className="font-semibold text-white mb-3">Project Timeline</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Initial consultation: 1-2 days</li>
                <li>• Concept & script: 3-5 days</li>
                <li>• Video production: 5-10 days</li>
                <li>• Revisions: 2-3 days</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;