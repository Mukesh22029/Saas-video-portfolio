import React from 'react';
import { Play } from 'lucide-react';
import VideoModal from './VideoModal';
import VideoFormModal from './VideoFormModal';

const Portfolio = ({ onViewAllProjects, onNavigateToCategory }: { 
  onViewAllProjects: () => void;
  onNavigateToCategory: (category: string) => void;
}) => {
  const [selectedVideo, setSelectedVideo] = React.useState<any>(null);
  const [showVideoModal, setShowVideoModal] = React.useState(false);
  const [showFormModal, setShowFormModal] = React.useState(false);

  const projects = [
    {
      id: 1,
      title: "Website Showcase",
      description: "Sleek presentation of Website interface with gesture-based interactions and animations.",
      thumbnail: "/Saas/thumbnails/1.png",
      videoUrl: "/Saas/with_sound.mp4",
      tags: ["UI Animation", "Feature Highlight", "Promo"],
      category: "Shorts/Reels Editing"
    },
    {
      id: 2,
      title: "Sales Dashboard Promo",
      description: "product demo showcasing key analytics features and user workflow automation.",
      thumbnail: "/Saas/thumbnails/2.png",
      videoUrl: "/Saas/with_audio.mp4",
      tags: ["Onboarding", "Motion Graphics", "Tutorial"],
      category: "Motion Photo/Artworks"
    },
    {
      id: 3,
      title: "Integration Walkthrough",
      description: "Technical deep-dive showing seamless connections and third-party tool compatibility.",
      thumbnail: "/Saas/thumbnails/3.png",
      videoUrl: "/Saas/landpill.mp4",
      tags: ["Integration", "Technical", "Demo"],
      category: "Shorts/Reels Editing"
    },
    {
      id: 4,
      title:"Mobile App Showcase",
      description: "Sleek presentation of mobile app interface with gesture-based interactions and animations.",
      thumbnail: "/Saas/thumbnails/4.png",
      videoUrl: "/Saas/Konster.mp4",
      tags: ["App", "Showcase", "Demo"],
      category: "Samples Before/After"
    },
    {
      id: 5,
      title: "Agency Workflow Tour",
      description: "A behind-the-scenes walkthrough of our creative process – from concept to delivery.",
      thumbnail: "/Saas/thumbnails/5.png",
      videoUrl: "/Saas/lt_video4.mp4",
      tags: ["Agency", "Creative", "Process"],
      category: "Ads - Digital products"
    },
    {
      id: 6,
      title: "New Version Launch Teaser",
      description: "High-energy announcement video for new Version of the website.",
      thumbnail: "/Saas/thumbnails/6.png",
      videoUrl: "/Saas/lt_video7.mp4",
      tags: ["Launch", "New Version", "Social Media"],
      category: "Personal Projects"
    }
  ];

  const handleTagClick = (tag: string, category: string) => {
    onNavigateToCategory(category);
  };

  const handleVideoClick = (project: any) => {
    setSelectedVideo(project);
    setShowVideoModal(true);
  };

  const handleSelectProject = (project: any) => {
    setSelectedVideo(project);
    setShowVideoModal(true);
  };

  const handleMakeVideo = () => {
    setShowVideoModal(false);
    setShowFormModal(true);
  };

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Recent Work
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Scroll-stopping videos that turn complex SaaS features into clear, compelling stories
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer rounded-2xl bg-white/10 backdrop-blur-md shadow-lg p-6 transition-transform duration-300 hover:scale-105"
              onClick={() => handleVideoClick(project)}
            >
              <div className="relative overflow-hidden mb-4 aspect-video border border-slate-600/30 rounded-xl">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-xl"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white bg-opacity-90 rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <button
                      key={index}
                      onClick={e => { e.stopPropagation(); handleTagClick(tag, project.category); }}
                      className="text-sm text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full hover:bg-purple-500/20 transition-colors cursor-pointer border border-purple-500/20"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={onViewAllProjects}
            className="bg-slate-800/50 hover:bg-slate-700/50 text-white px-8 py-3 rounded-lg font-semibold transition-colors border border-slate-600/30 hover:border-purple-500/50"
          >
            View All Projects
          </button>
        </div>
      </div>

      <VideoModal
        isOpen={showVideoModal}
        onClose={() => setShowVideoModal(false)}
        videoUrl={selectedVideo?.videoUrl || ''}
        title={selectedVideo?.title || ''}
        description={selectedVideo?.description || ''}
        onMakeVideo={handleMakeVideo}
        projects={projects}
        currentProject={selectedVideo}
        onSelectProject={handleSelectProject}
      />

      <VideoFormModal
        isOpen={showFormModal}
        onClose={() => setShowFormModal(false)}
      />
    </section>
  );
};

export default Portfolio; 