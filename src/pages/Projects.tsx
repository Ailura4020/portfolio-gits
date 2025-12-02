import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard.tsx';
import ProjectModal from '../components/ProjectModal.tsx'; // Import du Modal
import type { Project } from '../types/project.ts';

const PROJECT_DATA: Project[] = [
  {
    id: 1,
    title: "Angul-it: API & Authentication System",
    codename: "SPRING-ANGULAR-24",
    stack: ['Java (Spring Boot)', 'Angular', 'PostgreSQL', 'JWT'],
    summary: "Full Stack application focusing on robust REST API design, user authentication, and data persistence with PostgreSQL. Demonstrated ability to manage complex back-end logic and integrate with a modern front-end framework (Angular).",
    status: 'Complete',
    githubLink: "https://github.com/Ailura4020/Angul-it.git",
    demoLink: undefined,
    imageUrl: "/projects/angul-it-screen.png",  },
  {
    id: 2,
    title: "Make-your-game: Level Generation",
    codename: "VANILLA-JS-ENGINE",
    stack: ['JavaScript (Vanilla)', 'HTML5', 'CSS3', 'OOP'],
    summary: "Group project focused on developing a playable game generator entirely in Vanilla JS. Demonstrated strong foundational JavaScript skills, object-oriented programming (OOP), and complex state management essential for interactive applications.",
    status: 'Complete',
    githubLink: "https://github.com/Aukryx/Make-your-game.git",
    demoLink: undefined,
    // imageUrl: "/projects/js-game-screen.png",
  },
];

const ProjectsPage: React.FC = () => {
  // État pour savoir quel projet est ouvert (null = aucun)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '100px' }}>
      <h2 style={{ fontSize: '3em', color: 'var(--color-text-title)', marginBottom: '50px' }}>
        [ PROJECTS / TECHNICAL ARTIFACTS ]
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '30px' }}>
        {PROJECT_DATA.map(project => (
          // On ajoute le onClick ici sur le conteneur de la carte
          <div 
            key={project.id} 
            onClick={() => setSelectedProject(project)}
            style={{ cursor: 'pointer' }} // Indique que c'est cliquable
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      <p style={{ marginTop: '50px', color: 'var(--color-interface-light)', textAlign: 'center' }}>
        // END OF FILE TRANSFER LOG // MORE ARTIFACTS IN DEVELOPMENT //
      </p>

      {/* Affichage conditionnel du Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default ProjectsPage;