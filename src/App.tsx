import React from 'react';
import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectsPage from './components/ProjectsPage';

function App() {
  const [showProjectsPage, setShowProjectsPage] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);

  // Add scroll listener to handle navigation
  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#projects') {
        setShowProjectsPage(true);
      } else {
        setShowProjectsPage(false);
      }
    };

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check on mount

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigateToCategory = (category: string) => {
    setSelectedCategory(category);
    setShowProjectsPage(true);
  };

  const handleBackToPortfolio = () => {
    setShowProjectsPage(false);
    setSelectedCategory(undefined);
    window.location.hash = '';
  };

  if (showProjectsPage) {
    return <ProjectsPage onBack={handleBackToPortfolio} initialCategory={selectedCategory} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 via-violet-950 to-purple-900/50">
      <Navigation />
      <Hero />
      <Portfolio 
        onViewAllProjects={() => setShowProjectsPage(true)} 
        onNavigateToCategory={handleNavigateToCategory}
      />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;