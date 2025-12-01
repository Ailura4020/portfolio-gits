import React from 'react';
import './index.css'; 
import HomePage from './pages/Home.tsx';
import ProjectsPage from './pages/Projects.tsx';

const BurgerIcon: React.FC = () => (
    <div style={{ width: '25px', height: '20px', cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '4px' }}>
        <div style={{ borderBottom: '2px solid var(--color-text-primary)' }}></div>
        <div style={{ borderBottom: '2px solid var(--color-text-primary)' }}></div>
    </div>
);

const NavigationBar: React.FC = () => {
  const links = ['HOME', 'PROJECTS', 'EXPERIENCE', 'SKILLS', 'CONTACT'];

  return (
    <div
        style={{
            position: 'fixed',
            top: 0,
            width: '100%',
            backgroundColor: 'var(--color-bg-primary)',
            zIndex: 100,
        }}
    >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 40px', height: '50px' }}>
          <div style={{ fontFamily: 'var(--font-title)', fontSize: '24px', color: 'var(--color-accent-neon)' }}>
              [PROJECT AILURA]
          </div>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center', color: 'var(--color-text-primary)' }}>
              <span style={{ fontSize: '14px', letterSpacing: '2px' }}>FR / EN</span>
              <BurgerIcon />
          </div>
        </div>

        <nav style={{ display: 'flex', justifyContent: 'flex-start', gap: '30px', padding: '15px 40px', borderTop: '1px solid var(--color-interface-dark)' }}>
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} style={{ 
                fontFamily: 'var(--font-body)', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-text-primary)', padding: '5px 0' 
            }}>
              {link}
            </a>
          ))}
        </nav>
    </div>
  );
};

function App() {
  return (
    <div className="App" style={{ minHeight: '100vh' }}>
      <NavigationBar />
      <main style={{ padding: '0px 40px', maxWidth: '1400px', margin: '0 auto', paddingTop: '110px' }}>
        <HomePage /> 
        <ProjectsPage /> 
        <section id="experience" style={{ minHeight: '100vh', paddingTop: '100px' }}>
             <h2>Experience / Interaction Log</h2>
        </section>
        <section id="skills" style={{ minHeight: '100vh', paddingTop: '100px' }}>
             <h2>Skills / Capability Matrix</h2>
        </section>
        <section id="contact" style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '100px' }}>
             <h2>Contact / End of Transmission</h2>
        </section>
      </main>
    </div>
  );
};

export default App;