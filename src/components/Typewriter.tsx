// src/components/Typewriter.tsx
import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  loop?: boolean;
}

export const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 100, loop = true }) => {
  const [display, setDisplay] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  
  const typingSpeed = speed;
  const deletingSpeed = 50;

  useEffect(() => {
    const handleTyping = () => {
      const fullText = text;

      setDisplay(prev => isDeleting 
        ? fullText.substring(0, prev.length - 1) 
        : fullText.substring(0, prev.length + 1)
      );

      // Logique de boucle : Pause quand fini d'écrire, puis efface
      if (!isDeleting && display === fullText) {
        if(loop) setTimeout(() => setIsDeleting(true), 2000); // Pause de 2s avant d'effacer
      } else if (isDeleting && display === '') {
        setIsDeleting(false);
        setLoopNum(prev => prev + 1);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [display, isDeleting, loop, loopNum, text, typingSpeed]);

  return (
    <span style={{ fontFamily: 'monospace', color: 'var(--color-accent-neon)' }}>
      {display}
      <span className="cursor-blink">_</span>
    </span>
  );
};