// src/App.tsx

import React, { useState } from 'react';
import './index.css'; 
import HomePage from './pages/Home.tsx';
import ProjectsPage from './pages/Projects.tsx';
import ExperiencePage from './pages/Experience.tsx';
import SkillsPage from './pages/Skills.tsx';
import ContactPage from './pages/Contact.tsx';

// --- ANIMATIONS CSS ---
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  @keyframes menuReveal {
    0% { opacity: 0; transform: translateY(20px); filter: blur(10px); }
    100% { opacity: 1; transform: translateY(0); filter: blur(0); }
  }
`;
document.head.appendChild(styleSheet);

// --- Composant : Icône Burger ---
const BurgerIcon: React.FC<{ isOpen: boolean; onClick: () => void }> = ({ isOpen, onClick }) => (
    <div 
      onClick={onClick}
      style={{ 
        width: '40px', 
        height: '20px', 
        cursor: 'pointer', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between',
        zIndex: 200, 
        position: 'relative'
      }}
    >
        {/* Ligne Haut */}
        <div style={{ 
            height: '2px', width: '100%',
            backgroundColor: isOpen ? 'var(--color-accent-neon)' : 'var(--color-text-primary)', 
            transition: 'all 0.4s ease',
            transform: isOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'
        }}></div>
        
        {/* Ligne Milieu */}
        <div style={{ 
            height: '2px', width: isOpen ? '0%' : '100%',
            backgroundColor: 'var(--color-text-primary)', 
            transition: 'all 0.2s ease',
            opacity: isOpen ? 0 : 1,
            marginLeft: 'auto'
        }}></div>
        
        {/* Ligne Bas */}
        <div style={{ 
            height: '2px', width: isOpen ? '100%' : '70%',
            backgroundColor: isOpen ? 'var(--color-accent-neon)' : 'var(--color-text-primary)', 
            transition: 'all 0.4s ease',
            transform: isOpen ? 'rotate(-45deg) translate(5px, -7px)' : 'none',
            marginLeft: 'auto'
        }}></div>
    </div>
);

// --- Composant : Menu Overlay ---
const MobileMenuOverlay: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const links = ['HOME', 'PROJECTS', 'EXPERIENCE', 'SKILLS', 'CONTACT'];

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            backgroundColor: 'rgba(0, 2, 10, 0.98)',
            zIndex: 150,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backdropFilter: 'blur(10px)'
        }}>
            
            <div style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px)',
                backgroundSize: '50px 50px',
                pointerEvents: 'none', zIndex: -1
            }}></div>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '30px', textAlign: 'center' }}>
                {links.map((link, index) => (
                    <a 
                        key={link} 
                        href={`#${link.toLowerCase()}`} 
                        onClick={onClose} 
                        style={{ 
                            fontFamily: 'var(--font-title)', 
                            fontSize: '3em', 
                            color: 'transparent', 
                            // Ici on force le type pour éviter l'erreur TS sur la propriété style inline
                            WebkitTextStroke: '1px var(--color-text-primary)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            textDecoration: 'none',
                            position: 'relative',
                            opacity: 0, 
                            animation: `menuReveal 0.5s ease forwards ${index * 0.1}s`, 
                            cursor: 'pointer',
                            transition: 'all 0.3s'
                        } as React.CSSProperties} // <-- Cast pour rassurer TypeScript
                        onMouseOver={(e) => {
                            e.currentTarget.style.color = 'var(--color-accent-neon)';
                            // CORRECTION DE L'ERREUR ICI : On utilise 'as any' pour la propriété non standard
                            (e.currentTarget.style as any).webkitTextStroke = '0px'; 
                            e.currentTarget.style.textShadow = '0 0 20px var(--color-accent-neon)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.color = 'transparent';
                            // CORRECTION DE L'ERREUR ICI
                            (e.currentTarget.style as any).webkitTextStroke = '1px var(--color-text-primary)';
                            e.currentTarget.style.textShadow = 'none';
                        }}
                    >
                        <span style={{ 
                            position: 'absolute', 
                            left: '-40px', top: '50%', transform: 'translateY(-50%)',
                            fontSize: '0.3em', color: 'var(--color-accent-teal)',
                            fontFamily: 'var(--font-body)',
                            // @ts-ignore
                            WebkitTextStroke: '0px'
                        }}>
                            0{index + 1}
                        </span>
                        {link}
                    </a>
                ))}
            </nav>

            <div style={{ 
                marginTop: '60px',
                color: 'var(--color-accent-teal)', 
                fontFamily: 'var(--font-body)',
                fontSize: '0.8em',
                letterSpacing: '0.2em',
                opacity: 0,
                animation: 'menuReveal 0.5s ease forwards 0.6s' 
            }}>
                // SYSTEM NAVIGATION READY
            </div>
        </div>
    );
};

// --- Composant : Barre de Navigation ---
const NavigationBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
        <div
            style={{
                position: 'fixed', 
                top: 0, 
                width: '100%',
                height: '90px', 
                backgroundColor: 'rgba(0, 2, 22, 0.9)', 
                backdropFilter: 'blur(5px)',
                zIndex: 200, 
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 50px'
            }}
        >
            <div style={{ 
                fontFamily: 'var(--font-title)', 
                fontSize: '22px', 
                color: 'var(--color-accent-neon)', 
                letterSpacing: '0.15em',
                fontWeight: 'bold',
                textShadow: '0 0 10px rgba(0, 255, 255, 0.5)'
            }}>
                [ MAJOR AILURA ]
            </div>
            
            <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
                <span style={{ 
                    fontFamily: 'var(--font-body)', 
                    fontSize: '12px', 
                    letterSpacing: '2px', 
                    color: 'var(--color-text-primary)',
                    cursor: 'pointer',
                    opacity: 0.8
                }}>
                    FR / EN
                </span>
                
                <BurgerIcon isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
            </div>
        </div>

        <MobileMenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

function App() {
  return (
    <div className="App" style={{ minHeight: '100vh' }}>
      <NavigationBar />
      <main style={{ padding: '0px 40px', maxWidth: '1400px', margin: '0 auto', paddingTop: '120px' }}>
        <HomePage /> 
        <ProjectsPage /> 
        <ExperiencePage />
        <SkillsPage /> 
        <ContactPage /> 
      </main>
    </div>
  );
};

export default App;