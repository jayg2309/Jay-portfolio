
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-6 md:px-12">
        <About />
        <Experience />
        <Projects />
      </main>
      <Contact />
    </div>
  );
};

export default App;
