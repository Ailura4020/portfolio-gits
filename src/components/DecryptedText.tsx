// src/components/DecryptedText.tsx
import React, { useState, useEffect, useRef } from 'react';

// Caractères pour l'effet "Matrix/Code"
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%&^*=-+";

interface DecryptedTextProps {
  text: string;
  style?: React.CSSProperties; 
  className?: string;
  interval?: number; 
}

const DecryptedText: React.FC<DecryptedTextProps> = ({ 
  text, 
  style, 
  className,
  interval = 10000 
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);
  const elementRef = useRef<HTMLHeadingElement>(null);
  const animationRunning = useRef(false);

  // Fonction d'animation
  const animate = () => {
    if (animationRunning.current) return; 
    animationRunning.current = true;
    
    let iteration = 0;
    
    const timer = setInterval(() => {
      // CORRECTION ICI : on remplace 'prev' par '()' et 'letter' par '_'
      setDisplayText(() => 
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

      iteration += 1 / 2; 
    }, 30);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate();
          }
        });
      },
      { threshold: 0.5 } 
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []); 

  useEffect(() => {
    if (!interval) return;

    const loop = setInterval(() => {
      if (elementRef.current && elementRef.current.getBoundingClientRect().top > 0 && elementRef.current.getBoundingClientRect().bottom < window.innerHeight) {
         animate();
      }
    }, interval);

    return () => clearInterval(loop);
  }, [interval]);

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