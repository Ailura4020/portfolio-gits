// src/components/BackgroundManager.tsx

import React, { useEffect, useState } from 'react';

export const SECTION_CONFIG = [
  {
    id: 'home',
    image: '/backgrounds/home.jpg', 
    fallbackColor: 'radial-gradient(circle at 50% 50%, #050a14 0%, #000000 100%)' 
  },
  {
    id: 'projects',
    image: '/backgrounds/project.jpg',
    fallbackColor: 'linear-gradient(to bottom, #1a1a00, #0a0a0a)'
  },
  {
    id: 'experience',
    image: '/backgrounds/experiences.jpg',
    fallbackColor: 'linear-gradient(to right, #000c1a, #001a33)'
  },
  {
    id: 'skills',
    image: '/backgrounds/diagnostic.jpg',
    fallbackColor: 'linear-gradient(45deg, #1a0000, #00001a)'
  },
  {
    id: 'contact',
    image: '/backgrounds/communication.jpg',
    fallbackColor: 'linear-gradient(to bottom, #0a0f14, #000000)'
  }
];

// Interface mise à jour
interface BackgroundManagerProps {
  hoveredSection?: string | null;
  onSectionChange?: (sectionId: string) => void; // Nouvelle prop pour prévenir App.tsx
}

const BackgroundManager: React.FC<BackgroundManagerProps> = ({ hoveredSection, onSectionChange }) => {
  const [scrollActiveSection, setScrollActiveSection] = useState('home');

  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const newSection = entry.target.id;
          setScrollActiveSection(newSection);
          
          // C'est ici qu'on prévient App.tsx pour changer la couleur !
          if (onSectionChange) {
            onSectionChange(newSection);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0.5 // MODIFICATION : 50% de la section doit être visible (plus stable)
    });

    SECTION_CONFIG.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [onSectionChange]);

  // Si on survole le menu, on prend cette section, sinon celle du scroll
  const activeSection = hoveredSection || scrollActiveSection;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh',
      zIndex: -1, overflow: 'hidden', backgroundColor: '#000'
    }}>
      {SECTION_CONFIG.map((section) => (
        <div
          key={section.id}
          style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            opacity: activeSection === section.id ? 1 : 0,
            transition: 'opacity 0.6s steps(5)', 
            background: section.image ? `url(${section.image}) center/cover no-repeat` : section.fallbackColor,
          }}
        >
          <div style={{
            position: 'absolute', inset: 0,
            backgroundColor: 'rgba(0, 2, 10, 0.4)', 
            backdropFilter: 'none' 
          }}></div>
        </div>
      ))}
      
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
        backgroundSize: '100% 3px, 3px 100%', pointerEvents: 'none', opacity: 0.3
      }}></div>
    </div>
  );
};

export default BackgroundManager;