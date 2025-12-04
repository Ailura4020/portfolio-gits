// src/pages/Skills.tsx
import React, { useState } from 'react';

// --- COMPOSANT : EN-TÊTE DE COLONNE (STYLE "INVERSÉ / LABO") ---
const ColumnHeader: React.FC<{ title: string; subtitle: string; color: string; align: 'left' | 'right' }> = ({ title, subtitle, color, align }) => (
  <div style={{
    marginBottom: '40px',
    padding: '15px 25px',
    // FOND : Blanc translucide (effet verre dépoli)
    background: `linear-gradient(${align === 'left' ? '90deg' : '-90deg'}, rgba(255, 255, 255, 0.1), transparent)`,
    // BORDURE : Blanche pour faire ressortir le bloc
    borderLeft: align === 'left' ? `4px solid #ffffff` : 'none',
    borderRight: align === 'right' ? `4px solid #ffffff` : 'none',
    textAlign: align,
    // Petit glow blanc
    boxShadow: align === 'left' ? `inset 10px 0 20px -10px rgba(255,255,255,0.2)` : `inset -10px 0 20px -10px rgba(255,255,255,0.2)`
  }}>
    {/* TITRE : Prend la couleur de la section (Cyan ou Rouge) */}
    <h3 style={{ 
      color: color, // <--- CHANGEMENT ICI (Texte coloré)
      margin: 0, fontSize: '1.5em', letterSpacing: '2px', 
      textTransform: 'uppercase', fontFamily: 'var(--font-title)',
      textShadow: `0 0 15px ${color}` // Lueur de la couleur du texte
    }}>
      {title}
    </h3>
    {/* SOUS-TITRE : Blanc pour le contraste */}
    <div style={{ 
      color: '#fff', fontSize: '0.7em', fontFamily: 'var(--font-code)', 
      marginTop: '5px', opacity: 0.7, letterSpacing: '1px' 
    }}>
      {subtitle}
    </div>
  </div>
);

// --- COMPOSANT : HEXAGONE TECH ---
const HexSkill: React.FC<{ label: string; level?: string; color?: string }> = ({ label, level, color = 'var(--color-accent-neon)' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        width: '120px',
        height: '104px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '10px',
        cursor: 'default',
        transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        transform: isHovered ? 'scale(1.15)' : 'scale(1)',
        filter: isHovered ? `drop-shadow(0 0 15px ${color})` : 'drop-shadow(0 0 5px rgba(0,0,0,0.5))',
        zIndex: isHovered ? 10 : 1
      }}
    >
      <div style={{
        position: 'absolute', inset: 0,
        backgroundColor: 'rgba(10, 15, 20, 0.95)',
        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        zIndex: 1
      }}></div>
      
      <div style={{
        position: 'absolute', inset: '2px',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        zIndex: 2,
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
         <div style={{ position: 'absolute', bottom: '10px', width: '40%', height: '2px', backgroundColor: color, opacity: isHovered ? 1 : 0.5 }}></div>
      </div>

      <div style={{
        position: 'absolute', inset: 0,
        backgroundColor: color,
        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        zIndex: 0,
        opacity: isHovered ? 1 : 0.6
      }}></div>

      <div style={{ zIndex: 3, textAlign: 'center', padding: '5px' }}>
        <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.8em', color: '#fff', fontWeight: 'bold', letterSpacing: '1px' }}>
          {label}
        </div>
        {level && <div style={{ fontSize: '0.6em', color: color, marginTop: '2px', textShadow: isHovered ? `0 0 5px ${color}` : 'none' }}>[{level}]</div>}
      </div>
    </div>
  );
};

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
        marginBottom: '30px',
        position: 'relative'
      }}
    >
      <div style={{
        width: '30px', height: '2px', 
        backgroundColor: isHovered ? activeColor : 'var(--color-interface-dark)', 
        marginRight: '15px',
        boxShadow: isHovered ? `0 0 10px ${activeColor}` : 'none',
        transition: 'all 0.3s ease'
      }}></div>

      <div style={{
        border: `1px solid ${isHovered ? activeColor : 'var(--color-interface-dark)'}`,
        backgroundColor: isHovered ? 'rgba(40, 10, 10, 0.8)' : 'rgba(20, 0, 0, 0.6)',
        padding: '15px 20px',
        minWidth: '250px',
        clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
        position: 'relative',
        transition: 'all 0.3s ease',
        boxShadow: isHovered ? `0 0 15px rgba(255, 42, 42, 0.3)` : 'none',
        cursor: 'default'
      }}>
        <h4 style={{ 
          color: isHovered ? '#fff' : '#ccc', 
          margin: 0, fontSize: '1.1em', letterSpacing: '1px', textTransform: 'uppercase',
          textShadow: isHovered ? `0 0 10px ${activeColor}` : 'none'
        }}>
          {title}
        </h4>
        <div style={{ fontSize: '0.8em', color: isHovered ? '#fff' : '#888', marginTop: '5px' }}>
          {desc}
        </div>
        
        <div style={{ 
          position: 'absolute', top: 0, right: 0, width: '0', height: '0', 
          borderTop: `10px solid ${isHovered ? activeColor : 'var(--color-interface-dark)'}`, 
          borderLeft: '10px solid transparent' 
        }}></div>
      </div>
    </div>
  );
};

