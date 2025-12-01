import React from 'react';
import type { Project } from '../types/project.ts';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div 
      style={{
        backgroundColor: 'var(--color-bg-secondary)',
        border: `1px solid var(--color-accent-teal)`,
        padding: '25px',
        margin: '15px 0',
        borderRadius: '5px',
        transition: 'all 0.3s ease',
        boxShadow: `0 0 5px rgba(0, 0, 0, 0.5)`
      }}
      onMouseOver={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--color-accent-neon)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 15px var(--color-accent-neon)`;
      }}
      onMouseOut={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--color-accent-teal)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 5px rgba(0, 0, 0, 0.5)`;
      }}
    >
      <h3 style={{ color: 'var(--color-accent-neon)', marginBottom: '10px' }}>
        {project.title}
      </h3>
      <p style={{ color: 'var(--color-interface-light)', fontSize: '0.8em', marginBottom: '15px' }}>
        Codename: <span style={{ fontFamily: 'var(--font-title)' }}>[{project.codename}]</span>
      </p>
      <p style={{ color: 'var(--color-text-primary)', marginBottom: '10px' }}>
        **Stack Matrix:** {project.stack.join(' | ')}
      </p>
      <p style={{ marginBottom: '20px', fontSize: '0.9em' }}>
        {project.summary}
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" 
           style={{ color: 'var(--color-accent-neon)' }}>
          [ View Source Code ]
        </a>
        <span style={{ 
          color: project.status === 'Complete' ? 'var(--color-accent-secondary)' : 'var(--color-accent-teal)',
          fontFamily: 'var(--font-title)',
          fontSize: '0.8em'
        }}>
          STATUS: {project.status.toUpperCase()}
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;