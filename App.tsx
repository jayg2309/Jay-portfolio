
import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-primary transition-colors duration-300">
        <Navbar />
        <main className="container mx-auto px-6 md:px-12">
          <About />
          <Experience />
          <Projects />
        </main>
        <Contact />
      </div>
    </ThemeProvider>
  );
};

export default App;
