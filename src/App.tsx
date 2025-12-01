// src/App.tsx

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
    </div>
  );
};

export default App;