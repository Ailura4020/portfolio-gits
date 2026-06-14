// src/pages/Projects.tsx
import React, { useState, useRef, useEffect } from 'react'; // useRef et useEffect sont essentiels ici
import type { Project } from '../types';
import ProjectsMobile from '../components/ProjectsMobile';
import useIsMobile from '../hooks/useIsMobile';
import DecryptedText from '../components/DecryptedText';
import ProjectModal from '../components/ProjectModal';

// --- DONNÉES PROJETS ---
const projects = [
  {
    id: 'p-campus', 
    codename: 'CAMPUS-PLATFORM-26', 
    title: 'PLATEFORME PÉDAGOGIQUE CAMPUS', 
    status: 'TERMINÉ', 
    type: 'CERTIFICATION RNCP (BA)',
    description: "Conception fonctionnelle et modélisation complète d'une plateforme SaaS éducative.",
    stack: ['Figma', 'UML', 'MERISE', 'PostgreSQL', 'Supabase', 'Next.js'],
    image: '/projects/campus-maquette-hd.png',
    gallery: [
      '/projects/campus-thumb.png',
      '/projects/campus-programme.png',
      '/projects/campus-projet.png',
      '/projects/campus-wireframe.png',
    ],
    fullDesc: (
      <>
        <div style={{ marginBottom: '15px' }}>
          <strong style={{ color: '#ffcc00' }}>[ OBJECTIF MÉTIER ]</strong><br/>
          Conception d'un écosystème SaaS éducatif. Centralisation de la gestion des parcours et du suivi des compétences.
        </div>
        <div style={{ marginBottom: '15px' }}>
          <strong style={{ color: '#ffcc00' }}>// BUSINESS ANALYSIS & STRATÉGIE :</strong>
          <ul style={{ paddingLeft: '20px', marginTop: '5px', color: '#ccc', listStyleType: 'square' }}>
            <li>Rédaction de User Stories et modélisation de processus (UML).</li>
            <li>Conception de la base de données via méthode MERISE (MCD/MLD).</li>
            <li>Prototypage Haute Fidélité sur Figma (Design System).</li>
          </ul>
        </div>
        <div>
          <strong style={{ color: '#ffcc00' }}>// ARCHITECTURE TECHNIQUE :</strong>
          <ul style={{ paddingLeft: '20px', marginTop: '5px', color: '#ccc', listStyleType: 'square' }}>
            <li>Infrastructure Next.js couplée à Supabase (BaaS).</li>
            <li>Gestion granulaire des rôles et de la sécurité des données.</li>
          </ul>
        </div>
      </>
    )
  },
  {
    id: 'p-pixel-forge', 
    codename: 'PIXEL-FORGE-26', 
    title: 'PIXEL FORGE // ARCADE ENGINE', 
    status: 'EN COURS', 
    type: 'PROJET FULL-CYCLE (A à Z)',
    description: "Conception et développement intégral d'une plateforme immersive présentant un moteur de jeu fictif sous forme de terminal d'arcade.",
    stack: ['Vanilla JS', 'CSS3 (3D)', 'HTML5', 'JSON Data-Driven'],
    repoLink: 'https://github.com/Ailura4020/arcade-landing-page', 
    image: '/projects/pixel-forge-thumb.png',
    video: '/projects/pixel-forge-video.mp4',
    fullDesc: (
      <>
        <div style={{ marginBottom: '15px' }}>
          <strong style={{ color: '#ffcc00' }}>[ VISION & STRATÉGIE PRODUIT ]</strong><br/>
          Projet réalisé en autonomie totale. L'objectif était de créer une expérience utilisateur (UX) de rupture, s'éloignant des standards du web classique pour adopter les codes d'un terminal de jeu rétro-futuriste.
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <strong style={{ color: '#ffcc00' }}>// INGÉNIERIE LOGICIELLE (DEVELOPPEMENT) :</strong>
          <ul style={{ paddingLeft: '20px', marginTop: '5px', color: '#ccc', listStyleType: 'square' }}>
            <li style={{ marginBottom: '5px' }}>
              <strong>Moteur de Rendu 3D (Carousel3D.js) :</strong> Développement d'un carrousel circulaire calculant dynamiquement les transformations matricielles (rotateY, translateZ) pour une navigation fluide à 360°.
            </li>
            <li style={{ marginBottom: '5px' }}>
              <strong>Gestionnaire d'Interface (ModalManager.js) :</strong> Implémentation d'un système de modales dynamiques simulant l'ouverture de boîtiers de jeux physiques, avec séparation des flux (vidéos de démo et fiches techniques).
            </li>
            <li>
              <strong>Architecture Modulaire :</strong> Organisation du code en modules ES6 pour une maintenance et une évolutivité accrues.
            </li>
          </ul>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <strong style={{ color: '#ffcc00' }}>// ANALYSE DE DONNÉES (DATA-DRIVEN) :</strong>
          <ul style={{ paddingLeft: '20px', marginTop: '5px', color: '#ccc', listStyleType: 'square' }}>
            <li><strong>Structuration JSON :</strong> Modélisation des fichiers <em>games.json</em> et <em>community.json</em> pour piloter l'intégralité du contenu de manière externe.</li>
            <li><strong>Flux Dynamique :</strong> Utilisation de l'API Fetch pour l'injection asynchrone des données dans le DOM.</li>
          </ul>
        </div>

        <div>
          <strong style={{ color: '#ffcc00' }}>[ RÉSULTAT ]</strong><br/>
          Une interface "High Tech, Low Life" qui démontre une maîtrise complète de la chaîne de production Web, de la logique algorithmique complexe à l'optimisation visuelle (effets CRT, animations glitch).
        </div>
      </>
    )
  },
  {
    id: 'p1', 
    codename: 'SPRING-ANGULAR-24', 
    title: 'ANGUL-IT', 
    status: 'TERMINÉ', 
    type: 'PROJET FULL-STACK',
    description: "Développement d'un système d'authentification robuste et d'une API REST sécurisée.",
    stack: ['Java Spring', 'Angular', 'PostgreSQL', 'JWT'],
    repoLink: 'https://github.com/Ailura4020/angul-it',
    image: '/projects/angul-it-screen.png',
    fullDesc: (
      <>
        <div style={{ marginBottom: '15px' }}>
          <strong style={{ color: '#ffcc00' }}>[ OBJECTIF MÉTIER ]</strong><br/>
          Développement d'une infrastructure robuste pour la gestion centralisée d'utilisateurs. L'enjeu était de fournir une plateforme capable de garantir l'intégrité des données et une étanchéité totale entre les niveaux d'accès.
        </div>
        <div style={{ marginBottom: '15px' }}>
          <strong style={{ color: '#ffcc00' }}>// ANALYSE BUSINESS & ARCHITECTURE :</strong>
          <ul style={{ paddingLeft: '20px', marginTop: '5px', color: '#ccc', listStyleType: 'square' }}>
            <li>Modélisation des flux d'authentification (diagrammes de séquence).</li>
            <li>Architecture logicielle : séparation stricte (N-Tier) entre API et Client.</li>
          </ul>
        </div>
        <div>
          <strong style={{ color: '#ffcc00' }}>// SPÉCIFICATIONS TECHNIQUES :</strong>
          <ul style={{ paddingLeft: '20px', marginTop: '5px', color: '#ccc', listStyleType: 'square' }}>
            <li>Authentification Stateless via JSON Web Tokens (JWT).</li>
            <li>API REST sécurisée avec Spring Security.</li>
          </ul>
        </div>
      </>
    )
  },
 {
    id: 'p2', 
    codename: 'SOC-GAMING-HUB', 
    title: 'LETS PLAY', 
    status: 'TERMINÉ', 
    type: 'PROJET UX/UI & FRONT',
    description: "Plateforme sociale pour gamers. Création de profils et organisation de tournois.",
    stack: ['JavaScript', 'HTML5', 'CSS3'], 
    repoLink: 'https://github.com/Ailura4020/lets-play.git',
    fullDesc: (
      <>
        <div style={{ marginBottom: '15px' }}>
          <strong style={{ color: '#ffcc00' }}>[ OBJECTIF MÉTIER ]</strong><br/>
          Création d'un hub social immersif dédié à la communauté gaming. L'objectif était de centraliser les interactions et de faciliter l'organisation de tournois.
        </div>
        <div style={{ marginBottom: '15px' }}>
          <strong style={{ color: '#ffcc00' }}>// ANALYSE UX & PARCOURS UTILISATEUR :</strong>
          <ul style={{ paddingLeft: '20px', marginTop: '5px', color: '#ccc', listStyleType: 'square' }}>
            <li>Audit des besoins communautaires (Matchmaking social).</li>
            <li>Structuration des espaces "Compétition" vs "Social" pour une navigation intuitive.</li>
          </ul>
        </div>
        <div>
          <strong style={{ color: '#ffcc00' }}>// SPÉCIFICATIONS TECHNIQUES :</strong>
          <ul style={{ paddingLeft: '20px', marginTop: '5px', color: '#ccc', listStyleType: 'square' }}>
            <li>Interface réactive via manipulation dynamique du DOM.</li>
            <li>Système de profiling avec gestion des états utilisateurs.</li>
          </ul>
        </div>
      </>
    )
  },
  {
    id: 'p3', 
    codename: 'VANILLA-JS-ENGINE', 
    title: 'MAKE YOUR GAME', 
    status: 'TERMINÉ', 
    type: 'PROJET ALGORITHMIQUE',
    description: "Moteur de jeu from scratch en JavaScript pur. Gestion de la boucle de jeu, de la physique et des collisions.",
    stack: ['JS ES6+', 'HTML5 Canvas', 'OOP', 'Vector Math'],
    repoLink: 'https://github.com/Ailura4020/make-your-game',
    image: '/projects/makeyourgame.png',
    fullDesc: (
      <>
        <div style={{ marginBottom: '15px' }}>
          <strong style={{ color: '#ffcc00' }}>[ OBJECTIF MÉTIER ]</strong><br/>
          Conception d'un moteur de jeu 2D propriétaire. L'enjeu était de s'affranchir des frameworks pour maîtriser les fondations algorithmiques du rendu et de la physique.
        </div>
        <div style={{ marginBottom: '15px' }}>
          <strong style={{ color: '#ffcc00' }}>// ARCHITECTURE LOGIQUE :</strong>
          <ul style={{ paddingLeft: '20px', marginTop: '5px', color: '#ccc', listStyleType: 'square' }}>
            <li>Boucle de jeu (Game Loop) optimisée à 60 FPS via requestAnimationFrame.</li>
            <li>Développement d'un moteur physique vectoriel (gravité, rebonds, vélocité).</li>
          </ul>
        </div>
        <div>
          <strong style={{ color: '#ffcc00' }}>// SPÉCIFICATIONS TECHNIQUES :</strong>
          <ul style={{ paddingLeft: '20px', marginTop: '5px', color: '#ccc', listStyleType: 'square' }}>
            <li>Programmation Orientée Objet (POO) pour la gestion des entités.</li>
            <li>Manipulation directe du HTML5 Canvas pour le rendu graphique.</li>
          </ul>
        </div>
      </>
    )
  },
  {
    id: 'p4', 
    codename: 'REAL-TIME-COMMS', 
    title: 'REAL TIME FORUM', 
    status: 'TERMINÉ', 
    type: 'INFRASTRUCTURE RÉSEAU',
    description: "Plateforme de discussion instantanée. Architecture SPA avec gestion des WebSockets pour la communication bidirectionnelle en temps réel.",
    stack: ['Golang', 'SQLite', 'WebSockets', 'Docker'],
    repoLink: 'https://github.com/Ailura4020/real-time-forum.git',
    image: '/projects/real-time-forum.png',
    fullDesc: (
      <>
        <div style={{ marginBottom: '15px' }}>
          <strong style={{ color: '#ffcc00' }}>[ OBJECTIF MÉTIER ]</strong><br/>
          Conception d'une plateforme de discussion instantanée. L'enjeu était de minimiser la latence et de garantir une synchronisation parfaite des flux de données.
        </div>
        <div style={{ marginBottom: '15px' }}>
          <strong style={{ color: '#ffcc00' }}>// ANALYSE DES FLUX :</strong>
          <ul style={{ paddingLeft: '20px', marginTop: '5px', color: '#ccc', listStyleType: 'square' }}>
            <li>Mise en œuvre du protocole WebSocket pour une connexion persistante.</li>
            <li>Gestion d'états asynchrones (notifications, statuts online/offline).</li>
          </ul>
        </div>
        <div>
          <strong style={{ color: '#ffcc00' }}>// SPÉCIFICATIONS TECHNIQUES :</strong>
          <ul style={{ paddingLeft: '20px', marginTop: '5px', color: '#ccc', listStyleType: 'square' }}>
            <li>Backend Go (Golang) optimisé pour la haute disponibilité via les Goroutines.</li>
            <li>Architecture Single Page App (SPA) pour une navigation sans rechargement.</li>
          </ul>
        </div>
      </>
    )
  },
  {
    id: 'p5', 
    codename: 'TCP-NET-PROTOCOL', 
    title: 'NET-CAT', 
    status: 'TERMINÉ', 
    type: 'PROTOCOLE RÉSEAU (CLI)',
    description: "Ré-création de l'outil NetCat. Implémentation d'un serveur TCP en Go capable de gérer plusieurs connexions clients simultanées.",
    stack: ['Golang', 'TCP/IP', 'Concurrency', 'Linux'],
    repoLink: 'https://github.com/Ailura4020/net-cat.git',
    // Pas d'image ici pour simuler un projet "système" pur
    fullDesc: (
      <>
        <div style={{ marginBottom: '15px' }}>
          <strong style={{ color: '#ffcc00' }}>[ OBJECTIF MÉTIER ]</strong><br/>
          Ré-implémentation de l'utilitaire NetCat. L'enjeu était de concevoir un serveur TCP robuste capable de gérer une file d'attente de connexions multiclient.
        </div>
        <div style={{ marginBottom: '15px' }}>
          <strong style={{ color: '#ffcc00' }}>// ARCHITECTURE RÉSEAU :</strong>
          <ul style={{ paddingLeft: '20px', marginTop: '5px', color: '#ccc', listStyleType: 'square' }}>
            <li>Gestion asynchrone des clients via les Goroutines de Go.</li>
            <li>Utilisation des Channels pour la synchronisation des flux de données.</li>
          </ul>
        </div>
        <div>
          <strong style={{ color: '#ffcc00' }}>// SPÉCIFICATIONS TECHNIQUES :</strong>
          <ul style={{ paddingLeft: '20px', marginTop: '5px', color: '#ccc', listStyleType: 'square' }}>
            <li>Manipulation directe des sockets TCP/IP.</li>
            <li>Architecture légère (CLI) optimisée pour la performance pure.</li>
          </ul>
        </div>
      </>
    )
  }
];

