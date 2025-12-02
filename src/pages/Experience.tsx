import React from 'react';

interface Experience {
  id: number;
  role: string;
  company: string;
  date: string;
  location: string;
  description: string;
  skills: string[];
  type: 'active' | 'archived';
}

const EXPERIENCE_DATA: Experience[] = [
  {
    id: 1,
    role: "Coach Pédagogique & Développeuse Full Stack",
    company: "ZONE01 NORMANDIE",
    date: "2024 - PRÉSENT",
    location: "Rouen, France",
    description: "Alternance & Formation. Rôle hybride combinant développement technique intensif et accompagnement humain. En tant que Coach, je guide mes pairs dans la résolution de problèmes complexes (debugging, logique), simulant un rôle de Lead Dev junior. Développement de projets Full Stack en méthodologie Agile et Peer-learning.",
    skills: ['Go / JS / Java', 'Coaching Pair-à-Pair', 'Revue de Code', 'Leadership Technique'],
    type: 'active'
  },
  {
    id: 2,
    role: "Conseillère Clientèle (Support)",
    company: "BCI (Banque Calédonienne d'Investissement)",
    date: "OCT 2022 - JAN 2024",
    location: "Nouméa, Nouvelle-Calédonie",
    description: "Gestion des incidents clients et support utilisateur. Capacité à diagnostiquer un problème et à fournir une solution claire à un public non-technique (vulgarisation). Gestion du stress et des priorités en environnement centre d'appel.",
    skills: ['Résolution de Problèmes', 'Communication Client', 'Support Utilisateur', 'Outils Bancaires'],
    type: 'archived'
  },
  {
    id: 3,
    role: "Responsable Adjointe & Team Lead",
    company: "BILLABONG GROUP",
    date: "MAR 2019 - AVR 2022",
    location: "Nouméa & Australie",
    description: "Gestion opérationnelle d'une unité commerciale. Management d'équipe, formation des nouveaux collaborateurs (onboarding) et pilotage des objectifs de vente (KPI). Expérience internationale démontrant une forte adaptabilité.",
    skills: ['Management d\'Équipe', 'Anglais Professionnel', 'Analyse KPI', 'Formation'],
    type: 'archived'
  },
  {
    id: 4,
    role: "Conseillère Clientèle",
    company: "BNP PARIBAS",
    date: "2015 - 2018",
    location: "France",
    description: "Gestion de portefeuille clients et analyse des besoins. Développement d'une rigueur administrative et d'une approche orientée 'Solution' pour répondre aux attentes précises des clients.",
    skills: ['Relation Client', 'Analyse de Besoin', 'Conformité', 'Vente'],
    type: 'archived'
  }
];

const ExperiencePage: React.FC = () => {
  return (
    <section id="experience" style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '100px' }}>
      
      <h2 style={{ fontSize: '3em', color: 'var(--color-text-title)', marginBottom: '50px' }}>
        [ JOURNAL D'INTERACTIONS / EXPÉRIENCE ]
      </h2>

      <div style={{ 
        borderLeft: '2px solid var(--color-interface-dark)', 
        marginLeft: '20px', 
        paddingLeft: '40px',
        position: 'relative'
      }}>
        
        {EXPERIENCE_DATA.map((exp) => (
          <div key={exp.id} style={{ marginBottom: '60px', position: 'relative' }}>
            
            {/* Point Timeline */}
            <div style={{
              position: 'absolute',
              left: '-49px', top: '0',
              width: '16px', height: '16px',
              borderRadius: '50%',
              backgroundColor: exp.type === 'active' ? 'var(--color-accent-neon)' : 'var(--color-bg-primary)',
              border: `2px solid ${exp.type === 'active' ? 'var(--color-accent-neon)' : 'var(--color-interface-dark)'}`,
              boxShadow: exp.type === 'active' ? '0 0 10px var(--color-accent-neon)' : 'none'
            }}></div>

            {/* Titre et Badge */}
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
                color: exp.type === 'active' ? 'var(--color-bg-primary)' : 'var(--color-interface-light)', 
                backgroundColor: exp.type === 'active' ? 'var(--color-accent-secondary)' : 'transparent',
                fontFamily: 'var(--font-title)',
                fontWeight: 'bold',
                fontSize: '0.7em',
                border: `1px solid ${exp.type === 'active' ? 'var(--color-accent-secondary)' : 'var(--color-interface-dark)'}`,
                padding: '4px 8px',
                borderRadius: '2px'
              }}>
                {exp.type === 'active' ? ':: CONNEXION ACTIVE ::' : ':: ARCHIVÉ ::'}
              </span>
            </div>

            {/* Détails */}
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
              marginBottom: '15px', 
              maxWidth: '800px',
              borderLeft: exp.type === 'active' ? '2px solid var(--color-accent-teal)' : 'none',
              paddingLeft: exp.type === 'active' ? '15px' : '0'
            }}>
              {exp.description}
            </p>

            {/* Tags Compétences */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {exp.skills.map(skill => (
                <span key={skill} style={{
                  fontSize: '0.75em',
                  color: exp.type === 'active' ? 'var(--color-bg-primary)' : 'var(--color-text-primary)',
                  backgroundColor: exp.type === 'active' ? 'var(--color-accent-neon)' : 'var(--color-interface-dark)',
                  padding: '4px 8px',
                  fontWeight: 'bold',
                  fontFamily: 'var(--font-title)'
                }}>
                  {skill}
                </span>
              ))}
            </div>

          </div>
        ))}

        <div style={{
           position: 'absolute', left: '-50px', bottom: '-10px',
           color: 'var(--color-interface-dark)', fontSize: '20px'
        }}>▼</div>

      </div>

      <p style={{ marginTop: '50px', color: 'var(--color-interface-light)', textAlign: 'center' }}>
        // FIN DU JOURNAL D'INTERACTIONS //
      </p>
    </section>
  );
};

export default ExperiencePage;