// Fix: Import React to provide types for React components.
import type * as React from 'react';

export interface NavLink {
  name: string;
  href: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.FC<{ className?: string }>;
}