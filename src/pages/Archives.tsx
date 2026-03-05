// src/pages/Archives.tsx
import React, { useState } from 'react';
import useIsMobile from '../hooks/useIsMobile';
import DecryptedText from '../components/DecryptedText';

// --- TYPE DE DONNÉES ---
interface ArchiveData {
  id: string;
  type: 'MISSION MAJEURE' | 'ÉVÉNEMENT';
  title: string;
  date: string;
  role: string;
  shortDesc: string;
  fullDesc: string;
  link?: string;
}

// --- DONNÉES FACTICES (Mock Data) ---
const MOCK_ARCHIVES: ArchiveData[] = [
  {
    id: 'OP-4020-ISCOM-01',
    type: 'MISSION MAJEURE',
    title: 'DÉFI ROBLOX V1 - 1ÈRE PLACE',
    date: 'SYS.DATE : 2024.11',
    role: 'RÔLE : DÉVELOPPEUSE / INTÉGRATRICE',
    shortDesc: 'Victoire au hackathon inter-écoles (1 semaine). Équipe pluridisciplinaire.',
    fullDesc: 'Détails de la mission à insérer ici plus tard. Explication de la méthode Agile, du rôle de chacun, des technos utilisées, etc.'
  },
  {
    id: 'OP-4020-ISCOM-02',
    type: 'MISSION MAJEURE',
    title: 'DÉFI ROBLOX V2 - 1ÈRE PLACE',
    date: 'SYS.DATE : 2025.04',
    role: 'RÔLE : TECH LEAD / DÉVELOPPEUSE',
    shortDesc: 'Seconde victoire consécutive. Gestion de projet avancée.',
    fullDesc: 'Détails de la seconde mission à insérer ici plus tard.'
  },
  {
    id: 'EVT-LINKEDIN-01',
    type: 'ÉVÉNEMENT',
    title: 'SALON FEMMES & SPORT',
    date: 'SYS.DATE : 2025.02',
    role: 'RÔLE : AMBASSADRICE',
    shortDesc: 'Représentation de Zone01 Normandie. Échanges sur la reconversion.',
    fullDesc: 'Détails du salon et lien LinkedIn à insérer ici.'
  },
  {
    id: 'EVT-LINKEDIN-02',
    type: 'ÉVÉNEMENT',
    title: 'SALON FEMMES & SPORT',
    date: 'SYS.DATE : 2025.02',
    role: 'RÔLE : AMBASSADRICE',
    shortDesc: 'Représentation de Zone01 Normandie. Échanges sur la reconversion.',
    fullDesc: 'Détails du salon et lien LinkedIn à insérer ici.'
  },
  {
    id: 'EVT-LINKEDIN-03',
    type: 'ÉVÉNEMENT',
    title: 'SALON FEMMES & SPORT',
    date: 'SYS.DATE : 2025.02',
    role: 'RÔLE : AMBASSADRICE',
    shortDesc: 'Représentation de Zone01 Normandie. Échanges sur la reconversion.',
    fullDesc: 'Détails du salon et lien LinkedIn à insérer ici.'
  }
];

