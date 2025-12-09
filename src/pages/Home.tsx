// src/pages/Home.tsx
import React, { useState, useEffect } from 'react';
import useIsMobile from '../hooks/useIsMobile';

// --- COMPOSANT TYPEWRITER ---
const Typewriter: React.FC<{ text: string; startDelay?: number; loopInterval?: number }> = ({ 
  text, 
  startDelay = 1000,
  loopInterval = 20000 // MODIFIÉ : 20 secondes
}) => {
  const [display, setDisplay] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  // Délai initial
  useEffect(() => {
    const t = setTimeout(() => setHasStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  // Boucle d'écriture
  useEffect(() => {
    if (!hasStarted) return;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Écriture
        if (display.length < text.length) {
          setDisplay(text.slice(0, display.length + 1));
        } else {
          // Fin écriture -> Attente avant effacement
          setTimeout(() => setIsDeleting(true), loopInterval);
        }
      } else {
        // Effacement rapide
        if (display.length > 0) {
          setDisplay(text.slice(0, display.length - 1));
        } else {
          // Fin effacement -> Repartir
          setIsDeleting(false);
        }
      }
    }, isDeleting ? 50 : 100); // Vitesse : 100ms écriture, 50ms effacement

    return () => clearTimeout(timer);
  }, [display, isDeleting, hasStarted, text, loopInterval]);

  return <span style={{ fontFamily: 'var(--font-code)', color: 'var(--color-accent-neon)' }}>{display}<span className="cursor-blink">_</span></span>;
};

// --- SCROLL INDICATOR MODIFIÉ ---
const ScrollIndicator: React.FC = () => (
  <div style={{ 
    position: 'absolute', 
    bottom: '60px', // REMONTÉ (était 30px)
    left: '50%', 
    transform: 'translateX(-50%)', 
    opacity: 0.8, 
    animation: 'fadeIn 2s 3s forwards',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    zIndex: 10
  }}>
    {/* TEXTE AU DESSUS */}
    <span style={{ 
        fontFamily: 'var(--font-code)', 
        fontSize: '0.8em', 
        letterSpacing: '2px', 
        color: 'var(--color-accent-neon)' 
    }}>
        SCROLL
    </span>

    {/* SOURIS / ANIMATION */}
    <div className="scroll-bounce" style={{ 
        border: '2px solid var(--color-accent-neon)', 
        width: '24px', 
        height: '40px', 
        borderRadius: '12px', 
        position: 'relative',
        boxShadow: '0 0 10px var(--color-accent-neon)'
    }}>
        <div style={{ 
            width: '4px', 
            height: '6px', 
            background: 'var(--color-accent-neon)', 
            borderRadius: '2px', 
            position: 'absolute', 
            top: '6px', 
            left: '50%', 
            transform: 'translateX(-50%)' 
        }}></div>
    </div>
  </div>
);

const HomePage: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div style={{ 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center',
      alignItems: isMobile ? 'center' : 'flex-start', 
      paddingLeft: isMobile ? '20px' : '80px', 
      paddingRight: isMobile ? '20px' : '0',
      position: 'relative'
    }}>
      
      <div style={{ 
          maxWidth: isMobile ? '100%' : '50%', 
          textAlign: isMobile ? 'center' : 'left',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: isMobile ? 'center' : 'flex-start'
      }}>
          
          <div style={{ 
            color: 'var(--color-accent-teal)', 
            fontSize: '0.9em', 
            fontFamily: 'var(--font-code)', 
            letterSpacing: '3px', 
            marginBottom: '10px' 
          }}>
            // SYSTEM IDENTITY_
          </div>

          {/* TITRE SÉPARÉ POUR GLITCH PARFAIT */}
          <div style={{ marginBottom: '20px' }}>
            <h1 className="glitch" data-text="PROJECT" style={{ 
              fontSize: isMobile ? '3em' : '5.5em', 
              margin: 0,
              fontFamily: 'var(--font-title)',
              color: '#fff',
              lineHeight: 1,
              textShadow: '0 0 20px rgba(0, 255, 255, 0.3)'
            }}>
              PROJECT
            </h1>
            <h1 className="glitch" data-text="AILURA" style={{ 
              fontSize: isMobile ? '3em' : '5.5em', 
              margin: 0,
              fontFamily: 'var(--font-title)',
              color: '#fff',
              lineHeight: 1,
              textShadow: '0 0 20px rgba(0, 255, 255, 0.3)'
            }}>
              AILURA
            </h1>
          </div>

          <div style={{ minHeight: '30px', fontSize: isMobile ? '0.9em' : '1.1em', marginBottom: '30px' }}>
            <span style={{ color: '#555', marginRight: '10px' }}>{'>'}</span>
            <Typewriter text="INITIALIZING FULL STACK ARCHITECT PROTOCOL..." />
          </div>

          <p style={{
            color: 'var(--color-text-primary)',
            fontSize: isMobile ? '0.9em' : '1em',
            lineHeight: 1.6,
            maxWidth: '500px',
            opacity: 0.8,
            margin: isMobile ? '0 auto' : '0' 
          }}>
            Développeuse Full Stack & Coach Pédagogique.<br/>
            Bridging the gap between human intuition and machine logic.
          </p>

          {/* BOUTON SUPPRIMÉ ICI */}

      </div>

      <ScrollIndicator />
    </div>
  );
};

export default HomePage;