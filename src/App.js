import React, { useState, useEffect, Suspense } from 'react';
import './App.css';
import { ThemeProvider } from './Context/Theme';
import NavBar from './Components/NavBar';
import Main from './Components/Main';
import Preloader from './Components/Preloader';
import {BrowserRouter,  Routes, Route } from 'react-router-dom';

const About = React.lazy(() => import('./Components/About'));
const Skills = React.lazy(() => import('./Components/Skills'));
const Projects = React.lazy(() => import('./Components/Projects'));
const Contact = React.lazy(() => import('./Components/Contact'));
const ProjectPage = React.lazy(() => import('./Components/ProjectPage'));

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2s delay for preloader

    return () => clearTimeout(timer);
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

  // Create a gradient on scroll bar
  const gradient = `linear-gradient(to bottom, #003cff ${scrollPercent * 100}%, transparent ${scrollPercent * 100}%)`;

  document.documentElement.style.setProperty('--scroll-gradient', gradient);
});



  // Show preloader while loading
  if (isLoading) return <Preloader />;

  return (
    <ThemeProvider value={{ darkMode, toggleDarkMode }}>
      <BrowserRouter>
        <NavBar />
        <Suspense fallback={<Preloader />}>
          <Routes>
            <Route path="/" element={
              <>
                <Main />
                <About />
                <Skills />
                <Projects />
                <Contact />
              </>
            } />
            <Route path="/ProjectPage" element={<ProjectPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;