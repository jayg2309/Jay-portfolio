
import type { NavLink, ExperienceItem, SkillCategory, Project, SocialLink } from './types';
import { GithubIcon, LinkedinIcon, MailIcon, XIcon } from './components/Icons';

export const NAV_LINKS: NavLink[] = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    role: 'DevOps Intern',
    company: 'PitchMatter, Dubai - Remote',
    duration: 'July 2025 - Present',
    description: [
      'Designed microservice architecture, breaking down a monolithic structure.',
      'Set up a CI/CD pipeline using Jenkins for automation',
    ],
  },
  {
    role: 'Open Source Contributor',
    company: 'Hacktoberfest 2024',
    duration: 'October 2024',
    description: [
      'Contributed to open-source projects during Hacktoberfest 2024, collaborating with developers worldwide.',
      'Submitted meaningful pull requests and participated in code reviews to improve various open-source projects.'
    ],
  },
  {
    role: 'DevOps Co-Lead',
    company: 'GDSC - SIT Pune',
    duration: 'July 2024 - July 2025',
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
    imageUrl: '/images/projects/BingeKaro.png',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'OMDB API', 'Tailwind CSS'],
    githubUrl: 'https://github.com/jayg2309/BingeKaro',
    liveUrl: 'https://binge-karo.vercel.app/',
  },
  {
    title: 'PulseTick',
    description: 'A real-time chat application with self-destructing groups using Socket.io and MongoDB TTL indexes. Implemented secure JWT user authentication and integrated Cloudinary for media uploads.',
    imageUrl: '/images/projects/pulsetick.jpeg',
    techStack: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'JWT', 'Cloudinary'],
    githubUrl: 'https://github.com/jayg2309/PulseTick',
    liveUrl: '#',
  },
  {
    title: 'AWS Three-Tier Web Deployment',
    description: 'This project involved the hands-on implementation of a classic three-tier web architecture from the ground up on AWS, focusing on the core principles of security, scalability, and high availability.',
    imageUrl: '/images/projects/3TierArch.png',
    techStack: ['AWS EC2', 'RDS', 'ALB', 'VPC', 'Auto Scaling', 'Terraform'],
    githubUrl: '#',
    liveUrl: '#',
  },
  // {
  //   title: 'CloudSync Manager',
  //   description: 'A cloud infrastructure management tool utilizing AWS services and Kubernetes orchestration. Includes automated scaling, resource optimization, and multi-environment deployment capabilities.',
  //   imageUrl: 'https://picsum.photos/seed/cloudsync/800/600',
  //   githubUrl: '#',
  //   liveUrl: '#',
  // },
  // {
  //   title: 'AI Code Assistant',
  //   description: 'An intelligent code review and suggestion platform powered by machine learning algorithms. Features automated code analysis, performance optimization recommendations, and collaborative development tools.',
  //   imageUrl: 'https://picsum.photos/seed/aicode/800/600',
  //   githubUrl: '#',
  //   liveUrl: '#',
  // },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Gmail', url: 'mailto:jaygondaliya2309@gmail.com', icon: MailIcon },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jay-gondaliya-b8902326b/', icon: LinkedinIcon },
  { name: 'GitHub', url: 'https://github.com/jayg2309', icon: GithubIcon },
  { name: 'X', url: 'https://x.com/jayg2309', icon: XIcon },
];
