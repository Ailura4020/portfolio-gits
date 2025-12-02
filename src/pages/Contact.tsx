// src/pages/Contact.tsx

import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <section id="contact" style={{ 
      minHeight: '80vh', // Un peu moins haut pour la fin
      paddingTop: '100px', 
      paddingBottom: '100px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    }}>
      
      {/* Titre */}
      <h2 style={{ fontSize: '3em', color: 'var(--color-text-title)', marginBottom: '20px' }}>
        [ CANAL DE COMMUNICATION ]
      </h2>
      <p style={{ 
        color: 'var(--color-accent-teal)', 
        fontFamily: 'var(--font-title)', 
        letterSpacing: '0.2em',
        marginBottom: '60px'
      }}>
        // INITIALISATION DU PROTOCOLE D'ÉCHANGE SÉCURISÉ...
      </p>

      {/* Carte de Contact */}
      <div style={{
        backgroundColor: 'rgba(0, 18, 40, 0.8)',
        border: '1px solid var(--color-accent-neon)',
        padding: '50px',
        maxWidth: '600px',
        width: '100%',
        boxShadow: '0 0 30px rgba(0, 255, 255, 0.1)',
        position: 'relative'
      }}>
        
        {/* Lignes décoratives aux coins */}
        <div style={{ position: 'absolute', top: '-1px', left: '-1px', width: '20px', height: '20px', borderTop: '3px solid var(--color-accent-neon)', borderLeft: '3px solid var(--color-accent-neon)' }}></div>
        <div style={{ position: 'absolute', bottom: '-1px', right: '-1px', width: '20px', height: '20px', borderBottom: '3px solid var(--color-accent-neon)', borderRight: '3px solid var(--color-accent-neon)' }}></div>

        <p style={{ marginBottom: '40px', fontSize: '1.1em', color: 'var(--color-text-primary)' }}>
          Prêt à collaborer sur une nouvelle mission ou à échanger sur l'architecture système ? 
          <br/><br/>
          <span style={{ color: 'var(--color-accent-secondary)' }}>Status:</span> <span style={{ color: 'var(--color-accent-neon)' }}>OPEN TO WORK (ALTERNANCE / PROJETS)</span>
        </p>

        {/* Boutons d'action */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
          
          {/* Email */}
          <a href="mailto:ton.email@example.com" style={{ // REMPLACE PAR TON EMAIL
            width: '100%',
            padding: '15px',
            border: '1px solid var(--color-accent-neon)',
            color: 'var(--color-bg-primary)',
            backgroundColor: 'var(--color-accent-neon)',
            fontFamily: 'var(--font-title)',
            fontWeight: 'bold',
            fontSize: '1.1em',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            transition: 'all 0.3s ease',
            display: 'block'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = 'var(--color-accent-neon)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-accent-neon)';
            e.currentTarget.style.color = 'var(--color-bg-primary)';
          }}
          >
            [ INITIALISER L'EMAIL ]
          </a>

          <div style={{ display: 'flex', gap: '20px', width: '100%' }}>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/justine-faure/" target="_blank" rel="noopener noreferrer" style={{ // REMPLACE PAR TON LINKEDIN
              flex: 1,
              padding: '15px',
              border: '1px solid var(--color-interface-light)',
              color: 'var(--color-interface-light)',
              fontFamily: 'var(--font-title)',
              fontSize: '0.9em',
              display: 'block'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-accent-teal)';
              e.currentTarget.style.color = 'var(--color-accent-teal)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-interface-light)';
              e.currentTarget.style.color = 'var(--color-interface-light)';
            }}
            >
              :: LINKEDIN ::
            </a>

            {/* GitHub */}
            <a href="https://github.com/Ailura4020" target="_blank" rel="noopener noreferrer" style={{ // TON GITHUB EST DÉJÀ LÀ
              flex: 1,
              padding: '15px',
              border: '1px solid var(--color-interface-light)',
              color: 'var(--color-interface-light)',
              fontFamily: 'var(--font-title)',
              fontSize: '0.9em',
              display: 'block'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-accent-teal)';
              e.currentTarget.style.color = 'var(--color-accent-teal)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-interface-light)';
              e.currentTarget.style.color = 'var(--color-interface-light)';
            }}
            >
              :: GITHUB ::
            </a>
          </div>

        </div>
      </div>

      {/* Footer / Copyright */}
      <div style={{ marginTop: '100px', color: 'var(--color-interface-dark)', fontSize: '0.8em', fontFamily: 'var(--font-title)' }}>
        SYSTEM SHUTDOWN SEQUENCE INITIATED... <br/>
        © 2025 PROJECT AILURA. ALL RIGHTS RESERVED.
      </div>

    </section>
  );
};

export default ContactPage;