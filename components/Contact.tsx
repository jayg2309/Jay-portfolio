
import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-secondary py-12">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-accent">Get In Touch</h2>
        <p className="text-text-secondary mb-8 max-w-xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.
        </p>
        <div className="flex justify-center items-center space-x-6 md:space-x-8">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="text-text-secondary hover:text-accent transform hover:scale-110 transition-all duration-300"
            >
              <social.icon className="w-8 h-8 md:w-10 md:h-10" />
            </a>
          ))}
        </div>
        <div className="mt-12 border-t border-border pt-6">
          <p className="text-text-secondary text-sm">
            &copy; {new Date().getFullYear()} Jay Gondaliya. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
