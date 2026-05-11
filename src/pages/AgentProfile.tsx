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
      
     {/* STYLES CSS INJECTÉS POUR L'ILLUSION HOLOGRAPHIQUE (Mise au point progressive & Aller-retour) */}
      <style>
        {`
          /* Mise au point progressive de la caméra */
          @keyframes thermopticReveal {
            0% { opacity: 0; filter: blur(20px) brightness(2); transform: translateY(20px); }
            30% { opacity: 0.6; filter: blur(10px) brightness(1.5); }
            50% { opacity: 0.4; filter: blur(12px); } /* Léger sursaut d'interférence */
            75% { opacity: 0.8; filter: blur(5px) brightness(1.2); }
            100% { opacity: 1; transform: translateY(0px); filter: blur(0px) brightness(1); }
          }
          
          /* Laser : Aller-retour (0% -> 50% -> 100%) */
          @keyframes holographicScanline {
            0% { top: -5%; opacity: 0; }
            10% { opacity: 1; }
            50% { top: 105%; opacity: 1; } /* Atteint le bas au milieu de l'animation */
            90% { opacity: 1; }
            100% { top: -5%; opacity: 0; } /* Remonte en haut à la fin */
          }
          
          .holo-container {
            opacity: 0; 
          }
          
          /* Le texte apparaît en 3 secondes */
          .holo-container.active {
            animation: thermopticReveal 3s ease-out forwards;
          }
          
          .scanline {
            position: absolute;
            left: 0;
            width: 100%;
            height: 6px;
            background: rgba(0, 255, 255, 0.9);
            box-shadow: 0 0 20px rgba(0, 255, 255, 1), 0 0 40px rgba(0, 255, 255, 0.6), 0 0 10px #ffffff;
            pointer-events: none;
            z-index: 10;
            opacity: 0;
          }
          
          /* Le laser dure 4 secondes pour faire l'aller-retour complet */
          .holo-container.active .scanline {
            animation: holographicScanline 4s ease-in-out forwards;
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
                <img src="/archives/agent-profil.jpg" alt="Major Ailura" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'none' }} />
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
                    Avant de plonger dans le code, j'ai forgé mon expérience sur le terrain (banque, retail). Ces années m'ont appris une chose essentielle : la technologie n'a de sens que si elle sert l'utilisateur. C'est cette conviction qui m'a poussée à me former intensivement au développement. Aujourd'hui, je me positionne comme un véritable "pont" entre le monde des machines (la technique) et celui des humains (le business, les clients).
                  </p>

                  <h5 style={{ color: '#fff', fontFamily: 'var(--font-title)', marginTop: '30px', marginBottom: '10px', borderBottom: '1px solid #333', paddingBottom: '5px' }}>
                    [ CAPACITÉS DE DÉPLOIEMENT : BUSINESS ANALYST ]
                  </h5>
                  <ul style={{ paddingLeft: '20px', marginBottom: '20px', color: '#ccc', listStyleType: 'square' }}>
                    <li style={{ marginBottom: '8px' }}><strong>Recueil & Analyse :</strong> Traduction des besoins utilisateurs en spécifications fonctionnelles claires.</li>
                    <li style={{ marginBottom: '8px' }}><strong>Agilité & Outils :</strong> Rédaction de User Stories, création de backlogs et modélisation de processus (UML/Merise).</li>
                    <li><strong>Coordination :</strong> Animation d'ateliers, suivi de projets IT transverses et facilitation entre les équipes Tech et Métier.</li>
                  </ul>

                  <h5 style={{ color: '#fff', fontFamily: 'var(--font-title)', marginTop: '30px', marginBottom: '10px', borderBottom: '1px solid #333', paddingBottom: '5px' }}>
                    [ DONNÉES COGNITIVES ANNEXES ]
                  </h5>
                  <p>
                    En dehors du réseau, mon système maintient son équilibre grâce à une forte appétence pour la <strong>créativité</strong>. Qu'il s'agisse de m'immerger dans des univers narratifs (lecture, jeux vidéo) ou de jouer de la musique, ces explorations nourrissent ma capacité à imaginer des solutions innovantes et orientées utilisateur.
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