// src/pages/Skills.tsx
import React, { useState } from 'react';

// --- COMPOSANT : EN-TÊTE DE COLONNE (STYLE LABO) ---
const ColumnHeader: React.FC<{ title: string; subtitle: string; color: string; align: 'left' | 'right' }> = ({ title, subtitle, color, align }) => (
  <div style={{
    marginBottom: '40px',
    padding: '15px 25px',
    background: `linear-gradient(${align === 'left' ? '90deg' : '-90deg'}, rgba(255, 255, 255, 0.1), transparent)`,
    borderLeft: align === 'left' ? `4px solid #ffffff` : 'none',
    borderRight: align === 'right' ? `4px solid #ffffff` : 'none',
    textAlign: align,
    boxShadow: align === 'left' ? `inset 10px 0 20px -10px rgba(255,255,255,0.2)` : `inset -10px 0 20px -10px rgba(255,255,255,0.2)`
  }}>
    <h3 style={{ 
      color: color, 
      margin: 0, fontSize: '1.5em', letterSpacing: '2px', 
      textTransform: 'uppercase', fontFamily: 'var(--font-title)',
      textShadow: `0 0 15px ${color}`
    }}>
      {title}
    </h3>
    <div style={{ 
      color: '#fff', fontSize: '0.7em', fontFamily: 'var(--font-code)', 
      marginTop: '5px', opacity: 0.8, letterSpacing: '1px' 
    }}>
      {subtitle}
    </div>
  </div>
);

// --- COMPOSANT : HEXAGONE TECH ---
interface HexProps {
  label: string;
  level?: string;
  color?: string;
  size?: 'normal' | 'large';
}

const HexSkill: React.FC<HexProps> = ({ label, level, color = 'var(--color-accent-neon)', size = 'normal' }) => {
  const [isHovered, setIsHovered] = useState(false);

  // --- MODIFICATION ICI : TAILLES AUGMENTÉES ---
  const width = size === 'large' ? '130px' : '110px';  // Plus gros
  const height = size === 'large' ? '112px' : '95px';  // Plus gros
  const fontSize = size === 'large' ? '0.85em' : '0.7em';

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        width: width,
        height: height,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '10px', // Un peu plus d'espace autour
        cursor: 'default',
        transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        filter: isHovered ? `drop-shadow(0 0 15px ${color})` : 'drop-shadow(0 0 5px rgba(0,0,0,0.8))',
        zIndex: isHovered ? 10 : 2
      }}
    >
      {/* Fond Noir Opaque */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundColor: '#050505',
        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        zIndex: 1
      }}></div>
      
      {/* Glow Bordure */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundColor: color,
        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        zIndex: 0,
        opacity: isHovered ? 1 : 0.7
      }}></div>

      {/* Texte */}
      <div style={{ zIndex: 3, textAlign: 'center', padding: '2px' }}>
        <div style={{ fontFamily: 'var(--font-title)', fontSize: fontSize, color: '#fff', fontWeight: 'bold', letterSpacing: '0.5px' }}>
          {label}
        </div>
        {level && <div style={{ fontSize: '0.6em', color: color, marginTop: '2px' }}>[{level}]</div>}
      </div>
    </div>
  );
};

// --- COMPOSANT : POINT DE CIRCUIT ---
const CircuitDot: React.FC<{ bottom?: string; left?: string; right?: string }> = props => (
    <div style={{
        position: 'absolute', width: '6px', height: '6px', backgroundColor: 'var(--color-accent-neon)', borderRadius: '50%',
        boxShadow: '0 0 5px var(--color-accent-neon)', zIndex: 1, ...props
    }}></div>
);

// --- COMPOSANT : PERK HUMAIN ---
const PerkNode: React.FC<{ title: string; desc: string }> = ({ title, desc }) => {
  const [isHovered, setIsHovered] = useState(false);
  const activeColor = '#ff2a2a';

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '25px',
        position: 'relative'
      }}
    >
      <div style={{
        width: '20px', height: '2px', 
        backgroundColor: isHovered ? activeColor : 'var(--color-interface-dark)', 
        marginRight: '15px',
        boxShadow: isHovered ? `0 0 10px ${activeColor}` : 'none',
        transition: 'all 0.3s ease'
      }}></div>

      <div style={{
        borderLeft: `3px solid ${isHovered ? activeColor : 'var(--color-interface-dark)'}`,
        backgroundColor: 'rgba(0, 0, 0, 0.7)', 
        backdropFilter: 'blur(3px)',
        padding: '15px',
        width: '100%',
        position: 'relative',
        transition: 'all 0.3s ease',
        border: `1px solid ${isHovered ? activeColor : 'transparent'}`,
        borderLeftWidth: '3px'
      }}>
        <h4 style={{ 
          color: isHovered ? '#fff' : '#ddd', 
          margin: 0, fontSize: '1em', letterSpacing: '1px', textTransform: 'uppercase',
          textShadow: isHovered ? `0 0 10px ${activeColor}` : 'none'
        }}>
          {title}
        </h4>
        <div style={{ fontSize: '0.8em', color: '#aaa', marginTop: '5px' }}>
          {desc}
        </div>
      </div>
    </div>
  );
};

