// src/pages/Experience.tsx
import React from 'react';
import TacticalTabs, { type TabData } from '../components/TacticalTabs';

const ExperiencePage: React.FC = () => {

  const missions: TabData[] = [
    {
      id: 'mission-active',
      label: 'ZONE01 / STREET CODER',
      role: 'FULL STACK & COACH',
      date: 'JUN 2024 - PRESENT',
      isOngoing: true, // Mode Vert "Matrix" / "Ghost"
      content: (
        <>
        <div style={{ fontFamily: 'var(--font-title)', color: 'rgba(57, 255, 20, 0.8)', marginBottom: '10px', fontSize: '0.9em' }}>
             // LOCATION: ROUEN, NORMANDIE
           </div>
           
          <p style={{ marginBottom: '20px', fontFamily: 'var(--font-title)', color: '#39ff14' }}>
            <strong>{'>'} CURRENT SYNC: DUAL PROCESSING...</strong>
          </p>
          <p>
            Position hybride combinant l'acquisition intensive de compétences techniques et le mentoring pédagogique.
          </p>
          
          <br/>
          <strong style={{ fontFamily: 'var(--font-title)', color: 'var(--color-accent-teal)' }}>// MISSION LOGS:</strong>
          
          {/* Section Zone01 */}
          <div style={{ marginTop: '15px', paddingLeft: '15px', borderLeft: '2px solid #39ff14' }}>
            <strong style={{ color: '#39ff14' }}>@ ZONE01 NORMANDIE :</strong>
            <ul style={{ listStyle: 'none', marginTop: '5px' }}>
              <li style={{ marginBottom: '5px' }}>[{'>'}] Développement d'architectures résilientes (Go, JS, Rust).</li>
              <li style={{ marginBottom: '5px' }}>[{'>'}] Travail en méthode Agile/Peer-learning.</li>
            </ul>
          </div>

          {/* Section Street Coder */}
          <div style={{ marginTop: '15px', paddingLeft: '15px', borderLeft: '2px solid #39ff14' }}>
            <strong style={{ color: '#39ff14' }}>@ STREET CODER :</strong>
            <ul style={{ listStyle: 'none', marginTop: '5px' }}>
              <li style={{ marginBottom: '5px' }}>[{'>'}] <strong>Coach Pédagogique :</strong> Transmission de savoirs numériques.</li>
              <li style={{ marginBottom: '5px' }}>[{'>'}] Accompagnement des publics éloignés du numérique.</li>
            </ul>
          </div>
        </>
      )
    },
    // --- ARCHIVES ---
    {
      id: 'archive-bci',
      label: 'BCI BANK',
      role: 'TÉLÉCONSEILLÈRE',
      date: 'OCT 2022 - JAN 2024',
      content: (
        <>
           <div style={{ fontFamily: 'var(--font-title)', color: 'var(--color-interface-light)', marginBottom: '10px' }}>
             // LOCATION: NOUMÉA, NEW CALEDONIA
           </div>
           <p style={{ marginBottom: '20px' }}>
            <strong>// ARCHIVED MEMORY:</strong> Gestion des flux de communication bancaire et résolution de requêtes clients critiques.
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
      date: 'NOV 2021 - APR 2022',
      content: (
        <>
           <div style={{ fontFamily: 'var(--font-title)', color: 'var(--color-interface-light)', marginBottom: '10px' }}>
             // LOCATION: NOUMÉA, NEW CALEDONIA
           </div>
           <p style={{ marginBottom: '20px' }}>
            <strong>// RANK: SQUAD LEADER.</strong> Supervision des opérations de terrain et gestion des ressources humaines.
          </p>
          <ul style={{ listStyle: 'none', paddingLeft: '20px', borderLeft: '1px solid var(--color-interface-dark)' }}>
            <li style={{ marginBottom: '10px' }}>[+] Management d'équipe et planification des shifts.</li>
            <li style={{ marginBottom: '10px' }}>[+] Suivi des KPIs (Indicateurs Clés de Performance).</li>
            <li style={{ marginBottom: '10px' }}>[+] Gestion des stocks et inventaires (Asset Management).</li>
          </ul>
           <div style={{ marginTop: '30px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
             {['Management', 'Leadership', 'KPI Analysis', 'Logistics'].map(tech => (
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
             // LOCATION: NEW CALEDONIA
           </div>
           <p style={{ marginBottom: '20px' }}>
            <strong>// FIELD OPERATIVE:</strong> Interface directe avec la clientèle et maintenance de l'espace opérationnel.
          </p>
          <ul style={{ listStyle: 'none', paddingLeft: '20px', borderLeft: '1px solid var(--color-interface-dark)' }}>
            <li style={{ marginBottom: '10px' }}>[+] Conseil client et vente (Direct Interface).</li>
            <li style={{ marginBottom: '10px' }}>[+] Gestion du merchandising visuel.</li>
            <li style={{ marginBottom: '10px' }}>[+] Soft Skills : Prise de parole en public & Gestion du temps.</li>
          </ul>
           <div style={{ marginTop: '30px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
             {['Vente', 'Merchandising', 'Teamwork', 'Time Mgmt'].map(tech => (
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
      date: 'AUG 2015 - JUL 2018',
      content: (
        <>
           <div style={{ fontFamily: 'var(--font-title)', color: 'var(--color-interface-light)', marginBottom: '10px' }}>
             // LOCATION: FRANCE (ANGERS / ST-BARTH)
           </div>
           <p style={{ marginBottom: '20px' }}>
            <strong>// INITIAL DEPLOYMENT:</strong> Gestion de portefeuille client et objectifs commerciaux.
          </p>
          <ul style={{ listStyle: 'none', paddingLeft: '20px', borderLeft: '1px solid var(--color-interface-dark)' }}>
            <li style={{ marginBottom: '10px' }}>[+] Gestion de portefeuille clients (particuliers).</li>
            <li style={{ marginBottom: '10px' }}>[+] Atteinte des objectifs de vente (Targets acquired).</li>
            <li style={{ marginBottom: '10px' }}>[+] Conformité et gestion des risques.</li>
          </ul>
           <div style={{ marginTop: '30px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
             {['Banking', 'Sales', 'Risk Mgmt', 'Portfolio'].map(tech => (
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
      
      {/* TITRE STYLE GHOST IN THE SHELL */}
      <h2 style={{ 
        fontSize: '3.5em', 
        marginBottom: '10px',
        fontFamily: 'var(--font-title)',
        textTransform: 'uppercase',
        letterSpacing: '5px',
        background: 'linear-gradient(to right, var(--color-accent-neon), transparent)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        borderLeft: '5px solid var(--color-accent-neon)',
        paddingLeft: '20px'
      }}>
        PERSONNEL FILE
      </h2>
      
      {/* SOUS-TITRE STYLE TERMINAL BOOT SEQUENCE */}
      <p style={{ 
        color: 'var(--color-interface-light)', 
        maxWidth: '600px', 
        marginBottom: '60px',
        paddingLeft: '25px',
        fontFamily: 'var(--font-code)',
        fontSize: '0.9em'
      }}>
        {'>'} ESTABLISHING CYBERBRAIN CONNECTION... <br/>
        {'>'} DOWNLOADING SUBJECT HISTORY: AILURA.
      </p>

      <TacticalTabs tabs={missions} />
    </div>
  );
};

export default ExperiencePage;