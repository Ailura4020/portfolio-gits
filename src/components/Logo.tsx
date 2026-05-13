import React from 'react';
import useIsMobile from '../hooks/useIsMobile';

const Logo: React.FC = () => {
  const isMobile = useIsMobile(1024);

  // SI MOBILE : ON NE REND RIEN
  if (isMobile) return null;

  // VERSION DESKTOP UNIQUEMENT
  return (
    <div 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: 10001,
        position: 'relative',
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        border: '2px solid var(--color-accent-neon)',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        overflow: 'hidden', 
        boxShadow: '0 0 15px rgba(255, 0, 193, 0.3)',
      }}
    >
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle, rgba(255, 0, 193, 0.15) 0%, transparent 70%)',
      }} />
      
      <img 
        src="/logo_ailura_512.png" 
        alt="Ailura System" 
        style={{ 
          width: '110%', 
          height: '110%', 
          objectFit: 'contain',
          filter: 'drop-shadow(0 0 8px var(--color-accent-neon))',
          transform: 'scale(1.1)', 
        }} 
      />
    </div>
  );
};

export default Logo;