const MainframeDesktop: React.FC<{ projects: typeof projects }> = ({ projects }) => {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const contentRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const checkScroll = () => {
    if (contentRef.current) {
      const { scrollHeight, clientHeight, scrollTop } = contentRef.current;
      setCanScroll(scrollHeight > clientHeight + scrollTop + 10);
    }
  };

  const checkGallery = () => {
    if (galleryRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = galleryRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scrollGallery = (direction: 'left' | 'right') => {
    if (galleryRef.current) {
      const amount = 400;
      galleryRef.current.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (contentRef.current) contentRef.current.scrollTop = 0;
    const timer = setTimeout(() => { checkScroll(); checkGallery(); }, 150);
    return () => clearTimeout(timer);
  }, [activeProject]);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '40px', flex: 1, minHeight: 0, height: '100%' }}>
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .custom-scroll::-webkit-scrollbar { width: 4px; }
        .custom-scroll::-webkit-scrollbar-thumb { background: rgba(255, 204, 0, 0.4); border-radius: 10px; }
        @keyframes bounceHint { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(5px); } }
        .scroll-hint { animation: bounceHint 2s infinite; }
        .scan-effect { animation: dataScan 0.4s ease-out forwards; }
        @keyframes dataScan { 0% { opacity: 0; transform: translateY(10px); } 100% { opacity: 1; transform: translateY(0); } }
      `}</style>

      {/* MENU GAUCHE */}
      <div className="no-scrollbar" style={{ display: 'flex', flexDirection: 'column', overflowY: 'auto', gap: '15px' }}>
        {projects.map((proj) => (
          <div key={proj.id} onClick={() => setActiveProject(proj)} style={{
            padding: '15px 20px', cursor: 'pointer',
            background: activeProject.id === proj.id ? '#ffcc00' : 'rgba(5, 10, 15, 0.75)',
            color: activeProject.id === proj.id ? '#000' : '#ffcc00',
            clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))',
            transition: 'all 0.3s',
            transform: activeProject.id === proj.id ? 'translateX(10px)' : 'none',
            flexShrink: 0
          }}>
            <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.9em' }}>{proj.title}</div>
            <div style={{ fontSize: '0.7em', opacity: 0.6 }}>ID: {proj.codename}</div>
          </div>
        ))}
      </div>

      {/* PANNEAU DROIT */}
      <div key={activeProject.id} className="scan-effect" style={{ border: '1px solid #ffcc00', background: 'rgba(5, 10, 15, 0.85)', display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative' }}>
        <div ref={contentRef} onScroll={checkScroll} className="custom-scroll" style={{ overflowY: 'auto', padding: '30px', flex: 1 }}>
          
          {/* MÉDIA PRINCIPAL */}
          <div style={{ border: '1px solid #333', background: '#000', marginBottom: '30px', textAlign: 'center', minHeight: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {activeProject.video ? (
              <video src={activeProject.video} autoPlay loop muted playsInline style={{ maxWidth: '100%', maxHeight: '320px', objectFit: 'contain' }} />
            ) : activeProject.image ? (
              <img src={activeProject.image} alt="" style={{ maxWidth: '100%', maxHeight: '320px', objectFit: 'contain' }} />
            ) : (
              <div style={{ color: '#444', fontFamily: 'var(--font-code)', fontSize: '0.9em', letterSpacing: '2px', padding: '40px' }}>
                [ DONNÉE VISUELLE NON TRANSMISE ]
              </div>
            )}
          </div>

          {/* TITRE ET STATUS */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
            <h2 style={{ color: '#ffcc00', fontFamily: 'var(--font-title)', textTransform: 'uppercase', margin: 0 }}>{activeProject.title}</h2>
            <div style={{ 
              border: '1px solid #ffcc00', 
              padding: '4px 12px', 
              fontSize: '0.7em', 
              fontFamily: 'var(--font-code)', 
              color: activeProject.status.includes('EN COURS') ? '#00ff00' : '#ffcc00',
  borderColor: activeProject.status.includes('EN COURS') ? '#00ff00' : '#ffcc00',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              {activeProject.status}
            </div>
          </div>
          
          <p style={{ color: '#ffcc00', opacity: 0.6, fontFamily: 'var(--font-code)', fontSize: '0.8em', marginBottom: '20px' }}>// DÉCRYPTAGE DU RAPPORT...</p>
          
          <div style={{ color: '#ccc', lineHeight: '1.7', marginBottom: '30px' }}>{activeProject.fullDesc || activeProject.description}</div>

          {/* GALERIE */}
          {activeProject.gallery && activeProject.gallery.length > 0 && (
            <div style={{ position: 'relative', marginTop: '40px' }}>
              <h4 style={{ color: '#ffcc00', marginBottom: '15px', fontFamily: 'var(--font-title)' }}>// ARCHIVES VISUELLES</h4>
              {showLeftArrow && <button onClick={() => scrollGallery('left')} style={{ position: 'absolute', left: '-10px', top: '55%', zIndex: 10, background: '#ffcc00', border: 'none', padding: '10px', color: '#000', cursor: 'pointer' }}>{'<'}</button>}
              {showRightArrow && <button onClick={() => scrollGallery('right')} style={{ position: 'absolute', right: '-10px', top: '55%', zIndex: 10, background: '#ffcc00', border: 'none', padding: '10px', color: '#000', cursor: 'pointer' }}>{'>'}</button>}
              <div ref={galleryRef} onScroll={checkGallery} className="no-scrollbar" style={{ display: 'flex', gap: '15px', overflowX: 'auto', scrollBehavior: 'smooth' }}>
                {activeProject.gallery.map((img, idx) => <img key={idx} src={img} alt="" style={{ height: '160px', border: '1px solid #444', flexShrink: 0, background: '#000' }} />)}
              </div>
            </div>
          )}

          <div style={{ marginTop: '40px', paddingBottom: '40px' }}>
            {activeProject.repoLink && (
              <a href={activeProject.repoLink} target="_blank" rel="noreferrer" style={{ border: '1px solid #ffcc00', color: '#ffcc00', padding: '12px 25px', textDecoration: 'none', fontFamily: 'var(--font-title)', transition: '0.3s' }}>
                ACCÉDER AU CODE SOURCE // GITHUB
              </a>
            )}
          </div>
        </div>

        {canScroll && (
          <div className="scroll-hint" style={{ 
            position: 'absolute', bottom: '15px', right: '30px', 
            color: '#ffcc00', display: 'flex', alignItems: 'center', gap: '8px',
            fontFamily: 'var(--font-code)', fontSize: '0.7em', pointerEvents: 'none',
            background: 'rgba(5, 10, 15, 0.9)', padding: '5px 12px', border: '1px solid rgba(255, 204, 0, 0.3)'
          }}>
            SCROLL POUR PLUS DE DÉTAILS <span>↓</span>
          </div>
        )}
      </div>
    </div>
  );
};
const ProjectsPage: React.FC = () => {
  const isMobile = useIsMobile(1024);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '30px', height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', padding: isMobile ? '0 20px' : '0 40px', display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
        <div style={{ marginBottom: '15px', paddingLeft: '20px', borderLeft: '4px solid var(--color-accent-neon)', flexShrink: 0 }}>
          <DecryptedText text="ARTEFACTS TECHNIQUES" style={{ fontSize: isMobile ? '2.5em' : '3.5em', color: 'var(--color-accent-neon)', fontFamily: 'var(--font-title)' }} />
          <p style={{ fontFamily: 'var(--font-code)', color: 'var(--color-accent-teal)', margin: 0 }}>{'>'} PROTOCOLE D'ACCÈS AUX ARCHIVES... {projects.length} UNITÉS DÉTECTÉES.</p>
        </div>
        {isMobile ? (
          <div style={{ flex: 1, overflowY: 'auto', paddingBottom: '20px' }}>
            <ProjectsMobile 
              projects={projects} 
              onSelectProject={(proj) => setSelectedProject(proj)} 
            />
            {selectedProject && (
              <ProjectModal 
                project={selectedProject} 
                onClose={() => setSelectedProject(null)} 
              />
            )}
          </div>
        ) : (
          <MainframeDesktop projects={projects} />
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;