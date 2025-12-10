// src/components/DecryptedText.tsx
import React, { useState, useEffect, useRef } from 'react';

// Caractères pour l'effet "Matrix/Code"
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%&^*=-+";

interface DecryptedTextProps {
  text: string;
  style?: React.CSSProperties; // Pour accepter tes styles existants
  className?: string;
  interval?: number; // Temps en ms entre chaque animation auto (ex: 10000 = 10s)
}

const DecryptedText: React.FC<DecryptedTextProps> = ({ 
  text, 
  style, 
  className,
  interval = 10000 // Par défaut : animation toutes les 10 secondes
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);
  const elementRef = useRef<HTMLHeadingElement>(null);
  const animationRunning = useRef(false);

  // Fonction d'animation
  const animate = () => {
    if (animationRunning.current) return; // Évite les conflits
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

  // 1. Déclenchement au Scroll / Navigation (Intersection Observer)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Si l'élément devient visible (scroll ou clic menu)
          if (entry.isIntersecting) {
            animate();
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

  // 2. Animation Périodique (Auto-loop)
  useEffect(() => {
    if (!interval) return;

    const loop = setInterval(() => {
      // On lance l'animation seulement si l'élément est visible à l'écran
      if (elementRef.current && elementRef.current.getBoundingClientRect().top > 0 && elementRef.current.getBoundingClientRect().bottom < window.innerHeight) {
         animate();
      }
    }, interval);

    return () => clearInterval(loop);
  }, [interval]);

  // 3. Déclenchement au Survol (Interaction utilisateur)
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