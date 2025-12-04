// src/pages/Projects.tsx
import React, { useRef, useEffect, useState } from 'react';
import ProjectCard, { type ProjectData } from '../components/ProjectCard';

// Données mises à jour avec "Lets Play"
const projects: ProjectData[] = [
  {
    id: 'p1',
    codename: 'SPRING-ANGULAR-24',
    title: 'ANGUL-IT',
    status: 'COMPLETE',
    type: 'SCHOOL',
    description: "Développement Full Stack d'un système d'authentification robuste et d'une API REST sécurisée. Gestion complexe de l'état front-end.",
    stack: ['Java Spring Boot', 'Angular', 'PostgreSQL', 'JWT', 'Docker'],
    repoLink: 'https://github.com/Ailura4020/angul-it',
    image: '/projects/angul-it-screen.png' 
  },
  {
    id: 'p2',
    codename: 'SOC-GAMING-HUB',
    title: 'LETS PLAY',
    status: 'COMPLETE',
    type: 'SCHOOL',
    description: "Plateforme sociale pour gamers. Création de profils, organisation de tournois et matching de joueurs. Architecture modulaire basée sur des composants réutilisables.",
    stack: ['JavaScript', 'HTML5', 'CSS3', 'Framework MVC (Custom)'], 
    repoLink: 'https://github.com/Ailura4020/lets-play.git',
    // Pas d'image
  },
  {
    id: 'p3',
    codename: 'VANILLA-JS-ENGINE',
    title: 'MAKE YOUR GAME',
    status: 'COMPLETE',
    type: 'SCHOOL',
    description: "Création d'un moteur de jeu from scratch en JavaScript pur (Vanilla). Gestion de la physique, des collisions et du rendu graphique sans framework.",
    stack: ['JavaScript (ES6+)', 'HTML5 Canvas', 'CSS3', 'OOP Pattern'],
    repoLink: 'https://github.com/Ailura4020/make-your-game',
  },
  {
    id: 'p4',
    codename: 'REAL-TIME-COMMS',
    title: 'REAL TIME FORUM',
    status: 'COMPLETE',
    type: 'SCHOOL',
    description: "Plateforme de discussion instantanée. Architecture SPA (Single Page App) avec gestion des WebSockets pour la communication bidirectionnelle en temps réel.",
    stack: ['Go (Golang)', 'SQLite', 'Docker', 'WebSockets', 'JS'],
    repoLink: 'https://github.com/Ailura4020/real-time-forum.git'
  },
  {
    id: 'p5',
    codename: 'TCP-NET-PROTOCOL',
    title: 'NET-CAT',
    status: 'COMPLETE',
    type: 'SCHOOL',
    description: "Re-création de l'outil NetCat. Implémentation d'un serveur TCP en Go capable de gérer plusieurs connexions clients simultanées (Chat Room) en mode CLI.",
    stack: ['Go (Golang)', 'TCP/IP', 'Linux', 'Concurrency', 'Mutex'],
    repoLink: 'https://github.com/Ailura4020/net-cat.git'
  }
];

