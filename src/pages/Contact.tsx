// src/pages/Contact.tsx
import React, { useState } from 'react';

const SocialCard: React.FC<{ 
  title: string; 
  role: string; 
  link: string; 
  color: string; 
  iconLabel: string;
}> = ({ title, role, link, color, iconLabel }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        // DIMENSIONS RÉDUITES (Plus élégant)
        flex: '1 1 280px',
        maxWidth: '350px', // On empêche les blocs de devenir énormes
        height: '180px',   // Hauteur plus compacte (était 250px)
        
        textDecoration: 'none',
        position: 'relative',
        cursor: 'pointer',
        
        // STYLE GLOBAL
        backgroundColor: 'rgba(5, 10, 20, 0.6)', 
        border: `1px solid ${isHovered ? color : 'rgba(255, 255, 255, 0.15)'}`, 
        backdropFilter: 'blur(10px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'all 0.4s ease',
        boxShadow: isHovered ? `0 0 25px ${color}33` : 'none', // Lueur plus douce
        clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)', // Coins un peu moins coupés
      }}
    >
      {/* Icone / Label Central */}
      <div style={{
        fontSize: '3em', // Réduit (était 4em)
        color: isHovered ? color : 'rgba(255, 255, 255, 0.5)',
        transition: 'color 0.3s ease',
        marginBottom: '5px',
        fontFamily: 'var(--font-title)'
      }}>
        {iconLabel}
      </div>

      {/* Titre */}
      <h3 style={{ 
        color: '#fff', fontSize: '1.3em', textTransform: 'uppercase', letterSpacing: '2px', margin: '0 0 5px 0',
        textShadow: isHovered ? `0 0 10px ${color}` : 'none'
      }}>
        {title}
      </h3>

      {/* Rôle / Description */}
      <div style={{ 
        color: isHovered ? color : 'rgba(200, 200, 200, 0.6)', 
        fontFamily: 'var(--font-code)', fontSize: '0.75em', letterSpacing: '1px' 
      }}>
        {role}
      </div>

      {/* Déco "Scan" au survol (Lignes Haut et Bas) */}
      <div style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '1px',
        background: color, opacity: isHovered ? 1 : 0, boxShadow: `0 0 10px ${color}`, transition: 'opacity 0.3s ease'
      }}></div>
       <div style={{
        position: 'absolute', bottom: 0, right: 0, width: '100%', height: '1px',
        background: color, opacity: isHovered ? 1 : 0, boxShadow: `0 0 10px ${color}`, transition: 'opacity 0.3s ease'
      }}></div>

    </a>
  );
};

const ContactPage: React.FC = () => {
  return (
    <div style={{ 
      paddingTop: '50px', 
      minHeight: '80vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'space-between'
    }}>
      
      {/* --- HEADER --- */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{ 
          fontSize: '3.5em', color: '#fff', marginBottom: '15px',
          textShadow: '0 0 20px rgba(255, 255, 255, 0.5)'
        }}>
          CANAL DE COMMUNICATION
        </h2>
        
        {/* BOUTON STATUS (VIOLET GIVRÉ) */}
        <div style={{ 
          display: 'inline-block',
          padding: '8px 20px',
          // Couleur Violette "Givrée" (#e0aaff)
          border: '1px solid #e0aaff',
          backgroundColor: 'rgba(224, 170, 255, 0.08)', // Fond très léger
          color: '#e0aaff',
          fontFamily: 'var(--font-code)',
          fontSize: '0.85em',
          fontWeight: 'bold',
          letterSpacing: '1.5px',
          boxShadow: '0 0 15px rgba(224, 170, 255, 0.2)',
          borderRadius: '2px'
        }}>
          ● STATUS: OPEN TO WORK (ALTERNANCE / PROJETS)
        </div>

        <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '20px', fontSize: '0.9em', fontFamily: 'var(--font-code)' }}>
          // INITIALISATION DU PROTOCOLE D'ÉCHANGE SÉCURISÉ...
        </p>
      </div>

      {/* --- CARTES DE LIAISON (TAILLE RÉDUITE) --- */}
      <div style={{ 
        display: 'flex', 
        gap: '30px', 
        justifyContent: 'center', 
        flexWrap: 'wrap',
        padding: '0 20px',
        marginBottom: '60px'
      }}>
        
        {/* LINKEDIN - Bleu Cyber */}
        <SocialCard 
          title="LINKEDIN" 
          role="> PROFESSIONAL UPLINK" 
          link="https://www.linkedin.com/in/ton-profil" 
          color="#0077b5" 
          iconLabel="[IN]"
        />

        {/* GITHUB - Violet/Blanc */}
        <SocialCard 
          title="GITHUB" 
          role="> SOURCE REPOSITORY" 
          link="https://github.com/Ailura4020" 
          color="#9f7aea" 
          iconLabel="[GIT]"
        />

      </div>

      {/* --- FOOTER SYSTÈME --- */}
      <footer style={{ 
        borderTop: '1px solid rgba(255, 255, 255, 0.1)', 
        padding: '40px 20px', 
        textAlign: 'center',
        marginTop: 'auto',
        background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'
      }}>
        
        {/* Bouton CV (Placeholder) */}
        <div style={{ marginBottom: '30px' }}>
          <a 
            href="/cv-ailura.pdf" 
            download // Indique au navigateur de télécharger
            style={{
              color: '#bbb', textDecoration: 'none', border: '1px solid #444', 
              padding: '12px 25px', fontSize: '0.8em', fontFamily: 'var(--font-code)',
              transition: 'all 0.3s',
              backgroundColor: 'rgba(0,0,0,0.3)'
            }}
            onMouseOver={(e) => { 
              e.currentTarget.style.borderColor = '#fff'; 
              e.currentTarget.style.color = '#fff'; 
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
            }}
            onMouseOut={(e) => { 
              e.currentTarget.style.borderColor = '#444'; 
              e.currentTarget.style.color = '#bbb';
              e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.3)';
            }}
          >
            [ DOWNLOAD DATA_SHEET (CV.PDF) ]
          </a>
        </div>

        <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.7em', fontFamily: 'var(--font-code)', lineHeight: '1.6' }}>
          <p>© 2025 PROJECT AILURA. SYSTEM INTEGRITY VERIFIED.</p>
          <p>CONCEPT & DEV: AILURA // HOSTING: GITHUB PAGES</p>
          <p style={{ marginTop: '10px' }}>// END OF TRANSMISSION //</p>
        </div>
      </footer>

    </div>
  );
};

export default ContactPage;