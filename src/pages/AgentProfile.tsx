import React, { useState, useRef, useEffect } from 'react';
import useIsMobile from '../hooks/useIsMobile';

const AgentProfile: React.FC = () => {
  const isMobile = useIsMobile(1024);
  const [isVisible, setIsVisible] = useState(false);
  const [imageTransform, setImageTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg)');
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // 1. DÉTECTION DU SCROLL (Activation de l'hologramme)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Déclenche l'animation quand 20% de la section est visible
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 2. GESTION DE LA 3D (Interactive après apparition)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !cardRef.current || !isVisible) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -12; 
    const rotateY = ((x - centerX) / centerX) * 12;
    
    setImageTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    setImageTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  return (
    <section ref={sectionRef} id="agent-profile" style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '100px', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      
     {/* STYLES CSS INJECTÉS POUR L'ILLUSION HOLOGRAPHIQUE (Ghost in the Shell) */}
      <style>
        {`
          /* Animation d'apparition du contenu (plus lente et décomposée) */
          @keyframes thermopticReveal {
            0% { opacity: 0; filter: blur(20px) brightness(2); transform: translateY(40px) scale(0.95); }
            20% { opacity: 0.8; filter: blur(3px) brightness(1.5); transform: translateY(10px) scale(0.98); }
            25% { opacity: 0.2; filter: blur(10px); }
            45% { opacity: 0.9; filter: blur(1px) brightness(1.2); transform: translateY(0px) scale(1); }
            55% { opacity: 0.4; filter: blur(4px); }
            70% { opacity: 1; filter: blur(0px) brightness(1); }
            80% { opacity: 0.8; }
            100% { opacity: 1; transform: translateY(0px) scale(1); filter: blur(0px); }
          }
          
          /* Animation du laser de balayage (plus lent) */
          @keyframes holographicScanline {
            0% { top: -5%; opacity: 0; }
            15% { opacity: 1; }
            85% { opacity: 1; }
            100% { top: 105%; opacity: 0; }
          }
          
          .holo-container {
            opacity: 0; /* Invisible par défaut */
          }
          
          /* Déclenchement au scroll (Durée augmentée à 2.8 secondes) */
          .holo-container.active {
            animation: thermopticReveal 2.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          }
          
          /* Le laser de balayage (Plus épais et plus lumineux) */
          .scanline {
            position: absolute;
            left: 0;
            width: 100%;
            height: 6px; /* Plus épais */
            background: rgba(0, 255, 255, 0.9); /* Cyan plus fort */
            box-shadow: 0 0 20px rgba(0, 255, 255, 1), 0 0 40px rgba(0, 255, 255, 0.6), 0 0 10px #ffffff; /* Halo intense */
            pointer-events: none;
            z-index: 10;
            opacity: 0;
          }
          
          /* Déclenchement du laser */
          .holo-container.active .scanline {
            animation: holographicScanline 2.8s ease-in-out forwards;
            animation-delay: 0.1s;
          }
        `}
      </style>

      <div style={{ position: 'relative', zIndex: 2, padding: isMobile ? '0 20px' : '0 40px', maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
        
        {/* EN-TÊTE FIXE */}
        <div style={{ marginBottom: '40px', paddingLeft: '20px', borderLeft: '4px solid var(--color-accent-neon)' }}>
          <h2 style={{ fontSize: isMobile ? '2.2em' : '4em', color: 'var(--color-accent-neon)', margin: '0 0 5px 0', textShadow: '0 0 15px var(--color-accent-neon)', fontFamily: 'var(--font-title)', textTransform: 'uppercase' }}>
            DOSSIER AGENT // CLASSIFIÉ
          </h2>
          <p style={{ color: 'var(--color-accent-teal)', fontFamily: 'var(--font-code)', letterSpacing: '0.1em', fontSize: isMobile ? '0.8em' : '1em', margin: 0 }}>
            // SYSTÈME DE CAMOUFLAGE : DÉSACTIVÉ //
          </p>
        </div>

        {/* CONTENEUR HOLOGRAPHIQUE (Apparaît au scroll) */}
        <div className={`holo-container ${isVisible ? 'active' : ''}`} style={{ position: 'relative' }}>
          
          {/* La ligne de balayage lumineuse */}
          <div className="scanline"></div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '350px 1fr', gap: '40px' }}>
            
            {/* COLONNE GAUCHE : IDENTITÉ VISUELLE (Avec effet 3D) */}
            <div 
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ 
                border: '1px solid rgba(0, 255, 255, 0.3)', padding: '15px', background: 'rgba(5, 10, 15, 0.8)',
                transform: imageTransform, transition: 'transform 0.1s ease-out, box-shadow 0.3s ease', transformStyle: 'preserve-3d',
                backdropFilter: 'blur(5px)', height: 'fit-content',
                boxShadow: isVisible ? '0 0 20px rgba(0, 255, 255, 0.05)' : 'none'
              }}
            >
              <div style={{ width: '100%', aspectRatio: '3/4', background: '#000', border: '1px solid #222', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative' }}>
                {/* L'emplacement de ta future image */}
                <img src="/archives/ta-photo-agent.jpg" alt="Major Ailura" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.1) sepia(0.2) hue-rotate(180deg)' }} />
              </div>
              <div style={{ marginTop: '20px', fontFamily: 'var(--font-code)', fontSize: '0.85em', color: 'var(--color-interface-light)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span>ID:</span> <strong style={{ color: '#fff', textShadow: '0 0 5px rgba(255,255,255,0.5)' }}>MAJOR AILURA</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span>NOM:</span> <strong style={{ color: '#fff' }}>Justine FAURE</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span>CLASS:</span> <strong style={{ color: 'rgba(0, 255, 255, 0.9)' }}>BUSINESS ANALYST</strong>
                </div>
              </div>
            </div>

            {/* COLONNE DROITE : TRANSMISSION DIRECTE */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ background: 'rgba(5, 10, 15, 0.6)', border: '1px solid rgba(0, 255, 255, 0.2)', padding: isMobile ? '20px' : '40px', height: '100%' }}>
                <h4 style={{ color: 'rgba(0, 255, 255, 0.9)', fontFamily: 'var(--font-title)', marginBottom: '25px', fontSize: '1.4em', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ display: 'inline-block', width: '8px', height: '8px', background: 'rgba(0, 255, 255, 0.9)', borderRadius: '50%', boxShadow: '0 0 10px rgba(0,255,255,0.8)' }}></span>
                  // TRANSMISSION DIRECTE : ÉTABLIE
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
        </div>
      </div>
    </section>
  );
};

export default AgentProfile;