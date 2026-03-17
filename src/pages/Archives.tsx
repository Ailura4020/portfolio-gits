// src/pages/Archives.tsx
import React, { useState } from 'react';
import useIsMobile from '../hooks/useIsMobile';
import DecryptedText from '../components/DecryptedText';
import { ARCHIVES_DATA, type ArchiveData } from '../data/archivesData'; 

const ArchivesPage: React.FC = () => {
  const [selectedArchive, setSelectedArchive] = useState<ArchiveData | null>(null);
  const isMobile = useIsMobile(1024);

  return (
    <section id="archives" style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '100px' }}>
      <div style={{ position: 'relative', zIndex: 2, padding: isMobile ? '0 20px' : '0 40px', maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* TITRE */}
        <div style={{ marginBottom: '40px', paddingLeft: '20px', borderLeft: '4px solid var(--color-accent-neon)' }}>
          <DecryptedText 
            text="OPÉRATIONS EXTÉRIEURES"
            style={{ fontSize: isMobile ? '2.2em' : '4em', color: 'var(--color-accent-neon)', marginBottom: '5px', textShadow: '0 0 15px var(--color-accent-neon)', fontFamily: 'var(--font-title)', textTransform: 'uppercase' }}
          />
          <p style={{ color: 'var(--color-accent-teal)', fontFamily: 'var(--font-code)', letterSpacing: '0.1em', fontSize: isMobile ? '0.8em' : '1em' }}>
            // LIAISON HUMAINE, TRANSMISSIONS & LEADERSHIP
          </p>
        </div>

        {/* GRILLE DES CARTES */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: isMobile ? '20px' : '30px' }}>
          {ARCHIVES_DATA.map((archive) => (
            <div 
              key={archive.id} 
              onClick={() => setSelectedArchive(archive)}
              style={{
                backgroundColor: 'rgba(10, 15, 25, 0.65)', border: '1px solid var(--color-interface-dark)',
                clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)',
                display: 'flex', flexDirection: isMobile ? 'column' : 'row', cursor: 'pointer',
                transition: 'all 0.3s ease', backdropFilter: 'blur(5px)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-accent-neon)'; e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 0, 193, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-interface-dark)'; e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* LA MINIATURE */}
              <div style={{ 
                width: isMobile ? '100%' : '250px', height: isMobile ? '140px' : 'auto', 
                backgroundColor: 'rgba(0,0,0,0.5)', borderRight: isMobile ? 'none' : '1px solid var(--color-interface-dark)',
                borderBottom: isMobile ? '1px solid var(--color-interface-dark)' : 'none',
                display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden'
              }}>
                {archive.thumbnail ? (
                  <img src={archive.thumbnail} alt={archive.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <span style={{ color: 'var(--color-interface-light)', fontSize: '0.8em', fontFamily: 'var(--font-title)' }}>[ MEDIA N/A ]</span>
                )}
              </div>

              {/* LE TEXTE DE LA CARTE */}
              <div style={{ padding: '15px', flex: 1 }}>
                <div style={{ fontSize: '0.7em', color: archive.type === 'MISSION MAJEURE' ? 'var(--color-accent-neon)' : 'var(--color-accent-secondary)', fontFamily: 'var(--font-code)', marginBottom: '5px' }}>
                  ID: {archive.id}
                </div>
                <h3 style={{ fontSize: '1.2em', color: 'var(--color-text-title)', marginBottom: '5px', textTransform: 'uppercase' }}>
                  {archive.title}
                </h3>
                <div style={{ fontSize: '0.8em', color: 'var(--color-interface-light)', fontFamily: 'var(--font-code)', marginBottom: '10px' }}>
                  <span style={{ color: 'var(--color-accent-neon)' }}>{archive.date}</span> <br/> {archive.role}
                </div>
                <p style={{ fontSize: '0.85em', color: 'var(--color-text-primary)', lineHeight: '1.4' }}>
                  {archive.shortDesc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL POP-UP --- */}
      {selectedArchive && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 9999, backgroundColor: 'rgba(0, 0, 0, 0.85)', backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'fadeIn 0.2s ease', padding: isMobile ? '15px' : '0'
        }} onClick={() => setSelectedArchive(null)}>
          
          <div style={{
            width: '850px', maxWidth: '100%', height: 'auto', maxHeight: isMobile ? '90vh' : '85vh', marginTop: isMobile ? '0' : '80px',
            overflowY: 'auto', backgroundColor: '#0a0a0a', border: '1px solid var(--color-accent-neon)', 
            boxShadow: '0 0 30px rgba(255, 0, 193, 0.3)', position: 'relative', display: 'flex', flexDirection: 'column',
            clipPath: isMobile ? 'none' : 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'
          }} onClick={(e) => e.stopPropagation()}>
            
            {/* Header Modal */}
            <div style={{ padding: isMobile ? '15px' : '15px 30px', borderBottom: '1px solid var(--color-accent-neon)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', background: 'rgba(255, 0, 193, 0.05)' }}>
                <div style={{ paddingRight: '15px' }}>
                    <h2 style={{ color: 'var(--color-accent-neon)', margin: 0, fontSize: isMobile ? '1.2em' : '1.5em', textTransform: 'uppercase', fontFamily: 'var(--font-title)' }}>{selectedArchive.title}</h2>
                    <div style={{ fontSize: '0.7em', fontFamily: 'var(--font-code)', color: '#aaa', marginTop: '5px' }}>
                        {selectedArchive.date}  //  {selectedArchive.role}
                    </div>
                </div>
                <button onClick={() => setSelectedArchive(null)} style={{ background: 'transparent', border: '1px solid var(--color-accent-neon)', color: 'var(--color-accent-neon)', padding: '5px 10px', fontFamily: 'var(--font-title)', fontSize: '0.8em', cursor: 'pointer' }}>
                    [X]
                </button>
            </div>

            {/* Contenu Modal */}
            <div style={{ padding: isMobile ? '20px' : '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                
                {/* LECTEUR MEDIA DYNAMIQUE (IMAGE OU VIDÉO) */}
                <div style={{ width: '100%', height: isMobile ? '200px' : '350px', backgroundColor: '#000', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #333', overflow: 'hidden' }}>
                  {selectedArchive.modalMedia ? (
                    selectedArchive.modalMedia.type === 'video' ? (
                      <video src={selectedArchive.modalMedia.url} autoPlay loop muted controls style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    ) : (
                      <img src={selectedArchive.modalMedia.url} alt="Aperçu classifié" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    )
                  ) : (
                    <span style={{ color: '#444', fontFamily: 'var(--font-title)' }}>[ AUCUN MÉDIA CLASSIFIÉ ]</span>
                  )}
                </div>

                {/* TEXTE COMPLET */}
                <div>
                    <h4 style={{ color: 'var(--color-accent-neon)', fontSize: '1em', marginBottom: '8px', fontFamily: 'var(--font-title)' }}>// DOSSIER CLASSIFIÉ</h4>
                    <div style={{ color: '#ccc', lineHeight: '1.6', fontSize: '0.95em', fontFamily: 'sans-serif' }}>
                      {selectedArchive.fullDesc}
                    </div>
                </div>

                {/* NOUVEAU : GALERIE D'IMAGES (S'affiche uniquement s'il y a des images) */}
                {selectedArchive.gallery && selectedArchive.gallery.length > 0 && (
                  <div style={{ marginTop: '10px', borderTop: '1px solid #333', paddingTop: '20px' }}>
                    <h4 style={{ color: 'var(--color-accent-neon)', fontSize: '1em', marginBottom: '15px', fontFamily: 'var(--font-title)' }}>// CAPTURES SYSTÈME</h4>
                    <div style={{ 
                      display: 'grid', 
                      gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', 
                      gap: '15px' 
                    }}>
                      {selectedArchive.gallery.map((imgUrl, index) => (
                        <div key={index} style={{ 
                          border: '1px solid var(--color-interface-dark)', 
                          aspectRatio: '16/9', // Force un format rectangulaire
                          overflow: 'hidden',
                          backgroundColor: '#000'
                        }}>
                          <img 
                            src={imgUrl} 
                            alt={`Capture ${index + 1}`} 
                            style={{ 
                              width: '100%', 
                              height: '100%', 
                              objectFit: 'cover',
                              transition: 'transform 0.3s ease',
                            }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* BOUTON LIEN (S'affiche uniquement si un lien est fourni) */}
                {selectedArchive.link && (
                  <div style={{ borderTop: '1px solid #333', paddingTop: '20px', textAlign: 'center' }}>
                      <a href={selectedArchive.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', width: isMobile ? '100%' : 'auto', background: 'transparent', border: '1px solid var(--color-accent-neon)', color: 'var(--color-accent-neon)', padding: '12px 30px', fontFamily: 'var(--font-title)', fontSize: '0.9em', letterSpacing: '1px', textDecoration: 'none', transition: 'all 0.3s' }} onMouseEnter={(e) => {e.currentTarget.style.background = 'var(--color-accent-neon)'; e.currentTarget.style.color = '#000'}} onMouseLeave={(e) => {e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-accent-neon)'}}>
                          [ LIRE LE RAPPORT OFFICIEL ]
                      </a>
                  </div>
                )}
            </div>
            </div>
          </div>
      )}
    </section>
  );
};

export default ArchivesPage;