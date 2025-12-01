// src/types/project.ts

export interface Project {
  id: number;
  title: string;
  codename: string; // Nom de code GitS
  stack: string[]; // Technologies utilisées (ex: 'Java', 'Spring Boot', 'Angular')
  summary: string; // Description courte pour la carte
  status: 'Complete' | 'Archive' | 'Experimental';
  githubLink: string;
  demoLink?: string; // Lien de démo (optionnel)
}