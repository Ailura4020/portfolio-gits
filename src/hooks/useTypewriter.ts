// src/hooks/useTypewriter.ts

import { useState, useEffect } from 'react';

/**
 * Hook personnalisé pour implémenter un effet de dactylographie (typewriter).
 * @param text Le texte complet à afficher.
 * @param speed La vitesse de frappe en millisecondes.
 * @returns Le texte actuellement affiché.
 */
export const useTypewriter = (text: string, speed: number = 35) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [text, speed, currentIndex]);

  // Ajoute le curseur clignotant pour l'effet réaliste
const cursor = currentIndex < text.length ? '|' : ''; 
  return displayText + cursor;
};