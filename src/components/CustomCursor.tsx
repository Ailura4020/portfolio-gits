// src/components/CustomCursor.tsx

import React, { useEffect, useState, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isLink = target.tagName === 'A' || 
                     target.tagName === 'BUTTON' ||
                     target.style.cursor === 'pointer' ||
                     target.closest('a') || 
                     target.closest('button');
      setIsHovering(!!isLink);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  if (typeof navigator !== 'undefined' && /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    return null;
  }

  // --- COULEURS CHAUDES ---
  // Repos : Orange Solaire / Action : Rouge Cyber
  const colorNormal = "#ffb800"; // Orange/Jaune
  const colorActive = "#ff3333"; // Rouge vif
  const currentColor = isHovering || isClicking ? colorActive : colorNormal;

  return (
    <>
      <div 
        ref={cursorRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 9999,
          willChange: 'transform' 
        }}
      >
        <svg 
          width="30" 
          height="30" 
          viewBox="0 0 30 30"
          style={{
            transform: `scale(${isClicking ? 0.9 : 1}) translate(-2px, -2px)`,
            transition: 'transform 0.1s ease',
            // Lueur colorée dynamique selon l'état
            filter: `drop-shadow(0 0 4px ${currentColor})` 
          }}
        >
          {/* Forme de la flèche */}
          <path 
            d="M0,0 L8,24 L12,14 L24,8 Z" 
            fill={currentColor} 
            stroke="rgba(0,0,0,0.5)" 
            strokeWidth="1"
          />
        </svg>

        {isHovering && (
          <div style={{
            position: 'absolute',
            left: '25px',
            top: '10px',
            color: colorActive, // Texte en rouge
            fontFamily: 'var(--font-title)',
            fontSize: '0.6em',
            letterSpacing: '1px',
            whiteSpace: 'nowrap',
            textShadow: `0 0 4px ${colorActive}`
          }}>
            [TARGET]
          </div>
        )}
      </div>
    </>
  );
};

export default CustomCursor;