// src/pages/Skills.tsx
import React from 'react';

// Composant Barre de compétence
const SkillBar: React.FC<{ name: string; level: number }> = ({ name, level }) => (
  <div style={{ marginBottom: '20px' }}> {/* + d'espace entre les barres */}
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '1em', color: '#fff' }}>
      <span style={{ fontFamily: 'var(--font-title)', letterSpacing: '1px' }}>{name}</span>
      <span style={{ color: 'var(--color-accent-neon)', opacity: 0.8 }}>{level}%</span>
    </div>
    <div style={{ width: '100%', height: '6px', background: 'rgba(255, 255, 255, 0.1)' }}> {/* Barre un peu plus épaisse */}
      <div style={{ 
        width: `${level}%`, height: '100%', 
        background: 'var(--color-accent-neon)',
        boxShadow: '0 0 10px var(--color-accent-neon)' 
      }}></div>
    </div>
  </div>
);

// Composant Carte (Fenêtre)
const SkillCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div style={{
    background: 'rgba(0, 0, 0, 0.85)',
    border: '1px solid var(--color-interface-dark)',
    borderTop: '2px solid var(--color-accent-neon)',
    
    // --- MODIFICATION 1 : ESPACE INTERNE ---
    padding: '40px', // Plus d'air autour du texte (était 25px)
    
    // --- MODIFICATION 2 : HAUTEUR MINIMALE ---
    minHeight: '450px', // Uniformise la taille des fenêtres
    display: 'flex',
    flexDirection: 'column',
    
    position: 'relative',
    backdropFilter: 'blur(5px)'
  }}>
    {/* Titre de la carte */}
    <h3 style={{ 
      color: 'var(--color-accent-neon)', 
      marginBottom: '30px', // Plus d'espace sous le titre
      fontSize: '1.4em', // Titre un peu plus gros
      borderBottom: '1px dashed rgba(255, 42, 42, 0.3)',
      paddingBottom: '15px',
      letterSpacing: '3px',
      textTransform: 'uppercase'
    }}>
      {title}
    </h3>
    
    {/* Le contenu prend toute la place restante */}
    <div style={{ flex: 1 }}>
      {children}
    </div>
    
    {/* Déco coin */}
    <div style={{ position: 'absolute', bottom: 0, right: 0, width: '15px', height: '15px', background: 'var(--color-accent-neon)' }}></div>
  </div>
);

const SkillsPage: React.FC = () => {
  return (
    <div style={{ paddingTop: '50px', paddingBottom: '100px' }}>
      
      <h2 style={{ 
        fontSize: '3.5em', 
        marginBottom: '10px',
        fontFamily: 'var(--font-title)',
        color: '#fff',
        textShadow: '0 0 20px rgba(255, 42, 42, 0.6)'
      }}>
        <span style={{ color: 'var(--color-accent-neon)' }}>[</span> DIAGNOSTIC SYSTÈME <span style={{ color: 'var(--color-accent-neon)' }}>]</span>
      </h2>
      
      <p style={{ 
        color: '#ccc', 
        maxWidth: '800px', // Un peu plus large pour la phrase d'intro
        marginBottom: '60px',
        fontFamily: 'var(--font-code)',
        fontSize: '1em', // Texte un peu plus gros
        background: 'rgba(0,0,0,0.6)', 
        padding: '15px',
        borderLeft: '3px solid var(--color-accent-neon)'
      }}>
        {'>'} ANALYSE DU PROFIL HYBRIDE : BACK-END + SYSTÈME + HUMAIN <br/>
        {'>'} INTEGRITY CHECK: <span style={{ color: '#39ff14' }}>COMPLETE</span>
      </p>

      {/* Grille de Skills */}
      <div style={{ 
        display: 'grid', 
        // --- MODIFICATION 3 : CARTES PLUS LARGES ---
        // On passe de 300px à 380px. Sur grand écran, ça fera de belles grosses cartes.
        gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', 
        gap: '40px' // Plus d'espace entre les cartes
      }}>
        
        {/* --- COLONNE 1 --- */}
        <SkillCard title="LANGAGES & SYSTÈME">
          <SkillBar name="JavaScript / TypeScript" level={90} />
          <SkillBar name="Go (Golang)" level={75} />
          <SkillBar name="SQL / PostgreSQL" level={85} />
          <SkillBar name="Shell / Bash" level={60} />
          
          <div style={{ marginTop: '30px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
             {['Java', 'HTML5', 'CSS3'].map(t => (
               <span key={t} style={{ 
                   fontSize: '0.85em', // Un poil plus gros
                   border: '1px solid #555', 
                   color: '#ddd', 
                   padding: '6px 12px', 
                   letterSpacing: '1.5px', // Garde ton espacement lisible
                   fontWeight: '600',
                   textTransform: 'uppercase'
               }}>
                   {t}
               </span>
             ))}
          </div>
        </SkillCard>

        {/* --- COLONNE 2 --- */}
        <SkillCard title="ARCHITECTURE & TOOLS">
          <SkillBar name="React / Angular" level={85} />
          <SkillBar name="Docker / CI-CD" level={70} />
          <SkillBar name="API REST" level={90} />
          <SkillBar name="Git / GitHub" level={85} />
          
          <div style={{ marginTop: '30px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
             {['Spring Boot', 'Microservices', 'WebSockets', 'VS Code'].map(t => (
               <span key={t} style={{ 
                   fontSize: '0.85em', 
                   border: '1px solid #555', 
                   color: '#ddd', 
                   padding: '6px 12px',
                   letterSpacing: '1.5px',
                   fontWeight: '600',
                   textTransform: 'uppercase'
               }}>
                   {t}
               </span>
             ))}
          </div>
        </SkillCard>

        {/* --- COLONNE 3 --- */}
        <SkillCard title="PSYCHOMÉTRIE & SOFTSKILLS">
           <ul style={{ listStyle: 'none', color: '#fff', lineHeight: '2' }}> {/* Interligne augmenté (lineHeight 2) */}
             <li style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
               <span style={{ color: 'var(--color-accent-neon)', fontSize: '1.2em' }}>[+]</span> Intelligence Relationnelle
             </li>
             <li style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
               <span style={{ color: 'var(--color-accent-neon)', fontSize: '1.2em' }}>[+]</span> Pédagogie & Vulgarisation
             </li>
             <li style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
               <span style={{ color: 'var(--color-accent-neon)', fontSize: '1.2em' }}>[+]</span> Gestion de Conflit
             </li>
             <li style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
               <span style={{ color: 'var(--color-accent-neon)', fontSize: '1.2em' }}>[+]</span> Analyse de Besoin Client
             </li>
             <li style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
               <span style={{ color: 'var(--color-accent-neon)', fontSize: '1.2em' }}>[+]</span> Peer-Learning (P2P)
             </li>
           </ul>
           
           <div style={{ marginTop: '35px', padding: '15px', background: 'rgba(255, 42, 42, 0.1)', border: '1px solid var(--color-accent-neon)', textAlign: 'center' }}>
             <small style={{ color: 'var(--color-accent-neon)', letterSpacing: '2px', textTransform: 'uppercase' }}>Taux de Synchro Équipe</small>
             <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#fff', marginTop: '5px' }}>98.4%</div>
           </div>
        </SkillCard>

      </div>
    </div>
  );
};

export default SkillsPage;