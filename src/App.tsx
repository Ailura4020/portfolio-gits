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
import Logo from './components/Logo';
import useIsMobile from './hooks/useIsMobile'; // IMPORT DU HOOK

// --- ANIMATIONS CSS ---
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

// --- COMPOSANTS NAVIGATION ---
const BurgerIcon: React.FC<{ isOpen: boolean; onClick: () => void }> = ({ isOpen, onClick }) => (
    <div onClick={onClick} style={{ width: '40px', height: '20px', cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', zIndex: 200, position: 'relative' }}>
        <div style={{ height: '2px', width: '100%', backgroundColor: isOpen ? 'var(--color-accent-neon)' : 'var(--color-text-primary)', transition: 'all 0.4s ease', transform: isOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none' }}></div>
        <div style={{ height: '2px', width: isOpen ? '0%' : '100%', backgroundColor: 'var(--color-text-primary)', transition: 'all 0.2s ease', opacity: isOpen ? 0 : 1, marginLeft: 'auto' }}></div>
        <div style={{ height: '2px', width: isOpen ? '100%' : '70%', backgroundColor: isOpen ? 'var(--color-accent-neon)' : 'var(--color-text-primary)', transition: 'all 0.4s ease', transform: isOpen ? 'rotate(-45deg) translate(5px, -7px)' : 'none', marginLeft: 'auto' }}></div>
    </div>
);

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
            <div onClick={onClose} style={{ position: 'fixed', top: '90px', left: 0, width: '100%', height: 'calc(100vh - 90px)', backgroundColor: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(3px)', zIndex: 149 }} />
            <div style={{ position: 'fixed', top: '90px', right: 0, width: '100%', maxWidth: '600px', height: 'calc(100vh - 90px)', backgroundColor: 'rgba(0, 2, 22, 0.98)', borderLeft: '2px solid var(--color-accent-neon)', boxShadow: '-10px 0 40px rgba(0, 255, 255, 0.15)', zIndex: 150, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', paddingTop: '15vh', paddingLeft: '80px', animation: 'slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'flex-start' }}>
                    {links.map((link, index) => (
                        <a key={link} href={`#${link.toLowerCase()}`} onClick={onClose} onMouseEnter={() => setHoveredSection(link.toLowerCase())} onMouseLeave={() => setHoveredSection(null)} style={{ fontFamily: 'var(--font-title)', fontSize: '2.5em', color: 'transparent', WebkitTextStroke: '1px var(--color-text-primary)', textTransform: 'uppercase', letterSpacing: '0.1em', textDecoration: 'none', position: 'relative', opacity: 0, animation: `linkFadeIn 0.4s ease forwards ${0.1 + index * 0.1}s`, cursor: 'pointer', transition: 'all 0.3s' }}>
                            <span style={{ fontSize: '0.4em', color: 'var(--color-accent-teal)', position: 'absolute', left: '-40px', top: '18px' }}>0{index + 1}</span>{link}
                        </a>
                    ))}
                </nav>
            </div>
        </>
    );
};

// --- LA BARRE DE NAV MODIFIÉE ---
const NavigationBar: React.FC<{ setHoveredSection: (s: string | null) => void }> = ({ setHoveredSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile(); 

  return (
    <>
        <div 
          className="nav-header"
          style={{ 
            position: 'fixed', top: 0, width: '100%', height: '90px', 
            backgroundColor: 'rgba(0, 2, 22, 0.9)', backdropFilter: 'blur(5px)', zIndex: 200, 
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)', 
            display: 'flex', 
            // MODIFICATION ICI : Sur mobile, on centre tout. Sur PC, on espace (Space Between).
            justifyContent: isMobile ? 'center' : 'space-between', 
            alignItems: 'center', 
            padding: '0 50px' 
          }}>
            
            <div style={{ color: 'var(--color-accent-neon)', display: 'flex', alignItems: 'center', height: '100%' }}>
                {/* MODIFICATION ICI : Taille augmentée sur mobile (220px) */}
                <Logo style={{ width: isMobile ? '350px' : '250px', height: 'auto' }} />
            </div>

            {!isMobile && (
                <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', letterSpacing: '2px', color: 'var(--color-text-primary)', cursor: 'pointer', opacity: 0.8 }}>FR / EN</span>
                    <BurgerIcon isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
                </div>
            )}
        </div>
        
        {/* Le menu overlay ne s'affichera que si isMenuOpen est true (donc impossible sur mobile vu qu'on a caché le bouton) */}
        <MobileMenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} setHoveredSection={setHoveredSection} />
    </>
  );
};

// --- APP ---
function App() {
  const [menuHoveredSection, setMenuHoveredSection] = useState<string | null>(null);
  const [currentTheme, setCurrentTheme] = useState('home');
  const activeTheme = menuHoveredSection || currentTheme;

  return (
    <div className="App" data-theme={activeTheme} style={{ minHeight: '100vh', backgroundColor: 'transparent', overflowX: 'hidden', width: '100%' }}>
      <BackgroundManager hoveredSection={menuHoveredSection} onSectionChange={setCurrentTheme} />
      <CustomCursor />
      <NavigationBar setHoveredSection={setMenuHoveredSection} />
      
      <main className="responsive-padding" style={{ padding: '0 40px', maxWidth: '1400px', margin: '0 auto', paddingTop: '120px', position: 'relative', zIndex: 1 }}>
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