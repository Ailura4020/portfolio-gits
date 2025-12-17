// src/pages/Projects.tsx
import React, { useRef, useState, useEffect } from 'react';
import ProjectCard, { type ProjectData } from '../components/ProjectCard';
import ProjectsMobile from '../components/ProjectsMobile';
import useIsMobile from '../hooks/useIsMobile';
import DecryptedText from '../components/DecryptedText';

// --- DONNÉES PROJETS ---
const projects: ProjectData[] = [
  {
    id: 'p1', codename: 'SPRING-ANGULAR-24', title: 'ANGUL-IT', status: 'TERMINÉ', type: 'ECOLE',
    description: "Développement Full Stack d'un système d'authentification robuste et d'une API REST sécurisée. Gestion complexe de l'état front-end.",
    stack: ['Java Spring Boot', 'Angular', 'PostgreSQL', 'JWT', 'Docker'],
    repoLink: 'https://github.com/Ailura4020/angul-it',
    image: '/projects/angul-it-screen.png' 
  },
  {
    id: 'p2', codename: 'SOC-GAMING-HUB', title: 'LETS PLAY', status: 'TERMINÉ', type: 'ECOLE',
    description: "Plateforme sociale pour gamers. Création de profils, organisation de tournois et matching de joueurs. Architecture modulaire basée sur des composants réutilisables.",
    stack: ['JavaScript', 'HTML5', 'CSS3', 'Framework MVC (Custom)'], 
    repoLink: 'https://github.com/Ailura4020/lets-play.git',
  },
  {
    id: 'p3', codename: 'VANILLA-JS-ENGINE', title: 'MAKE YOUR GAME', status: 'TERMINÉ', type: 'ECOLE',
    description: "Création d'un moteur de jeu from scratch en JavaScript pur (Vanilla). Gestion de la physique, des collisions et du rendu graphique sans framework.",
    stack: ['JavaScript (ES6+)', 'HTML5 Canvas', 'CSS3', 'OOP Pattern'],
    repoLink: 'https://github.com/Ailura4020/make-your-game',
  },
  {
    id: 'p4', codename: 'REAL-TIME-COMMS', title: 'REAL TIME FORUM', status: 'TERMINÉ', type: 'ECOLE',
    description: "Plateforme de discussion instantanée. Architecture SPA (Single Page App) avec gestion des WebSockets pour la communication bidirectionnelle en temps réel.",
    stack: ['Go (Golang)', 'SQLite', 'Docker', 'WebSockets', 'JS'],
    repoLink: 'https://github.com/Ailura4020/real-time-forum.git',
    image: '/projects/real-time-forum.png' 

  },
  {
    id: 'p5', codename: 'TCP-NET-PROTOCOL', title: 'NET-CAT', status: 'TERMINÉ', type: 'ECOLE',
    description: "Re-création de l'outil NetCat. Implémentation d'un serveur TCP en Go capable de gérer plusieurs connexions clients simultanées (Chat Room) en mode CLI.",
    stack: ['Go (Golang)', 'TCP/IP', 'Linux', 'Concurrency', 'Mutex'],
    repoLink: 'https://github.com/Ailura4020/net-cat.git'
  }
];

// --- VUE DESKTOP ---
const ProjectsDesktop: React.FC<{ projects: ProjectData[], onSelect: (p: ProjectData) => void }> = ({ projects, onSelect }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeft(scrollLeft > 0);
      setShowRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition();
      return () => container.removeEventListener('scroll', checkScrollPosition);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 410; 
      scrollContainerRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', position: 'relative', marginTop: '20px' }}>
      
      {/* BOUTON GAUCHE */}
      <div style={{ width: '80px', display: 'flex', justifyContent: 'center', opacity: showLeft ? 1 : 0, transition: 'opacity 0.3s' }}>
          <button onClick={() => scroll('left')} className="neon-border" style={{
            background: 'rgba(0, 5, 10, 0.9)', color: 'var(--color-accent-neon)', width: '50px', height: '100px', 
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2em', 
            fontFamily: 'var(--font-title)', clipPath: 'polygon(20px 0, 100% 0, 100% 100%, 20px 100%, 0 50%)', transition: 'all 0.2s'
          }}>
            {'<'}
          </button>
      </div>

      {/* CONTENEUR CARROUSEL */}
      <div ref={scrollContainerRef} className="hide-scrollbar" style={{
          display: 'flex', gap: '30px', overflowX: 'auto', scrollBehavior: 'smooth', 
          padding: '20px 10px', width: '1250px', maxWidth: '90vw'
        }}>
        {projects.map((proj) => (
            <div key={proj.id} style={{ flex: '0 0 380px', height: '550px', display: 'flex' }}> 
                <ProjectCard project={proj} onClick={() => onSelect(proj)} />
            </div>
        ))}
        <div style={{ minWidth: '20px' }}></div>
      </div>

      {/* BOUTON DROIT */}
      <div style={{ width: '80px', display: 'flex', justifyContent: 'center', opacity: showRight ? 1 : 0, transition: 'opacity 0.3s' }}>
          <button onClick={() => scroll('right')} className="neon-border" style={{
            background: 'rgba(0, 5, 10, 0.9)', color: 'var(--color-accent-neon)', width: '50px', height: '100px', 
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2em', 
            fontFamily: 'var(--font-title)', clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%)', transition: 'all 0.2s'
          }}>
            {'>'}
          </button>
      </div>
    </div>
  );
};

