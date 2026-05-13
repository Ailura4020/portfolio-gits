// src/components/ProjectsMobile.tsx
import React, { useState } from 'react';
import { type ProjectData } from './ProjectCard';

interface MobileProps { projects: ProjectData[]; onSelectProject: (p: ProjectData) => void; }

const ProjectsMobile: React.FC<MobileProps> = ({ projects, onSelectProject }) => {
  const ITEMS_PER_PAGE = 7;
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const visibleProjects = projects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const nextPage = () => { if (currentPage < totalPages - 1) setCurrentPage(curr => curr + 1); };
  const prevPage = () => { if (currentPage > 0) setCurrentPage(curr => curr - 1); };

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* LISTE DES PROJETS (Fixe à 7) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
        {visibleProjects.map((proj) => (
          <div 
            key={proj.id} 
            onClick={() => onSelectProject(proj)}
            style={{
              background: 'rgba(5, 10, 15, 0.8)',
              border: '1px solid rgba(0, 242, 255, 0.1)',
              borderLeft: '3px solid var(--color-accent-neon)',
              padding: '12px 15px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              WebkitTapHighlightColor: 'transparent'
            }}
          >
            <div style={{ overflow: 'hidden' }}>
              <div style={{ color: 'var(--color-accent-neon)', fontFamily: 'var(--font-code)', fontSize: '0.55em', marginBottom: '2px' }}>
                ID: {proj.codename}
              </div>
              <div style={{ color: '#fff', fontFamily: 'var(--font-title)', fontSize: '0.85em', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>
                {proj.title}
              </div>
            </div>
            <div style={{ color: 'var(--color-accent-neon)', fontSize: '1em', opacity: 0.4 }}>{'>'}</div>
          </div>
        ))}
      </div>

      {/* SÉLECTEUR DE PAGE (Pagination) */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: '20px', 
        padding: '20px 0',
        fontFamily: 'var(--font-code)' 
      }}>
        <button 
          onClick={prevPage} 
          disabled={currentPage === 0}
          style={{ 
            background: 'none', border: 'none', color: currentPage === 0 ? '#333' : 'var(--color-accent-neon)',
            fontSize: '1.2em', cursor: 'pointer' 
          }}
        >
          {'<<'}
        </button>
        
        <span style={{ color: '#fff', fontSize: '0.8em', letterSpacing: '2px' }}>
          PAGE <span style={{ color: 'var(--color-accent-neon)' }}>{String(currentPage + 1).padStart(2, '0')}</span> / {String(totalPages).padStart(2, '0')}
        </span>

        <button 
          onClick={nextPage} 
          disabled={currentPage === totalPages - 1}
          style={{ 
            background: 'none', border: 'none', color: currentPage === totalPages - 1 ? '#333' : 'var(--color-accent-neon)',
            fontSize: '1.2em', cursor: 'pointer' 
          }}
        >
          {'>>'}
        </button>
      </div>
    </div>
  );
};

export default ProjectsMobile;