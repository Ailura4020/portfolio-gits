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
    // --- SOIRÉE D'INTÉGRATION ZONE01 ---
  {
    id: 'OP-INTEGRATION-ZONE01',
    type: 'ÉVÉNEMENT', 
    title: 'THE PLAYGROUND : SOIRÉE D\'INTÉGRATION',
    date: 'SYS.DATE : 2025.11',
    role: 'RÔLE : LEAD AMBASSADRICE',
    shortDesc: 'Organisation de A à Z de la soirée d\'intégration annuelle. Conception, budgétisation et coordination logistique d\'un événement multi-activités pour fédérer le campus.',
    thumbnail: '/archives/Visuel_The_Playground.jpg',
    modalMedia: {
      type: 'image', 
      url: '/archives/Visuel_The_Playground.jpg' 
    },
    fullDesc: (
      <>
        <p style={{ marginBottom: '15px' }}>
          <strong>[ CONTEXTE ]</strong><br/>
          Organisation de la soirée d'intégration "The Playground", un événement créé sur mesure pour accueillir et fédérer la nouvelle promotion de Zone01. Une soirée placée sous le signe de l'échange, de l'E-Sport et de la cohésion d'équipe.
        </p>
        
        <p style={{ marginBottom: '10px', color: 'var(--color-accent-neon)' }}>
          <strong>// RESPONSABILITÉS & COORDINATION :</strong>
        </p>
        <ul style={{ paddingLeft: '20px', marginBottom: '15px', color: '#ccc', listStyleType: 'square' }}>
          <li style={{ marginBottom: '8px' }}>
            <strong style={{ color: '#fff' }}>Pilotage d'équipe :</strong> Responsable du pôle des ambassadeurs/rices. Animation de réunions hebdomadaires, délégation des tâches stratégiques et interface directe avec le directeur du campus.
          </li>
          <li>
            <strong style={{ color: '#fff' }}>Gestion Opérationnelle :</strong> Élaboration et suivi du budget, gestion de la communication (teasing, inscriptions) et création des formulaires de satisfaction post-événement.
          </li>
        </ul>

        <p style={{ marginBottom: '15px' }}>
          <strong>[ LOGISTIQUE & PROGRAMME ]</strong><br/>
          Coordination de multiples pôles d'activités en simultané : gestion des intervenants (DJs, animateurs de jeux de rôles), mise en place de tournois E-Sport (Valorant, League of Legends, Smash Bros), et logistique du rafraîchissement (tickets nominatifs).
        </p>

        <p>
          <strong>[ RÉSULTAT ]</strong><br/>
          Un événement couronné de succès ayant renforcé l'esprit de cohorte, démontrant une capacité solide à mener un projet logistique complexe de sa phase de conception jusqu'à son bilan analytique.
        </p>
      </>
    )
  },
  {
    id: 'OP-GO-PISCINE',
    type: 'ÉVÉNEMENT',
    title: 'ATELIER GO : TRANSMISSION & MENTORAT',
    date: 'SYS.DATE : 2025.11',
    role: 'RÔLE : AMBASSADRICE & MENTORE',
    shortDesc: 'Conception et animation d\'un atelier technique pour les nouveaux arrivants (Piscineux). Vulgarisation des fondamentaux du langage Go et partage de méthodologies.',
    thumbnail: '/archives/slide_go_presentation.png',
    modalMedia: {
      type: 'image', 
      url: '/archives/slide_go_presentation.png' 
    },
    fullDesc: (
      <>
        <p style={{ marginBottom: '15px' }}>
          <strong>[ CONTEXTE ]</strong><br/>
          En tant qu'Ambassadrice Zone01, j'ai co-animé un atelier "Peer-to-Peer" pour accompagner les candidats durant leur période d'immersion (Piscine). L'enjeu était de faciliter la compréhension des concepts clés pour réduire la courbe d'apprentissage initiale.
        </p>
        
        <p style={{ marginBottom: '10px', color: 'var(--color-accent-neon)' }}>
          <strong>// CONTENU & PÉDAGOGIE :</strong>
        </p>
        <ul style={{ paddingLeft: '20px', marginBottom: '15px', color: '#ccc', listStyleType: 'square' }}>
          <li style={{ marginBottom: '8px' }}>
            <strong style={{ color: '#fff' }}>Fondamentaux Go :</strong> Introduction à la structure des programmes, à la gestion des packages et à l'utilisation des runes via des exemples concrets.
          </li>
          <li style={{ marginBottom: '8px' }}>
            <strong style={{ color: '#fff' }}>Résolution de problèmes :</strong> Accompagnement interactif sur des exercices pivots (ex: OnlyA) pour transmettre une logique de débogage structurée.
          </li>
          <li>
            <strong style={{ color: '#fff' }}>Soft Skills :</strong> Coaching sur la gestion du stress, l'importance de l'entraide et les méthodes de recherche documentaire efficace.
          </li>
        </ul>

        <p style={{ marginBottom: '15px' }}>
          <strong>[ IMPACT ]</strong><br/>
          Soutien direct à une cohorte d'apprenants. Cet atelier a permis de renforcer la cohésion du groupe et de valider ma capacité à traduire des concepts techniques complexes en un langage accessible et actionnable.
        </p>
      </>
    ),
    link: 'https://www.linkedin.com/posts/zone01-rouen-normandie_nos-apprenants-m%C3%A8nent-leurs-ateliers-activity-7392563405947080706-xccT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB9lnoIBu_7BtsbGIsfONdMQMD2d7fhNFBk' 
  },
  // --- PROJET 1 : ROLEXPLORER ---
  {
    id: 'OP-ISCOM-ZONE01',
    type: 'MISSION MAJEURE',
    title: 'CHALLENGE METAVERSE : ROLEXPLORER',
    date: 'SYS.DATE : 2025.04',
    role: 'RÔLE : DÉVELOPPEUSE (ZONE01)',
    shortDesc: 'Immersion d\'une semaine. Apprentissage express du langage Lua pour concevoir un jeu Roblox interactif au sein d\'une équipe pluridisciplinaire (Tech & Créa).',
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
  },

  // --- PROJET 2 : BUENO CREAM PASTRY ---
  {
    id: 'OP-ISCOM-ZONE01',
    type: 'MISSION MAJEURE',
    title: 'CHALLENGE METAVERSE : BUENO CREAM PASTRY',
    date: 'SYS.DATE : 2025.05', 
    role: 'RÔLE : CHEFFE DE PROJET / LIAISON ISCOM',
    shortDesc: 'Développement d\'un jeu de gestion (Tycoon). Chefferie de projet technique et coordination inter-écoles pour transposer un univers de marque sur Roblox.',
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