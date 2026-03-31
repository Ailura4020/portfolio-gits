// src/components/DecryptedText.tsx
import React, { useState, useEffect, useRef } from 'react';

// Caractères pour l'effet "Matrix/Code"
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%&^*=-+";

interface DecryptedTextProps {
  text: string;
  style?: React.CSSProperties; 
  className?: string;
  interval?: number; // <-- On tolère cet attribut pour que TypeScript ne bloque plus tes autres pages
}

const DecryptedText: React.FC<DecryptedTextProps> = ({ 
  text, 
  style, 
  className,
  interval // On l'accepte mais on ne l'utilise plus
}) => {
  const [displayText, setDisplayText] = useState(text);
  const elementRef = useRef<HTMLHeadingElement>(null);
  const animationRunning = useRef(false);
  const hasAnimated = useRef(false); // Mémorise si l'animation a déjà eu lieu

  // Fonction d'animation
  const animate = () => {
    if (animationRunning.current) return; 
    animationRunning.current = true;
    
    let iteration = 0;
    
    const timer = setInterval(() => {
      // CORRECTION : suppression de 'prev' et 'letter' inutilisés
      setDisplayText(
        text
          .split("")
          .map((_, index) => { // '_' indique à TypeScript qu'on n'utilise pas cette variable
            if (index < iteration) {
              return text[index]; // Lettre finale trouvée
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)]; // Lettre cryptée
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
          // Si l'élément devient visible ET n'a pas encore été animé
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true; // Verrouille l'animation
            animate();
            observer.disconnect(); // Désactive l'observateur pour toujours
          }
        });
      },
      { threshold: 0.5 } // Se déclenche quand 50% du titre est visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []); // [] = s'exécute au montage

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