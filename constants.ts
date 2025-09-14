
import type { NavLink, ExperienceItem, SkillCategory, Project, SocialLink } from './types';
import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from './components/Icons';

export const NAV_LINKS: NavLink[] = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    role: 'DevOps Intern',
    company: 'PitchMatter (Remote)',
    duration: 'July 2025 - Present',
    description: [
      'Designed microservice architecture, breaking down a monolithic structure.',
      'Contributed to setting up a basic CI/CD pipeline using Jenkins.',
    ],
  },
  {
    role: 'DevOps Co-Lead',
    company: 'GDSC - SIT Pune',
    duration: 'July 2024 - Present',
    description: [
        'Designed and managed workshops on Docker, Linux, and Kubernetes.',
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'ReactJS', 'Tailwind CSS'],
  },
  {
    title: 'Backend & Databases',
    skills: ['Node', 'Express', 'Socket.io', 'MongoDB'],
  },
  {
    title: 'DevOps & Cloud',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'ArgoCD', 'Linux', 'Vercel', 'Render'],
  },
  {
    title: 'Programming Languages',
    skills: ['Java', 'Python', 'Bash'],
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'BingeKaro',
    description: 'A full-stack movie recommendation app for creating and sharing movie/series lists with over 50 users. Features include real-time data fetching from the OMDB API and public/private list systems.',
    imageUrl: 'https://picsum.photos/seed/bingekaro/800/600',
    githubUrl: 'https://github.com/jayg2309',
    liveUrl: '#',
  },
  {
    title: 'PulseTick',
    description: 'A real-time chat application with self-destructing groups using Socket.io and MongoDB TTL indexes. Implemented secure JWT user authentication and integrated Cloudinary for media uploads.',
    imageUrl: 'https://picsum.photos/seed/pulsetick/800/600',
    githubUrl: 'https://github.com/jayg2309',
    liveUrl: '#',
  },
  {
    title: 'DevOps Dashboard',
    description: 'A comprehensive monitoring dashboard for containerized applications built with React and Docker. Features include real-time metrics visualization, deployment tracking, and automated CI/CD pipeline management.',
    imageUrl: 'https://picsum.photos/seed/devops/800/600',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'CloudSync Manager',
    description: 'A cloud infrastructure management tool utilizing AWS services and Kubernetes orchestration. Includes automated scaling, resource optimization, and multi-environment deployment capabilities.',
    imageUrl: 'https://picsum.photos/seed/cloudsync/800/600',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'AI Code Assistant',
    description: 'An intelligent code review and suggestion platform powered by machine learning algorithms. Features automated code analysis, performance optimization recommendations, and collaborative development tools.',
    imageUrl: 'https://picsum.photos/seed/aicode/800/600',
    githubUrl: '#',
    liveUrl: '#',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Gmail', url: 'mailto:jaygondaliya2309@gmail.com', icon: MailIcon },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/jay-gondaliya', icon: LinkedinIcon },
  { name: 'GitHub', url: 'https://github.com/jayg2309', icon: GithubIcon },
  { name: 'Twitter', url: 'https://twitter.com/yourhandle', icon: TwitterIcon },
];
