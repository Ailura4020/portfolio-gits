import { useState, useEffect } from 'react';

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

  const cursor = currentIndex < text.length ? '|' : ''; 
  return displayText + cursor;
};