// src/components/TacticalTabs.tsx
import React, { useState } from 'react';

// Mise à jour de l'interface : ajout de "isOngoing"
export interface TabData {
  id: string;
  label: string;
  date: string;
  role: string;
  content: React.ReactNode;
  isOngoing?: boolean; // Nouveau : Définit si c'est l'activité actuelle
}

interface TacticalTabsProps {
  tabs: TabData[];
}

const TacticalTabs: React.FC<TacticalTabsProps> = ({ tabs }) => {
  // On initialise sur le premier onglet qui a "isOngoing" à true, sinon le premier de la liste
  const initialTab = tabs.find(t => t.isOngoing)?.id || tabs[0].id;
  const [activeTab, setActiveTab] = useState(initialTab);

  return (
    <div style={{ width: '100%', marginTop: '40px', fontFamily: 'var(--font-title)' }}>
      
      {/* --- BARRE D'ONGLETS REVISITÉE --- */}
      <div style={{ 
        display: 'flex', 
        // Hack pour que les onglets se chevauchent légèrement comme des dossiers
        marginLeft: '20px',
        marginBottom: '-2px', // Fait "rentrer" les onglets dans le panneau du bas
        overflowX: 'auto',
        zIndex: 2, // Passe au-dessus du panneau
        position: 'relative'
      }}>
        {tabs.map((tab, index) => {
          const isActive = activeTab === tab.id;
          
          // Couleurs dynamiques selon le statut
          const statusColor = tab.isOngoing ? '#39ff14' : (isActive ? 'var(--color-accent-neon)' : 'var(--color-interface-light)');
          const borderColor = isActive ? statusColor : 'var(--color-interface-dark)';
          const bgColor = isActive ? 'rgba(0, 20, 30, 0.9)' : 'rgba(0, 10, 20, 0.5)';

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                // NOUVELLE FORME : Trapèze style "dossier"
                clipPath: 'polygon(15px 0, calc(100% - 15px) 0, 100% 100%, 0 100%)',
                
                // Styles
                background: `linear-gradient(to bottom, ${bgColor}, transparent)`,
                border: 'none',
                // On simule les bordures latérales lumineuses
                boxShadow: isActive ? `inset 2px 0 0 ${borderColor}, inset -2px 0 0 ${borderColor}, inset 0 2px 0 ${borderColor}` : `inset 1px 0 0 ${borderColor}, inset -1px 0 0 ${borderColor}`,
                
                color: borderColor,
                fontSize: '0.9em',
                padding: '15px 35px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                position: 'relative',
                minWidth: '160px',
                textAlign: 'center',
                marginLeft: index > 0 ? '-15px' : '0', // Chevauchement
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
               {/* Indicateur de statut */}
              <div style={{ fontSize: '0.65em', opacity: 0.8, marginBottom: '2px', color: statusColor, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                {tab.isOngoing && <span style={{ display: 'inline-block', width: '6px', height: '6px', backgroundColor: statusColor, borderRadius: '50%', boxShadow: `0 0 5px ${statusColor}` }}></span>}
                {tab.isOngoing ? 'STATUS: LIVE' : (isActive ? 'ACCESSING...' : 'ARCHIVED')}
              </div>
              {tab.label}
              
              {/* Petite ligne brillante en bas si inactif */}
              {!isActive && <div style={{ position: 'absolute', bottom: 0, left: '15px', right: '15px', height: '1px', backgroundColor: 'var(--color-interface-dark)' }}></div>}
            </button>
          );
        })}
      </div>

      {/* --- PANNEAU DE CONTENU (JOURNAL DE BORD) --- */}
      <div style={{
        backgroundColor: 'rgba(0, 5, 16, 0.9)',
        border: `2px solid var(--color-interface-dark)`,
        // La bordure supérieure change de couleur pour matcher l'onglet actif
        borderTopColor: tabs.find(t => t.id === activeTab)?.isOngoing ? '#39ff14' : 'var(--color-accent-neon)',
        padding: '40px',
        position: 'relative',
        minHeight: '400px',
        boxShadow: '0 0 20px rgba(0,0,0,0.5)',
        zIndex: 1
      }}>
        {/* Décoration d'arrière plan (Scanlines + Grille) */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(transparent 50%, rgba(0, 0, 0, 0.1) 50%)', backgroundSize: '100% 4px', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '100%', height: '100%', backgroundImage: 'radial-gradient(var(--color-interface-dark) 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: 0.2, pointerEvents: 'none' }}></div>
        
        {/* Décoration : Coins techniques */}
        <div style={{ position: 'absolute', top: '10px', left: '10px', width: '20px', height: '20px', borderTop: '2px solid var(--color-interface-light)', borderLeft: '2px solid var(--color-interface-light)', opacity: 0.5 }}></div>
        <div style={{ position: 'absolute', bottom: '10px', right: '10px', width: '20px', height: '20px', borderBottom: '2px solid var(--color-interface-light)', borderRight: '2px solid var(--color-interface-light)', opacity: 0.5 }}></div>


        {tabs.map((tab) => {
          const isLive = tab.isOngoing;
          const accentColor = isLive ? '#39ff14' : 'var(--color-accent-neon)';

          if (tab.id !== activeTab) return null;
          return (
            <div key={tab.id} style={{ animation: 'fadeIn 0.5s ease-out' }}>
              {/* Header de la Mission */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '30px', flexWrap: 'wrap', gap: '20px', borderBottom: `1px dashed ${accentColor}`, paddingBottom: '20px' }}>
                <div>
                  <h3 style={{ fontSize: '2.2em', color: 'var(--color-text-title)', marginBottom: '5px', textTransform: 'uppercase', textShadow: `0 0 10px ${accentColor}` }}>
                    {tab.role}
                  </h3>
                  <div style={{ fontFamily: 'var(--font-title)', color: accentColor, letterSpacing: '2px', display: 'flex', alignItems: 'center' }}>
                     <span style={{ marginRight: '10px' }}>// TARGET SYSTEM:</span> {tab.label}
                  </div>
                </div>
                <div style={{ textAlign: 'right', fontFamily: 'var(--font-body)', color: accentColor, border: `1px solid ${accentColor}`, padding: '10px 20px', backgroundColor: isLive ? 'rgba(57, 255, 20, 0.1)' : 'transparent' }}>
                  <span style={{ fontSize: '0.8em', textTransform: 'uppercase', opacity: 0.8 }}>Timeframe Protocol:</span><br/>
                  <strong style={{ fontSize: '1.1em' }}>{tab.date}</strong>
                </div>
              </div>

              {/* Contenu Réel */}
              <div style={{ lineHeight: '1.8', color: 'var(--color-text-primary)', fontFamily: 'var(--font-body)' }}>
                {tab.content}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TacticalTabs;