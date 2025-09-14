
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-24 pb-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-accent/20">
              <img 
                src="https://picsum.photos/seed/jayprofile/400/400" 
                alt="Jay Gondaliya Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-accent">Jay Gondaliya</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                I'm a software developer with a passion for building complete, scalable applications. My experience spans <span className="text-text-primary font-medium">full-stack development</span>, from front-end interfaces to back-end logic, and extends into <span className="text-text-primary font-medium">DevOps</span> and cloud platforms like <span className="text-text-primary font-medium">AWS</span> to ensure smooth and automated deployment pipelines. I have hands-on experience as a DevOps Intern at PitchMatter and have led technical workshops as the DevOps Co-Lead for the Google Developers Student Club.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
