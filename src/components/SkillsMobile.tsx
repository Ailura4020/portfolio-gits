// src/components/SkillsMobile.tsx
import React from 'react';

const MobileHeader: React.FC<{ title: string; subtitle: string; color: string; align: 'left' | 'right' }> = ({ title, subtitle, color, align }) => (
  <div style={{ marginBottom: '30px', padding: '15px 20px', background: `linear-gradient(${align === 'left' ? '90deg' : '-90deg'}, rgba(255, 255, 255, 0.1), transparent)`, borderLeft: align === 'left' ? `4px solid #ffffff` : 'none', borderRight: align === 'right' ? `4px solid #ffffff` : 'none', textAlign: align, boxShadow: align === 'left' ? `inset 10px 0 20px -10px rgba(255,255,255,0.2)` : `inset -10px 0 20px -10px rgba(255,255,255,0.2)` }}>
    <h3 style={{ color: color, margin: 0, fontSize: '1.2em', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'var(--font-title)', textShadow: `0 0 15px ${color}` }}>{title}</h3>
    <div style={{ color: '#fff', fontSize: '0.65em', fontFamily: 'var(--font-code)', marginTop: '5px', opacity: 0.8, letterSpacing: '1px' }}>{subtitle}</div>
  </div>
);

const HexMobile: React.FC<{ label: string; level?: string; color: string }> = ({ label, level, color }) => (
  <div style={{ position: 'relative', width: '100px', height: '86px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '5px', filter: `drop-shadow(0 0 5px ${color}44)` }}>
    <div style={{ position: 'absolute', inset: 0, backgroundColor: '#050505', clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', zIndex: 1 }}></div>
    <div style={{ position: 'absolute', inset: 0, backgroundColor: color, clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', zIndex: 0, opacity: 0.8 }}></div>
    <div style={{ position: 'absolute', inset: '2px', backgroundColor: '#0a0f14', clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', zIndex: 2 }}></div>
    <div style={{ zIndex: 3, textAlign: 'center', padding: '2px' }}>
      <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.65em', color: '#fff', fontWeight: 'bold', letterSpacing: '0.5px' }}>{label}</div>
      {level && <div style={{ fontSize: '0.5em', color: color, marginTop: '2px' }}>[{level}]</div>}
    </div>
  </div>
);

const SkillsMobile: React.FC = () => {
  const circuitColor = 'rgba(255, 255, 255, 0.2)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingBottom: '50px' }}>
      <div>
        <MobileHeader title="// ENGINEERING MODULES" subtitle="HARDWARE & SOFTWARE DEPENDENCIES" color="var(--color-accent-neon)" align="left" />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '20px', bottom: '20px', width: '2px', background: circuitColor, zIndex: 0 }}></div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', zIndex: 1, marginBottom: '30px' }}>
            <HexMobile label="JAVASCRIPT" level="ES6+" color="#f7df1e" /> <HexMobile label="TYPESCRIPT" level="Strict" color="#3178c6" /> <HexMobile label="GO" level="Backend" color="#00add8" /> <HexMobile label="JAVA" level="OOP" color="#f89820" />
          </div>
          <div style={{ width: '60%', height: '2px', background: circuitColor, marginBottom: '30px', position: 'relative' }}>
             <div style={{ position: 'absolute', left: 0, top: '-3px', width: '6px', height: '6px', background: 'var(--color-accent-neon)', borderRadius: '50%' }}></div>
             <div style={{ position: 'absolute', right: 0, top: '-3px', width: '6px', height: '6px', background: 'var(--color-accent-neon)', borderRadius: '50%' }}></div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', zIndex: 1, marginBottom: '30px' }}>
            <HexMobile label="REACT" level="Hooks" color="#61dafb" /> <HexMobile label="ANGULAR" level="RxJS" color="#dd0031" /> <HexMobile label="NODE.JS" level="API" color="#339933" /> <HexMobile label="SPRING" level="Boot" color="#6db33f" />
          </div>
          <div style={{ width: '40%', height: '2px', background: circuitColor, marginBottom: '30px', position: 'relative' }}>
             <div style={{ position: 'absolute', left: 0, top: '-3px', width: '6px', height: '6px', background: 'var(--color-accent-neon)', borderRadius: '50%' }}></div>
             <div style={{ position: 'absolute', right: 0, top: '-3px', width: '6px', height: '6px', background: 'var(--color-accent-neon)', borderRadius: '50%' }}></div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', zIndex: 1 }}>
            <HexMobile label="DOCKER" color="#2496ed" /> <HexMobile label="GIT" color="#f05032" /> <HexMobile label="POSTGRES" color="#336791" />
          </div>
        </div>
      </div>
      <div style={{ marginTop: '40px' }}>
        <MobileHeader title="// OPERATOR ATTRIBUTES" subtitle="PSYCHOMETRIC EVALUATION DATA" color="#ff2a2a" align="right" />
        <div style={{ padding: '0 10px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {[{ t: 'INTELLIGENCE RELATIONNELLE', d: 'Capacité à décrypter les dynamiques d\'équipe.' }, { t: 'PÉDAGOGIE & VULGARISATION', d: 'Traduction de concepts techniques complexes.' }, { t: 'GESTION DE CONFLIT', d: 'Médiation proactive et résolution diplomatique.' }, { t: 'PEER-LEARNING', d: 'Apprentissage collaboratif (Méthode 42/Zone01).' }, { t: 'ANALYSE DE BESOIN', d: 'Compréhension fine des attentes clients.' }].map((item, i) => (
            <div key={i} style={{ borderLeft: '3px solid #ff2a2a', background: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(5px)', padding: '15px', position: 'relative' }}>
              <h4 style={{ color: '#fff', margin: '0 0 5px 0', fontSize: '0.9em', letterSpacing: '1px' }}>{item.t}</h4>
              <p style={{ color: '#aaa', margin: 0, fontSize: '0.75em', lineHeight: '1.4' }}>{item.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SkillsMobile;