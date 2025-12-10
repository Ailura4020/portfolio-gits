// src/components/DecryptedText.tsx
import React, { useState, useEffect, useRef } from 'react';

// Caractères pour l'effet de cryptage
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%&^*=-+";

interface DecryptedTextProps {
  text: string;
  style?: React.CSSProperties; // Pour accepter tes styles existants
  className?: string;
}

const DecryptedText: React.FC<DecryptedTextProps> = ({ text, style, className }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLHeadingElement>(null);

  const animate = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(prev => 
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 2; // Vitesse de décryptage
    }, 30);
  };

  // 1. Animation à l'apparition (Scroll)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
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
  }, [hasAnimated]);

  // 2. Animation au survol (Bonus)
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
      style={{ cursor: 'default', ...style }} // On mixe tes styles avec le curseur par défaut
    >
      {displayText}
    </h2>
  );
};

export default DecryptedText;