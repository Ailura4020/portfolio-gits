// src/components/ProjectModal.tsx
import React, { useEffect } from 'react';
import type { Project } from '../types';

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  // Empêche le défilement de la page principale
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  if (!project) return null;

  return (
    <div style={{
      position: 'fixed',
      top: '80px', // On descend pour laisser la Navbar visible et accessible
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(5, 10, 15, 0.98)',
      zIndex: 10000,
      display: 'flex',
      flexDirection: 'column',
      backdropFilter: 'blur(15px)',
      borderTop: '1px solid var(--color-accent-neon)'
    }}>
      {/* --- HEADER FIXE --- */}
      <div style={{
        padding: '15px 20px',
        borderBottom: '1px solid rgba(0, 242, 255, 0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#050a10',
        position: 'sticky',
        top: 0,
        zIndex: 11
      }}>
        <div style={{ fontFamily: 'var(--font-title)', color: 'var(--color-accent-neon)', fontSize: '0.9em', maxWidth: '65%' }}>
          {project.title}
        </div>
        <button 
          onClick={onClose}
          style={{
            background: 'var(--color-accent-neon)',
            color: '#000',
            border: 'none',
            padding: '8px 12px',
            fontFamily: 'var(--font-code)',
            fontWeight: 'bold',
            fontSize: '0.75em'
          }}
        >
          FERMER [X]
        </button>
      </div>

      {/* --- ZONE SCROLLABLE --- */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
        
        {/* AFFICHAGE DU MÉDIA UNIQUE (Étape 2.2) */}
        <div style={{ 
          width: '100%', 
          backgroundColor: '#000', 
          border: '1px solid #222', 
          marginBottom: '20px',
          display: 'flex',
          justifyContent: 'center',
          overflow: 'hidden'
        }}>
          {project.video ? (
            <video src={project.video} autoPlay loop muted playsInline style={{ width: '100%', maxHeight: '200px', objectFit: 'contain' }} />
          ) : project.image ? (
            <img src={project.image} alt="" style={{ width: '100%', maxHeight: '200px', objectFit: 'contain' }} />
          ) : (
            <div style={{ padding: '40px', color: '#333', fontSize: '0.7em', fontFamily: 'var(--font-code)' }}>
              [ AUCUNE ARCHIVE VISUELLE MOBILE ]
            </div>
          )}
        </div>

        {/* MÉTADONNÉES */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '25px' }}>
          <div>
            <div style={{ fontSize: '0.6em', color: '#555', marginBottom: '4px' }}>[ CODENAME ]</div>
            <div style={{ color: '#fff', fontSize: '0.8em', fontFamily: 'var(--font-code)' }}>{project.codename}</div>
          </div>
          <div>
            <div style={{ fontSize: '0.6em', color: '#555', marginBottom: '4px' }}>[ STATUS ]</div>
            <div style={{ color: 'var(--color-accent-neon)', fontSize: '0.8em', fontWeight: 'bold' }}>{project.status}</div>
          </div>
        </div>

        {/* BRIEFING */}
        <div style={{ marginBottom: '25px' }}>
          <h4 style={{ color: 'var(--color-accent-neon)', borderBottom: '1px dashed #333', paddingBottom: '8px', marginBottom: '12px', fontSize: '0.85rem' }}>
            // MISSION_BRIEFING
          </h4>
          <div style={{ color: '#ccc', lineHeight: '1.6', fontSize: '0.9rem' }}>
             {project.fullDesc || project.description}
          </div>
        </div>

        {/* STACK */}
        <div style={{ marginBottom: '30px' }}>
          <h4 style={{ color: 'var(--color-accent-neon)', marginBottom: '12px', fontSize: '0.85rem' }}>// TECH_STACK</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.stack.map((tech: string) => (
              <span key={tech} style={{ border: '1px solid #333', padding: '4px 10px', fontSize: '0.65rem', color: '#fff' }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* INCITATION DESKTOP (Étape 2.3) */}
        <div style={{ 
          padding: '15px', 
          border: '1px dashed #333', 
          textAlign: 'center', 
          marginBottom: '20px',
          fontFamily: 'var(--font-code)',
          fontSize: '0.7em',
          color: '#555'
        }}>
          [ ARCHIVES VISUELLES COMPLÈTES : ACCÈS VIA TERMINAL DESKTOP UNIQUEMENT ]
        </div>

        {/* LIEN GITHUB */}
        {project.repoLink && (
          <a href={project.repoLink} target="_blank" rel="noreferrer" style={{
            display: 'block', padding: '15px', textAlign: 'center',
            border: '1px solid var(--color-accent-neon)', color: 'var(--color-accent-neon)',
            textDecoration: 'none', fontFamily: 'var(--font-title)', fontSize: '0.8rem'
          }}>
            VOIR LE CODE SOURCE
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;