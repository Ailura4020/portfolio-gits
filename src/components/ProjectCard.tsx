// src/components/ProjectCard.tsx
import React, { useState } from 'react';

export interface ProjectData {
  id: string;
  codename: string;
  title: string;
  status: string;
  type: string;
  description: string;
  stack: string[];
  repoLink: string;
  image?: string;
}

// CORRECTION ICI : On garde la définition <{... isMobile?: boolean }> mais on retire 'isMobile' des accolades ({...})
const ProjectCard: React.FC<{ project: ProjectData; onClick: () => void; isMobile?: boolean }> = ({ project, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: '100%', 
        height: '100%', 
        border: `1px solid ${isHovered ? 'var(--color-accent-neon)' : 'rgba(255, 255, 255, 0.2)'}`,
        background: 'rgba(5, 10, 15, 0.8)',
        display: 'flex', 
        flexDirection: 'column',
        position: 'relative',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: isHovered ? '0 0 20px rgba(0, 255, 255, 0.15)' : 'none',
        clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'
      }}
    >
      <div style={{ padding: '15px', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', fontSize: '0.7em', color: '#888', fontFamily: 'var(--font-code)' }}>
        <span>[{project.codename}]</span>
        <span style={{ color: isHovered ? 'var(--color-accent-neon)' : '#888' }}>STATUS: {project.status}</span>
      </div>

      <div style={{ 
          flex: 1, 
          background: '#000', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          overflow: 'hidden',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          minHeight: '200px' 
      }}>
        {project.image ? (
            <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: isHovered ? 1 : 0.6, transition: 'opacity 0.3s' }} />
        ) : (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                <div style={{ fontSize: '2em', color: '#333' }}>⚠</div>
                <div style={{ color: '#444', fontFamily: 'var(--font-title)', fontSize: '0.8em', letterSpacing: '2px' }}>AUCUNE DONNÉE VISUELLE</div>
            </div>
        )}
      </div>

      <div style={{ padding: '20px' }}>
        <h3 style={{ 
            fontSize: '1.5em', margin: '0 0 10px 0', color: isHovered ? 'var(--color-accent-neon)' : '#fff', 
            fontFamily: 'var(--font-title)', textTransform: 'uppercase'
        }}>
            {project.title}
        </h3>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
            {project.stack.slice(0, 3).map(tech => ( 
                <span key={tech} style={{ fontSize: '0.7em', border: '1px solid #333', padding: '2px 8px', color: '#aaa' }}>
                    {tech}
                </span>
            ))}
            {project.stack.length > 3 && <span style={{ fontSize: '0.7em', color: '#555' }}>+</span>}
        </div>

        <div style={{ 
            marginTop: '20px', 
            textAlign: 'center', 
            border: '1px solid var(--color-accent-neon)', 
            padding: '10px',
            color: 'var(--color-accent-neon)',
            fontFamily: 'var(--font-title)',
            fontSize: '0.8em',
            opacity: isHovered ? 1 : 0, 
            transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
            transition: 'all 0.3s'
        }}>
            {'>'} INSPECTER DONNÉES
        </div>
      </div>

    </div>
  );
};

export default ProjectCard;