// src/components/DecryptedText.tsx
import React, { useState, useEffect, useRef } from 'react';

// Caractères pour l'effet "Matrix/Code"
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%&^*=-+";

interface DecryptedTextProps {
  text: string;
  style?: React.CSSProperties; 
  className?: string;
}

const DecryptedText: React.FC<DecryptedTextProps> = ({ 
  text, 
  style, 
  className
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);
  const elementRef = useRef<HTMLHeadingElement>(null);
  const animationRunning = useRef(false);
  const hasAnimated = useRef(false); // Mémorise si l'animation a déjà eu lieu

  // Fonction d'animation
  const animate = () => {
    if (animationRunning.current) return; 
    animationRunning.current = true;
    
    let iteration = 0;
    
    const timer = setInterval(() => {
      setDisplayText(prev => 
        text
          .split("")
          .map((letter, index) => {
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

  // (L'animation périodique / Auto-loop a été totalement supprimée ici)

  // 2. Déclenchement au Survol (Interaction utilisateur - Optionnel mais cool)
  const handleMouseEnter = () => {
    if (!isHovered) {
        setIsHovered(true);
        animate();
        setTimeout(() => setIsHovered(false), 1000); 
    }
  };

  return (
    <h2 
      ref={elementRef}
      className={className}
      onMouseEnter={handleMouseEnter}
      style={{ cursor: 'default', ...style }} 
    >
      {displayText}
    </h2>
  );
};

export default DecryptedText;