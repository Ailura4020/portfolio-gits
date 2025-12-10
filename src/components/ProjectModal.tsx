// src/components/ProjectModal.tsx

import React from 'react';
import type { Project } from '../types/project.ts';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div 
      style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
        backgroundColor: 'rgba(0, 2, 22, 0.85)', zIndex: 1000,
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        backdropFilter: 'blur(5px)',
      }}
      onClick={onClose}
    >
      <div 
        style={{
          width: '90%', maxWidth: '800px', maxHeight: '90vh', overflowY: 'auto',
          backgroundColor: 'var(--color-bg-secondary)',
          border: '1px solid var(--color-accent-neon)',
          boxShadow: '0 0 30px rgba(0, 255, 255, 0.1)',
          padding: '40px', position: 'relative',
        }}
        onClick={handleContentClick}
      >
        <button 
          onClick={onClose} 
          style={{
            position: 'absolute', top: '20px', right: '20px', background: 'none',
            border: '1px solid var(--color-accent-neon)', color: 'var(--color-accent-neon)',
            cursor: 'pointer', fontFamily: 'var(--font-title)', padding: '5px 15px',
            textTransform: 'uppercase', fontSize: '0.8em'
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0, 255, 255, 0.1)')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          FERMER [X]
        </button>

        <h2 style={{ 
          color: 'var(--color-accent-neon)', 
          borderBottom: '1px dashed var(--color-accent-teal)', 
          paddingBottom: '15px', marginBottom: '20px', fontSize: '1.8em'
        }}>
          {project.title}
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px', fontSize: '0.9em' }}>
          <div>
            <span style={{ color: 'var(--color-accent-teal)' }}>[ CODENAME ]</span><br/> 
            {project.codename}
          </div>
          <div>
            <span style={{ color: 'var(--color-accent-teal)' }}>[ STATUS ]</span><br/> 
            <span style={{ color: 'var(--color-accent-secondary)' }}>{project.status}</span>
          </div>
        </div>

        {/* --- NOUVEAU : SECTION IMAGE DU PROJET --- */}
        {project.imageUrl && (
          <div style={{ marginBottom: '30px', border: '1px solid var(--color-accent-teal)', padding: '5px' }}>
             <div style={{ 
                 overflow: 'hidden', 
                 position: 'relative',
                 // Petit effet visuel "scanline" par-dessus l'image
                 background: 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
                 backgroundSize: '100% 4px'
             }}>
               <img 
                 src={project.imageUrl} 
                 alt={`Visual evidence for ${project.title}`}
                 style={{ width: '100%', height: 'auto', display: 'block', opacity: 0.9 }}
               />
            </div>
             <div style={{ textAlign: 'right', fontSize: '0.7em', color: 'var(--color-accent-teal)', marginTop: '5px', fontFamily: 'var(--font-title)' }}>
               // DONNÉES VISUELLES MANQUANTES
             </div>
          </div>
        )}
        {/* --------------------------------------- */}

        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ color: 'var(--color-text-title)', fontSize: '1.2em', marginBottom: '10px' }}>// BRIEFING DE MISSION</h3>
          <p style={{ lineHeight: '1.6', color: 'var(--color-text-primary)' }}>
            {project.summary}
          </p>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ color: 'var(--color-text-title)', fontSize: '1.2em', marginBottom: '10px' }}>// ARCHITECTURE SYSTÈME</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {project.stack.map((tech) => (
              <span key={tech} style={{ 
                border: '1px solid var(--color-interface-dark)', 
                padding: '5px 10px', fontSize: '0.8em', color: 'var(--color-accent-neon)' 
              }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div style={{ marginTop: '40px', display: 'flex', gap: '20px' }}>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" 
             style={{ 
               border: '1px solid var(--color-accent-neon)', padding: '10px 20px', 
               color: 'var(--color-accent-neon)', fontFamily: 'var(--font-title)',
               fontSize: '0.9em', display: 'inline-block'
             }}>
            ACCÈS CODE SOURCE :: GITHUB
          </a>
        </div>

      </div>
    </div>
  );
};

export default ProjectModal;