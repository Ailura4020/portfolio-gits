import React, { useState, useRef } from 'react';
import useIsMobile from '../hooks/useIsMobile';

const AgentProfile: React.FC = () => {
  const isMobile = useIsMobile(1024);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [imageTransform, setImageTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg)');
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -15; 
    const rotateY = ((x - centerX) / centerX) * 15;
    
    setImageTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    setImageTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  return (
    <section id="agent-profile" style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '100px', display: 'flex', alignItems: 'center' }}>
      {/* Correction de l'alignement : maxWidth passé à 1400px pour correspondre aux autres pages */}
      <div style={{ position: 'relative', zIndex: 2, padding: isMobile ? '0 20px' : '0 40px', maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
        
        {/* EN-TÊTE FIXE (Plus d'animation sur le titre) */}
        <div style={{ marginBottom: '40px', paddingLeft: '20px', borderLeft: '4px solid var(--color-accent-neon)' }}>
          <h2 style={{ 
              fontSize: isMobile ? '2.2em' : '4em', 
              color: 'var(--color-accent-neon)', 
              margin: '0 0 5px 0', 
              textShadow: '0 0 15px var(--color-accent-neon)', 
              fontFamily: 'var(--font-title)', 
              textTransform: 'uppercase' 
          }}>
            DOSSIER AGENT : MAJOR 
          </h2>
          <p style={{ color: 'var(--color-accent-teal)', fontFamily: 'var(--font-code)', letterSpacing: '0.1em', fontSize: isMobile ? '0.8em' : '1em', margin: 0 }}>
            // NIVEAU D'ACCRÉDITATION REQUIS : 5 // RECRUTEUR
          </p>
        </div>

        {/* ÉCRAN DE VERROUILLAGE */}
        {!isUnlocked ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '40vh', border: '1px dashed #333', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(5px)' }}>
            <div style={{ color: 'var(--color-accent-neon)', fontSize: '3em', marginBottom: '20px' }}>🔒</div>
            <h3 style={{ color: '#fff', fontFamily: 'var(--font-title)', letterSpacing: '2px', marginBottom: '30px' }}>ACCÈS RESTREINT</h3>
            <button 
              onClick={() => setIsUnlocked(true)}
              style={{
                background: 'transparent', border: '1px solid var(--color-accent-neon)', color: 'var(--color-accent-neon)',
                padding: '15px 40px', fontFamily: 'var(--font-title)', fontSize: '1em', letterSpacing: '2px', cursor: 'pointer',
                transition: 'all 0.3s', textTransform: 'uppercase'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-accent-neon)'; e.currentTarget.style.color = '#000'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-accent-neon)'; }}
            >
              DÉVERROUILLER LE DOSSIER
            </button>
          </div>
        ) : (
          
          /* CONTENU DU DOSSIER (Révélé) */
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '350px 1fr', gap: '40px', animation: 'fadeIn 1s ease forwards' }}>
            
            {/* COLONNE GAUCHE : IDENTITÉ VISUELLE (Avec effet 3D conservé) */}
            <div 
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ 
                border: '1px solid var(--color-interface-dark)', padding: '15px', background: 'rgba(10, 15, 25, 0.65)',
                transform: imageTransform, transition: 'transform 0.1s ease-out', transformStyle: 'preserve-3d',
                backdropFilter: 'blur(5px)', height: 'fit-content'
              }}
            >
              <div style={{ width: '100%', aspectRatio: '3/4', background: '#000', border: '1px solid #222', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                {/* L'emplacement de ta future image */}
                <img src="/archives/ta-photo-agent.jpg" alt="Major Ailura" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.1) grayscale(0.1)' }} />
              </div>
              <div style={{ marginTop: '20px', fontFamily: 'var(--font-code)', fontSize: '0.85em', color: 'var(--color-interface-light)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span>ID:</span> <strong style={{ color: '#fff' }}>MAJOR AILURA</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span>NOM:</span> <strong style={{ color: '#fff' }}>Justine FAURE</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span>CLASS:</span> <strong style={{ color: 'var(--color-accent-neon)' }}>BUSINESS ANALYST</strong>
                </div>
              </div>
            </div>

            {/* COLONNE DROITE : TRANSMISSION DIRECTE (Texte de présentation) */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              
              <div style={{ background: 'rgba(10, 15, 25, 0.4)', border: '1px solid var(--color-interface-dark)', padding: isMobile ? '20px' : '40px', height: '100%' }}>
                <h4 style={{ color: 'var(--color-accent-neon)', fontFamily: 'var(--font-title)', marginBottom: '25px', fontSize: '1.4em', letterSpacing: '1px' }}>
                  // TRANSMISSION DIRECTE : INTERCEPTÉE
                </h4>
                
                <div style={{ color: 'var(--color-text-primary)', lineHeight: '1.8', fontSize: '1.05em', fontFamily: 'sans-serif' }}>
                  <p style={{ marginBottom: '20px' }}>
                    Je m'appelle Justine, opérant sous l'identifiant <strong>Major Ailura</strong>. Mon parcours n'est pas linéaire, et c'est exactement ce qui fait ma force.
                  </p>
                  <p style={{ marginBottom: '20px' }}>
                    Avant de plonger dans le code et les bases de données, j'ai forgé mon expérience sur le terrain, dans les secteurs de la banque et du retail. Ces années m'ont appris une chose essentielle : la technologie n'a de sens que si elle sert l'utilisateur. C'est cette conviction profonde qui m'a poussée à me former intensivement au développement d'applications.
                  </p>
                  <p style={{ marginBottom: '20px' }}>
                    Aujourd'hui, je me positionne comme un profil hybride, un véritable "pont" entre le monde des machines (la technique) et celui des humains (le business, les clients). Lors de mon alternance, j'ai eu l'opportunité de créer et de coordonner une formation technique complète en totale autonomie, jonglant entre la gestion des priorités, l'animation d'ateliers et la communication avec des profils très techniques.
                  </p>
                  <p>
                    <strong>Ce que je propose ?</strong> Une compréhension rapide des enjeux métier, une gestion fluide de l'humain, et la capacité de naviguer dans des architectures complexes sans jamais y rester enfermée. Je suis prête à m'investir dans des projets IT transverses où la communication, l'organisation et la résolution de problèmes sont au centre du jeu.
                  </p>
                </div>
              </div>

            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AgentProfile;