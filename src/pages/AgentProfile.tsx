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
            DOSSIER AGENT
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
                <img src="/archives/agent-profil.jpg" alt="Major Ailura" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'none' }} />
              </div>
              <div style={{ marginTop: '20px', fontFamily: 'var(--font-code)', fontSize: '0.85em', color: 'var(--color-interface-light)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span>ID:</span> <strong style={{ color: '#fff', textShadow: '0 0 5px rgba(255,255,255,0.5)' }}>JUSTINE</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span>CLASS:</span> <strong style={{ color: 'rgba(0, 255, 255, 0.9)' }}>HUMAN RELAY</strong>
                </div>
              </div>
            </div>

            {/* COLONNE DROITE : TRANSMISSION DIRECTE */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ background: 'rgba(5, 10, 15, 0.6)', border: '1px solid rgba(0, 255, 255, 0.2)', padding: isMobile ? '20px' : '40px', height: '100%' }}>
                <h4 style={{ color: 'rgba(0, 255, 255, 0.9)', fontFamily: 'var(--font-title)', marginBottom: '25px', fontSize: '1.4em', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ display: 'inline-block', width: '8px', height: '8px', background: 'rgba(0, 255, 255, 0.9)', borderRadius: '50%', boxShadow: '0 0 10px rgba(0,255,255,0.8)' }}></span>
                  // L'HUMAIN AU CŒUR DE L'ARCHITECTURE
                </h4>
                
                <div style={{ color: 'var(--color-text-primary)', lineHeight: '1.8', fontSize: '1.05em', fontFamily: 'sans-serif' }}>
                  <p style={{ marginBottom: '20px' }}>
                    On vit dans une ère de haute technologie, un monde complexe et en perpétuel mouvement, à la manière des grandes cités futuristes qui ne dorment jamais. Mais au milieu de ces flux constants, ce qui m’importe, c’est ce qui se passe entre les êtres humains.
                  </p>
                  <p style={{ marginBottom: '20px' }}>
                    Je m'appelle Justine. Mon parcours est une trajectoire choisie : une série d’opportunités saisies avec audace, toujours avec l'idée de ne jamais me perdre en chemin.
                  </p>

                  <h5 style={{ color: '#fff', fontFamily: 'var(--font-title)', marginTop: '30px', marginBottom: '10px', borderBottom: '1px solid #333', paddingBottom: '5px' }}>
                    // MA VISION :
                  </h5>
                  <p style={{ marginBottom: '20px' }}>
                    Je considère la technique comme un langage, un outil pour traduire les besoins. Mais ma vraie spécialité, c’est le lien. Pour qu'un projet soit réussi, il faut plus que des compétences ; il faut de l'écoute, une confiance partagée et une envie commune de créer quelque chose qui a du sens. J'aime comprendre les gens, animer le dialogue entre les équipes et m'assurer que chaque voix compte.
                  </p>

                  <h5 style={{ color: '#fff', fontFamily: 'var(--font-title)', marginTop: '30px', marginBottom: '10px', borderBottom: '1px solid #333', paddingBottom: '5px' }}>
                    // CE QUI NOURRIT MON QUOTIDIEN :
                  </h5>
                  <p style={{ marginBottom: '20px' }}>
                    Je suis une exploratrice de possibles. Ma curiosité est mon moteur principal. En dehors du travail, je me régénère à travers mes passions : les univers narratifs qui stimulent l'imagination, la guitare, l'écriture, les voyages, et le calme nécessaire de la méditation. Ce bien-être est mon ancrage ; c’est grâce à lui que je peux aborder chaque nouvelle mission avec créativité et une vision claire.
                  </p>

                  <h5 style={{ color: '#fff', fontFamily: 'var(--font-title)', marginTop: '30px', marginBottom: '10px', borderBottom: '1px solid #333', paddingBottom: '5px' }}>
                    // TRAVAILLER AVEC MOI, C'EST :
                  </h5>
                  <ul style={{ paddingLeft: '20px', marginBottom: '20px', color: '#ccc', listStyleType: 'square' }}>
                    <li style={{ marginBottom: '8px' }}><strong>Une approche humaine :</strong> L'empathie avant tout.</li>
                    <li style={{ marginBottom: '8px' }}><strong>De la curiosité partagée :</strong> Apprendre, découvrir et évoluer ensemble.</li>
                    <li><strong>Une volonté de construire :</strong> Transformer l'idée en réalité, en équipe.</li>
                  </ul>
                  <p>
                    Je cherche des projets où l'on construit, où l'on échange et où l'on apporte une réelle valeur humaine.
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