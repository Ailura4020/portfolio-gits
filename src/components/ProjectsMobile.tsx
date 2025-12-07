// src/components/ProjectsMobile.tsx
import React, { useState } from 'react';
import ProjectCard, { type ProjectData } from './ProjectCard';

interface MobileProps {
  projects: ProjectData[];
  onSelectProject: (p: ProjectData) => void;
}

const ProjectsMobile: React.FC<MobileProps> = ({ projects, onSelectProject }) => {
  const [visibleCount, setVisibleCount] = useState(3); // On commence par 3 projets

  const showMore = () => {
    setVisibleCount(prev => prev + 3); // On en ajoute 3 à chaque clic
  };

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '50px' }}>
      
      {/* Liste Verticale */}
      {visibleProjects.map((proj) => (
        <ProjectCard 
          key={proj.id} 
          project={proj} 
          onClick={() => onSelectProject(proj)} 
          isMobile={true} // Active le mode 100% largeur
        />
      ))}

      {/* Bouton Charger Plus */}
      {hasMore && (
        <button 
          onClick={showMore}
          style={{
            marginTop: '20px',
            padding: '15px 30px',
            background: 'rgba(0, 0, 0, 0.8)',
            border: '1px solid var(--color-accent-neon)',
            color: 'var(--color-accent-neon)',
            fontFamily: 'var(--font-title)',
            fontSize: '1em',
            cursor: 'pointer',
            clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
            boxShadow: '0 0 15px rgba(255, 204, 0, 0.2)'
          }}
        >
          [+] LOAD MORE ARCHIVES
        </button>
      )}
      
      {!hasMore && (
        <div style={{ marginTop: '20px', color: 'var(--color-interface-light)', fontFamily: 'var(--font-code)', fontSize: '0.8em' }}>
          // END OF DATABASE
        </div>
      )}

    </div>
  );
};

export default ProjectsMobile;