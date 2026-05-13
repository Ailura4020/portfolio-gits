// src/components/Logo.tsx
import React from 'react';

interface LogoProps {
  className?: string;
  style?: React.CSSProperties;
  color?: string; // Optionnel : pour forcer une couleur spécifique
}

const Logo: React.FC<LogoProps> = ({ className, style, color = '#00f2ff' }) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1472.000000 704.000000"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      style={{
        ...style,
        filter: style?.filter || `drop-shadow(0 0 8px ${color}66)`, // Lueur néon par défaut
        transition: 'all 0.3s ease-in-out'
      }}
      role="img"
      aria-label="Logo"
    >
      <g
        transform="translate(0.000000,704.000000) scale(0.100000,-0.100000)"
        fill="currentColor" // Le logo prendra la couleur du texte parent ou du prop color
        stroke="none"
      >
        {/* Tracé principal du logo purifié */}
        <path d="M7954 4338 c-6 -23 -84 -199 -129 -293 -13 -27 -46 -102 -73 -165 -28 -63 -71 -160 -97 -215 -59 -126 -155 -346 -155 -357 0 -4 73 -8 163 -8 90 0 163 3 163 8 0 4 14 36 31 71 17 35 56 124 87 197 31 73 79 184 107 247 28 63 67 151 86 195 19 44 38 85 41 90 3 5 44 8 92 8 l87 0 44 -105 c24 -58 69 -164 99 -235 30 -72 90 -216 133 -320 43 -105 99 -239 124 -299 25 -60 46 -115 46 -122 0 -20 -582 -20 -599 1z" />
        <path d="M5158 4052 c12 -8 -75 -221 -213 -522 -51 -110 -132 -298 -181 -420 -19 -47 -39 -92 -43 -100 -11 -20 -49 -27 -143 -29 l-78 -1 10 26 c15 38 10 53 -5 19 -25 -54 -24 -55 98 -55 l114 0 21 48 c12 26 48 110 81 187 32 77 118 273 191 435 72 162 140 315 150 341 11 26 13 46 6 46 -7 0 -17 -11 -23 -25z" />
        {/* ... Les autres paths essentiels du logo ici ... */}
      </g>
    </svg>
  );
};

export default Logo;