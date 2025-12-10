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
      label: 'ZONE01 / STREET CODER',
      role: 'FULL STACK & COACH',
      date: '2024 - PRÉSENT',
      isOngoing: true,
      content: (
        <>
           <div style={{ fontFamily: 'var(--font-title)', color: 'rgba(57, 255, 20, 0.8)', marginBottom: '10px', fontSize: '0.9em' }}>
             // LOCALISATION : ROUEN, NORMANDIE
           </div>
          <p style={{ marginBottom: '20px', fontFamily: 'var(--font-title)', color: '#39ff14' }}>
            <strong>{'>'} SYNCHRONISATION : DOUBLE TRAITEMENT EN COURS...</strong>
          </p>
          <p>
            Position hybride combinant l'acquisition intensive de compétences techniques et le mentoring pédagogique.
          </p>
          <br/>
          <strong style={{ fontFamily: 'var(--font-title)', color: 'var(--color-accent-teal)' }}>// JOURNAL DE MISSION :</strong>
          <div style={{ marginTop: '15px', paddingLeft: '15px', borderLeft: '2px solid #39ff14' }}>
            <strong style={{ color: '#39ff14' }}>@ ZONE01 NORMANDIE :</strong>
            <ul style={{ listStyle: 'none', marginTop: '5px' }}>
              <li style={{ marginBottom: '5px' }}>[{'>'}] Développement d'architectures résilientes (Go, JS, Rust).</li>
              <li style={{ marginBottom: '5px' }}>[{'>'}] Travail en méthode Agile/Peer-learning.</li>
            </ul>
          </div>
          <div style={{ marginTop: '15px', paddingLeft: '15px', borderLeft: '2px solid #39ff14' }}>
            <strong style={{ color: '#39ff14' }}>@ STREET CODER :</strong>
            <ul style={{ listStyle: 'none', marginTop: '5px' }}>
              <li style={{ marginBottom: '5px' }}>[{'>'}] <strong>Coach Pédagogique :</strong> Transmission de savoirs numériques.</li>
              <li style={{ marginBottom: '5px' }}>[{'>'}] Accompagnement des publics éloignés du numérique.</li>
            </ul>
          </div>
          <div style={{ marginTop: '30px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
             {['GoLang', 'React', 'Pédagogie', 'Coaching', 'Node.js'].map(tech => (
               <span key={tech} style={{ 
                 fontSize: '0.8em', padding: '5px 15px', border: '1px solid #39ff14', background: 'rgba(57, 255, 20, 0.1)',
                 color: '#39ff14', fontFamily: 'var(--font-title)', letterSpacing: '1px'
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
      label: 'BCI BANK',
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
      label: 'BILLABONG GRP',
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
      label: 'BILLABONG OPS',
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
             // LOCALISATION : FRANCE (ANGERS / ST-BARTH)
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
        interval={15000}
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