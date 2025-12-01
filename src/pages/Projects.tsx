import React from 'react';
import ProjectCard from '../components/ProjectCard.tsx';
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
  },
  {
    id: 2,
    title: "Make-your-game: Level Generation",
    codename: "VANILLA-JS-ENGINE",
    stack: ['JavaScript (Vanilla)', 'HTML5', 'CSS3', 'OOP'],
    summary: "Group project focused on developing a playable game generator entirely in Vanilla JS. Demonstrated strong foundational JavaScript skills, object-oriented programming (OOP), and complex state management essential for interactive applications.",
    status: 'Complete',
    githubLink: "https://github.com/Aukryx/Make-your-game.git",
    demoLink: undefined,
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <section id="projects" style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '100px' }}>
      <h2 style={{ fontSize: '3em', color: 'var(--color-text-title)', marginBottom: '50px' }}>
        [ PROJECTS / TECHNICAL ARTIFACTS ]
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '30px' }}>
        {PROJECT_DATA.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <p style={{ marginTop: '50px', color: 'var(--color-interface-light)', textAlign: 'center' }}>
        // END OF FILE TRANSFER LOG // MORE ARTIFACTS IN DEVELOPMENT //
      </p>
    </section>
  );
};

export default ProjectsPage;