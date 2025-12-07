// src/components/ProjectsMobile.tsx
import React, { useState } from 'react';
import ProjectCard, { type ProjectData } from './ProjectCard';

interface MobileProps { projects: ProjectData[]; onSelectProject: (p: ProjectData) => void; }

const ProjectsMobile: React.FC<MobileProps> = ({ projects, onSelectProject }) => {
  const [visibleCount, setVisibleCount] = useState(3);
  const showMore = () => setVisibleCount(prev => prev + 3);
  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '50px' }}>
      {visibleProjects.map((proj) => (
        <ProjectCard key={proj.id} project={proj} onClick={() => onSelectProject(proj)} isMobile={true} />
      ))}
      {hasMore ? (
        <button onClick={showMore} style={{ marginTop: '20px', padding: '15px 30px', background: 'rgba(0, 0, 0, 0.8)', border: '1px solid var(--color-accent-neon)', color: 'var(--color-accent-neon)', fontFamily: 'var(--font-title)', fontSize: '1em', cursor: 'pointer', boxShadow: '0 0 15px rgba(255, 204, 0, 0.2)' }}>[+] LOAD MORE ARCHIVES</button>
      ) : (
        <div style={{ marginTop: '20px', color: 'var(--color-interface-light)', fontFamily: 'var(--font-code)', fontSize: '0.8em' }}>// END OF DATABASE</div>
      )}
    </div>
  );
};
export default ProjectsMobile;