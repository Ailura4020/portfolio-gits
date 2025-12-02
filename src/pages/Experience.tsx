// src/pages/Experience.tsx

import React from 'react';

// Définition simple du type pour une expérience
interface Experience {
  id: number;
  role: string;
  company: string;
  date: string;
  location: string;
  description: string;
  skills: string[];
  type: 'active' | 'archived'; // Pour le style (Active = Zone01)
}

const EXPERIENCE_DATA: Experience[] = [
  {
    id: 1,
    role: "Pedagogical Coach & Full Stack Developer",
    company: "ZONE01 NORMANDIE",
    date: "2024 - PRESENT",
    location: "Rouen, France",
    description: "Alternance & Formation. Rôle hybride combinant développement technique intensif et accompagnement humain. En tant que Coach Pédagogique, je guide mes pairs dans la résolution de problèmes complexes, simulant un rôle de Lead Dev junior. Développement de projets Full Stack en méthodologie Agile/Peer-learning.",
    skills: ['Go / JS / Java', 'Peer-to-Peer Coaching', 'Code Review', 'Technical Leadership'],
    type: 'active'
  },
  {
    id: 2,
    role: "Customer Support Specialist (Téléconseillère)",
    company: "BCI (Banque Calédonienne d'Investissement)",
    date: "OCT 2022 - JAN 2024",
    location: "Nouméa, Nouvelle-Calédonie",
    description: "Gestion des incidents clients et support utilisateur. Capacité à diagnostiquer un problème (troubleshooting) et à fournir une solution claire à un public non-technique. Gestion du stress et des priorités en environnement centre d'appel.",
    skills: ['Problem Solving', 'Communication Client', 'Support Utilisateur', 'Banking Tools'],
    type: 'archived'
  },
  {
    id: 3,
    role: "Assistant Manager & Team Lead",
    company: "BILLABONG GROUP",
    date: "MAR 2019 - AVR 2022",
    location: "Nouméa & Australie",
    description: "Gestion opérationnelle d'une unité commerciale. Management d'équipe, formation des nouveaux collaborateurs et pilotage des KPI (objectifs de vente). Expérience internationale (Australie) démontrant une forte adaptabilité.",
    skills: ['Team Management', 'English Professional', 'KPI Analysis', 'Onboarding'],
    type: 'archived'
  },
  {
    id: 4,
    role: "Client Portfolio Manager",
    company: "BNP PARIBAS",
    date: "2015 - 2018",
    location: "France",
    description: "Gestion de portefeuille clients et analyse des besoins. Développement d'une rigueur administrative et d'une approche orientée 'Solution' pour répondre aux attentes précises des clients.",
    skills: ['Client Relationship', 'Needs Analysis', 'Compliance', 'Sales'],
    type: 'archived'
  }
];

const ExperiencePage: React.FC = () => {
  return (
    <section id="experience" style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '100px' }}>
      
      {/* Titre de la section */}
      <h2 style={{ fontSize: '3em', color: 'var(--color-text-title)', marginBottom: '50px' }}>
        [ INTERACTION LOG / EXPERIENCE ]
      </h2>

      {/* Conteneur de la Timeline */}
      <div style={{ 
        borderLeft: '2px solid var(--color-interface-dark)', 
        marginLeft: '20px', 
        paddingLeft: '40px',
        position: 'relative'
      }}>
        
        {EXPERIENCE_DATA.map((exp) => (
          <div key={exp.id} style={{ marginBottom: '60px', position: 'relative' }}>
            
            {/* Le point sur la Timeline */}
            <div style={{
              position: 'absolute',
              left: '-49px', // Ajustement pour centrer sur la ligne
              top: '0',
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              backgroundColor: exp.type === 'active' ? 'var(--color-accent-neon)' : 'var(--color-bg-primary)',
              border: `2px solid ${exp.type === 'active' ? 'var(--color-accent-neon)' : 'var(--color-interface-dark)'}`,
              boxShadow: exp.type === 'active' ? '0 0 10px var(--color-accent-neon)' : 'none'
            }}></div>

            {/* En-tête de l'expérience */}
            <div style={{ marginBottom: '10px' }}>
              <h3 style={{ 
                color: exp.type === 'active' ? 'var(--color-accent-neon)' : 'var(--color-text-title)', 
                fontSize: '1.5em',
                display: 'inline-block',
                marginRight: '15px'
              }}>
                {exp.role}
              </h3>
              <span style={{ 
                color: exp.type === 'active' ? 'var(--color-accent-secondary)' : 'var(--color-interface-light)', 
                fontFamily: 'var(--font-title)',
                fontSize: '0.8em',
                border: `1px solid ${exp.type === 'active' ? 'var(--color-accent-secondary)' : 'var(--color-interface-dark)'}`,
                padding: '2px 8px'
              }}>
                {exp.type === 'active' ? ':: ACTIVE CONNECTION ::' : ':: ARCHIVED ::'}
              </span>
            </div>

            {/* Détails : Entreprise & Date */}
            <div style={{ 
              color: 'var(--color-accent-teal)', 
              fontFamily: 'var(--font-title)', 
              fontSize: '0.9em', 
              marginBottom: '15px',
              letterSpacing: '0.05em'
            }}>
              [{exp.company}] // {exp.date} // {exp.location.toUpperCase()}
            </div>

            {/* Description */}
            <p style={{ 
              color: 'var(--color-text-primary)', 
              lineHeight: '1.6', 
              marginBottom: '15px', 
              maxWidth: '800px',
              borderLeft: exp.type === 'active' ? '2px solid var(--color-accent-teal)' : 'none',
              paddingLeft: exp.type === 'active' ? '15px' : '0'
            }}>
              {exp.description}
            </p>

            {/* Compétences (Tags) */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {exp.skills.map(skill => (
                <span key={skill} style={{
                  fontSize: '0.8em',
                  color: exp.type === 'active' ? 'var(--color-bg-primary)' : 'var(--color-interface-light)',
                  backgroundColor: exp.type === 'active' ? 'var(--color-accent-neon)' : 'rgba(255, 255, 255, 0.05)',
                  padding: '4px 8px',
                  fontWeight: 'bold'
                }}>
                  {skill}
                </span>
              ))}
            </div>

          </div>
        ))}

        {/* Fin de la ligne */}
        <div style={{
           position: 'absolute', left: '-50px', bottom: '-10px',
           color: 'var(--color-interface-dark)', fontSize: '20px'
        }}>▼</div>

      </div>

      <p style={{ marginTop: '50px', color: 'var(--color-interface-light)', textAlign: 'center' }}>
        // END OF INTERACTION LOGS //
      </p>
    </section>
  );
};

export default ExperiencePage;