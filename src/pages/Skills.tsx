// src/pages/Skills.tsx
import React, { useState } from 'react';

// --- 1. LES IMPORTS ---
import SkillsMobile from '../components/SkillsMobile';
import useIsMobile from '../hooks/useIsMobile';
import DecryptedText from '../components/DecryptedText';

// --- COMPOSANTS INTERNES ---

const ColumnHeader: React.FC<{ title: string; subtitle: string; color: string; align: 'left' | 'right' }> = ({ title, subtitle, color, align }) => (
  <div style={{
    marginBottom: '40px',
    padding: '15px 25px',
    background: `linear-gradient(${align === 'left' ? '90deg' : '-90deg'}, rgba(255, 255, 255, 0.05), transparent)`,
    borderLeft: align === 'left' ? `4px solid ${color}` : 'none',
    borderRight: align === 'right' ? `4px solid ${color}` : 'none',
    textAlign: align,
    boxShadow: align === 'left' ? `inset 10px 0 20px -10px rgba(255,255,255,0.1)` : `inset -10px 0 20px -10px rgba(255,255,255,0.1)`
  }}>
    <h3 style={{ 
      color: color, margin: 0, fontSize: '1.5em', letterSpacing: '2px', 
      textTransform: 'uppercase', fontFamily: 'var(--font-title)', textShadow: `0 0 15px ${color}`
    }}>
      {title}
    </h3>
    <div style={{ 
      color: '#fff', fontSize: '0.7em', fontFamily: 'var(--font-code)', marginTop: '5px', opacity: 0.8, letterSpacing: '1px' 
    }}>
      {subtitle}
    </div>
  </div>
);

interface HexProps { label: string; level?: string; color?: string; size?: 'normal' | 'large'; }

const HexSkill: React.FC<HexProps> = ({ label, level, color = 'var(--color-accent-neon)', size = 'normal' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const width = size === 'large' ? '110px' : '90px';
  const height = size === 'large' ? '95px' : '78px';
  const fontSize = size === 'large' ? '0.8em' : '0.65em';

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative', width: width, height: height, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        margin: '10px', cursor: 'default', transition: 'all 0.3s ease', transform: isHovered ? 'scale(1.15)' : 'scale(1)',
        filter: isHovered ? `drop-shadow(0 0 15px ${color})` : 'drop-shadow(0 0 5px rgba(0,0,0,0.8))', zIndex: isHovered ? 10 : 2
      }}
    >
      <div style={{ position: 'absolute', inset: 0, backgroundColor: '#050505', clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', zIndex: 1 }}></div>
      <div style={{ position: 'absolute', inset: 0, backgroundColor: color, clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', zIndex: 0, opacity: isHovered ? 1 : 0.7 }}></div>
      <div style={{ zIndex: 3, textAlign: 'center', padding: '2px' }}>
        <div style={{ fontFamily: 'var(--font-title)', fontSize: fontSize, color: '#fff', fontWeight: 'bold', letterSpacing: '0.5px' }}>{label}</div>
        {level && <div style={{ fontSize: '0.6em', color: color, marginTop: '2px' }}>[{level}]</div>}
      </div>
    </div>
  );
};

const CircuitDot: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
    <div style={{
        position: 'absolute', width: '6px', height: '6px', 
        backgroundColor: '#fff', 
        borderRadius: '50%',
        boxShadow: '0 0 10px var(--color-accent-neon)', 
        zIndex: 5,
        ...style
    }}></div>
);

// --- PERK NODE (Modifié pour être plus compact) ---
const PerkNode: React.FC<{ title: string; desc: string }> = ({ title, desc }) => {
  const [isHovered, setIsHovered] = useState(false);
  const activeColor = '#ff2a2a';
  return (
    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} style={{ display: 'flex', alignItems: 'stretch', position: 'relative', height: '100%' }}>
      {/* Barre verticale décorative */}
      <div style={{ width: '4px', backgroundColor: isHovered ? activeColor : 'var(--color-interface-dark)', marginRight: '15px', boxShadow: isHovered ? `0 0 10px ${activeColor}` : 'none', transition: 'all 0.3s ease' }}></div>
      
      {/* Contenu */}
      <div style={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.6)', 
          border: `1px solid ${isHovered ? activeColor : 'rgba(255,255,255,0.1)'}`,
          padding: '20px', width: '100%', 
          transition: 'all 0.3s ease',
          display: 'flex', flexDirection: 'column', justifyContent: 'center'
      }}>
        <h4 style={{ color: isHovered ? '#fff' : '#eee', margin: '0 0 10px 0', fontSize: '1em', letterSpacing: '1px', textTransform: 'uppercase', textShadow: isHovered ? `0 0 10px ${activeColor}` : 'none' }}>{title}</h4>
        <div style={{ fontSize: '0.85em', color: '#bbb', lineHeight: '1.5' }}>{desc}</div>
      </div>
    </div>
  );
};

