// src/pages/Contact.tsx
import React, { useState } from 'react';
import useIsMobile from '../hooks/useIsMobile';
import DecryptedText from '../components/DecryptedText';

const SocialCard: React.FC<{ 
  title: string; 
  role: string; 
  link: string; 
  color: string; 
  iconLabel: string;
  isMobile: boolean;
}> = ({ title, role, link, color, iconLabel, isMobile }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        // DIMENSIONS MOBILES OPTIMISÉES
        flex: isMobile ? '1 1 100%' : '1 1 280px', // Prend toute la largeur sur mobile
        width: isMobile ? '100%' : 'auto',
        maxWidth: '400px', // Max confortable
        height: isMobile ? '100px' : '180px', // Beaucoup moins haut sur mobile (Bouton large)
        
        textDecoration: 'none',
        position: 'relative',
        cursor: 'pointer',
        backgroundColor: 'rgba(5, 10, 20, 0.6)', 
        border: `1px solid ${isHovered ? color : 'rgba(255, 255, 255, 0.15)'}`, 
        backdropFilter: 'blur(10px)',
        display: 'flex',
        flexDirection: isMobile ? 'row' : 'column', // Ligne sur mobile (Icone à gauche, Texte à droite)
        justifyContent: isMobile ? 'flex-start' : 'center',
        alignItems: 'center',
        padding: isMobile ? '0 30px' : '0', // Padding latéral sur mobile
        gap: isMobile ? '20px' : '0', // Espace entre icone et texte sur mobile
        
        transition: 'all 0.4s ease',
        boxShadow: isHovered ? `0 0 25px ${color}33` : 'none',
        clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)',
      }}
    >
      {/* Icone */}
      <div style={{
        fontSize: isMobile ? '2.5em' : '3em', 
        color: isHovered ? color : 'rgba(255, 255, 255, 0.5)',
        transition: 'color 0.3s ease',
        marginBottom: isMobile ? '0' : '5px',
        fontFamily: 'var(--font-title)'
      }}>
        {iconLabel}
      </div>

      {/* Textes */}
      <div style={{ textAlign: isMobile ? 'left' : 'center' }}>
        <h3 style={{ 
          color: '#fff', fontSize: '1.3em', textTransform: 'uppercase', letterSpacing: '2px', margin: '0',
          textShadow: isHovered ? `0 0 10px ${color}` : 'none'
        }}>
          {title}
        </h3>
        
        {/* On affiche le rôle même sur mobile maintenant car on a de la place à droite */}
        <div style={{ 
          color: isHovered ? color : 'rgba(200, 200, 200, 0.6)', 
          fontFamily: 'var(--font-code)', fontSize: '0.75em', letterSpacing: '1px', marginTop: '5px'
        }}>
          {role}
        </div>
      </div>

      {/* Déco Lignes */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '1px', background: color, opacity: isHovered ? 1 : 0, boxShadow: `0 0 10px ${color}`, transition: 'opacity 0.3s ease' }}></div>
      <div style={{ position: 'absolute', bottom: 0, right: 0, width: '100%', height: '1px', background: color, opacity: isHovered ? 1 : 0, boxShadow: `0 0 10px ${color}`, transition: 'opacity 0.3s ease' }}></div>
    </a>
  );
};

const ContactPage: React.FC = () => {
  const isMobile = useIsMobile(); 

  return (
    <div style={{ 
      paddingTop: '50px', 
      minHeight: '80vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'space-between'
    }}>
      
      {/* HEADER */}
      <div style={{ textAlign: 'center', marginBottom: isMobile ? '30px' : '50px' }}>
      <DecryptedText 
  text="CANAL DE COMMUNICATION"
  style={{ 
    fontSize: '3.5em', 
    color: '#fff', 
    marginBottom: '15px',
    textShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
    fontFamily: 'var(--font-title)'
  }} 
/>
        
        <div style={{ 
          display: 'inline-block',
          padding: '8px 20px',
          border: '1px solid #e0aaff',
          backgroundColor: 'rgba(224, 170, 255, 0.08)',
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

      {/* CARTES */}
      <div style={{ 
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row', // Colonne sur mobile
        alignItems: 'center',
        gap: isMobile ? '20px' : '30px', 
        justifyContent: 'center', 
        flexWrap: 'wrap',
        padding: '0 20px',
        marginBottom: isMobile ? '40px' : '60px',
        width: '100%'
      }}>
        <SocialCard title="LINKEDIN" role="> PROFESSIONAL UPLINK" link="https://www.linkedin.com/in/ton-profil" color="#0077b5" iconLabel="[IN]" isMobile={isMobile} />
        <SocialCard title="GITHUB" role="> SOURCE REPOSITORY" link="https://github.com/Ailura4020" color="#9f7aea" iconLabel="[GIT]" isMobile={isMobile} />
      </div>

      {/* FOOTER */}
      <footer style={{ 
        borderTop: '1px solid rgba(255, 255, 255, 0.1)', 
        padding: '40px 20px', 
        textAlign: 'center',
        marginTop: 'auto',
        background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'
      }}>
        
        {/* BOUTON CV AMÉLIORÉ */}
        <div style={{ marginBottom: '30px' }}>
          <a 
            href="/cv-ailura.pdf" 
            download
            style={{
              color: '#fff', 
              textDecoration: 'none', 
              border: '1px solid #fff', 
              padding: '15px 30px',     
              fontSize: '0.9em', 
              fontFamily: 'var(--font-code)',
              transition: 'all 0.3s',
              backgroundColor: 'rgba(255, 255, 255, 0.05)', 
              display: 'inline-block',
              letterSpacing: '1px',
              fontWeight: 'bold',
              boxShadow: '0 0 15px rgba(255,255,255,0.1)',
              width: isMobile ? '100%' : 'auto', // Pleine largeur sur mobile
              textAlign: 'center'
            }}
            onMouseOver={(e) => { 
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)';
              e.currentTarget.style.boxShadow = '0 0 25px rgba(255,255,255,0.3)';
              if(!isMobile) e.currentTarget.style.transform = 'scale(1.05)'; // Pas de zoom sur mobile
            }}
            onMouseOut={(e) => { 
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.boxShadow = '0 0 15px rgba(255,255,255,0.1)';
              if(!isMobile) e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            [ ⬇ DOWNLOAD DATA_SHEET (CV.PDF) ]
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