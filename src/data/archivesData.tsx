// src/data/archivesData.tsx
import React from 'react';

// --- LE MOULE DE TES DONNÉES ---
export interface ArchiveData {
  id: string;
  type: 'MISSION MAJEURE' | 'ÉVÉNEMENT';
  title: string;
  date: string;
  role: string;
  shortDesc: string;
  fullDesc: React.ReactNode; 
  link?: string; 
  thumbnail?: string; 
  modalMedia?: {
    type: 'image' | 'video'; 
    url: string; 
  };
  gallery?: string[]; 
}

// --- TA BASE DE DONNÉES ---
export const ARCHIVES_DATA: ArchiveData[] = [
  // --- PROJET 1 : ROLEXPLORER ---
  {
    id: 'OP-ROBLOX-ISCOM-01',
    type: 'MISSION MAJEURE',
    title: 'CHALLENGE METAVERSE : ROLEXPLORER',
    date: 'SYS.DATE : 2025.03',
    role: 'RÔLE : DÉVELOPPEUSE (ZONE01)',
    shortDesc: '1ère place au hackathon inter-écoles (1 semaine). Conception d\'un jeu Roblox immersif.',
    thumbnail: '/archives/logo_rolexplorer.png', 
    modalMedia: {
      type: 'video', 
      url: '/archives/clip_rolexplorer.mov' 
    },
    gallery: [
      '/archives/rolex_image1.png',
      '/archives/rolex_image2.png',
      '/archives/rolex_image3.png',
      '/archives/rolex_image4.png'
    ],
    fullDesc: (
      <>
        <p style={{ marginBottom: '15px' }}>
          <strong>[ CONTEXTE ]</strong><br/>
          Participation et <strong>victoire (1ère place 🥇)</strong> au Challenge Metaverse organisé en partenariat avec l'école ISCOM. Huit équipes pluridisciplinaires se sont affrontées pour concevoir en cinq jours un jeu sur Roblox mettant en valeur une marque.
        </p>
        
        <p style={{ marginBottom: '10px', color: 'var(--color-accent-neon)' }}>
          <strong>// COLLABORATIONS & RÔLES :</strong>
        </p>
        <ul style={{ paddingLeft: '20px', marginBottom: '15px', color: '#ccc', listStyleType: 'square' }}>
          <li style={{ marginBottom: '8px' }}>
            <strong style={{ color: '#fff' }}>Escouade Zone01 (Développement) :</strong> Intégration de mécaniques innovantes, d'éléments interactifs et d'un design immersif. Apprentissage express de Roblox Studio en moins de 24h et répartition des tâches techniques.
          </li>
          <li>
            <strong style={{ color: '#fff' }}>Escouade ISCOM (Communication) :</strong> Élaboration de la stratégie de communication, du plan de vente et de l'identité visuelle cohérente pour la marque.
          </li>
        </ul>

        <p style={{ marginBottom: '15px' }}>
          <strong>[ DÉFIS & RÉSOLUTION ]</strong><br/>
          La contrainte de temps (1 semaine) a nécessité une organisation impeccable. La synergie du groupe entre technologie (Zone01) et créativité marketing (ISCOM) a été le véritable catalyseur de ce succès.
        </p>

        <p>
          <strong>[ RÉSULTAT ]</strong><br/>
          Soutenance finale devant un jury d'experts. L'originalité et la qualité de la réalisation ont propulsé l'équipe à la première place.
        </p>
      </>
    )
    // Pas de lien, le bouton n'apparaît pas
  },

  // --- PROJET 2 : BUENO CREAM PASTRY ---
  {
    id: 'OP-ROBLOX-ISCOM-02',
    type: 'MISSION MAJEURE',
    title: 'BUENO CREAM PASTRY : METAVERSE V2',
    date: 'SYS.DATE : 2025.05', 
    role: 'RÔLE : CHEFFE DE PROJET / LIAISON ISCOM',
    shortDesc: 'Seconde victoire consécutive 🥇. Conception d\'un jeu Roblox immersif de gestion (Tycoon) complexe.',
    thumbnail: '/archives/logo_bueno.png', 
    modalMedia: {
      type: 'video', 
      url: '/archives/bueno_trailer.mov' 
    },
    gallery: [
      '/archives/bueno-img1.png',
      '/archives/bueno-img2.png',
      '/archives/bueno-img3.png',
      '/archives/bueno-img4.png'
    ],
    fullDesc: (
      <>
        <p style={{ marginBottom: '15px' }}>
          <strong>[ ÉVOLUTION TACTIQUE ]</strong><br/>
          Seconde participation au Challenge Metaverse et <strong>seconde victoire (1ère place 🥇)</strong>. L'objectif : repousser nos limites en créant un jeu de type <em>Tycoon</em> (gestion de restaurant) dans l'univers de Kinder Bueno Creamy, à destination des 8-18 ans.
        </p>
        
        <p style={{ marginBottom: '10px', color: 'var(--color-accent-neon)' }}>
          <strong>// LEADERSHIP & DÉVELOPPEMENT :</strong>
        </p>
        <ul style={{ paddingLeft: '20px', marginBottom: '15px', color: '#ccc', listStyleType: 'square' }}>
          <li style={{ marginBottom: '8px' }}>
            <strong style={{ color: '#fff' }}>Chefferie de Projet (Mon Rôle) :</strong> Direction des opérations, animation des réunions inter-équipes et traduction des besoins marketing (ISCOM) en spécifications techniques pour les développeurs (Zone01).
          </li>
          <li>
            <strong style={{ color: '#fff' }}>Complexité Technique (Tycoon) :</strong> Programmation d'un système économique complet, gestion d'inventaire interactif, système de quêtes et interactions avec des PNJ (Personnages Non Joueurs).
          </li>
        </ul>

        <p style={{ marginBottom: '15px' }}>
          <strong>[ SYNERGIE 360° ]</strong><br/>
          L'enjeu majeur était d'aligner une mécanique de jeu addictive avec une campagne marketing massive (intégration de YouTube Ads, Influenceurs, KPIs de rétention). Le code devait servir la stratégie d'engagement de la marque.
        </p>

        <p>
          <strong>[ RÉSULTAT ]</strong><br/>
          Le jury a salué l'équilibre parfait entre la richesse des mécaniques de jeu et l'efficacité de la stratégie publicitaire. Une preuve concrète de la puissance d'une collaboration Tech/Marketing réussie.
        </p>
      </>
    )
    // Pas de lien, le bouton n'apparaît pas
  }
];