// --- COMPOSANT PRINCIPAL ---
const SkillsPage: React.FC = () => {
  const circuitColor = 'rgba(255, 255, 255, 0.15)'; 
  const isMobile = useIsMobile();

  return (
    <div style={{ paddingTop: '50px', paddingBottom: '100px', overflowX: 'hidden' }}>
      
      {/* HEADER PRINCIPAL */}
      <div style={{ marginBottom: '60px', paddingLeft: '20px', borderLeft: '4px solid var(--color-accent-neon)' }}>
<DecryptedText 
  text="SYSTEM DIAGNOSTICS"
  interval={15000}
  style={{ 
    fontSize: isMobile ? '2.5em' : '3em', 
    color: '#fff', 
    marginBottom: '10px', 
    textShadow: '0 0 10px var(--color-accent-neon)',
    fontFamily: 'var(--font-title)',
    textTransform: 'uppercase'
  }} 
/>
      <p style={{ fontFamily: 'var(--font-code)', color: 'var(--color-interface-light)' }}>{'>'} ANALYZING OPERATOR CAPABILITIES... [KERNEL] & [PSYCHE].</p>
      </div>

      {/* --- SWITCHER (MOBILE vs DESKTOP) --- */}
      {isMobile ? (
        <SkillsMobile />
      ) : (
        // VERSION DESKTOP : Layout 2 Colonnes
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', alignItems: 'flex-start' }}>

          {/* COLONNE GAUCHE (TECH TREE) - Prend 55% */}
          <div style={{ flex: '1.2' }}>
            <ColumnHeader title="// ENGINEERING MODULES" subtitle="HARDWARE & SOFTWARE DEPENDENCIES" color="var(--color-accent-neon)" align="left" />

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', marginTop: '40px' }}>
              
              <div style={{ position: 'absolute', top: '50px', bottom: '50px', left: '50%', width: '1px', background: 'rgba(255,255,255,0.05)', zIndex: 0 }}></div>

              {/* RANG 1 : Core */}
              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', zIndex: 5 }}>
                <HexSkill label="JAVASCRIPT" level="ES6+" color="#f7df1e" size="large" />
                <HexSkill label="TYPESCRIPT" level="Strict" color="#3178c6" size="large" />
                <HexSkill label="GO (GOLANG)" level="Backend" color="#00add8" size="large" />
                <HexSkill label="JAVA" level="OOP" color="#f89820" size="large" />
              </div>

              {/* Circuit de liaison */}
              <div style={{ position: 'relative', width: '80%', height: '50px', zIndex: 0 }}>
                  <div style={{ position: 'absolute', left: '10%', top: 0, height: '100%', width: '1px', background: circuitColor }}></div>
                  <div style={{ position: 'absolute', right: '10%', top: 0, height: '100%', width: '1px', background: circuitColor }}></div>
                  <div style={{ position: 'absolute', bottom: 0, left: '10%', right: '10%', height: '1px', background: circuitColor }}></div>
                  <CircuitDot style={{ left: '10%', top: '50%' }} />
                  <CircuitDot style={{ right: '10%', top: '50%' }} />
              </div>

              {/* RANG 2 : Frameworks */}
              <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', zIndex: 5, marginTop: '10px' }}>
                <HexSkill label="REACT" level="Hooks" color="#61dafb" />
                <HexSkill label="ANGULAR" level="RxJS" color="#dd0031" />
                <HexSkill label="NODE.JS" level="API" color="#339933" />
                <HexSkill label="SPRING" level="Boot" color="#6db33f" />
              </div>

              {/* Circuit de liaison */}
              <div style={{ position: 'relative', width: '60%', height: '50px', zIndex: 0 }}>
                  <div style={{ position: 'absolute', left: '50%', top: 0, height: '100%', width: '1px', background: circuitColor }}></div>
                  <CircuitDot style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} />
              </div>

              {/* RANG 3 : Tools */}
              <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', zIndex: 5, marginTop: '10px' }}>
                <HexSkill label="DOCKER" color="#2496ed" />
                <HexSkill label="GIT" color="#f05032" />
                <HexSkill label="POSTGRESQL" color="#336791" />
              </div>

            </div>
          </div>

          {/* COLONNE DROITE (HUMAIN) - Prend 45% - GRILLE 2x2 */}
          <div style={{ flex: '1' }}>
            <ColumnHeader title="// OPERATOR ATTRIBUTES" subtitle="PSYCHOMETRIC EVALUATION DATA" color="#ff2a2a" align="right" />
            
            {/* GRILLE 2 COLONNES ICI */}
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr', // 2 colonnes égales
                gap: '20px', // Espace entre les cartes
                marginTop: '20px' 
            }}>
              <PerkNode title="INTELLIGENCE RELATIONNELLE" desc="Capacité à décrypter les dynamiques d'équipe et à fluidifier la communication." />
              <PerkNode title="PÉDAGOGIE & VULGARISATION" desc="Traduction de concepts techniques complexes en langage accessible (Coach)." />
              <PerkNode title="GESTION DE CONFLIT" desc="Médiation proactive et résolution diplomatique des blocages." />
              <PerkNode title="PEER-LEARNING" desc="Apprentissage collaboratif et partage de connaissances (Méthode 42/Zone01)." />
              
              {/* Le dernier prend toute la largeur pour fermer la grille proprement */}
              <div style={{ gridColumn: 'span 2' }}>
                <PerkNode title="ANALYSE DE BESOIN" desc="Compréhension fine des attentes clients et traduction en specs techniques." />
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default SkillsPage;