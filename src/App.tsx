// src/App.tsx

import React, { useState } from 'react';
import './index.css'; 
import HomePage from './pages/Home.tsx';
import ProjectsPage from './pages/Projects.tsx';
import ExperiencePage from './pages/Experience.tsx';
import SkillsPage from './pages/Skills.tsx';
import ContactPage from './pages/Contact.tsx';
import CustomCursor from './components/CustomCursor.tsx'; 
import BackgroundManager from './components/BackgroundManager.tsx';

/* --- GARDER TES KEYFRAMES CSS --- */
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  @keyframes slideInRight {
    0% { transform: translateX(100%); opacity: 0; }
    100% { transform: translateX(0); opacity: 1; }
  }
  @keyframes linkFadeIn {
    0% { opacity: 0; transform: translateX(20px); }
    100% { opacity: 1; transform: translateX(0); }
  }
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`;
document.head.appendChild(styleSheet);

/* --- GARDER TON COMPOSANT BURGER ICON --- */
const BurgerIcon: React.FC<{ isOpen: boolean; onClick: () => void }> = ({ isOpen, onClick }) => (
    <div 
      onClick={onClick}
      style={{ 
        width: '40px', height: '20px', cursor: 'pointer', display: 'flex', 
        flexDirection: 'column', justifyContent: 'space-between', zIndex: 200, position: 'relative'
      }}
    >
        <div style={{ 
            height: '2px', width: '100%', backgroundColor: isOpen ? 'var(--color-accent-neon)' : 'var(--color-text-primary)', 
            transition: 'all 0.4s ease', transform: isOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'
        }}></div>
        <div style={{ 
            height: '2px', width: isOpen ? '0%' : '100%', backgroundColor: 'var(--color-text-primary)', 
            transition: 'all 0.2s ease', opacity: isOpen ? 0 : 1, marginLeft: 'auto'
        }}></div>
        <div style={{ 
            height: '2px', width: isOpen ? '100%' : '70%', backgroundColor: isOpen ? 'var(--color-accent-neon)' : 'var(--color-text-primary)', 
            transition: 'all 0.4s ease', transform: isOpen ? 'rotate(-45deg) translate(5px, -7px)' : 'none', marginLeft: 'auto'
        }}></div>
    </div>
);

/* --- GARDER LE MENU OVERLAY --- */
interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
  setHoveredSection: (section: string | null) => void;
}

const MobileMenuOverlay: React.FC<MenuProps> = ({ isOpen, onClose, setHoveredSection }) => {
    if (!isOpen) return null;
    const links = ['HOME', 'PROJECTS', 'EXPERIENCE', 'SKILLS', 'CONTACT'];

    return (
        <>
            <div onClick={onClose} style={{
                    position: 'fixed', top: '90px', left: 0, width: '100%', height: 'calc(100vh - 90px)',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(3px)', zIndex: 149,
                }} />
            <div style={{
                position: 'fixed', top: '90px', right: 0, width: '100%', maxWidth: '600px', height: 'calc(100vh - 90px)', 
                backgroundColor: 'rgba(0, 2, 22, 0.98)', borderLeft: '2px solid var(--color-accent-neon)', 
                boxShadow: '-10px 0 40px rgba(0, 255, 255, 0.15)', zIndex: 150, 
                display: 'flex', flexDirection: 'column', 
                justifyContent: 'flex-start',
                paddingTop: '15vh',
                paddingLeft: '80px', 
                animation: 'slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1)' 
            }}>
                {/* Décorations menu... */}
                <div style={{ position: 'absolute', top: 0, right: 0, width: '100px', height: '100%', borderLeft: '1px dashed var(--color-interface-dark)', pointerEvents: 'none', opacity: 0.3 }}></div>
                <div style={{ color: 'var(--color-accent-teal)', fontFamily: 'var(--font-body)', fontSize: '0.8em', letterSpacing: '0.2em', marginBottom: '40px', opacity: 0.8 }}>// NAVIGATION PROTOCOLS</div>
                
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'flex-start' }}>
                    {links.map((link, index) => (
                        <a key={link} href={`#${link.toLowerCase()}`} onClick={onClose} 
                            onMouseEnter={() => setHoveredSection(link.toLowerCase())}
                            onMouseLeave={() => setHoveredSection(null)}
                            style={{ 
                                fontFamily: 'var(--font-title)', fontSize: '2.5em', color: 'transparent', WebkitTextStroke: '1px var(--color-text-primary)',
                                textTransform: 'uppercase', letterSpacing: '0.1em', textDecoration: 'none', position: 'relative', opacity: 0, 
                                animation: `linkFadeIn 0.4s ease forwards ${0.1 + index * 0.1}s`, cursor: 'pointer', transition: 'all 0.3s'
                            } as React.CSSProperties}
                            onMouseOver={(e) => {
                                e.currentTarget.style.color = 'var(--color-accent-neon)';
                                (e.currentTarget.style as any).webkitTextStroke = '0px'; 
                                e.currentTarget.style.textShadow = '0 0 15px var(--color-accent-neon)';
                                e.currentTarget.style.transform = 'translateX(15px)'; 
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.color = 'transparent';
                                (e.currentTarget.style as any).webkitTextStroke = '1px var(--color-text-primary)';
                                e.currentTarget.style.textShadow = 'none';
                                e.currentTarget.style.transform = 'translateX(0)';
                            }}
                        >
                            <span style={{ fontSize: '0.4em', color: 'var(--color-accent-teal)', position: 'absolute', left: '-40px', top: '18px',
                                // @ts-ignore
                                WebkitTextStroke: '0px' }}>0{index + 1}</span>{link}
                        </a>
                    ))}
                </nav>
            </div>
        </>
    );
};

