// src/components/ExperienceMobile.tsx
import React from 'react';
import { type TabData } from './TacticalTabs';

interface MobileProps { missions: TabData[]; }

const ExperienceMobile: React.FC<MobileProps> = ({ missions }) => {
  return (
    <div style={{ position: 'relative', paddingLeft: '20px', paddingBottom: '50px', marginTop: '30px' }}>
      <div style={{ position: 'absolute', left: '7px', top: '10px', bottom: '0', width: '2px', background: 'linear-gradient(to bottom, var(--color-accent-neon), rgba(255, 255, 255, 0.1))', boxShadow: '0 0 10px var(--color-accent-neon)', zIndex: 0 }}></div>
      {missions.map((mission, index) => {
        const isLive = mission.isOngoing;
        const color = isLive ? '#39ff14' : (index === 0 ? 'var(--color-accent-neon)' : 'var(--color-interface-light)');
        const borderColor = isLive ? '#39ff14' : 'var(--color-interface-dark)';
        return (
          <div key={mission.id} style={{ marginBottom: '40px', position: 'relative', paddingLeft: '25px' }}>
            <div style={{ position: 'absolute', left: '-19px', top: '0', width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#000', border: `2px solid ${color}`, boxShadow: isLive ? `0 0 15px ${color}` : 'none', zIndex: 1 }}>
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '6px', height: '6px', backgroundColor: color, borderRadius: '50%' }}></div>
            </div>
            <div style={{ backgroundColor: 'rgba(5, 10, 15, 0.85)', border: `1px solid ${borderColor}`, borderLeft: `4px solid ${color}`, padding: '20px', position: 'relative', backdropFilter: 'blur(5px)', boxShadow: isLive ? `0 0 20px rgba(57, 255, 20, 0.1)` : 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', fontSize: '0.75em', fontFamily: 'var(--font-code)', color: color }}>
                <span style={{ textTransform: 'uppercase', letterSpacing: '1px' }}>{isLive ? '● STATUS: ACTIVE' : '○ ARCHIVED LOG'}</span>
                <span style={{ border: `1px solid ${color}`, padding: '2px 6px', borderRadius: '4px' }}>{mission.date}</span>
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.4em', margin: '0 0 5px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>{mission.role}</h3>
              <div style={{ color: color, fontFamily: 'var(--font-title)', fontSize: '0.9em', marginBottom: '15px', letterSpacing: '2px' }}>@ {mission.label}</div>
              {isLive && <div style={{ fontSize: '0.9em', lineHeight: '1.6', color: '#ccc', borderTop: `1px dashed ${color}44`, paddingTop: '15px' }}>{mission.content}</div>}
              {!isLive && <div style={{ fontSize: '0.7em', color: 'var(--color-interface-light)', fontStyle: 'italic', marginTop: '10px' }}>// Details encrypted to save bandwidth.</div>}
            </div>
          </div>
        );
      })}
      <div style={{ position: 'absolute', bottom: '-10px', left: '0px', color: 'var(--color-interface-light)', fontSize: '0.7em', fontFamily: 'var(--font-code)' }}>[END OF LOGS]</div>
    </div>
  );
};
export default ExperienceMobile;