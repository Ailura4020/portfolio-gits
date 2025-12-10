// src/components/TacticalTabs.tsx
import React, { useState } from 'react';

// Définition de la structure d'une mission
export interface TabData {
  id: string;
  label: string;
  date: string;
  role: string;
  content: React.ReactNode;
  isOngoing?: boolean;
}

interface TacticalTabsProps {
  tabs: TabData[];
}

const TacticalTabs: React.FC<TacticalTabsProps> = ({ tabs }) => {
  const initialTab = tabs.find(t => t.isOngoing)?.id || tabs[0].id;
  const [activeTab, setActiveTab] = useState(initialTab);

  return (
    <div style={{ 
        width: '100%', 
        maxWidth: '1200px', // MODE PAYSAGE : Largeur augmentée
        margin: '0 auto', 
        fontFamily: 'var(--font-title)' 
    }}>
      
      {/* --- BARRE D'ONGLETS --- */}
      <div style={{ 
        display: 'flex', 
        marginLeft: '20px',
        marginBottom: '-2px', 
        overflowX: 'auto',
        zIndex: 2, 
        position: 'relative',
        gap: '5px' 
      }}>
        {tabs.map((tab, index) => {
          const isActive = activeTab === tab.id;
          const accentColor = tab.isOngoing ? '#39ff14' : '#00ffff';
          const borderColor = isActive ? accentColor : 'rgba(255, 255, 255, 0.3)';
          const textColor = isActive ? accentColor : '#888';
          const bgColor = isActive ? 'rgba(0, 10, 20, 1)' : 'rgba(255, 255, 255, 0.05)';

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              onMouseEnter={(e) => {
                if (!isActive) {
                    e.currentTarget.style.borderColor = accentColor;
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                    e.currentTarget.style.color = '#888';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                }
              }}
              style={{
                clipPath: 'polygon(15px 0, calc(100% - 15px) 0, 100% 100%, 0 100%)', // Forme plus large
                background: bgColor,
                borderBottom: 'none',
                boxShadow: isActive 
                    ? `inset 0 2px 0 ${accentColor}, inset 2px 0 0 ${accentColor}, inset -2px 0 0 ${accentColor}`
                    : `inset 0 1px 0 ${borderColor}, inset 1px 0 0 ${borderColor}, inset -1px 0 0 ${borderColor}`,
                color: textColor,
                fontSize: '0.9em',
                padding: '12px 30px', // Onglets un peu plus larges
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                position: 'relative',
                minWidth: '150px',
                textAlign: 'center',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontWeight: isActive ? 'bold' : 'normal',
                top: isActive ? '1px' : '4px'
              }}
            >
              <div style={{ fontSize: '0.7em', marginBottom: '4px', opacity: isActive ? 1 : 0.6 }}>
                {tab.isOngoing ? '● EN POSTE' : 'ARCHIVÉ'}
              </div>
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* --- PANNEAU DE CONTENU (DOSSIER PAYSAGE) --- */}
      <div style={{
        backgroundColor: 'rgba(0, 5, 10, 0.95)', 
        border: `2px solid var(--color-interface-dark)`,
        borderTopColor: tabs.find(t => t.id === activeTab)?.isOngoing ? '#39ff14' : '#00ffff',
        padding: '40px 50px', // Marges latérales plus larges
        position: 'relative',
        minHeight: '400px', // Hauteur réduite pour accentuer l'effet large
        boxShadow: '0 0 30px rgba(0,0,0,0.5)',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column'
      }}>
        
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(transparent 50%, rgba(255, 255, 255, 0.02) 50%)', backgroundSize: '100% 4px', pointerEvents: 'none' }}></div>

        {tabs.map((tab) => {
          const isLive = tab.isOngoing;
          const accentColor = isLive ? '#39ff14' : '#00ffff'; 

          if (tab.id !== activeTab) return null;
          
          return (
            <div key={tab.id} style={{ animation: 'fadeIn 0.3s ease-out', flex: 1, display: 'flex', flexDirection: 'column' }}>
              
              {/* En-tête Large */}
              <div style={{ 
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
                marginBottom: '30px', borderBottom: `1px solid ${accentColor}`, paddingBottom: '15px' 
              }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '20px' }}>
                  <h3 style={{ 
                    fontSize: '2.2em', color: '#fff', margin: 0, 
                    textTransform: 'uppercase', textShadow: `0 0 10px ${accentColor}` 
                  }}>
                    {tab.role}
                  </h3>
                  <div style={{ fontFamily: 'var(--font-code)', color: accentColor, fontSize: '1em' }}>
                     // {tab.label}
                  </div>
                </div>
                
                <div style={{ 
                  fontFamily: 'var(--font-code)', color: accentColor, 
                  border: `1px solid ${accentColor}`, padding: '8px 20px', 
                  fontSize: '1em', background: isLive ? 'rgba(57, 255, 20, 0.1)' : 'transparent'
                }}>
                  {tab.date}
                </div>
              </div>

              {/* Texte optimisé pour la largeur */}
              <div style={{ 
                  lineHeight: '1.8', color: '#ccc', fontFamily: 'var(--font-body)', fontSize: '1.05em',
                  flex: 1, maxWidth: '95%' // Utilise bien la largeur
              }}>
                {tab.content}
              </div>

              {/* Footer Décoratif */}
              <div style={{ 
                  marginTop: '40px', borderTop: '1px dashed #333', paddingTop: '10px', 
                  fontSize: '0.7em', color: '#555', fontFamily: 'monospace', textAlign: 'right' 
              }}>
                  NIVEAU CONFIDENTIEL : 3 // ACCÈS RESTREINT // SEC_9 ARCHIVES
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TacticalTabs;