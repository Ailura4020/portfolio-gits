// src/components/CustomCursor.tsx
import React, { useEffect, useState, useRef } from 'react';

const CustomCursor: React.FC = () => {
  // Positions de la souris (Cible)
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  // Positions du curseur "traînée" (Lerp)
  const outlineX = useRef(0);
  const outlineY = useRef(0);

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Référence aux éléments DOM pour la performance (éviter les re-renders React)
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
      setIsVisible(true);

      // Détection des éléments cliquables
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('clickable') ||
        target.style.cursor === 'pointer';

      setIsHovered(!!isClickable);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // --- BOUCLE D'ANIMATION (Game Loop) ---
    const animate = () => {
      if (dotRef.current && outlineRef.current) {
        // 1. Le point suit instantanément
        dotRef.current.style.transform = `translate3d(${mouseX.current}px, ${mouseY.current}px, 0)`;

        // 2. Le cercle suit avec un délai (Mathématiques de fluidité)
        // On rapproche outlineX de mouseX de 15% à chaque frame
        outlineX.current += (mouseX.current - outlineX.current) * 0.15;
        outlineY.current += (mouseY.current - outlineY.current) * 0.15;

        // On applique la transformation
        // Note : On centre le cercle (-50%, -50%) dans le CSS ou ici
        outlineRef.current.style.transform = `translate3d(${outlineX.current}px, ${outlineY.current}px, 0) translate(-50%, -50%)`;
      }
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* --- LE POINT CENTRAL (PRÉCISION) --- */}
      <div 
        ref={dotRef}
        style={{
          position: 'fixed', top: 0, left: 0,
          width: '8px', height: '8px',
          backgroundColor: 'var(--color-accent-neon)', // S'adapte au thème !
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          // Petit effet "diamant" au lieu de rond parfait
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          marginLeft: '-4px', marginTop: '-4px', // Pour centrer le point pile sous la souris
          transition: 'background-color 0.3s ease'
        }}
      />

      {/* --- LE RÉTICULE (CERCLE HUD) --- */}
      <div 
        ref={outlineRef}
        style={{
          position: 'fixed', top: 0, left: 0,
          pointerEvents: 'none',
          zIndex: 9998,
          // Taille variable selon l'état
          width: isHovered ? '50px' : '30px',
          height: isHovered ? '50px' : '30px',
          // Bordure variable
          border: `1px solid var(--color-accent-neon)`,
          backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
          // Forme style "Viseur" (Coins coupés)
          clipPath: isHovered 
            ? 'polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%)' // Forme réticule complexe
            : 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', // Carré simple au repos (ou cercle si border-radius)
          
          borderRadius: isHovered ? '0%' : '50%', // Rond au repos, Carré technique au survol
          
          transition: 'width 0.3s, height 0.3s, border-radius 0.3s, background-color 0.3s',
          
          // Animation de glitch au clic
          animation: isClicked ? 'cursor-glitch 0.3s infinite' : 'none'
        }}
      >
        {/* Petits détails HUD autour du cercle (optionnel) */}
        {isHovered && (
          <>
            <div style={{ position: 'absolute', top: -5, left: '50%', width: 2, height: 5, background: 'var(--color-accent-neon)' }}></div>
            <div style={{ position: 'absolute', bottom: -5, left: '50%', width: 2, height: 5, background: 'var(--color-accent-neon)' }}></div>
            <div style={{ position: 'absolute', left: -5, top: '50%', width: 5, height: 2, background: 'var(--color-accent-neon)' }}></div>
            <div style={{ position: 'absolute', right: -5, top: '50%', width: 5, height: 2, background: 'var(--color-accent-neon)' }}></div>
          </>
        )}
      </div>
    </>
  );
};

export default CustomCursor;