const SkillsPage: React.FC = () => {
  const circuitColor = 'rgba(255, 255, 255, 0.3)';

  return (
    <div style={{ paddingTop: '50px', paddingBottom: '100px', overflowX: 'hidden' }}>
      
      {/* HEADER */}
      <div style={{ marginBottom: '60px', paddingLeft: '20px', borderLeft: '4px solid var(--color-accent-neon)' }}>
        <h2 style={{ fontSize: '3em', color: '#fff', marginBottom: '10px', textShadow: '0 0 10px var(--color-accent-neon)' }}>
          SYSTEM DIAGNOSTICS
        </h2>
        <p style={{ fontFamily: 'var(--font-code)', color: 'var(--color-interface-light)' }}>
          {'>'} ANALYZING OPERATOR CAPABILITIES... [KERNEL] & [PSYCHE].
        </p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '80px', justifyContent: 'center' }}>

        {/* --- COLONNE GAUCHE (TECH TREE) --- */}
        <div style={{ flex: '1 1 500px', minWidth: '350px' }}>
          
          <ColumnHeader title="// ENGINEERING MODULES" subtitle="HARDWARE & SOFTWARE DEPENDENCIES" color="var(--color-accent-neon)" align="left" />

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
            
            {/* NIVEAU 1 : MASTER NODES */}
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', zIndex: 5 }}>
              <HexSkill label="JAVASCRIPT" level="ES6+" color="#f7df1e" size="large" />
              <HexSkill label="TYPESCRIPT" level="Strict" color="#3178c6" size="large" />
              <HexSkill label="GO (GOLANG)" level="Backend" color="#00add8" size="large" />
              <HexSkill label="JAVA" level="OOP" color="#f89820" size="large" />
            </div>

            {/* CIRCUIT 1 */}
            <div style={{ position: 'relative', width: '80%', height: '40px', marginTop: '-5px', zIndex: 0 }}>
                {/* Lignes verticales */}
                <div style={{ position: 'absolute', left: '10%', top: 0, height: '100%', width: '2px', background: circuitColor }}></div>
                <div style={{ position: 'absolute', left: '35%', top: 0, height: '100%', width: '2px', background: circuitColor }}></div>
                <div style={{ position: 'absolute', right: '35%', top: 0, height: '100%', width: '2px', background: circuitColor }}></div>
                <div style={{ position: 'absolute', right: '10%', top: 0, height: '100%', width: '2px', background: circuitColor }}></div>
                
                {/* Barre horizontale */}
                <div style={{ position: 'absolute', bottom: 0, left: '5%', right: '5%', height: '2px', background: circuitColor }}></div>
                
                {/* Points */}
                <CircuitDot bottom="-2px" left="5%" />
                <CircuitDot bottom="-2px" right="5%" />
                <CircuitDot bottom="-2px" left="50%" />
            </div>

            {/* NIVEAU 2 : FRAMEWORKS */}
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center', zIndex: 5, marginTop: '-5px' }}>
              <HexSkill label="REACT" level="Hooks" color="#61dafb" />
              <HexSkill label="ANGULAR" level="RxJS" color="#dd0031" />
              <HexSkill label="NODE.JS" level="API" color="#339933" />
              <HexSkill label="SPRING" level="Boot" color="#6db33f" />
            </div>

             {/* CIRCUIT 2 */}
             <div style={{ position: 'relative', width: '60%', height: '40px', marginTop: '-5px', zIndex: 0 }}>
                <div style={{ position: 'absolute', left: '50%', top: '-10px', height: 'calc(100% + 10px)', width: '2px', background: circuitColor }}></div>
                <div style={{ position: 'absolute', bottom: 0, left: '10%', right: '10%', height: '2px', background: circuitColor }}></div>
                <CircuitDot bottom="-2px" left="10%" />
                <CircuitDot bottom="-2px" right="10%" />
            </div>

            {/* NIVEAU 3 : TOOLS */}
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center', zIndex: 5, marginTop: '-5px' }}>
              <HexSkill label="DOCKER" color="#2496ed" />
              <HexSkill label="GIT" color="#f05032" />
              <HexSkill label="SQL" color="#336791" />
            </div>

          </div>
        </div>

        {/* --- COLONNE DROITE (HUMAIN) --- */}
        <div style={{ flex: '1 1 400px', minWidth: '350px' }}>
          <ColumnHeader title="// OPERATOR ATTRIBUTES" subtitle="PSYCHOMETRIC EVALUATION DATA" color="#ff2a2a" align="right" />
          <div style={{ paddingLeft: '10px', marginTop: '20px' }}>
            <PerkNode title="INTELLIGENCE RELATIONNELLE" desc="Capacité à décrypter les dynamiques d'équipe et à fluidifier la communication." />
            <PerkNode title="PÉDAGOGIE & VULGARISATION" desc="Traduction de concepts techniques complexes en langage accessible (Coach)." />
            <PerkNode title="GESTION DE CONFLIT" desc="Médiation proactive et résolution diplomatique des blocages." />
            <PerkNode title="PEER-LEARNING" desc="Apprentissage collaboratif et partage de connaissances (Méthode 42/Zone01)." />
            <PerkNode title="ANALYSE DE BESOIN" desc="Compréhension fine des attentes clients et traduction en specs techniques." />
          </div>
        </div>

      </div>
    </div>
  );
};

export default SkillsPage;