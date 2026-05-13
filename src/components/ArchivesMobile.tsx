// src/components/ArchivesMobile.tsx
import React, { useState } from 'react';
import { type ArchiveData } from '../data/archivesData';

interface MobileProps { 
  archives: ArchiveData[]; 
  onSelectArchive: (a: ArchiveData) => void; 
}

const ArchivesMobile: React.FC<MobileProps> = ({ archives, onSelectArchive }) => {
  const ITEMS_PER_PAGE = 4; // Affichage 4 par 4 comme demandé
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(archives.length / ITEMS_PER_PAGE);
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const visibleArchives = archives.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const nextPage = () => { if (currentPage < totalPages - 1) setCurrentPage(curr => curr + 1); };
  const prevPage = () => { if (currentPage > 0) setCurrentPage(curr => curr - 1); };

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '15px' }}>
      {/* LISTE DES DOSSIERS D'ARCHIVES */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {visibleArchives.map((archive) => (
          <div 
            key={archive.id} 
            onClick={() => onSelectArchive(archive)}
            style={{
              background: 'rgba(15, 5, 15, 0.8)', // Teinte magenta très sombre
              border: '1px solid rgba(255, 0, 255, 0.1)',
              borderLeft: '4px solid var(--color-accent-neon)', // Bordure Rose/Magenta
              padding: '18px 20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
              WebkitTapHighlightColor: 'transparent',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)'
            }}
          >
            <div style={{ overflow: 'hidden', paddingRight: '10px' }}>
              <div style={{ 
                color: 'var(--color-accent-neon)', 
                fontFamily: 'var(--font-code)', 
                fontSize: '0.6em', 
                marginBottom: '4px',
                opacity: 0.8 
              }}>
                FILE_ID: {archive.id}
              </div>
              <div style={{ 
                color: '#fff', 
                fontFamily: 'var(--font-title)', 
                fontSize: '0.9em', 
                letterSpacing: '1px',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}>
                {archive.title}
              </div>
              <div style={{ 
                color: 'var(--color-accent-neon)', 
                fontFamily: 'var(--font-code)', 
                fontSize: '0.55em', 
                marginTop: '4px' 
              }}>
                DATE: {archive.date || "UNKNOWN"}
              </div>
            </div>
            <div style={{ color: 'var(--color-accent-neon)', fontSize: '1.2em', opacity: 0.6 }}>
              {'>'}
            </div>
          </div>
        ))}
      </div>

      {/* SYSTÈME DE PAGINATION TACTILE */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: '25px', 
        padding: '20px 0',
        fontFamily: 'var(--font-code)',
        borderTop: '1px solid rgba(255, 0, 255, 0.05)',
        marginTop: '10px'
      }}>
        <button 
          onClick={prevPage} 
          disabled={currentPage === 0}
          style={{ 
            background: 'none', border: 'none', 
            color: currentPage === 0 ? '#331a33' : 'var(--color-accent-neon)',
            fontSize: '1.2em', cursor: 'pointer',
            transition: 'all 0.3s'
          }}
        >
          {'<<'}
        </button>
        
        <div style={{ textAlign: 'center' }}>
          <span style={{ color: '#fff', fontSize: '0.75em', letterSpacing: '2px' }}>
            DOSSIER <span style={{ color: 'var(--color-accent-neon)' }}>{String(currentPage + 1).padStart(2, '0')}</span> / {String(totalPages).padStart(2, '0')}
          </span>
        </div>

        <button 
          onClick={nextPage} 
          disabled={currentPage === totalPages - 1}
          style={{ 
            background: 'none', border: 'none', 
            color: currentPage === totalPages - 1 ? '#331a33' : 'var(--color-accent-neon)',
            fontSize: '1.2em', cursor: 'pointer',
            transition: 'all 0.3s'
          }}
        >
          {'>>'}
        </button>
      </div>
    </div>
  );
};

export default ArchivesMobile;