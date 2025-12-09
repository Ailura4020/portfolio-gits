// src/pages/Projects.tsx
import React, { useRef, useState, useEffect } from 'react';
import ProjectCard, { type ProjectData } from '../components/ProjectCard';
import ProjectsMobile from '../components/ProjectsMobile';
import useIsMobile from '../hooks/useIsMobile';

// --- DONNÉES (Inchangées) ---
const projects: ProjectData[] = [
  { id: 'p1', codename: 'SPRING-ANGULAR', title: 'ANGUL-IT', status: 'COMPLETE', type: 'SCHOOL', description: "Full Stack auth system & secure REST API.", stack: ['Java Spring', 'Angular', 'PostgreSQL', 'Docker'], repoLink: 'https://github.com', image: '/projects/angul-it-screen.png' },
  { id: 'p2', codename: 'SOC-GAMING', title: 'LETS PLAY', status: 'COMPLETE', type: 'SCHOOL', description: "Social platform for gamers & tournament management.", stack: ['JS', 'HTML5', 'CSS3'], repoLink: 'https://github.com' },
  { id: 'p3', codename: 'JS-ENGINE', title: 'MAKE YOUR GAME', status: 'COMPLETE', type: 'SCHOOL', description: "Vanilla JS Game Engine from scratch.", stack: ['JS (ES6+)', 'Canvas', 'OOP'], repoLink: 'https://github.com' },
  { id: 'p4', codename: 'RT-CHAT', title: 'REAL TIME FORUM', status: 'COMPLETE', type: 'SCHOOL', description: "SPA Chat application with WebSockets.", stack: ['Go', 'SQLite', 'WebSockets'], repoLink: 'https://github.com' },
  { id: 'p5', codename: 'NET-PROTO', title: 'NET-CAT', status: 'COMPLETE', type: 'SCHOOL', description: "TCP Server implementation (NetCat clone).", stack: ['Go', 'TCP/IP', 'Linux'], repoLink: 'https://github.com' }
];

// --- VUE DESKTOP (Grille 3 colonnes) ---
const ProjectsDesktop: React.FC<{ projects: ProjectData[], onSelect: (p: ProjectData) => void }> = ({ projects, onSelect }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (offset: number) => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: '30px' }}>
      
      {/* Bouton Gauche */}
      <button onClick={() => scroll(-400)} className="neon-border" style={{
          background: 'rgba(0,0,0,0.8)', color: '#0ff', width: '50px', height: '100px', cursor: 'pointer',
          fontSize: '2em', border: 'none', marginRight: '20px', zIndex: 10
      }}>{'<'}</button>

      {/* CONTENEUR CARROUSEL : Largeur fixe pour 3 cartes */}
      <div ref={scrollRef} className="hide-scrollbar" style={{
          display: 'flex', 
          gap: '20px', // Espace entre les cartes
          overflowX: 'auto', 
          scrollBehavior: 'smooth',
          width: '1100px', // 3 cartes de 350px + gaps
          padding: '10px'
      }}>
        {projects.map((proj) => (
            <div key={proj.id} style={{ flex: '0 0 340px', height: '500px' }}>
                <ProjectCard project={proj} onClick={() => onSelect(proj)} />
            </div>
        ))}
      </div>

      {/* Bouton Droite */}
      <button onClick={() => scroll(400)} className="neon-border" style={{
          background: 'rgba(0,0,0,0.8)', color: '#0ff', width: '50px', height: '100px', cursor: 'pointer',
          fontSize: '2em', border: 'none', marginLeft: '20px', zIndex: 10
      }}>{'>'}</button>

    </div>
  );
};