// --- COMPOSANT PRINCIPAL ---
const ProjectsPage: React.FC = () => {
  const isMobile = useIsMobile(1024); 
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <div style={{ paddingTop: '50px', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
      
      <style>{` .hide-scrollbar::-webkit-scrollbar { display: none; } `}</style>

      {/* --- HEADER SECTION (ALIGNEMENT CORRIGÉ) --- */}
      <div style={{ 
          marginBottom: '40px', 
          paddingLeft: '20px', // Standardisé à 20px comme Skills/Experience
          borderLeft: '4px solid var(--color-accent-neon)' // Ajout de la bordure comme les autres
      }}>
     <DecryptedText 
  text="ARTEFACTS TECHNIQUES"
  interval={15000} // S'anime toutes les 15 secondes
  style={{ 
    fontSize: isMobile ? '2.5em' : '4em', 
    color: '#fff', 
    marginBottom: '5px', 
    textShadow: '0 0 15px var(--color-accent-neon)',
    fontFamily: 'var(--font-title)',
    textTransform: 'uppercase'
  }}
/>
        <p style={{ fontFamily: 'var(--font-code)', color: 'var(--color-interface-light)' }}>
          {'>'} CHARGEMENT DES ARCHIVES PROJETS... {projects.length} ENTRÉES TROUVÉES.
        </p>
      </div>

      {isMobile ? (
        <ProjectsMobile projects={projects} onSelectProject={setSelectedProject} />
      ) : (
        <ProjectsDesktop projects={projects} onSelect={setSelectedProject} />
      )}

      {/* --- MODAL POP-UP --- */}
      {selectedProject && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 9999,
          backgroundColor: 'rgba(0, 0, 0, 0.85)', backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'fadeIn 0.2s ease'
        }} onClick={() => setSelectedProject(null)}>
          
          <div style={{
            width: '850px', maxWidth: '90%', height: 'auto', maxHeight: '85vh', marginTop: isMobile ? '0' : '80px',
            overflowY: 'auto', backgroundColor: '#0a0a0a', border: '1px solid #ffcc00', 
            boxShadow: '0 0 50px rgba(0,0,0,0.8)', position: 'relative', display: 'flex', flexDirection: 'column'
          }} onClick={(e) => e.stopPropagation()}>
            
            <div style={{ padding: '15px 30px', borderBottom: '1px solid #ffcc00', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255, 204, 0, 0.05)' }}>
                <div>
                    <h2 style={{ color: '#ffcc00', margin: 0, fontSize: '1.5em', textTransform: 'uppercase', fontFamily: 'var(--font-title)' }}>{selectedProject.title}</h2>
                    <div style={{ fontSize: '0.7em', fontFamily: 'var(--font-code)', color: '#aaa', marginTop: '5px' }}>
                        CODE: {selectedProject.codename}  //  STATUS: <span style={{ color: '#39ff14' }}>{selectedProject.status}</span>
                    </div>
                </div>
                <button onClick={() => setSelectedProject(null)} style={{ background: 'transparent', border: '1px solid #ffcc00', color: '#ffcc00', padding: '8px 20px', fontFamily: 'var(--font-title)', fontSize: '0.8em', cursor: 'pointer', textTransform: 'uppercase', transition: 'all 0.2s' }} onMouseEnter={(e) => {e.currentTarget.style.background = '#ffcc00'; e.currentTarget.style.color = '#000'}} onMouseLeave={(e) => {e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#ffcc00'}}>
                    FERMER [X]
                </button>
            </div>

            <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {selectedProject.image ? (
                    <div style={{ border: '1px solid #333', padding: '5px', background: '#000' }}>
                        <img src={selectedProject.image} alt="" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>
                ) : (
                    <div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#444', border: '1px dashed #333', fontFamily: 'var(--font-title)' }}>[ AUCUNE DONNÉE VISUELLE ]</div>
                )}

                <div>
                    <h4 style={{ color: '#ffcc00', fontSize: '1em', marginBottom: '8px', fontFamily: 'var(--font-title)' }}>// OBJECTIFS DE MISSION</h4>
                    <p style={{ lineHeight: '1.5', fontSize: '0.95em', color: '#ccc', fontFamily: 'sans-serif' }}>{selectedProject.description}</p>
                </div>

                <div>
                    <h4 style={{ color: '#ffcc00', fontSize: '1em', marginBottom: '8px', fontFamily: 'var(--font-title)' }}>// ARCHITECTURE SYSTÈME</h4>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        {selectedProject.stack.map(t => (
                            <span key={t} style={{ border: '1px solid #444', color: '#ddd', padding: '4px 12px', fontSize: '0.75em', fontFamily: 'var(--font-code)', background: '#111' }}>{t}</span>
                        ))}
                    </div>
                </div>

                <div style={{ borderTop: '1px solid #333', paddingTop: '20px', textAlign: 'center' }}>
                    <a href={selectedProject.repoLink} target="_blank" rel="noreferrer" style={{ display: 'inline-block', border: '1px solid #ffcc00', color: '#ffcc00', textDecoration: 'none', padding: '12px 30px', fontFamily: 'var(--font-title)', fontSize: '0.9em', letterSpacing: '1px', transition: 'all 0.3s' }} onMouseEnter={(e) => {e.currentTarget.style.background = '#ffcc00'; e.currentTarget.style.color = '#000'}} onMouseLeave={(e) => {e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#ffcc00'}}>
                        ACCÉDER AU CODE SOURCE :: GITHUB
                    </a>
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;