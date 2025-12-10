// src/components/CyberIntro.tsx
import React, { useState, useEffect, useRef } from 'react';
import './CyberIntro.css';

// 1. ASSETS
import gitsRainVideo from '../assets/gits-rainfall-text.mp4';
import myPortrait from '../assets/portfolio.png'; 

// Import des suspects (Gardés tels quels)
import suspect1 from '../assets/suspect1.png';
import suspect2 from '../assets/suspect2.png';
import suspect3 from '../assets/suspect3.png';
import suspect4 from '../assets/suspect4.png';
import suspect5 from '../assets/suspect5.png';
import suspect6 from '../assets/suspect6.png';

interface CyberIntroProps {
  onComplete: () => void;
}

const SUSPECT_IMAGES = [suspect1, suspect2, suspect3, suspect4, suspect5, suspect6];

// --- NOUVEAUX TEXTES (MIX OPTION A + C) ---
const RANDOM_CRIMES = [
    "UNAUTHORIZED BRAIN DIVE", 
    "CLASS-A THREAT DETECTED", 
    "MILITARY PROXY HACK", 
    "CORPORATE DATA THEFT", 
    "AI LEVEL 4 BREACH", 
    "MASSIVE NETWORK OUTAGE"
];

const RANDOM_STATUS = [
    "TERMINATE ON SIGHT", 
    "CRITICAL ERROR", 
    "WANTED: DEAD OR ALIVE", 
    "FUGITIVE // ARMED", 
    "TRACE FAILED...", 
    "SYSTEM DISCONNECTED"
];

const CyberIntro: React.FC<CyberIntroProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'IDLE' | 'SEARCHING' | 'VERIFIED' | 'EXIT'>('IDLE');
  
  const [displayData, setDisplayData] = useState({
    name: '---',
    id: '---',
    status: 'WAITING INPUT',
    clearance: '---',
    currentImage: suspect1 
  });

  const intervalRef = useRef<number | null>(null);

  const startSequence = () => {
    setPhase('SEARCHING');
    let cycles = 0;
    const maxCycles = 30; 

    intervalRef.current = setInterval(() => {
      cycles++;
      const imageIndex = cycles % SUSPECT_IMAGES.length;

      // Données aléatoires "Criminelles" pendant le scan
      setDisplayData({
        name: RANDOM_CRIMES[Math.floor(Math.random() * RANDOM_CRIMES.length)], // Affiche le Crime en "Nom"
        id: "ERR-" + Math.floor(Math.random() * 999).toString(),
        status: RANDOM_STATUS[Math.floor(Math.random() * RANDOM_STATUS.length)],
        clearance: 'ANALYZING THREAT...',
        currentImage: SUSPECT_IMAGES[imageIndex]
      });

      if (cycles >= maxCycles) {
        clearInterval(intervalRef.current!);
        matchFound();
      }
    }, 80);
  };

  const matchFound = () => {
    setPhase('VERIFIED');
    setDisplayData({
      name: 'AILURA',
      id: '4020-DEV',
      status: 'SYSTEM ARCHITECT',
      clearance: 'LEVEL 5 (ADMIN)',
      currentImage: myPortrait
    });

    setTimeout(() => {
        setPhase('EXIT');
        setTimeout(onComplete, 1000); 
    }, 2500);
  };

  useEffect(() => {
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  if (phase === 'EXIT') {
      return <div className="cyber-screen" style={{ opacity: 0, transition: 'opacity 1s ease' }}></div>;
  }

  return (
    <div className="cyber-screen">
      
      {/* VIDEO BACKGROUND */}
      <div className="video-bg-container">
        <video autoPlay loop muted playsInline className="cyber-video">
          <source src={gitsRainVideo} type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>

      {/* PHASE 1: IDLE */}
      {phase === 'IDLE' && (
        <div className="cyber-idle">
            <div className="triangle-logo"></div>
            <div className="police-header">PUBLIC SECURITY SECTION 9 <br /> // FUGITIVE SQUAD</div>
            <h1 className="system-title">CRIMINAL DATABASE</h1>
            <div className="sub-title">// LOCATING TARGET : AILURA_4020</div>
            
            {/* Bouton avec saut de ligne */}
            <button className="entry-btn" onClick={startSequence}>
                [ CLICK HERE <br /> TO ACCESS PERSONNEL FILE ]
            </button>
            
            <div style={{ marginTop: '40px', fontSize: '0.7em', color: 'rgba(0,255,255,0.6)', fontFamily: 'monospace', textShadow: '0 0 5px #000' }}>
                WARNING: UNAUTHORIZED ACCESS IS A CLASS A FELONY<br/>
                CYBERBRAIN SECURITY PROTOCOL ACTIVE
            </div>
        </div>
      )}

      {/* PHASE 2: SCAN */}
      {(phase === 'SEARCHING' || phase === 'VERIFIED') && (
        <div className={`database-container ${phase === 'VERIFIED' ? 'verified' : ''}`}>
            
            <div className="mugshot-zone">
                <div className="scan-line"></div>
                <img src={displayData.currentImage} alt="Subject" className="mugshot-img" />
                <div style={{ position: 'absolute', bottom: '10px', left: '10px', fontSize: '0.7em', color: phase === 'VERIFIED' ? '#000' : '#0ff', background: phase === 'VERIFIED' ? '#39ff14' : 'transparent', padding: '2px 5px', fontWeight: 'bold' }}>
                    {phase === 'VERIFIED' ? 'ID_VERIFIED' : 'MATCHING...'}
                </div>
            </div>

            <div className="data-zone">
                <div className="data-row">
                    <span className="data-label">IDENTITY:</span>
                    <span className="data-value">{displayData.name}</span>
                </div>
                <div className="data-row">
                    <span className="data-label">SERIAL_NO:</span>
                    <span className="data-value">{displayData.id}</span>
                </div>
                <div className="data-row">
                    <span className="data-label">ROLE:</span>
                    <span className="data-value">{displayData.status}</span>
                </div>
                <div className="data-row">
                    <span className="data-label">CLEARANCE:</span>
                    <span className="data-value">{displayData.clearance}</span>
                </div>

                <div className="alert-box">
                    {phase === 'VERIFIED' ? 'ACCESS GRANTED' : 'SCANNING DATABASE...'}
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default CyberIntro;