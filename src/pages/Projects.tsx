// src/pages/Projects.tsx
import React, { useRef, useState, useEffect } from 'react';
import ProjectCard, { type ProjectData } from '../components/ProjectCard';
import ProjectsMobile from '../components/ProjectsMobile';
import useIsMobile from '../hooks/useIsMobile';

// --- DONNÉES ---
const projects: ProjectData[] = [
  {
    id: 'p1', codename: 'SPRING-ANGULAR-24', title: 'ANGUL-IT', status: 'COMPLETE', type: 'SCHOOL',
    description: "Développement Full Stack d'un système d'authentification robuste et d'une API REST sécurisée. Gestion complexe de l'état front-end.",
    stack: ['Java Spring Boot', 'Angular', 'PostgreSQL', 'JWT', 'Docker'],
    repoLink: 'https://github.com/Ailura4020/angul-it',
    image: '/projects/angul-it-screen.png' 
  },
  {
    id: 'p2', codename: 'SOC-GAMING-HUB', title: 'LETS PLAY', status: 'COMPLETE', type: 'SCHOOL',
    description: "Plateforme sociale pour gamers. Création de profils, organisation de tournois et matching de joueurs. Architecture modulaire basée sur des composants réutilisables.",
    stack: ['JavaScript', 'HTML5', 'CSS3', 'Framework MVC (Custom)'], 
    repoLink: 'https://github.com/Ailura4020/lets-play.git',
  },
  {
    id: 'p3', codename: 'VANILLA-JS-ENGINE', title: 'MAKE YOUR GAME', status: 'COMPLETE', type: 'SCHOOL',
    description: "Création d'un moteur de jeu from scratch en JavaScript pur (Vanilla). Gestion de la physique, des collisions et du rendu graphique sans framework.",
    stack: ['JavaScript (ES6+)', 'HTML5 Canvas', 'CSS3', 'OOP Pattern'],
    repoLink: 'https://github.com/Ailura4020/make-your-game',
  },
  {
    id: 'p4', codename: 'REAL-TIME-COMMS', title: 'REAL TIME FORUM', status: 'COMPLETE', type: 'SCHOOL',
    description: "Plateforme de discussion instantanée. Architecture SPA (Single Page App) avec gestion des WebSockets pour la communication bidirectionnelle en temps réel.",
    stack: ['Go (Golang)', 'SQLite', 'Docker', 'WebSockets', 'JS'],
    repoLink: 'https://github.com/Ailura4020/real-time-forum.git'
  },
  {
    id: 'p5', codename: 'TCP-NET-PROTOCOL', title: 'NET-CAT', status: 'COMPLETE', type: 'SCHOOL',
    description: "Re-création de l'outil NetCat. Implémentation d'un serveur TCP en Go capable de gérer plusieurs connexions clients simultanées (Chat Room) en mode CLI.",
    stack: ['Go (Golang)', 'TCP/IP', 'Linux', 'Concurrency', 'Mutex'],
    repoLink: 'https://github.com/Ailura4020/net-cat.git'
  }
];

