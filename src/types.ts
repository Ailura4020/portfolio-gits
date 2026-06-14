import type { ReactNode } from 'react';

export interface Project {
  id: string;
  codename: string;
  title: string;
  status: string;
  type: string;
  description: string;
  stack: string[];
  image?: string;
  video?: string;
  gallery?: string[];
  fullDesc?: ReactNode;
  repoLink?: string;
}