const NavigationBar: React.FC<{ setHoveredSection: (s: string | null) => void }> = ({ setHoveredSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
        <div style={{
                position: 'fixed', top: 0, width: '100%', height: '90px', backgroundColor: 'rgba(0, 2, 22, 0.9)', 
                backdropFilter: 'blur(5px)', zIndex: 200, borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 50px'
            }}>
            <div style={{ fontFamily: 'var(--font-title)', fontSize: '22px', color: 'var(--color-accent-neon)', letterSpacing: '0.15em', fontWeight: 'bold', textShadow: '0 0 10px rgba(0, 255, 255, 0.5)' }}>[ PROJECT AILURA ]</div>
            <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', letterSpacing: '2px', color: 'var(--color-text-primary)', cursor: 'pointer', opacity: 0.8 }}>FR / EN</span>
                <BurgerIcon isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
            </div>
        </div>
        <MobileMenuOverlay 
            isOpen={isMenuOpen} 
            onClose={() => setIsMenuOpen(false)} 
            setHoveredSection={setHoveredSection} 
        />
    </>
  );
};

function App() {
  const [menuHoveredSection, setMenuHoveredSection] = useState<string | null>(null);
  
  // NOUVEL ÉTAT : Theme courant (couleur)
  const [currentTheme, setCurrentTheme] = useState('home');

  // Si le menu est survolé, on utilise sa section, sinon le thème du scroll
  const activeTheme = menuHoveredSection || currentTheme;

  return (
    // ON APPLIQUE LE THEME ICI
    <div className="App" data-theme={activeTheme} style={{ minHeight: '100vh', backgroundColor: 'transparent' }}>
      
      <BackgroundManager 
        hoveredSection={menuHoveredSection} 
        onSectionChange={setCurrentTheme} // On connecte le détecteur
      />

      <CustomCursor />
      <NavigationBar setHoveredSection={setMenuHoveredSection} />
      
      <main style={{ padding: '0px 40px', maxWidth: '1400px', margin: '0 auto', paddingTop: '120px' }}>
        <section id="home"><HomePage /></section>
        <section id="projects"><ProjectsPage /></section>
        <section id="experience"><ExperiencePage /></section>
        <section id="skills"><SkillsPage /></section>
        <section id="contact"><ContactPage /></section>
      </main>
    </div>
  );
};

export default App;