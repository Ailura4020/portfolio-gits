### 📝 Procédure

1.  Crée un fichier nommé `README.md` à la racine de ton projet.
2.  Colle le contenu ci-dessous.
3.  *(Optionnel)* Fais une capture d'écran de ta Home Page, nomme-la `preview.png`, mets-la à la racine du projet pour qu'elle s'affiche dans le README.

-----

### Contenu du fichier `README.md`

````markdown
# 🌐 PROJECT AILURA // PORTFOLIO V1.0

> "The net is vast and infinite."

![Project Status](https://img.shields.io/badge/STATUS-OPERATIONAL-39ff14?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/STACK-REACT%20%7C%20TYPESCRIPT%20%7C%20VITE-00ffff?style=for-the-badge)

## 📂 MISSION BRIEFING

**Project Ailura** is an immersive Full Stack Developer portfolio inspired by the cyberpunk aesthetics of *Ghost in the Shell* and *Matrix*. 

Beyond showcasing projects and skills, this application is designed to be an **experience**. It features a cinematic introduction, decrypted text animations, and a highly responsive "tactical" interface that adapts to the user's device (Mobile Scanner vs. Desktop Command Center).

---

## ⚡ KEY FEATURES

### 1. Immersive "Section 9" Intro
- **Cinematic Start:** Full-screen video background with digital rain effects.
- **Security Scan:** A simulated biometric scan sequence searching for the target (User) in a criminal database.
- **Dynamic Feedback:** State changes from "Searching" to "Access Granted" with synchronized color shifts (Cyan to Green).

### 2. Reactive UI & Animations
- **Decrypted Text Effect:** Section titles (`<h2>`) automatically decipher themselves (Matrix style) upon scrolling or hovering using a custom `IntersectionObserver` hook.
- **Glitch Effects:** Custom CSS keyframes for title distortions.
- **Tactical Navigation:**
  - **Desktop:** A side-aligned "Cinematic" layout.
  - **Mobile:** A centered "Fugitive Squad" layout with optimized touch targets.

### 3. Advanced Components
- **Tactical Tabs (Experience):** A folder-style interface to browse career history.
- **Skill Grid:** A hexagonal tech tree and psychometric evaluation grid.
- **Project Carousel:** A horizontal scrollable view of technical artifacts with detailed modal dossiers.

---

## 🛠️ TECH STACK

* **Core:** [React](https://reactjs.org/) (v18)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Styling:** Pure CSS3 (Variables, Grid, Flexbox, Keyframes) - *No CSS Frameworks used.*
* **Motion:** Custom Hooks (`useIsMobile`, `IntersectionObserver`).

---

## 💾 INSTALLATION & DEPLOYMENT

### Prerequisites
* Node.js (v16+)
* npm or yarn

### Local Protocol
Clone the repository and initialize the connection:

```bash
# 1. Clone the repository
git clone [https://github.com/Ailura4020/portfolio-gits.git](https://github.com/Ailura4020/portfolio-gits.git)

# 2. Enter the directory
cd portfolio-gits

# 3. Install dependencies
npm install

# 4. Initiate local server
npm run dev
````

### Build for Production

To generate the static files for deployment (Vercel/Netlify):

```bash
npm run build
```

-----

## 📂 PROJECT STRUCTURE

```bash
src/
├── assets/          # Images, Videos, Icons (Suspects, Geisha, Rain)
├── components/      # Reusable UI (CyberIntro, DecryptedText, TacticalTabs...)
├── hooks/           # Custom Logic (useIsMobile...)
├── pages/           # Main Sections (Home, Projects, Experience, Skills, Contact)
├── App.tsx          # Main Entry & Scroll Logic
└── index.css        # Global Variables & Reset
```

-----

## 👤 AUTHOR

**AILURA** *Full Stack Developer & Pedagogical Coach* \> "Bridging the gap between human intuition and machine logic."

[LinkedIn](https://www.linkedin.com/) • [GitHub](https://github.com/Ailura4020)

-----

*© 2025 PUBLIC SECURITY SECTION 9. SYSTEM INTEGRITY VERIFIED.*

```

---

### Ce que ça apporte :
1.  **Badges colorés** : Ça fait pro tout de suite.
2.  **Storytelling** : On explique que le design n'est pas un hasard, c'est un choix artistique ("Mission Briefing").
3.  **Technique** : On montre que tu sais utiliser TypeScript, les Hooks personnalisés et faire du CSS sans Bootstrap (ce qui est une compétence très recherchée).

C'est validé ? Si oui, tu peux créer ce fichier, faire ton `git add README.md`, commit et **MERGE** ! 🎉
```