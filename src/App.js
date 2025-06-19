import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import { ThemeProvider } from './Context/Theme';
import Main from './Components/Main';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Optional: persist theme using localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prev => {
      const newMode = !prev;
      document.documentElement.classList.toggle('dark', newMode);
      localStorage.setItem("darkMode", newMode);
      return newMode;
    });
  };


  // my custom scroll bar
  window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrollPercent = scrollTop / scrollHeight;

    // Create a dynamic gradient: from top to scroll point — filled, rest transparent
    const gradient = `linear-gradient(to bottom, #003cff ${scrollPercent * 100}%, transparent ${scrollPercent * 100}%)`;

    document.documentElement.style.setProperty('--scroll-gradient', gradient);
  });


  return (
    <ThemeProvider value={{ darkMode, toggleDarkMode }}>
        <NavBar />
        <Main />
        <About />
        <Skills />
        <Projects />
        <Contact />
    </ThemeProvider>
  );
}

export default App;
