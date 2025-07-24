// Minimal Modern Glass/Matte Scrollbar for Dark UI
// Place this in your global CSS (e.g., index.css):
//
// .custom-scrollbar {
//   scrollbar-width: thin;
//   scrollbar-color: rgba(55,65,81,0.5) transparent;
// }
// .custom-scrollbar::-webkit-scrollbar {
//   width: 6px;
// }
// .custom-scrollbar::-webkit-scrollbar-thumb {
//   min-height: 32px;
//   background: linear-gradient(120deg, rgba(55,65,81,0.55) 60%, rgba(59,130,246,0.18) 100%);
//   border-radius: 8px;
//   box-shadow: 0 0 0 1.5px rgba(59,130,246,0.25), 0 0 8px 1px rgba(59,130,246,0.18); /* subtle neon blue edge */
//   backdrop-filter: blur(2px);
// }
// .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//   background: linear-gradient(120deg, rgba(59,130,246,0.22) 60%, rgba(59,130,246,0.35) 100%);
//   box-shadow: 0 0 0 2px rgba(59,130,246,0.35), 0 0 12px 2px rgba(59,130,246,0.22);
// }
// .custom-scrollbar::-webkit-scrollbar-track {
//   background: transparent;
// }

import React, { useState } from 'react';
import { X, Maximize, Minimize } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
  description: string;
  onMakeVideo: () => void;
  projects: any[];
  currentProject: any;
  onSelectProject: (project: any) => void;
}

const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videoUrl,
  title,
  description,
  onMakeVideo,
  projects,
  currentProject,
  onSelectProject
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!isOpen) return null;

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
      <div className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 relative ${
        isFullscreen ? 'w-full h-full' : 'max-w-6xl w-full max-h-[90vh]'
      } overflow-hidden`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h3 className="text-white font-semibold text-lg">{title}</h3>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleFullscreen}
              className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-700 rounded-lg"
            >
              {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
            </button>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-700 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className={`${isFullscreen ? 'flex h-full' : 'grid md:grid-cols-3'} gap-6 p-6`}>
          {/* Video Section */}
          <div className={`${isFullscreen ? 'flex-1' : 'md:col-span-2'}`}>
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <video
                src={videoUrl}
                className="w-full h-full"
                controls
                autoPlay
              />
            </div>
          </div>

          {/* Sidebar */}
          {!isFullscreen && (
            <div className="space-y-6">
              <div>
                <h4 className="text-white font-semibold text-xl mb-3">{title}</h4>
                <p className="text-gray-300 leading-relaxed mb-6">{description}</p>
                
                <button
                  onClick={onMakeVideo}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-purple-500/25"
                >
                  Let's Make Your Video
                </button>
              </div>

              {/* Related Videos */}
              <div>
                <h5 className="text-white font-medium mb-3">Related Projects</h5>
                <div className="space-y-3 overflow-y-auto custom-scrollbar" style={{ maxHeight: '220px' }}>
                  {projects.filter(p => p !== currentProject).map((project) => (
                    <div
                      key={project.id || project.title}
                      className="flex gap-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors cursor-pointer"
                      onClick={() => onSelectProject(project)}
                    >
                      <img src={project.thumbnail} alt={project.title} className="w-16 h-12 object-cover rounded flex-shrink-0" />
                      <div>
                        <p className="text-white text-sm font-medium line-clamp-2">{project.title}</p>
                        <p className="text-gray-400 text-xs">1:30</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoModal; 