
import React from 'react';
import type { Project } from '../types';
import { GithubIcon, ExternalLinkIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-secondary rounded-lg overflow-hidden shadow-lg hover:shadow-accent/20 transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
      <div className="w-full h-48 bg-secondary flex items-center justify-center p-2">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="max-w-full max-h-full object-contain" 
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-accent mb-2">{project.title}</h3>
        <p className="text-text-secondary text-base mb-4 flex-grow">{project.description}</p>
        <div className="mt-auto flex items-center space-x-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors duration-300"
            aria-label={`${project.title} GitHub repository`}
          >
            <GithubIcon className="w-6 h-6" />
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors duration-300"
            aria-label={`${project.title} live site`}
          >
            <ExternalLinkIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
