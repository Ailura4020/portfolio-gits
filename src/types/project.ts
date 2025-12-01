export interface Project {
  id: number;
  title: string;
  codename: string;
  stack: string[];
  summary: string;
  status: 'Complete' | 'Archive' | 'Experimental';
  githubLink: string;
  demoLink?: string;
}