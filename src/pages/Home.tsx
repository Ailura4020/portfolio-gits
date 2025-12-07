// src/pages/Home.tsx
import React, { useState, useEffect } from 'react';
import useIsMobile from '../hooks/useIsMobile';

// --- COMPOSANT TYPEWRITER (Boucle infinie + Start Delay) ---
const Typewriter: React.FC<{ text: string; delay?: number; startDelay?: number; loopInterval?: number }> = ({ 
  text, 
  delay = 50, 
  startDelay = 1000,
  loopInterval = 4000 
}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const [hasStarted, setHasStarted] = useState(false); // Nouvel état pour le délai initial

  // 1. GESTION DU DÉLAI INITIAL (Le fameux startDelay)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setHasStarted(true);
    }, startDelay);
    return () => clearTimeout(timeout);
  }, [startDelay]);

  // 2. LOGIQUE D'ÉCRITURE
  useEffect(() => {
    // Si on n'a pas encore passé le délai initial, on ne fait rien
    if (!hasStarted) return;

    const timeout = setTimeout(() => {
      if (isWaiting) return;

      if (!isDeleting && currentIndex < text.length) {
        // ÉCRITURE
        setCurrentText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      } 
      else if (!isDeleting && currentIndex === text.length) {
        // FIN D'ÉCRITURE -> ATTENTE AVANT RESET
        setIsWaiting(true);
        setTimeout(() => {
          setIsDeleting(true);
          setIsWaiting(false);
        }, loopInterval);
      }
      else if (isDeleting) {
        // RESET INSTANTANÉ
        setCurrentText('');
        setCurrentIndex(0);
        setIsDeleting(false);
      }
    }, isDeleting ? 0 : delay);

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, text, isDeleting, isWaiting, loopInterval, hasStarted]);

  return (
    <span style={{ fontFamily: 'var(--font-code)', color: 'var(--color-accent-neon)', letterSpacing: '2px' }}>
      {currentText}
      <span className="cursor-blink">_</span>
    </span>
  );
};

// --- COMPOSANT SCROLL INDICATOR ---
const ScrollIndicator: React.FC = () => (
  <div style={{
    position: 'absolute',
    bottom: '40px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    opacity: 0,
    animation: 'fadeIn 2s ease 3s forwards', 
    zIndex: 10
  }}>
    <div style={{
      width: '24px',
      height: '40px',
      border: '2px solid var(--color-accent-neon)',
      borderRadius: '12px',
      position: 'relative',
      marginBottom: '10px',
      boxShadow: '0 0 10px var(--color-accent-neon)'
    }}>
      <div style={{
        width: '4px',
        height: '8px',
        background: 'var(--color-accent-neon)',
        borderRadius: '2px',
        position: 'absolute',
        top: '6px',
        left: '50%',
        transform: 'translateX(-50%)',
        animation: 'scroll-wheel 2s infinite'
      }}></div>
    </div>
    <span style={{ fontSize: '0.7em', color: 'var(--color-accent-neon)', letterSpacing: '2px', fontFamily: 'var(--font-code)' }}>SCROLL</span>
  </div>
);

const HomePage: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div style={{ 
      height: isMobile ? '90vh' : '80vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center',
      alignItems: isMobile ? 'center' : 'flex-start', 
      textAlign: isMobile ? 'center' : 'left',
      paddingLeft: isMobile ? '0' : '5vw', 
      position: 'relative'
    }}>
      
      <style>{`
        @keyframes scroll-wheel { 0% { top: 6px; opacity: 1; } 100% { top: 20px; opacity: 0; } }
        .cursor-blink { animation: blink 1s infinite; }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        .glitch-text { position: relative; color: white; }
        .glitch-text::before, .glitch-text::after { content: attr(data-text); position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.8; }
        .glitch-text::before { color: #0ff; z-index: -1; animation: glitch-anim-1 3s infinite linear alternate-reverse; }
        .glitch-text::after { color: #f0f; z-index: -2; animation: glitch-anim-2 2.5s infinite linear alternate-reverse; }
        @keyframes glitch-anim-1 { 0% { clip-path: inset(20% 0 80% 0); transform: translate(-2px, 1px); } 20% { clip-path: inset(60% 0 10% 0); transform: translate(2px, -1px); } 40% { clip-path: inset(40% 0 50% 0); transform: translate(-2px, 2px); } 60% { clip-path: inset(80% 0 5% 0); transform: translate(2px, -2px); } 80% { clip-path: inset(10% 0 60% 0); transform: translate(-1px, 1px); } 100% { clip-path: inset(30% 0 30% 0); transform: translate(1px, -1px); } }
        @keyframes glitch-anim-2 { 0% { clip-path: inset(10% 0 60% 0); transform: translate(2px, -1px); } 20% { clip-path: inset(80% 0 5% 0); transform: translate(-2px, 2px); } 40% { clip-path: inset(30% 0 20% 0); transform: translate(2px, 1px); } 60% { clip-path: inset(10% 0 80% 0); transform: translate(-1px, -2px); } 80% { clip-path: inset(50% 0 30% 0); transform: translate(1px, 2px); } 100% { clip-path: inset(70% 0 10% 0); transform: translate(-2px, -1px); } }
      `}</style>

      {/* SOUS-TITRE IDENTITÉ */}
      <div style={{ 
        color: 'var(--color-accent-teal)', 
        fontSize: isMobile ? '0.8em' : '1em', 
        fontFamily: 'var(--font-code)', 
        marginBottom: '10px',
        letterSpacing: '3px'
      }}>
        // SYSTEM IDENTITY_
      </div>

      {/* TITRE GLITCHÉ */}
      <h1 
        className="glitch-text" 
        data-text="[ PROJECT AILURA ]"
        style={{ 
          fontSize: isMobile ? '2.8em' : '5.5em', 
          margin: '0 0 20px 0',
          fontFamily: 'var(--font-title)',
          textShadow: '0 0 20px var(--color-accent-neon)',
          lineHeight: 1.1
        }}
      >
        [ PROJECT AILURA ]
      </h1>

      {/* TYPEWRITER (Boucle) */}
      <div style={{ 
        fontSize: isMobile ? '1em' : '1.5em', 
        height: '60px', 
        marginBottom: '20px',
        maxWidth: isMobile ? '100%' : '650px', 
        minHeight: '3em' 
      }}>
        <span style={{ color: 'var(--color-interface-light)', marginRight: '10px' }}>{'>'}</span>
        <Typewriter 
          text="INITIALIZING FULL STACK ARCHITECT PROTOCOL..." 
          startDelay={500} 
          loopInterval={5000} 
        />
      </div>

      {/* DESCRIPTION */}
      <p style={{
        color: '#ccc',
        maxWidth: isMobile ? '100%' : '550px', 
        fontSize: isMobile ? '0.9em' : '1.1em',
        lineHeight: 1.6,
        opacity: 0,
        animation: 'fadeIn 1s ease 2.5s forwards'
      }}>
        Bridging the gap between human intuition and machine logic. 
        <br/>
        Développeuse Full Stack & Coach Pédagogique.
      </p>

      {/* INDICATEUR SCROLL */}
      <ScrollIndicator />

    </div>
  );
};

export default HomePage;