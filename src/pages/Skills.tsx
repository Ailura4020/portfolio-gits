// src/pages/Skills.tsx

import React from 'react';

// --- BLOC 1 : COMPÉTENCES TECHNIQUES (Hard Skills) ---
const TECH_SKILLS = [
  {
    category: "LANGAGES & SYSTÈME",
    // Ajout de Go et Shell qui sont typiques de tes projets Net-cat/Forum
    items: ["Java", "Go (Golang)", "JavaScript", "TypeScript", "SQL", "Shell / Bash"]
  },
  {
    category: "ARCHITECTURE & RÉSEAU",
    // Ajout de WebSockets (Forum), API REST (Groupie), Docker (Forum)
    items: ["Spring Boot", "Angular", "WebSockets", "API REST", "Docker", "Microservices"]
  },
  {
    category: "DONNÉES & OUTILS",
    // Ajout de SQLite (Forum) en plus de Postgres
    items: ["Git / GitHub", "PostgreSQL", "SQLite", "VS Code", "IntelliJ", "CI/CD"]
  }
];

// --- BLOC 2 : ATOUTS & RELATIONNEL (Soft Skills) ---
const ASSETS_SKILLS = [
  {
    category: "INTELLIGENCE RELATIONNELLE",
    items: ["Communication Client", "Négociation", "Analyse de Besoin", "Gestion de Conflit", "Esprit d'Équipe"]
  },
  {
    category: "PÉDAGOGIE & MÉTHODOLOGIE",
    // Mise en avant du Peer-to-Peer et de l'Agile (Zone01)
    items: ["Peer-Learning (P2P)", "Méthode Agile", "Code Review", "Vulgarisation", "Autonomie"]
  }
];

const SkillsPage: React.FC = () => {
  return (
    <section id="skills" style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '100px' }}>
      
      {/* --- EN-TÊTE --- */}
      <h2 style={{ fontSize: '3em', color: 'var(--color-text-title)', marginBottom: '10px' }}>
        [ DIAGNOSTIC SYSTÈME ]
      </h2>
      <p style={{ color: 'var(--color-accent-teal)', fontFamily: 'var(--font-title)', marginBottom: '60px', letterSpacing: '0.1em' }}>
        // ANALYSE DU PROFIL HYBRIDE : BACK-END + SYSTÈME + HUMAIN
      </p>

      {/* --- PARTIE 1 : MODULES TECHNIQUES --- */}
      <h3 style={{ 
          color: 'var(--color-accent-neon)', 
          fontSize: '1.5em', 
          borderBottom: '1px dashed var(--color-interface-light)', 
          paddingBottom: '10px', 
          marginBottom: '30px' 
      }}>
        :: MODULES TECHNIQUES & SYSTÈME ::
      </h3>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '30px',
        marginBottom: '60px'
      }}>
        {TECH_SKILLS.map((group, index) => (
          <div key={index} style={{
            backgroundColor: 'rgba(0, 18, 40, 0.5)',
            border: '1px solid var(--color-interface-dark)',
            borderLeft: '4px solid var(--color-accent-teal)',
            padding: '25px',
            position: 'relative'
          }}>
            <h4 style={{ color: 'var(--color-text-title)', marginBottom: '20px', fontFamily: 'var(--font-title)' }}>
              {group.category}
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {group.items.map(item => (
                <span key={item} style={{
                  fontSize: '0.85em',
                  color: 'var(--color-accent-neon)',
                  border: '1px solid var(--color-accent-teal)',
                  padding: '4px 8px',
                  backgroundColor: 'rgba(0, 255, 255, 0.05)'
                }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* --- PARTIE 2 : ATOUTS (SOFT SKILLS) --- */}
      <h3 style={{ 
          color: 'var(--color-accent-secondary)', 
          fontSize: '1.5em', 
          borderBottom: '1px dashed var(--color-interface-light)', 
          paddingBottom: '10px', 
          marginBottom: '30px' 
      }}>
        :: ATOUTS & PROFIL PSYCHOMÉTRIQUE ::
      </h3>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '30px'
      }}>
        {ASSETS_SKILLS.map((group, index) => (
          <div key={index} style={{
            backgroundColor: 'rgba(0, 18, 40, 0.5)',
            border: '1px solid var(--color-interface-dark)',
            borderLeft: '4px solid var(--color-accent-secondary)',
            padding: '25px',
            position: 'relative'
          }}>
            <h4 style={{ color: 'var(--color-text-title)', marginBottom: '20px', fontFamily: 'var(--font-title)' }}>
              {group.category}
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {group.items.map(item => (
                <span key={item} style={{
                  fontSize: '0.85em',
                  color: 'var(--color-accent-secondary)',
                  border: '1px solid var(--color-accent-secondary)',
                  padding: '4px 8px',
                  backgroundColor: 'rgba(175, 255, 0, 0.05)'
                }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* --- PIED DE PAGE : DIAGNOSTIC --- */}
      <div style={{ 
          marginTop: '80px', 
          borderTop: '1px solid var(--color-interface-dark)', 
          paddingTop: '20px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          color: 'var(--color-interface-light)', 
          fontSize: '0.8em', 
          fontFamily: 'var(--font-title)'
      }}>
        <span>TAUX DE SYNCHRO: 98.4%</span>
        <span>COEFFICIENT CRIMINALITÉ: <span style={{ color: 'var(--color-accent-neon)' }}>0 (CLEAR)</span></span>
        <span>ÉTAT DU SYSTÈME: OPTIMAL</span>
      </div>

    </section>
  );
};

export default SkillsPage;