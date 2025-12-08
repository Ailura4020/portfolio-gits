// src/components/SplashScreen.tsx
import React, { useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [isFading, setIsFading] = useState(false);

  const handleEnter = () => {
    setIsFading(true);
    // Attend 1 seconde (durée de la transition CSS) avant de démonter le composant
    setTimeout(() => {
      onComplete();
    }, 1000);
  };

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#000000',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: isFading ? 0 : 1,
        transition: 'opacity 1s ease-out',
        pointerEvents: isFading ? 'none' : 'auto'
      }}
    >
      {/* Effet Glitch sur le texte "SYSTEM HALTED" */}
      <div className="glitch-wrapper" style={{ marginBottom: '2rem' }}>
         <h1 className="glitch" data-text="SYSTEM HALTED" style={{ fontSize: '2rem', color: '#fff' }}>
           SYSTEM HALTED
         </h1>
      </div>

      {/* Bouton d'initialisation */}
      <button 
        onClick={handleEnter}
        className="neon-border" // Utilise la classe CSS définie précédemment
        style={{
          background: 'rgba(0, 255, 255, 0.1)',
          color: 'var(--color-accent-neon)',
          padding: '15px 40px',
          fontFamily: 'var(--font-title)',
          fontSize: '1.2rem',
          cursor: 'pointer',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          border: '1px solid var(--color-accent-neon)',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'var(--color-accent-neon)';
          e.currentTarget.style.color = '#000';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(0, 255, 255, 0.1)';
          e.currentTarget.style.color = 'var(--color-accent-neon)';
        }}
      >
        [ INITIALIZE ]
      </button>
    </div>
  );
};