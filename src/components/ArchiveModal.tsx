// src/components/ArchiveModal.tsx
import React, { useEffect } from 'react';
import { type ArchiveData } from '../data/archivesData';

interface ArchiveModalProps {
  archive: ArchiveData;
  onClose: () => void;
}

const ArchiveModal: React.FC<ArchiveModalProps> = ({ archive, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  if (!archive) return null;

  // --- LOGIQUE MÉDIA BASÉE SUR TES DONNÉES ---
  // On vérifie si modalMedia est une vidéo, sinon on prend la 1ère image de la galerie
  const hasVideo = archive.modalMedia?.type === 'video';
  const mainImage = archive.gallery && archive.gallery.length > 0 
    ? archive.gallery[0] 
    : archive.thumbnail; // Repli sur thumbnail si pas de galerie

  return (
    <div style={{
      position: 'fixed',
      top: '80px', 
      left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(10, 5, 10, 0.98)',
      zIndex: 10000,
      display: 'flex',
      flexDirection: 'column',
      backdropFilter: 'blur(15px)',
      borderTop: '1px solid var(--color-accent-neon)',
    }}>
      {/* HEADER */}
      <div style={{
        padding: '15px 20px',
        borderBottom: '1px solid rgba(255, 0, 255, 0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#0a050a'
      }}>
        <div style={{ fontFamily: 'var(--font-title)', color: 'var(--color-accent-neon)', fontSize: '0.9em', textTransform: 'uppercase' }}>
          {archive.title}
        </div>
        <button onClick={onClose} style={{
          background: 'var(--color-accent-neon)', color: '#000', border: 'none',
          padding: '8px 12px', fontFamily: 'var(--font-code)', fontWeight: 'bold'
        }}>
          FERMER [X]
        </button>
      </div>

      {/* CONTENU */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
        
        {/* MÉDIA PRIORITAIRE */}
        <div style={{ width: '100%', backgroundColor: '#000', marginBottom: '20px', border: '1px solid #331a33', display: 'flex', justifyContent: 'center' }}>
          {hasVideo ? (
            <video src={archive.modalMedia?.url} autoPlay loop muted playsInline style={{ width: '100%', maxHeight: '220px', objectFit: 'contain' }} />
          ) : mainImage ? (
            <img src={mainImage} alt="" style={{ width: '100%', maxHeight: '220px', objectFit: 'contain' }} />
          ) : (
            <div style={{ padding: '40px', color: '#442244', textAlign: 'center', fontFamily: 'var(--font-code)' }}>
              [ DATA_VISUAL_ENCRYPTED ]
            </div>
          )}
        </div>

        {/* INFOS */}
        <div style={{ marginBottom: '25px' }}>
          <div style={{ color: 'var(--color-accent-neon)', fontSize: '0.8em', marginBottom: '5px', fontFamily: 'var(--font-code)' }}>
            // {archive.date}
          </div>
          <div style={{ color: '#888', fontSize: '0.7em', marginBottom: '15px', fontFamily: 'var(--font-code)' }}>
            {archive.role}
          </div>
          
          <h4 style={{ color: 'var(--color-accent-neon)', borderBottom: '1px dashed #442244', paddingBottom: '8px', fontSize: '0.85rem' }}>
            // MISSION_REPORT
          </h4>
          
          {/* Utilisation de fullDesc (ReactNode) */}
          <div style={{ color: '#ccc', lineHeight: '1.7', fontSize: '0.9rem', marginTop: '15px' }}>
             {archive.fullDesc} 
          </div>
        </div>

        {/* CTA DESKTOP */}
        <div style={{ padding: '15px', border: '1px dashed #442244', textAlign: 'center', fontSize: '0.65em', color: '#663366', marginBottom: '20px', fontFamily: 'var(--font-code)' }}>
          [ ANALYSE COMPLÈTE ET GALERIE : ACCÈS VIA TERMINAL DESKTOP UNIQUEMENT ]
        </div>

        {/* LIEN DE RAPPORT */}
        {archive.link && (
          <a href={archive.link} target="_blank" rel="noreferrer" style={{
            display: 'block', padding: '15px', textAlign: 'center',
            border: '1px solid var(--color-accent-neon)', color: 'var(--color-accent-neon)',
            textDecoration: 'none', fontFamily: 'var(--font-title)'
          }}>
            VOIR LE RAPPORT OFFICIEL
          </a>
        )}
      </div>
    </div>
  );
};

export default ArchiveModal;