// src/pages/Home.tsx

import React from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

// Ton accroche. Elle doit être courte et percutante, axée sur la double compétence.
const INTRO_TEXT = "SYSTEM ACCESS GRANTED. IDENTIFYING TARGET PROFILE... FULL STACK ARCHITECT WITH PEDAGOGICAL COACHING MATRIX INITIATED. BRIDGING TECHNICAL COMPLEXITY AND HUMAN INTERACTION.";

const HomePage: React.FC = () => {
  // Utilise le hook pour animer le texte. Vitesse : 35ms par caractère.
  const animatedText = useTypewriter(INTRO_TEXT, 35); 

  return (
    <section id="home" style={{ 
      minHeight: '80vh', 
      paddingTop: '100px', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center' // Centre le contenu verticalement
    }}>
      
      {/* Titre Principal */}
      <h1 style={{ 
        fontSize: '4em', 
        color: 'var(--color-accent-neon)', 
        marginBottom: '10px' 
      }}>
        [PROJECT AILURA - ACCESS LOG]
      </h1>

      {/* Accroche animée (Style Ligne de Commande) */}
      <div style={{
          backgroundColor: 'var(--color-bg-secondary)', // Un fond légèrement différent pour l'effet terminal
          padding: '20px',
          border: '1px solid var(--color-accent-teal)',
          minHeight: '100px',
          boxShadow: '0 0 10px rgba(0, 255, 255, 0.2)', // Légère lueur néon
          fontFamily: 'var(--font-title)', 
          fontSize: '1.2em',
          letterSpacing: '0.1em',
          color: 'var(--color-text-primary)'
      }}>
          <p>{animatedText}</p>
      </div>

    </section>
  );
};

export default HomePage;