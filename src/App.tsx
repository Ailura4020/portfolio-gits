// src/App.tsx
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import './index.css'; 
import HomePage from './pages/Home.tsx';
import ProjectsPage from './pages/Projects.tsx';
import ExperiencePage from './pages/Experience.tsx';
import SkillsPage from './pages/Skills.tsx';
import ContactPage from './pages/Contact.tsx';
import CustomCursor from './components/CustomCursor.tsx'; 
import BackgroundManager from './components/BackgroundManager.tsx';
import Logo from './components/Logo'; // Assure-toi que ce composant existe ou retire-le si tu utilises du texte
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
            
            {/* LOGO (Ajusté selon ta demande) */}
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
=======

import React from 'react';
// S'assurer que les styles globaux sont bien importés
// Si tu as supprimé le App.css initial, cet import est suffisant:
import './index.css'; 

// --- Composant de Navigation (inspiré par la capture d'écran) ---
const NavigationBar: React.FC = () => {
  // Liste des liens de navigation basés sur notre architecture
  const links = ['Home', 'Projects', 'Experience', 'Skills', 'Contact'];

  return (
    <nav 
      style={{ 
        backgroundColor: 'var(--color-bg-primary)', 
        borderBottom: '1px solid var(--color-interface-dark)',
        position: 'sticky', // Fixe la nav en haut
        top: 0,
        zIndex: 10 // Assure que la nav est au-dessus du reste du contenu
      }}
    >
      {/* 1. Ligne Supérieure avec Logo/Menu Burger */}
      <div 
        style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '10px 40px',
          height: '50px' 
        }}
      >
        {/* Le Logo Stylisé ici - Remplacer par ton logo plus tard */}
        <div style={{ fontFamily: 'var(--font-title)', fontSize: '24px', color: 'var(--color-accent-neon)' }}>
            [TA_SIGNATURE]
        </div>
        
        {/* EN/FR et Menu Burger */}
        <div style={{ display: 'flex', gap: '15px', color: 'var(--color-text-primary)' }}>
            <span style={{ fontSize: '14px', letterSpacing: '2px' }}>FR / EN</span>
            <div style={{ width: '25px', height: '20px', cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '4px' }}>
                {/* Icône Menu Burger Stylisée */}
                <div style={{ borderBottom: '2px solid var(--color-text-primary)' }}></div>
                <div style={{ borderBottom: '2px solid var(--color-text-primary)' }}></div>
                <div style={{ borderBottom: '2px solid var(--color-text-primary)' }}></div>
            </div>
        </div>
      </div>

      {/* 2. Barre de Navigation Principale (Style GitS Condensé) */}
      <div 
        style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          gap: '30px', 
          padding: '15px 40px',
          borderTop: '1px solid var(--color-interface-dark)' 
        }}
      >
        {/* Tes liens */}
        {links.map(link => (
          <a 
            key={link} 
            href={`#${link.toLowerCase()}`} 
            style={{ 
              fontFamily: 'var(--font-title)', 
              fontSize: '14px', 
              letterSpacing: '0.15em', /* Très espacé comme sur la capture */
              textTransform: 'uppercase',
              color: 'var(--color-text-primary)' 
            }}
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
};


// --- Composant Principal d'Application ---
const App: React.FC = () => {
  return (
    <div className="App" style={{ minHeight: '100vh' }}>
      <NavigationBar />
      
      {/* Le conteneur principal où le contenu sera affiché */}
      <main style={{ padding: '0px 40px', maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Section 1: Home / System Access */}
        <section id="home" style={{ minHeight: '80vh', paddingTop: '100px' }}>
          <h1 style={{ fontSize: '4em', color: 'var(--color-accent-neon)', marginBottom: '10px' }}>
            System Access
          </h1>
          <p style={{ fontSize: '1.5em', color: 'var(--color-interface-light)' }}>
            Full Stack Developer & Pedagogical Coach
          </p>
          <div style={{ height: '300px', border: '1px dashed var(--color-interface-light)', marginTop: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Zone pour l'animation et l'accroche
          </div>
        </section>
        
        {/* Autres sections (vides pour l'instant) */}
        <section id="projects" style={{ minHeight: '100vh', paddingTop: '100px' }}>
             <h2>Projects / Technical Artifacts</h2>
        </section>
        <section id="experience" style={{ minHeight: '100vh', paddingTop: '100px' }}>
             <h2>Experience / Interaction Log</h2>
        </section>
        <section id="skills" style={{ minHeight: '100vh', paddingTop: '100px' }}>
             <h2>Skills / Capability Matrix</h2>
        </section>
        <section id="contact" style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '100px' }}>
             <h2>Contact / End of Transmission</h2>
        </section>
        
      </main>
>>>>>>> d559643dcb0e62de0b56e561fd1367c398bbe757
    </div>
  );
};

export default App;