// src/pages/Skills.tsx
import React from 'react';

// --- COMPOSANT : HEXAGONE TECH (HARD SKILLS) ---
const HexSkill: React.FC<{ label: string; level?: string; color?: string }> = ({ label, level, color = 'var(--color-accent-neon)' }) => (
  <div style={{
    position: 'relative',
    width: '120px',
    height: '104px', // Ratio pour un hexagone (width * 0.866)
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10px',
    filter: 'drop-shadow(0 0 5px rgba(0,0,0,0.5))'
  }}>
    {/* Fond de l'hexagone */}
    <div style={{
      position: 'absolute', inset: 0,
      backgroundColor: 'rgba(10, 15, 20, 0.9)',
      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
      border: 'none', // clip-path coupe la bordure, donc on utilise un pseudo-élément ou un inset box-shadow
      zIndex: 1
    }}></div>
    
    {/* Bordure Hexagone (Simulation via un div imbriqué plus petit ou SVG, ici méthode simple : border sur le container ne marche pas avec clip-path) 
        -> On utilise un "inner" hexagone pour faire la bordure.
    */}
    <div style={{
      position: 'absolute', inset: '2px', // L'épaisseur de la bordure
      backgroundColor: 'rgba(0, 0, 0, 0.8)', // Fond intérieur
      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
      zIndex: 2,
      display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
       {/* Décoration "Circuit" interne */}
       <div style={{ position: 'absolute', bottom: '10px', width: '40%', height: '2px', backgroundColor: color, opacity: 0.5 }}></div>
    </div>

    {/* Bordure colorée (Background du parent qui dépasse grâce au inset du fils) */}
    <div style={{
      position: 'absolute', inset: 0,
      backgroundColor: color, // La couleur de la bordure
      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
      zIndex: 0,
      opacity: 0.8
    }}></div>

    {/* Contenu Texte */}
    <div style={{ zIndex: 3, textAlign: 'center', padding: '5px' }}>
      <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.8em', color: '#fff', fontWeight: 'bold', letterSpacing: '1px' }}>
        {label}
      </div>
      {level && <div style={{ fontSize: '0.6em', color: color, marginTop: '2px' }}>[{level}]</div>}
    </div>
  </div>
);

// --- COMPOSANT : PERK HUMAIN (SOFT SKILLS) ---
const PerkNode: React.FC<{ title: string; desc: string }> = ({ title, desc }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    marginBottom: '30px',
    position: 'relative'
  }}>
    {/* Connecteur Ligne */}
    <div style={{
      width: '30px', height: '2px', backgroundColor: 'var(--color-accent-neon)', marginRight: '15px',
      boxShadow: '0 0 5px var(--color-accent-neon)'
    }}></div>

    {/* Le Badge Perk */}
    <div style={{
      border: '1px solid var(--color-accent-neon)',
      backgroundColor: 'rgba(20, 0, 0, 0.6)', // Fond légèrement rouge/sombre pour différencier
      padding: '15px 20px',
      minWidth: '250px',
      clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)', // Coins coupés
      position: 'relative'
    }}>
      <h4 style={{ color: '#fff', margin: 0, fontSize: '1.1em', letterSpacing: '1px', textTransform: 'uppercase' }}>
        {title}
      </h4>
      <div style={{ fontSize: '0.8em', color: '#ccc', marginTop: '5px' }}>
        {desc}
      </div>
      {/* Petite déco coin */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '0', height: '0', borderTop: '10px solid var(--color-accent-neon)', borderLeft: '10px solid transparent' }}></div>
    </div>
  </div>
);

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
          {'>'} LOADING SKILL TREES: [MODULES] & [ATTRIBUTES].
        </p>
      </div>

      {/* --- CONTENEUR PRINCIPAL (2 COLONNES) --- */}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', // Pour le responsive (passe l'un sous l'autre sur mobile)
        gap: '50px',
        justifyContent: 'center'
      }}>

        {/* --- COLONNE GAUCHE : TECH TREE (HEXAGONES) --- */}
        <div style={{ flex: '1 1 500px', minWidth: '350px' }}>
          <h3 style={{ 
            textAlign: 'center', color: 'var(--color-accent-neon)', marginBottom: '40px', 
            borderBottom: '1px solid var(--color-interface-dark)', paddingBottom: '10px', letterSpacing: '3px' 
          }}>
            // ENGINEERING MODULES
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            
            {/* NIVEAU 1 : LANGAGES (RACINES) */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <HexSkill label="JAVASCRIPT" level="ES6+" color="#f7df1e" />
              <HexSkill label="TYPESCRIPT" level="Strict" color="#3178c6" />
              <HexSkill label="GO (GOLANG)" level="Backend" color="#00add8" />
            </div>

            {/* Lignes de connexion (Visuel CSS simple) */}
            <div style={{ width: '2px', height: '30px', background: 'var(--color-interface-dark)' }}></div>

            {/* NIVEAU 2 : FRAMEWORKS */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <HexSkill label="REACT" level="Hooks" color="#61dafb" />
              <HexSkill label="ANGULAR" level="RxJS" color="#dd0031" />
              <HexSkill label="NODE.JS" level="API" color="#339933" />
              <HexSkill label="SPRING" level="Boot" color="#6db33f" />
            </div>

            <div style={{ width: '2px', height: '30px', background: 'var(--color-interface-dark)' }}></div>

            {/* NIVEAU 3 : OUTILS & DB */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <HexSkill label="POSTGRESQL" color="#336791" />
              <HexSkill label="DOCKER" color="#2496ed" />
              <HexSkill label="GIT" color="#f05032" />
            </div>

          </div>
        </div>

        {/* --- COLONNE DROITE : SOFT SKILLS (LISTE PERKS) --- */}
        <div style={{ flex: '1 1 400px', minWidth: '350px', position: 'relative' }}>
          <h3 style={{ 
            textAlign: 'center', color: '#ff2a2a', marginBottom: '40px', 
            borderBottom: '1px solid var(--color-interface-dark)', paddingBottom: '10px', letterSpacing: '3px' 
          }}>
            // OPERATOR ATTRIBUTES
          </h3>

          {/* Ligne verticale "Colonne vertébrale" */}
          <div style={{ 
            position: 'absolute', left: '20px', top: '80px', bottom: '20px', 
            width: '2px', background: 'var(--color-interface-dark)',
            zIndex: 0
          }}></div>

          <div style={{ paddingLeft: '20px' }}> {/* Décalage pour laisser la place à la ligne */}
            
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