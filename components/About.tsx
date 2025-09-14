
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-24 pb-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-border">
              <img 
                src="public/images/profile/profile.jpg" 
                alt="Jay Gondaliya Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-text-primary">Jay Gondaliya</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8">
                I'm a software developer with a passion for building complete, scalable applications. My experience spans <span className="text-text-primary font-medium">full-stack development</span>, from front-end interfaces to back-end logic, and extends into <span className="text-text-primary font-medium">DevOps</span> and cloud platforms like <span className="text-text-primary font-medium">AWS</span> to ensure smooth and automated deployment pipelines. I have hands-on experience as a DevOps Intern and have led technical workshops.
            </p>
            
            {/* Resume Download Button */}
            <div className="flex justify-center lg:justify-start">
              <a
                href="/resume.pdf"
                download="Jay_Gondaliya_Resume.pdf"
                className="group relative inline-flex items-center gap-3 bg-secondary border-2 border-border text-text-primary font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-text-primary hover:bg-text-primary hover:text-primary overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-center gap-3">
                  <svg 
                    className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="group-hover:text-white transition-colors duration-300">Download Resume</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