const ProjectsPage: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const handleWheel = (evt: WheelEvent) => {
        if (evt.deltaY !== 0) {
          evt.preventDefault();
          container.scrollLeft += evt.deltaY;
        }
      };
      container.addEventListener('wheel', handleWheel);
      return () => container.removeEventListener('wheel', handleWheel);
    }
  }, []);

  return (
    <div style={{ 
      paddingTop: '50px', 
      height: '80vh', 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative' // Important pour le modal absolu
    }}>
      
      <div style={{ paddingLeft: '20px', marginBottom: '30px' }}>
        <h2 style={{ 
          fontSize: '3em', color: '#fff', marginBottom: '5px',
          textShadow: '0 0 15px var(--color-accent-neon)'
        }}>
          TECHNICAL ARTIFACTS
        </h2>
        <p style={{ fontFamily: 'var(--font-code)', color: 'var(--color-accent-neon)' }}>
          {'>'} LOADING PROJECT ARCHIVES... FOUND {projects.length} ENTRIES.
        </p>
      </div>

      {/* --- SCROLL CONTAINER --- */}
      <div 
        ref={scrollContainerRef}
        style={{
          display: 'flex',
          gap: '40px', 
          overflowX: 'auto', 
          padding: '20px 20px 50px 20px', 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none',
          // LE FIX POUR TON MAC EST ICI :
          overscrollBehaviorX: 'contain', // Empêche de swiper la page entière
        }}
        className="hide-scrollbar"
      >
        {projects.map((proj) => (
          <ProjectCard 
            key={proj.id} 
            project={proj} 
            onClick={() => setSelectedProject(proj)} // Ouvre le modal
          />
        ))}
        
        <div style={{ minWidth: '50px' }}></div>
      </div>

      <div style={{ 
        textAlign: 'center', color: 'var(--color-interface-light)', 
        fontSize: '0.8em', marginTop: '-20px', opacity: 0.6 
      }}>
        <span>{'<'} SCROLL OR CLICK TO INSPECT {'>'}</span>
      </div>

      {/* --- LE MODAL (POP-UP) --- */}
      {selectedProject && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 1000,
          backgroundColor: 'rgba(0, 5, 10, 0.85)', // Fond sombre
          backdropFilter: 'blur(8px)', // Le flou stylé
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          animation: 'fadeIn 0.3s ease'
        }}
        onClick={() => setSelectedProject(null)} // Ferme en cliquant dehors
        >
          <div style={{
            width: '90%', maxWidth: '800px', maxHeight: '90vh',
            backgroundColor: 'rgba(10, 15, 20, 0.95)',
            border: '2px solid var(--color-accent-neon)',
            boxShadow: '0 0 50px rgba(255, 204, 0, 0.3)',
            padding: '40px',
            position: 'relative',
            overflowY: 'auto',
            clipPath: 'polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px)',
          }}
          onClick={(e) => e.stopPropagation()} // Empêche la fermeture si on clique DANS le modal
          >
            {/* Bouton Fermer */}
            <button 
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute', top: '20px', right: '20px',
                background: 'transparent', border: '1px solid var(--color-accent-neon)',
                color: 'var(--color-accent-neon)', padding: '5px 15px', cursor: 'pointer',
                fontFamily: 'var(--font-title)'
              }}
            >
              CLOSE [X]
            </button>

            {/* Contenu Modal */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h2 style={{ fontSize: '2.5em', color: 'var(--color-accent-neon)', textTransform: 'uppercase' }}>
                {selectedProject.title}
              </h2>
              
              <div style={{ display: 'flex', gap: '20px', fontSize: '0.9em', color: 'var(--color-interface-light)', borderBottom: '1px solid var(--color-interface-dark)', paddingBottom: '20px' }}>
                <span>CODE: {selectedProject.codename}</span>
                <span>STATUS: <span style={{ color: '#39ff14' }}>{selectedProject.status}</span></span>
                <span>TYPE: {selectedProject.type}</span>
              </div>

              {/* Si Image existe, on l'affiche en grand */}
              {selectedProject.image && (
                <img src={selectedProject.image} alt="" style={{ width: '100%', borderRadius: '4px', border: '1px solid var(--color-interface-dark)' }} />
              )}

              <div>
                <h4 style={{ color: 'var(--color-accent-neon)', marginBottom: '10px' }}>// EXTENDED BRIEFING</h4>
                <p style={{ lineHeight: '1.8', fontSize: '1.1em' }}>{selectedProject.description}</p>
                <p style={{ marginTop: '10px', color: '#ccc' }}>
                  Ce projet a permis de consolider les compétences en architecture logicielle et en gestion de projet complexe. L'accent a été mis sur la performance et la maintenabilité du code.
                </p>
              </div>

              <div>
                <h4 style={{ color: 'var(--color-accent-neon)', marginBottom: '10px' }}>// TECH STACK</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {selectedProject.stack.map(t => (
                    <span key={t} style={{ border: '1px solid var(--color-accent-neon)', color: 'var(--color-accent-neon)', padding: '5px 15px', borderRadius: '20px' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <a 
                href={selectedProject.repoLink}
                target="_blank"
                rel="noreferrer"
                style={{
                  marginTop: '20px', padding: '15px', textAlign: 'center',
                  backgroundColor: 'var(--color-accent-neon)', color: '#000',
                  fontWeight: 'bold', letterSpacing: '2px', textDecoration: 'none',
                  clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
                }}
              >
                ACCESS SOURCE CODE : GITHUB
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
};

export default ProjectsPage;