// --- VUE DESKTOP ---
const ProjectsDesktop: React.FC<{ projects: ProjectData[], onSelect: (p: ProjectData) => void }> = ({ projects, onSelect }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(true);

  const NavButton: React.FC<{ direction: 'left' | 'right'; onClick: () => void }> = ({ direction, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <button
        onClick={onClick} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
        style={{
          background: 'rgba(0, 0, 0, 0.8)', border: '1px solid var(--color-accent-neon)', color: 'var(--color-accent-neon)',
          width: '60px', height: '100px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '2em', fontFamily: 'var(--font-title)',
          clipPath: direction === 'left' ? 'polygon(20px 0, 100% 0, 100% 100%, 20px 100%, 0 50%)' : 'polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%)',
          transition: 'all 0.3s ease', boxShadow: isHovered ? '0 0 30px var(--color-accent-neon), inset 0 0 10px var(--color-accent-neon)' : '0 0 10px var(--color-accent-neon)',
          transform: isHovered ? 'scale(1.1)' : 'scale(1)', opacity: isHovered ? 1 : 0.9, animation: !isHovered ? 'pulse-btn-intense 2s infinite' : 'none'
        }}
      >{direction === 'left' ? '<' : '>'}</button>
    );
  };

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftBtn(scrollLeft > 10);
      setShowRightBtn(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScroll(); container.addEventListener('scroll', checkScroll); window.addEventListener('resize', checkScroll);
      return () => { container.removeEventListener('scroll', checkScroll); window.removeEventListener('resize', checkScroll); };
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const viewWidth = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollBy({ left: direction === 'left' ? -viewWidth : viewWidth, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', width: '100%', position: 'relative' }}>
      <div style={{ width: '80px', display: 'flex', justifyContent: 'center', flexShrink: 0 }}>
        {showLeftBtn && <NavButton direction="left" onClick={() => scroll('left')} />}
      </div>
      <div ref={scrollContainerRef} className="hide-scrollbar" style={{
          flex: 1, display: 'flex', gap: '40px', overflowX: 'hidden', scrollBehavior: 'smooth', padding: '20px 0px', width: '100%',
        }}>
        {projects.map((proj) => <ProjectCard key={proj.id} project={proj} onClick={() => onSelect(proj)} />)}
        <div style={{ minWidth: '10px' }}></div>
      </div>
      <div style={{ width: '80px', display: 'flex', justifyContent: 'center', flexShrink: 0 }}>
        {showRightBtn && <NavButton direction="right" onClick={() => scroll('right')} />}
      </div>
    </div>
  );
};

// --- COMPOSANT PRINCIPAL ---
const ProjectsPage: React.FC = () => {
  const isMobile = useIsMobile(1024); 
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <div style={{ 
      paddingTop: '50px', 
      minHeight: '80vh', 
      height: isMobile ? 'auto' : '80vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      position: 'relative'
    }}>
      
      <style>{`
        @keyframes pulse-btn-intense {
          0% { opacity: 0.8; box-shadow: 0 0 10px var(--color-accent-neon); text-shadow: 0 0 5px var(--color-accent-neon); }
          50% { opacity: 1; box-shadow: 0 0 25px var(--color-accent-neon), inset 0 0 5px var(--color-accent-neon); text-shadow: 0 0 15px var(--color-accent-neon); }
          100% { opacity: 0.8; box-shadow: 0 0 10px var(--color-accent-neon); text-shadow: 0 0 5px var(--color-accent-neon); }
        }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>

      <div style={{ paddingLeft: '20px', marginBottom: isMobile ? '30px' : '10px' }}>
        <h2 style={{ fontSize: '3em', color: '#fff', marginBottom: '5px', textShadow: '0 0 15px var(--color-accent-neon)' }}>
          TECHNICAL ARTIFACTS
        </h2>
        <p style={{ fontFamily: 'var(--font-code)', color: 'var(--color-accent-neon)' }}>
          {'>'} LOADING PROJECT ARCHIVES... FOUND {projects.length} ENTRIES.
        </p>
      </div>

      {isMobile ? (
        <ProjectsMobile projects={projects} onSelectProject={setSelectedProject} />
      ) : (
        <ProjectsDesktop projects={projects} onSelect={setSelectedProject} />
      )}

      {!isMobile && (
        <div style={{ textAlign: 'center', color: 'var(--color-interface-light)', fontSize: '0.8em', marginTop: '10px', opacity: 0.5 }}>
          // USE CONTROLS TO NAVIGATE DATABASE
        </div>
      )}

      {/* --- MODAL POP-UP --- */}
      {selectedProject && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 2000,
          backgroundColor: 'rgba(0, 0, 0, 0.95)', // Fond noir très opaque
          backdropFilter: 'blur(10px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'fadeIn 0.3s ease',
          padding: isMobile ? '0' : '20px'
        }}
        onClick={() => setSelectedProject(null)}
        >
          
          {/* BOUTON FERMER (FLOTTANT - HAUT DROITE) */}
          {/* Je le sors du contenu pour qu'il soit toujours visible par dessus tout */}
          <button 
            onClick={() => setSelectedProject(null)}
            style={{
              position: 'fixed', // Fixe par rapport à l'écran
              top: '20px', right: '20px',
              background: '#000', // Fond noir solide pour cacher ce qu'il y a derrière
              border: '2px solid var(--color-accent-neon)',
              color: 'var(--color-accent-neon)', 
              padding: '10px 20px', 
              cursor: 'pointer', 
              fontFamily: 'var(--font-title)',
              fontSize: '1em',
              fontWeight: 'bold',
              zIndex: 2005, // Au dessus du modal
              boxShadow: '0 0 20px rgba(0,0,0,0.8)'
            }}
          >
            CLOSE [X]
          </button>

          <div style={{
            width: isMobile ? '100%' : '90%', 
            height: isMobile ? '100%' : 'auto', 
            maxHeight: isMobile ? '100vh' : '90vh',
            backgroundColor: 'rgba(10, 15, 20, 1)', 
            border: isMobile ? 'none' : '2px solid var(--color-accent-neon)',
            boxShadow: '0 0 50px rgba(255, 204, 0, 0.3)',
            padding: isMobile ? '80px 20px 40px 20px' : '40px', // Gros padding haut pour ne pas être caché par le bouton Close
            position: 'relative', overflowY: 'auto',
            clipPath: isMobile ? 'none' : 'polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px)',
          }}
          onClick={(e) => e.stopPropagation()}
          >

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h2 style={{ fontSize: isMobile ? '1.8em' : '2.5em', color: 'var(--color-accent-neon)', textTransform: 'uppercase', marginTop: isMobile ? '10px' : '0', lineHeight: 1.2 }}>
                {selectedProject.title}
              </h2>
              
              <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '5px' : '20px', fontSize: '0.9em', color: 'var(--color-interface-light)', borderBottom: '1px solid var(--color-interface-dark)', paddingBottom: '20px' }}>
                <span>CODE: {selectedProject.codename}</span>
                <span>STATUS: <span style={{ color: '#39ff14' }}>{selectedProject.status}</span></span>
                <span>TYPE: {selectedProject.type}</span>
              </div>

              {selectedProject.image && (
                <img src={selectedProject.image} alt="" style={{ width: '100%', borderRadius: '4px', border: '1px solid var(--color-interface-dark)' }} />
              )}

              <div>
                <h4 style={{ color: 'var(--color-accent-neon)', marginBottom: '10px' }}>// EXTENDED BRIEFING</h4>
                <p style={{ lineHeight: '1.8', fontSize: isMobile ? '1em' : '1.1em' }}>{selectedProject.description}</p>
              </div>

              <div>
                <h4 style={{ color: 'var(--color-accent-neon)', marginBottom: '10px' }}>// TECH STACK</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {selectedProject.stack.map(t => (
                    <span key={t} style={{ border: '1px solid var(--color-accent-neon)', color: 'var(--color-accent-neon)', padding: '5px 15px', borderRadius: '20px' }}>{t}</span>
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
                  display: 'block',
                  clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
                }}
              >
                ACCESS SOURCE CODE : GITHUB
              </a>

              {/* BOUTON FERMER SECONDAIRE EN BAS DE PAGE (UX MOBILE) */}
              {isMobile && (
                <button 
                  onClick={() => setSelectedProject(null)}
                  style={{
                    marginTop: '30px', 
                    padding: '15px', 
                    width: '100%',
                    background: 'transparent',
                    border: '1px solid #555',
                    color: '#888',
                    fontFamily: 'var(--font-title)',
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                    marginBottom: '50px' // Espace en bas
                  }}
                >
                  [ CLOSE PROJECT FILE ]
                </button>
              )}

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;