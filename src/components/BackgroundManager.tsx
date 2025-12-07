// src/components/BackgroundManager.tsx
import React, { useEffect, useState } from 'react';
import useIsMobile from '../hooks/useIsMobile';

const SECTION_CONFIG = [
  { id: 'home', desktop: '/backgrounds/home.jpg', mobile: '/backgrounds/mobile/mobile-home.jpg', fallbackColor: 'radial-gradient(circle at 50% 50%, #050a14 0%, #000000 100%)' },
  { id: 'projects', desktop: '/backgrounds/project.jpg', mobile: '/backgrounds/mobile/mobile-projects.jpg', fallbackColor: 'linear-gradient(to bottom, #1a1a00, #0a0a0a)' },
  { id: 'experience', desktop: '/backgrounds/experiences.jpg', mobile: '/backgrounds/mobile/mobile-experiences.jpg', fallbackColor: 'linear-gradient(to right, #000c1a, #001a33)' },
  { id: 'skills', desktop: '/backgrounds/diagnostic.jpg', mobile: '/backgrounds/mobile/mobile-skills.jpg', fallbackColor: 'linear-gradient(45deg, #1a0000, #00001a)' },
  { id: 'contact', desktop: '/backgrounds/communication.jpg', mobile: '/backgrounds/mobile/mobile-contact.jpg', fallbackColor: 'linear-gradient(to bottom, #0a0f14, #000000)' }
];

interface BackgroundManagerProps { hoveredSection?: string | null; onSectionChange?: (sectionId: string) => void; }

const BackgroundManager: React.FC<BackgroundManagerProps> = ({ hoveredSection, onSectionChange }) => {
  const [scrollActiveSection, setScrollActiveSection] = useState('home');
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const newSection = entry.target.id;
          setScrollActiveSection(newSection);
          if (onSectionChange) onSectionChange(newSection);
        }
      });
    };
    const observer = new IntersectionObserver(handleObserver, { threshold: 0.25 });
    SECTION_CONFIG.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [onSectionChange]);

  const activeSection = hoveredSection || scrollActiveSection;

  return (
    // CORRECTION ICI : zIndex passe de -1 à 0
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 0, overflow: 'hidden', backgroundColor: '#000' }}>
      {SECTION_CONFIG.map((section) => {
        const currentImage = isMobile ? section.mobile : section.desktop;
        return (
          <div key={section.id} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: activeSection === section.id ? 1 : 0, transition: 'opacity 0.6s steps(5)', background: `url(${currentImage}) center/cover no-repeat` }}>
            <div className="background-overlay" style={{ position: 'absolute', inset: 0, backgroundColor: isMobile ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 2, 10, 0.4)', backdropFilter: 'none' }}></div>
          </div>
        );
      })}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 3px, 3px 100%', pointerEvents: 'none', opacity: 0.3 }}></div>
      {/* FONDU NOIR BAS DE PAGE */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '25%', background: 'linear-gradient(to bottom, transparent, #050505)', pointerEvents: 'none', zIndex: 10 }}></div>
    </div>
  );
};

export default BackgroundManager;