// --- COMPOSANT PRINCIPAL ---
const ProjectsPage: React.FC = () => {
  const isMobile = useIsMobile(1024); 
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <div style={{ paddingTop: '50px', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <style>{` .hide-scrollbar::-webkit-scrollbar { display: none; } `}</style>

      {/* HEADER */}
      <div style={{ paddingLeft: isMobile ? '20px' : '10vw', marginBottom: '20px' }}>
        <h2 style={{ fontSize: isMobile ? '2.5em' : '3.5em', color: '#fff', textShadow: '0 0 15px #0ff' }}>
          TECHNICAL ARTIFACTS
        </h2>
        <p style={{ fontFamily: 'monospace', color: '#0ff' }}>
          {'>'} ARCHIVE ACCESS... {projects.length} FILES FOUND.
        </p>
      </div>

      {isMobile ? (
        <ProjectsMobile projects={projects} onSelectProject={setSelectedProject} />
      ) : (
        <ProjectsDesktop projects={projects} onSelect={setSelectedProject} />
      )}

      {/* --- MODAL OPTIMISÉ (TOUT SUR UNE PAGE) --- */}
      {selectedProject && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 9999,
          backgroundColor: 'rgba(0, 0, 0, 0.9)', backdropFilter: 'blur(5px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'fadeIn 0.2s'
        }} onClick={() => setSelectedProject(null)}>
          
          <div style={{
            width: '800px', maxWidth: '95%',
            backgroundColor: '#0a0a0a', 
            border: '1px solid #ffcc00', 
            boxShadow: '0 0 40px rgba(255, 204, 0, 0.1)',
            display: 'flex', flexDirection: 'column',
            position: 'relative'
          }} onClick={(e) => e.stopPropagation()}>
            
            {/* Header */}
            <div style={{ padding: '15px 25px', borderBottom: '1px solid #ffcc00', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,204,0,0.05)' }}>
                <h2 style={{ color: '#ffcc00', margin: 0, fontSize: '1.5em' }}>{selectedProject.title}</h2>
                <button onClick={() => setSelectedProject(null)} style={{ background: 'transparent', border: '1px solid #ffcc00', color: '#ffcc00', padding: '5px 15px', cursor: 'pointer' }}>CLOSE [X]</button>
            </div>

            <div style={{ padding: '25px', display: 'flex', gap: '25px' }}>
                
                {/* Colonne Gauche (Image) */}
                <div style={{ width: '45%' }}>
                    <div style={{ border: '1px solid #333', padding: '3px', height: '200px', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                        {selectedProject.image ? (
                            <img src={selectedProject.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        ) : (
                            <div style={{ color: '#444' }}>[NO DATA]</div>
                        )}
                    </div>
                    
                    {/* Liens sous l'image */}
                    <a href={selectedProject.repoLink} target="_blank" rel="noreferrer" style={{
                        display: 'block', marginTop: '15px', padding: '10px', textAlign: 'center',
                        border: '1px solid #ffcc00', color: '#ffcc00', textDecoration: 'none', fontSize: '0.9em',
                        transition: 'all 0.2s'
                    }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,204,0,0.1)'} onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                        ACCESS SOURCE CODE
                    </a>
                </div>

                {/* Colonne Droite (Infos) */}
                <div style={{ width: '55%', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    
                    <div>
                        <div style={{ fontSize: '0.7em', color: '#888', marginBottom: '5px' }}>// MISSION BRIEFING</div>
                        <p style={{ fontSize: '0.9em', color: '#ccc', lineHeight: '1.5', margin: 0 }}>{selectedProject.description}</p>
                    </div>

                    <div>
                        <div style={{ fontSize: '0.7em', color: '#888', marginBottom: '5px' }}>// TECH STACK</div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                            {selectedProject.stack.map(t => (
                                <span key={t} style={{ border: '1px solid #444', color: '#ddd', padding: '2px 8px', fontSize: '0.75em', background: '#111' }}>{t}</span>
                            ))}
                        </div>
                    </div>

                    <div style={{ marginTop: 'auto', borderTop: '1px solid #333', paddingTop: '10px', display: 'flex', justifyContent: 'space-between', fontSize: '0.8em', color: '#666', fontFamily: 'monospace' }}>
                        <span>CODE: {selectedProject.codename}</span>
                        <span>STATUS: <span style={{ color: '#39ff14' }}>{selectedProject.status}</span></span>
                    </div>
                </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;