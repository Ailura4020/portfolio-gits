// src/components/CyberIntro.tsx
import React, { useState, useEffect, useRef } from 'react';
import './CyberIntro.css';

// 1. ASSETS
// La vidéo de fond
import gitsRainVideo from '../assets/gits-rainfall-text.mp4';

// Ton profil (Vérifie le nom exact : portfolio.png ou portoflio.jpg selon ton dossier)
import myPortrait from '../assets/portfolio.png'; 

// Les 6 suspects (Assure-toi qu'ils sont bien dans src/assets/)
import suspect1 from '../assets/suspect1.png';
import suspect2 from '../assets/suspect2.png';
import suspect3 from '../assets/suspect3.png';
import suspect4 from '../assets/suspect4.png';
import suspect5 from '../assets/suspect5.png';
import suspect6 from '../assets/suspect6.png';

interface CyberIntroProps {
  onComplete: () => void;
}

// Tableau des suspects pour le défilement
const SUSPECT_IMAGES = [suspect1, suspect2, suspect3, suspect4, suspect5, suspect6];

const RANDOM_NAMES = ["KUSANAGI", "BATOU", "TOGUSA", "ISHIKAWA", "SAITO", "BOMA", "PAZU", "AZUMA"];
const RANDOM_STATUS = ["SCANNING BIOMETRICS...", "ANALYZING RETINA...", "CHECKING CRIMINAL RECORD...", "SEARCHING INTERPOL DB..."];

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
    const maxCycles = 30; // ~2.5 secondes de scan

    intervalRef.current = setInterval(() => {
      cycles++;
      const imageIndex = cycles % SUSPECT_IMAGES.length;

      setDisplayData({
        name: RANDOM_NAMES[Math.floor(Math.random() * RANDOM_NAMES.length)],
        id: Math.floor(Math.random() * 999999).toString(),
        status: RANDOM_STATUS[Math.floor(Math.random() * RANDOM_STATUS.length)],
        clearance: 'ANALYZING...',
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
      
      {/* --- BACKGROUND VIDEO --- */}
      <div className="video-bg-container">
        <video autoPlay loop muted playsInline className="cyber-video">
          <source src={gitsRainVideo} type="video/mp4" />
        </video>
        {/* Overlay pour assombrir et unifier */}
        <div className="video-overlay"></div>
      </div>

      {/* --- UI IDLE --- */}
      {phase === 'IDLE' && (
        <div className="cyber-idle">
            <div className="triangle-logo"></div>
            <div className="police-header">PUBLIC SECURITY SECTION 9</div>
            <h1 className="system-title">ACCESS DATABASE</h1>
            <div className="sub-title">// EXTERNAL CONNECTION DETECTED</div>
            
            <button className="entry-btn" onClick={startSequence}>
                [ INITIATE SEARCH ]
            </button>
            
            <div style={{ marginTop: '40px', fontSize: '0.7em', color: 'rgba(0,255,255,0.6)', fontFamily: 'monospace', textShadow: '0 0 5px #000' }}>
                WARNING: UNAUTHORIZED ACCESS IS A CLASS A FELONY<br/>
                CYBERBRAIN SECURITY PROTOCOL ACTIVE
            </div>
        </div>
      )}

      {/* --- UI SCAN / VERIFIED --- */}
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