import React, { useState, useEffect, Suspense } from 'react';
import './App.css';
import { ThemeProvider } from './Context/Theme';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Preloader from './Components/Preloader';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectPage from './Components/ProjectPage';





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
    <Router>
    <ThemeProvider value={{ darkMode, toggleDarkMode }}>
      <NavBar />

      <Routes>
        <Route path="/ProjectPage" element={<ProjectPage />} />
        <Route
          path="/"
          element={
            <Suspense fallback={<Preloader />}>
              <>
                <Home />

              </>
            </Suspense>
          }
        />
      </Routes>
    </ThemeProvider>
    </Router>

  );
}

export default App;
