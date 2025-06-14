import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import { ThemeProvider } from './Context/Theme';
import Main from './Components/Main';
import Skills from './Components/Skills';
import About from './Components/About';

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

  return (
    <ThemeProvider value={{ darkMode, toggleDarkMode }}>
        <NavBar />
        <Main />
        <About />
        <Skills />
    </ThemeProvider>
  );
}

export default App;