const SkillsPage: React.FC = () => {
  return (
    <div style={{ paddingTop: '50px', paddingBottom: '100px', overflowX: 'hidden' }}>
      
      {/* HEADER SECTION */}
      <div style={{ marginBottom: '60px', paddingLeft: '20px', borderLeft: '4px solid var(--color-accent-neon)' }}>
        <h2 style={{ fontSize: '3em', color: '#fff', marginBottom: '10px', textShadow: '0 0 10px var(--color-accent-neon)' }}>
          SYSTEM DIAGNOSTICS
        </h2>
        <p style={{ fontFamily: 'var(--font-code)', color: 'var(--color-interface-light)' }}>
          {'>'} ANALYZING OPERATOR CAPABILITIES... <br/>
          {'>'} LOADING SKILL TREES: [KERNEL] & [PSYCHE].
        </p>
      </div>

      {/* --- CONTENEUR PRINCIPAL --- */}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '50px',
        justifyContent: 'center'
      }}>

        {/* --- COLONNE GAUCHE (TECH) --- */}
        <div style={{ flex: '1 1 500px', minWidth: '350px' }}>
          
          <ColumnHeader 
            title="// ENGINEERING MODULES" 
            subtitle="HARDWARE & SOFTWARE DEPENDENCIES" 
            color="var(--color-accent-neon)" // Le titre sera CYAN
            align="left" 
          />

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <HexSkill label="JAVASCRIPT" level="ES6+" color="#f7df1e" />
              <HexSkill label="TYPESCRIPT" level="Strict" color="#3178c6" />
              <HexSkill label="GO (GOLANG)" level="Backend" color="#00add8" />
            </div>

            <div style={{ width: '2px', height: '30px', background: 'var(--color-interface-dark)' }}></div>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <HexSkill label="REACT" level="Hooks" color="#61dafb" />
              <HexSkill label="ANGULAR" level="RxJS" color="#dd0031" />
              <HexSkill label="NODE.JS" level="API" color="#339933" />
              <HexSkill label="SPRING" level="Boot" color="#6db33f" />
            </div>

            <div style={{ width: '2px', height: '30px', background: 'var(--color-interface-dark)' }}></div>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <HexSkill label="DOCKER" color="#2496ed" />
              <HexSkill label="GIT" color="#f05032" />
            </div>

          </div>
        </div>

        {/* --- COLONNE DROITE (HUMAIN) --- */}
        <div style={{ flex: '1 1 400px', minWidth: '350px', position: 'relative' }}>
          
          <ColumnHeader 
            title="// OPERATOR ATTRIBUTES" 
            subtitle="PSYCHOMETRIC EVALUATION DATA" 
            color="#ff2a2a" // Le titre sera ROUGE
            align="right" 
          />

          <div style={{ 
            position: 'absolute', left: '20px', top: '120px', bottom: '20px', 
            width: '2px', background: 'var(--color-interface-dark)',
            zIndex: 0
          }}></div>

          <div style={{ paddingLeft: '20px' }}>
            <PerkNode 
              title="INTELLIGENCE RELATIONNELLE" 
              desc="Capacité à décrypter les dynamiques d'équipe et à fluidifier la communication." 
            />
            <PerkNode 
              title="PÉDAGOGIE & VULGARISATION" 
              desc="Traduction de concepts techniques complexes en langage accessible (Coach)." 
            />
            <PerkNode 
              title="GESTION DE CONFLIT" 
              desc="Médiation proactive et résolution diplomatique des blocages." 
            />
            <PerkNode 
              title="PEER-LEARNING" 
              desc="Apprentissage collaboratif et partage de connaissances (Méthode 42/Zone01)." 
            />
            <PerkNode 
              title="ANALYSE DE BESOIN" 
              desc="Compréhension fine des attentes clients et traduction en specs techniques." 
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default SkillsPage;