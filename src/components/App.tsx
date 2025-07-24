function App() {
  const [showProjectsPage, setShowProjectsPage] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);

  // Add scroll listener to handle navigation
  React.useEffect(() => {
    const handleScroll = () => {
      // Check if we need to show projects page based on hash or scroll position
      const hash = window.location.hash;
      if (hash === '#projects') {
        setShowProjectsPage(true);
      }
    };

    // Listen for hash changes
    window.addEventListener('hashchange', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('hashchange', handleScroll);
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
}