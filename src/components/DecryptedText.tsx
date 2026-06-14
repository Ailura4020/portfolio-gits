// src/components/DecryptedText.tsx
import React, { useState, useEffect, useRef } from 'react';

// Caractères pour l'effet "Matrix/Code"
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%&^*=-+";

interface DecryptedTextProps {
  text: string;
  style?: React.CSSProperties; 
  className?: string;
  interval?: number; // On le laisse ici pour que les autres pages ne plantent pas
}

const DecryptedText: React.FC<DecryptedTextProps> = ({ 
  text, 
  style, 
  className
  // SUPPRESSION DE 'interval' ICI : on l'ignore totalement !
}) => {
  const [displayText, setDisplayText] = useState(text);
  const elementRef = useRef<HTMLHeadingElement>(null);
  const animationRunning = useRef(false);
  const hasAnimated = useRef(false); 

  // Fonction d'animation
  const animate = () => {
    if (animationRunning.current) return; 
    animationRunning.current = true;
    
    let iteration = 0;
    
    const timer = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((_, index) => { 
            if (index < iteration) {
              return text[index]; 
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)]; 
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(timer);
        animationRunning.current = false;
      }

      iteration += 1 / 2; // Vitesse de décryptage
    }, 30);
  };

  // 1. Déclenchement au Scroll UNIQUE (Intersection Observer)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            animate();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [animate]);

  return (
    <h2 
      ref={elementRef}
      className={className}
      style={{ cursor: 'default', ...style }} 
    >
      {displayText}
    </h2>
  );
};

export default DecryptedText;