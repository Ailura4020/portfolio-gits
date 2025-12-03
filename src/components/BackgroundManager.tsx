// src/components/BackgroundManager.tsx
import React, { useEffect, useState } from 'react';

// On exporte la config pour pouvoir l'utiliser ailleurs si besoin, 
// mais surtout pour s'assurer que les IDs correspondent.
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

// Ajout d'une prop pour recevoir la section survolée
interface BackgroundManagerProps {
  hoveredSection?: string | null;
}

const BackgroundManager: React.FC<BackgroundManagerProps> = ({ hoveredSection }) => {
  const [scrollActiveSection, setScrollActiveSection] = useState('home');

  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setScrollActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0.25 
    });

    SECTION_CONFIG.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // LOGIQUE CLÉ : Si on survole un menu (hoveredSection existe), on l'utilise.
  // Sinon, on utilise la section active du scroll (scrollActiveSection).
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
            // Transition saccadée conservée
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
      
      {/* Scanlines */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
        backgroundSize: '100% 3px, 3px 100%', pointerEvents: 'none', opacity: 0.3
      }}></div>
    </div>
  );
};

export default BackgroundManager;