
import React from 'react';
import { EXPERIENCE_ITEMS, SKILL_CATEGORIES } from '../constants';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-accent">
    {children}
  </h2>
);

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <SectionTitle>Experience & Skills</SectionTitle>

      {/* Work & Leadership Experience */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-8 text-center text-text-primary">Work & Leadership</h3>
        <div className="relative max-w-2xl mx-auto">
           <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>
          {EXPERIENCE_ITEMS.map((item, index) => (
            <div key={index} className="mb-8 flex justify-between items-center w-full">
              <div className={`w-5/12 ${index % 2 === 0 ? 'order-1 text-right' : 'order-3 text-left'}`}>
              </div>
              <div className="z-10 flex items-center order-2 bg-secondary p-2 rounded-full">
                 <div className="w-3 h-3 bg-accent rounded-full"></div>
              </div>
              <div className={`w-5/12 p-4 bg-secondary rounded-lg shadow-lg ${index % 2 === 0 ? 'order-3' : 'order-1'}`}>
                <h4 className="text-lg font-bold text-accent">{item.role}</h4>
                <p className="text-md font-semibold text-text-primary mb-1">{item.company}</p>
                <p className="text-sm text-text-secondary mb-2">{item.duration}</p>
                <ul className="list-disc list-inside text-sm text-text-secondary space-y-1">
                  {item.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Technical Skills */}
      <div>
        <h3 className="text-2xl font-semibold mb-8 text-center text-text-primary">Technical Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.title} className="bg-secondary p-6 rounded-lg shadow-lg hover:shadow-accent/20 transition-shadow duration-300">
              <h4 className="text-xl font-bold text-accent mb-4">{category.title}</h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="bg-primary text-text-secondary text-sm font-medium px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
