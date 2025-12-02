// src/components/ProjectModal.tsx

import React from 'react';
import type { Project } from '../types/project.ts';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  // Empêche la fermeture si on clique DANS la fenêtre
  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 2, 22, 0.85)', // Fond sombre teinté bleu nuit
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backdropFilter: 'blur(5px)', // Effet de flou d'arrière-plan
      }}
      onClick={onClose} // Ferme si on clique en dehors
    >
      <div 
        style={{
          width: '90%',
          maxWidth: '800px',
          maxHeight: '90vh',
          overflowY: 'auto',
          backgroundColor: 'var(--color-bg-secondary)',
          border: '1px solid var(--color-accent-neon)',
          boxShadow: '0 0 30px rgba(0, 255, 255, 0.1)',
          padding: '40px',
          position: 'relative',
        }}
        onClick={handleContentClick}
      >
        {/* Bouton Fermer */}
        <button 
          onClick={onClose} 
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'none',
            border: '1px solid var(--color-accent-neon)',
            color: 'var(--color-accent-neon)',
            cursor: 'pointer',
            fontFamily: 'var(--font-title)',
            padding: '5px 15px',
            textTransform: 'uppercase',
            fontSize: '0.8em'
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0, 255, 255, 0.1)')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          Close [X]
        </button>

        {/* En-tête du Dossier */}
        <h2 style={{ 
          color: 'var(--color-accent-neon)', 
          borderBottom: '1px dashed var(--color-accent-teal)', 
          paddingBottom: '15px',
          marginBottom: '20px',
          fontSize: '1.8em'
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

        {/* Corps du Dossier */}
        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ color: 'var(--color-text-title)', fontSize: '1.2em', marginBottom: '10px' }}>// MISSION BRIEFING</h3>
          <p style={{ lineHeight: '1.6', color: 'var(--color-text-primary)' }}>
            {project.summary}
          </p>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ color: 'var(--color-text-title)', fontSize: '1.2em', marginBottom: '10px' }}>// SYSTEM ARCHITECTURE</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {project.stack.map((tech) => (
              <span key={tech} style={{ 
                border: '1px solid var(--color-interface-dark)', 
                padding: '5px 10px', 
                fontSize: '0.8em',
                color: 'var(--color-accent-neon)' 
              }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div style={{ marginTop: '40px', display: 'flex', gap: '20px' }}>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" 
             style={{ 
               border: '1px solid var(--color-accent-neon)', 
               padding: '10px 20px', 
               color: 'var(--color-accent-neon)',
               fontFamily: 'var(--font-title)',
               fontSize: '0.9em',
               display: 'inline-block'
             }}>
            ACCESS SOURCE CODE :: GITHUB
          </a>
        </div>

      </div>
    </div>
  );
};

export default ProjectModal;