const ArchivesPage: React.FC = () => {
  const [selectedArchive, setSelectedArchive] = useState<ArchiveData | null>(null);
  const isMobile = useIsMobile(1024);

  return (
    // PLUS DE BACKGROUND NI DE POSITION ABSOLUTE ICI ! C'est le BackgroundManager qui s'en charge.
    <section id="archives" style={{ minHeight: '100vh', paddingTop: '50px', paddingBottom: '100px' }}>
      
      {/* HEADER SECTION AVEC ANIMATION (Comme Projects et Experience) */}
      <div style={{ marginBottom: '40px', paddingLeft: '20px', borderLeft: '4px solid var(--color-accent-neon)' }}>
        <DecryptedText 
          text="OPÉRATIONS EXTÉRIEURES"
          style={{ 
            fontSize: isMobile ? '2.5em' : '4em', 
            color: 'var(--color-accent-neon)', 
            marginBottom: '5px', 
            textShadow: '0 0 15px var(--color-accent-neon)',
            fontFamily: 'var(--font-title)',
            textTransform: 'uppercase'
          }}
        />
        <p style={{ fontFamily: 'var(--font-code)', color: 'var(--color-interface-light)' }}>
          // LIAISON HUMAINE, TRANSMISSIONS & LEADERSHIP
        </p>
      </div>

      {/* Grille des Cartes */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
        {MOCK_ARCHIVES.map((archive) => (
          <div 
            key={archive.id} 
            onClick={() => setSelectedArchive(archive)}
            style={{
              backgroundColor: 'rgba(10, 15, 25, 0.65)',
              border: '1px solid var(--color-interface-dark)',
              clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)',
              display: 'flex',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(5px)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-accent-neon)';
              e.currentTarget.style.boxShadow = '0 0 15px var(--color-accent-neon)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-interface-dark)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* Emplacement de la miniature / vidéo */}
            <div style={{ 
              width: '120px', 
              backgroundColor: 'rgba(0,0,0,0.5)',
              borderRight: '1px solid var(--color-interface-dark)',
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              color: 'var(--color-interface-light)', fontSize: '0.8em', textAlign: 'center',
              padding: '10px'
            }}>
              [ MIN / VIDÉO ]
            </div>

            {/* Informations textuelles */}
            <div style={{ padding: '15px', flex: 1 }}>
              <div style={{ fontSize: '0.7em', color: archive.type === 'MISSION MAJEURE' ? 'var(--color-accent-neon)' : 'var(--color-accent-secondary)', fontFamily: 'var(--font-title)', marginBottom: '5px' }}>
                ID: {archive.id}
              </div>
              <h3 style={{ fontSize: '1.2em', color: 'var(--color-text-title)', marginBottom: '5px', textTransform: 'uppercase' }}>
                {archive.title}
              </h3>
              <div style={{ fontSize: '0.8em', color: 'var(--color-interface-light)', fontFamily: 'var(--font-title)', marginBottom: '10px' }}>
                <span style={{ color: 'var(--color-accent-neon)' }}>{archive.date}</span> <br/> {archive.role}
              </div>
              <p style={{ fontSize: '0.85em', color: 'var(--color-text-primary)', lineHeight: '1.4' }}>
                {archive.shortDesc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* --- MODAL POP-UP STYLE GITS --- */}
      {selectedArchive && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 9999,
          backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)',
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          animation: 'fadeIn 0.2s ease'
        }}
        onClick={() => setSelectedArchive(null)} 
        >
          <div style={{
            width: '850px', maxWidth: '90%', height: 'auto', maxHeight: '85vh', marginTop: isMobile ? '0' : '80px',
            overflowY: 'auto', backgroundColor: '#0a0a0a',
            border: '1px solid var(--color-accent-neon)',
            padding: '0', position: 'relative',
            clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)',
            boxShadow: '0 0 30px var(--color-accent-neon)'
          }}
          onClick={(e) => e.stopPropagation()} 
          >
            {/* Header de la Modal */}
            <div style={{ padding: '15px 30px', borderBottom: '1px solid var(--color-accent-neon)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255, 0, 193, 0.05)' }}>
                <div>
                    <h2 style={{ color: 'var(--color-accent-neon)', margin: 0, fontSize: '1.5em', textTransform: 'uppercase', fontFamily: 'var(--font-title)' }}>{selectedArchive.title}</h2>
                    <div style={{ fontSize: '0.7em', fontFamily: 'var(--font-code)', color: '#aaa', marginTop: '5px' }}>
                        {selectedArchive.date}  //  {selectedArchive.role}
                    </div>
                </div>
                <button onClick={() => setSelectedArchive(null)} style={{ background: 'transparent', border: '1px solid var(--color-accent-neon)', color: 'var(--color-accent-neon)', padding: '8px 20px', fontFamily: 'var(--font-title)', fontSize: '0.8em', cursor: 'pointer', textTransform: 'uppercase', transition: 'all 0.2s' }} onMouseEnter={(e) => {e.currentTarget.style.background = 'var(--color-accent-neon)'; e.currentTarget.style.color = '#000'}} onMouseLeave={(e) => {e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-accent-neon)'}}>
                    FERMER [X]
                </button>
            </div>

            {/* Contenu de la Modal */}
            <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {/* Espace pour le lecteur vidéo complet */}
              <div style={{ 
                width: '100%', height: '300px', backgroundColor: '#000', 
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                border: '1px dashed #333', color: '#444', fontFamily: 'var(--font-title)'
              }}>
                [ EMPLACEMENT DU LECTEUR VIDÉO ]
              </div>

              <div>
                  <h4 style={{ color: 'var(--color-accent-neon)', fontSize: '1em', marginBottom: '8px', fontFamily: 'var(--font-title)' }}>// DOSSIER CLASSIFIÉ</h4>
                  <p style={{ color: '#ccc', lineHeight: '1.6', fontSize: '0.95em', fontFamily: 'sans-serif' }}>
                    {selectedArchive.fullDesc}
                  </p>
              </div>

              <div style={{ borderTop: '1px solid #333', paddingTop: '20px', textAlign: 'center' }}>
                  <button style={{
                    display: 'inline-block', background: 'transparent', border: '1px solid var(--color-accent-neon)', color: 'var(--color-accent-neon)', padding: '12px 30px', fontFamily: 'var(--font-title)', fontSize: '0.9em', letterSpacing: '1px', transition: 'all 0.3s', cursor: 'pointer'
                  }} onMouseEnter={(e) => {e.currentTarget.style.background = 'var(--color-accent-neon)'; e.currentTarget.style.color = '#000'}} onMouseLeave={(e) => {e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-accent-neon)'}}>
                    [ ACCÉDER AU RAPPORT COMPLET ]
                  </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ArchivesPage;