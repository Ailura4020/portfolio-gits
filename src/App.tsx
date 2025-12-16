// src/App.tsx
import React, { useState, useEffect } from 'react';
import './index.css'; 
import HomePage from './pages/Home.tsx';
import ProjectsPage from './pages/Projects.tsx';
import ExperiencePage from './pages/Experience.tsx';
import SkillsPage from './pages/Skills.tsx';
import ContactPage from './pages/Contact.tsx';
import CustomCursor from './components/CustomCursor.tsx'; 
import BackgroundManager from './components/BackgroundManager.tsx';
import Logo from './components/Logo';
import useIsMobile from './hooks/useIsMobile';
import CyberIntro from './components/CyberIntro';

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

// --- COMPOSANT : BURGER ICON (Mobile Only) ---
const BurgerIcon: React.FC<{ isOpen: boolean; onClick: () => void }> = ({ isOpen, onClick }) => (
    <div onClick={onClick} style={{ width: '30px', height: '20px', cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', zIndex: 200 }}>
        <div style={{ height: '2px', width: '100%', backgroundColor: isOpen ? 'var(--color-accent-neon)' : 'var(--color-text-primary)', transition: 'all 0.3s', transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></div>
        <div style={{ height: '2px', width: '100%', backgroundColor: 'var(--color-text-primary)', opacity: isOpen ? 0 : 1, transition: 'all 0.3s' }}></div>
        <div style={{ height: '2px', width: '100%', backgroundColor: isOpen ? 'var(--color-accent-neon)' : 'var(--color-text-primary)', transition: 'all 0.3s', transform: isOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none' }}></div>
    </div>
);

// --- COMPOSANT : MENU OVERLAY (Mobile) ---
const MobileMenuOverlay: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    const links = [
      { id: 'home', label: 'ACCUEIL' }, 
      { id: 'projects', label: 'PROJETS' }, 
      { id: 'experience', label: 'EXPÉRIENCE' }, 
      { id: 'skills', label: 'COMPÉTENCES' }, 
      { id: 'contact', label: 'CONTACT' }
    ];

    return (
        <div style={{ position: 'fixed', inset: 0, zIndex: 150 }}>
            <div onClick={onClose} style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(5px)' }} />
            <div style={{ position: 'absolute', top: 0, right: 0, width: '80%', maxWidth: '300px', height: '100%', backgroundColor: '#050a10', borderLeft: '2px solid var(--color-accent-neon)', padding: '100px 40px', display: 'flex', flexDirection: 'column', gap: '30px', animation: 'slideInRight 0.3s ease' }}>
                {links.map((link, i) => (
                    <a key={link.id} href={`#${link.id}`} onClick={onClose} style={{ fontSize: '1.5em', fontFamily: 'var(--font-title)', color: '#fff', textDecoration: 'none', animation: `linkFadeIn 0.5s ease forwards ${i * 0.1}s`, opacity: 0 }}>
                        <span style={{ color: 'var(--color-accent-neon)', marginRight: '10px', fontSize: '0.6em' }}>0{i + 1}</span>
                        {link.label}
                    </a>
                ))}
            </div>
        </div>
    );
};

// --- COMPOSANT : NAVIGATION BAR (Desktop & Mobile) ---
const NavigationBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile(); 
  const links = [
      { id: 'home', label: 'ACCUEIL' }, 
      { id: 'projects', label: 'PROJETS' }, 
      { id: 'experience', label: 'EXPÉRIENCE' }, 
      { id: 'skills', label: 'COMPÉTENCES' }, 
      { id: 'contact', label: 'CONTACT' }
  ];

  return (
    <>
        <nav style={{ 
            position: 'fixed', top: 0, width: '100%', height: '80px', 
            backgroundColor: 'rgba(0, 5, 16, 0.9)', backdropFilter: 'blur(10px)', zIndex: 100,
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: isMobile ? '0 20px' : '0 50px'
        }}>
            
            {/* LOGO */}
            <div style={{ width: isMobile ? '160px' : '220px', transition: 'width 0.3s ease' }}>
                <Logo />
            </div>

            {/* NAVIGATION DESKTOP */}
            {!isMobile ? (
                <div style={{ display: 'flex', gap: '40px' }}>
                    {links.map(link => (
                        <a key={link.id} href={`#${link.id}`} style={{ 
                            fontFamily: 'var(--font-title)', fontSize: '0.9em', letterSpacing: '2px', 
                            color: 'var(--color-text-primary)', textDecoration: 'none', position: 'relative'
                        }} className="nav-link">
                            {link.label}
                        </a>
                    ))}
                </div>
            ) : (
                /* BURGER MOBILE */
                <BurgerIcon isOpen={isMenuOpen} onClick={() => setIsMenuOpen(true)} />
            )}
        </nav>
        
        <MobileMenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

// --- MAIN APP ---
const App: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState('home');
  const [initialized, setInitialized] = useState(false);
  const isMobile = useIsMobile(); 

  // --- 1. EMPÊCHER LE NAVIGATEUR DE RESTAURER LE SCROLL ---
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  // --- 2. FORCER LE SCROLL EN HAUT QUAND L'INTRO EST FINIE ---
  useEffect(() => {
    if (initialized) {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'instant' }); 
      }, 50);
    }
  }, [initialized]);

  return (
    <div className="App" data-theme={currentTheme} style={{ minHeight: '100vh', backgroundColor: '#000', overflowX: 'hidden' }}>
      
      {/* INTRO */}
      {!initialized && <CyberIntro onComplete={() => setInitialized(true)} />}

      {/* CONTENU DU SITE */}
      <div style={{ opacity: initialized ? 1 : 0, transition: 'opacity 1.5s ease' }}>
          
          <BackgroundManager hoveredSection={null} onSectionChange={setCurrentTheme} />
          {!isMobile && <CustomCursor />}
          <NavigationBar />
          
          <main style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <section id="home"><HomePage /></section>
            <section id="projects"><ProjectsPage /></section>
            <section id="experience"><ExperiencePage /></section>
            <section id="skills"><SkillsPage /></section>
            <section id="contact"><ContactPage /></section>
          </main>

      </div>
    </div>
  );
};

export default App;