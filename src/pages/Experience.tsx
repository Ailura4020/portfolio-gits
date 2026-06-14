  // src/pages/Experience.tsx
  import React from 'react';
  import TacticalTabs, { type TabData } from '../components/TacticalTabs';
  import ExperienceMobile from '../components/ExperienceMobile'; 
  import useIsMobile from '../hooks/useIsMobile'; 
  import DecryptedText from '../components/DecryptedText';

  const ExperiencePage: React.FC = () => {
    const isMobile = useIsMobile(1024);

    const missions: TabData[] = [
   {
        id: 'mission-active',
        label: 'ZONE01',
        role: 'APPRENANTE & AMBASSADRICE', 
        date: 'JUIN 2024 - JUIN 2026',
        isOngoing: false,
        content: (
          <>
            <div style={{ fontFamily: 'var(--font-title)', color: 'var(--color-interface-light)', marginBottom: '10px', fontSize: '0.9em' }}>
              // LOCALISATION : ROUEN, NORMANDIE
            </div>
            <p style={{ marginBottom: '20px', fontFamily: 'var(--font-title)', color: 'var(--color-accent-teal)' }}>
              <strong>{'>'} SYNCHRONISATION : CYCLE TERMINÉ...</strong>
            </p>
            <p>
              Profil hybride : Upgrade technique continu en développement couplé à une fonction de liaison externe et événementielle.
            </p>
            <p style={{ marginTop: '10px', fontWeight: 'bold', color: '#fff' }}>
              {'>'} CERTIFICATION : Titre Concepteur Développeur d'Application (Niveau 6 / Bac+3) obtenu.
            </p>
            <br/>
            <strong style={{ fontFamily: 'var(--font-title)', color: 'var(--color-accent-teal)' }}>// JOURNAL DE MISSION :</strong>
            
            <div style={{ marginTop: '15px', paddingLeft: '15px', borderLeft: '2px solid var(--color-interface-dark)' }}>
              <strong style={{ color: 'var(--color-interface-light)' }}>Partie Technique : Orientation Front/Intégration :</strong>
              <ul style={{ listStyle: 'none', marginTop: '5px', fontSize: '0.9em' }}>
                <li><strong>Front-End & UI :</strong> Conception d'interfaces réactives (JS/Angular), routage et expérience utilisateur (UX).</li>
                <li><strong>Intégration API :</strong> Consommation de données RESTful, manipulation JSON et connexion avec le Back-end.</li>
                <li><strong>Collaboration Agile :</strong> Coordination avec l'équipe Back-end, définition des besoins (contrats d'interface) et Git Flow.</li>
              </ul>
            </div>
            <div style={{ marginTop: '15px', paddingLeft: '15px', borderLeft: '2px solid var(--color-interface-dark)' }}>
              <strong style={{ color: 'var(--color-interface-light)' }}>Partie Ambassadrice : Leadership & Soft Skills :</strong>
              <ul style={{ listStyle: 'none', marginTop: '5px', fontSize: '0.9em' }}>
                <li><strong>Event Management :</strong> Co-organisation des sélections ("Piscines"), ateliers et soirées d'intégration.</li>
                <li><strong>Communication :</strong> Représentation aux salons (Étudiant, Emploi, Femmes & Sport).</li>
                <li><strong>Onboarding :</strong> Accueil, mentorat et accompagnement des nouvelles promotions.</li>
              </ul>
            </div>

            <div style={{ marginTop: '30px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {['GoLang', 'React', 'Gestion de Projet', 'Événementiel', 'Administration'].map(tech => (
                <span key={tech} style={{ 
                  fontSize: '0.8em', padding: '5px 15px', border: '1px solid var(--color-interface-dark)', 
                  background: 'transparent',
                  color: 'var(--color-interface-light)', fontFamily: 'var(--font-title)', letterSpacing: '1px'
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </>
        )
      },
    {
        id: 'archive-efficenty',
        label: 'EFFICENTY',
        role: 'COACH PÉDAGOGIQUE DÉVELOPPEUSE',
        date: 'JUIN 2025 - DÉC 2025',
        content: (
          <>
            <div style={{ fontFamily: 'var(--font-title)', color: 'var(--color-interface-light)', marginBottom: '10px' }}>
              // LOCALISATION : ROUEN, FRANCE
            </div>
            <p style={{ marginBottom: '20px' }}>
              <strong>// MÉMOIRE ARCHIVÉE :</strong> Pilotage complet du cycle de vie d'un produit de formation technique. Analyse des besoins du marché et coordination transverse pour une livraison "from scratch" en environnement agile.
            </p>
            <ul style={{ listStyle: 'none', paddingLeft: '20px', borderLeft: '1px solid var(--color-interface-dark)' }}>
              <li style={{ marginBottom: '10px' }}>[+] <strong>Product Vision & Strategy :</strong> Conception et structuration d'un programme de formation aligné sur les exigences du secteur technique.</li>
              <li style={{ marginBottom: '10px' }}>[+] <strong>Analyse des Besoins (BA) :</strong> Identification des besoins des apprenants et spécification des objectifs pédagogiques via un suivi régulier.</li>
              <li style={{ marginBottom: '10px' }}>[+] <strong>Stakeholder Management :</strong> Coordination centrale entre les équipes internes, les experts externes et les partenaires professionnels.</li>
              <li style={{ marginBottom: '10px' }}>[+] <strong>Gestion de Backlog & Delivery :</strong> Organisation et priorisation des ateliers techniques, des conférences et du programme d'employabilité.</li>
              <li style={{ marginBottom: '10px' }}>[+] <strong>Assurance Qualité (QA) :</strong> Pilotage des évaluations, participation aux jurys et audit continu de la progression des "utilisateurs" (apprenants).</li>
              <li style={{ marginBottom: '10px' }}>[+] <strong>Leadership Transverse :</strong> Coaching, gestion des priorités et prise d'initiative dans un contexte à forte autonomie.</li>
            </ul>
            <div style={{ marginTop: '30px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {['Business Analysis', 'Product Ownership', 'Stakeholder Management', 'Agile Coordination', 'Leadership'].map(tech => (
                <span key={tech} style={{ 
                  fontSize: '0.8em', padding: '5px 10px', border: '1px solid var(--color-interface-dark)', 
                  color: 'var(--color-interface-light)', fontFamily: 'var(--font-title)' 
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </>
        )
      },
      {
        id: 'archive-bci',
        label: 'BCI BANQUE',
        role: 'TÉLÉCONSEILLÈRE',
        date: 'OCT 2022 - JAN 2024',
        content: (
          <>
            <div style={{ fontFamily: 'var(--font-title)', color: 'var(--color-interface-light)', marginBottom: '10px' }}>
              // LOCALISATION : NOUMÉA, NOUVELLE-CALÉDONIE
            </div>
            <p style={{ marginBottom: '20px' }}>
              <strong>// MÉMOIRE ARCHIVÉE :</strong> Gestion des flux de communication bancaire et résolution de requêtes clients critiques.
            </p>
            <ul style={{ listStyle: 'none', paddingLeft: '20px', borderLeft: '1px solid var(--color-interface-dark)' }}>
              <li style={{ marginBottom: '10px' }}>[+] Gestion de la relation client à distance (Centre d'appel).</li>
              <li style={{ marginBottom: '10px' }}>[+] Analyse des besoins et proposition de solutions financières.</li>
              <li style={{ marginBottom: '10px' }}>[+] Respect strict des protocoles de sécurité bancaire.</li>
            </ul>
            <div style={{ marginTop: '30px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {['Service Client', 'Finance', 'Communication', 'CRM'].map(tech => (
                <span key={tech} style={{ 
                  fontSize: '0.8em', padding: '5px 10px', border: '1px solid var(--color-interface-dark)', 
                  color: 'var(--color-interface-light)', fontFamily: 'var(--font-title)' 
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </>
        )
      },
      {
        id: 'archive-billabong-mgr',
        label: 'BBG* GRP BILLABONG',
        role: 'RESPONSABLE ADJOINTE',
        date: 'NOV 2021 - AVR 2022',
        content: (
          <>
            <div style={{ fontFamily: 'var(--font-title)', color: 'var(--color-interface-light)', marginBottom: '10px' }}>
              // LOCALISATION : NOUMÉA, NOUVELLE-CALÉDONIE
            </div>
            <p style={{ marginBottom: '20px' }}>
              <strong>// RANG : CHEF D'ESCOUADE.</strong> Supervision des opérations de terrain et gestion des ressources humaines.
            </p>
            <ul style={{ listStyle: 'none', paddingLeft: '20px', borderLeft: '1px solid var(--color-interface-dark)' }}>
              <li style={{ marginBottom: '10px' }}>[+] Management d'équipe et planification des shifts.</li>
              <li style={{ marginBottom: '10px' }}>[+] Suivi des KPI (Indicateurs Clés de Performance).</li>
              <li style={{ marginBottom: '10px' }}>[+] Gestion des stocks et inventaires (Gestion d'Actifs).</li>
            </ul>
            <div style={{ marginTop: '30px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {['Management', 'Leadership', 'Analyse KPI', 'Logistique'].map(tech => (
                <span key={tech} style={{ 
                  fontSize: '0.8em', padding: '5px 10px', border: '1px solid var(--color-interface-dark)', 
                  color: 'var(--color-interface-light)', fontFamily: 'var(--font-title)' 
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </>
        )
      },
      {
        id: 'archive-billabong-sales',
        label: 'BBG* GRP BILLABONG',
        role: 'VENDEUSE',
        date: 'MAR 2019 - NOV 2021',
        content: (
          <>
            <div style={{ fontFamily: 'var(--font-title)', color: 'var(--color-interface-light)', marginBottom: '10px' }}>
              // LOCALISATION : NOUMÉA, NOUVELLE-CALÉDONIE
            </div>
            <p style={{ marginBottom: '20px' }}>
              <strong>// OPÉRATEUR DE TERRAIN :</strong> Interface directe avec la clientèle et maintenance de l'espace opérationnel.
            </p>
            <ul style={{ listStyle: 'none', paddingLeft: '20px', borderLeft: '1px solid var(--color-interface-dark)' }}>
              <li style={{ marginBottom: '10px' }}>[+] Conseil client et vente (Interface Directe).</li>
              <li style={{ marginBottom: '10px' }}>[+] Gestion du merchandising visuel.</li>
              <li style={{ marginBottom: '10px' }}>[+] Soft Skills : Prise de parole en public & Gestion du temps.</li>
            </ul>
            <div style={{ marginTop: '30px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {['Vente', 'Merchandising', 'Travail d\'équipe', 'Gestion temps'].map(tech => (
                <span key={tech} style={{ 
                  fontSize: '0.8em', padding: '5px 10px', border: '1px solid var(--color-interface-dark)', 
                  color: 'var(--color-interface-light)', fontFamily: 'var(--font-title)' 
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </>
        )
      },
      {
        id: 'archive-bnp',
        label: 'BNP PARIBAS',
        role: 'CONSEILLÈRE CLIENTÈLE',
        date: 'AOÛT 2015 - JUIL 2018',
        content: (
          <>
            <div style={{ fontFamily: 'var(--font-title)', color: 'var(--color-interface-light)', marginBottom: '10px' }}>
              // LOCALISATION : FRANCE (ANGERS / ST-BARTHELEMY)
            </div>
            <p style={{ marginBottom: '20px' }}>
              <strong>// DÉPLOIEMENT INITIAL :</strong> Gestion de portefeuille client et objectifs commerciaux.
            </p>
            <ul style={{ listStyle: 'none', paddingLeft: '20px', borderLeft: '1px solid var(--color-interface-dark)' }}>
              <li style={{ marginBottom: '10px' }}>[+] Gestion de portefeuille clients (particuliers).</li>
              <li style={{ marginBottom: '10px' }}>[+] Atteinte des objectifs de vente (Cibles acquises).</li>
              <li style={{ marginBottom: '10px' }}>[+] Conformité et gestion des risques.</li>
            </ul>
            <div style={{ marginTop: '30px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {['Banque', 'Vente', 'Gestion Risque', 'Portefeuille'].map(tech => (
                <span key={tech} style={{ 
                  fontSize: '0.8em', padding: '5px 10px', border: '1px solid var(--color-interface-dark)', 
                  color: 'var(--color-interface-light)', fontFamily: 'var(--font-title)' 
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </>
        )
      }
    ];

  return (
    <div style={{ paddingTop: '50px', paddingBottom: '100px' }}>
      
      <DecryptedText 
        text="DOSSIER PERSONNEL"
        style={{ 
            fontSize: '3em', 
            color: '#fff', 
            marginBottom: '5px',
            fontFamily: 'var(--font-title)',
            textTransform: 'uppercase',
            textShadow: '0 0 15px var(--color-accent-neon)', 
            borderLeft: '4px solid var(--color-accent-neon)',
            paddingLeft: '20px'
        }}
      />
      
      <p style={{ 
        color: 'var(--color-interface-light)', 
        maxWidth: '600px', 
        marginBottom: '60px',
        paddingLeft: '25px',
        fontFamily: 'var(--font-code)',
        fontSize: '0.9em'
      }}>
        {'>'} ÉTABLISSEMENT CONNEXION CYBER-CERVEAU... <br/>
        {'>'} TÉLÉCHARGEMENT HISTORIQUE SUJET : AILURA.
      </p>

        {isMobile ? (
          <ExperienceMobile missions={missions} />
        ) : (
          <TacticalTabs tabs={missions} />
        )}

      </div>
    );
  };

  export default ExperiencePage;