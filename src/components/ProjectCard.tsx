// src/components/ProjectCard.tsx
import React from 'react';

export interface ProjectData {
  id: string;
  codename: string;
  title: string;
  status: 'COMPLETE' | 'IN PROGRESS' | 'ARCHIVED';
  description: string;
  stack: string[];
  repoLink: string;
  image?: string; 
  type: 'SCHOOL' | 'PERSONAL' | 'PRO'; 
}

interface CardProps {
  project: ProjectData;
  onClick: () => void;
  isMobile?: boolean; // On accepte la prop isMobile
}

const ProjectCard: React.FC<CardProps> = ({ project, onClick, isMobile }) => {
  return (
    <div 
      className="project-card"
      onClick={onClick}
      style={{
        // LOGIQUE HYBRIDE SÉCURISÉE :
        // Si Mobile (via prop) -> 100% largeur
        // Sinon (PC) -> Calcul précis pour 3 colonnes
        minWidth: isMobile ? '100%' : 'calc((100% - 80px) / 3)', 
        maxWidth: isMobile ? '100%' : 'calc((100% - 80px) / 3)',
        
        height: '550px',
        marginBottom: isMobile ? '40px' : '0', // Marge en bas seulement sur mobile
        
        backgroundColor: 'rgba(10, 10, 10, 0.9)',
        border: '1px solid var(--color-interface-dark)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.4s ease',
        cursor: 'pointer',
        clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)',
        flexShrink: 0,
      }}
      onMouseEnter={(e) => {
        if (!isMobile) {
            e.currentTarget.style.transform = 'scale(1.02)';
            e.currentTarget.style.borderColor = 'var(--color-accent-neon)';
            e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 204, 0, 0.2)';
            e.currentTarget.style.zIndex = '10';
        }
      }}
      onMouseLeave={(e) => {
        if (!isMobile) {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.borderColor = 'var(--color-interface-dark)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.zIndex = '1';
        }
      }}
    >
      {/* HEADER */}
      <div style={{ 
        display: 'flex', justifyContent: 'space-between', padding: '15px 20px', 
        borderBottom: '1px solid var(--color-interface-dark)', fontSize: '0.7em', color: 'var(--color-accent-neon)',
        fontFamily: 'var(--font-title)'
      }}>
        <span>[{project.codename}]</span>
        <span>STATUS: {project.status}</span>
      </div>

      {/* IMAGE */}
      <div style={{ 
        height: '200px', width: '100%', position: 'relative', overflow: 'hidden',
        borderBottom: '1px solid var(--color-accent-neon)'
      }}>
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(60%) sepia(20%)' }}
          />
        ) : (
          <div style={{ 
            width: '100%', height: '100%', backgroundColor: '#050505', 
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 204, 0, 0.05) 3px)'
          }}>
            <div style={{ fontSize: '3em', color: 'var(--color-interface-dark)' }}>⚠</div>
            <div style={{ fontFamily: 'var(--font-title)', color: 'var(--color-interface-light)', marginTop: '10px', letterSpacing: '2px' }}>
              NO VISUAL DATA
            </div>
          </div>
        )}
        <div style={{
          position: 'absolute', top: '10px', right: '10px',
          backgroundColor: 'var(--color-accent-neon)', color: '#000',
          padding: '2px 8px', fontSize: '0.7em', fontWeight: 'bold', fontFamily: 'var(--font-title)'
        }}>
          {project.type} PROJECT
        </div>
      </div>

      {/* CONTENU */}
      <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontSize: '1.5em', color: '#fff', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>
          {project.title}
        </h3>
        <div style={{ marginBottom: '20px', flex: 1 }}>
          <strong style={{ color: 'var(--color-accent-neon)', fontSize: '0.8em', display: 'block', marginBottom: '5px' }}>
            // MISSION BRIEFING
          </strong>
          <p style={{ fontSize: '0.9em', lineHeight: '1.6', color: 'var(--color-text-primary)' }}>
            {project.description}
          </p>
        </div>
        <div style={{ marginBottom: '25px' }}>
          <strong style={{ color: 'var(--color-accent-neon)', fontSize: '0.8em', display: 'block', marginBottom: '10px' }}>
            // SYSTEM ARCHITECTURE
          </strong>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.stack.map(tech => (
              <span key={tech} style={{ border: '1px solid var(--color-interface-dark)', padding: '4px 8px', fontSize: '0.75em', color: '#ccc' }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', padding: '12px',
            border: '1px solid var(--color-accent-neon)', color: 'var(--color-accent-neon)',
            fontFamily: 'var(--font-title)', fontSize: '0.9em', letterSpacing: '2px'
          }}>
          {'>'} INSPECT DATA
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;