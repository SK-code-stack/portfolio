import React, { useState } from 'react';
import useTheme from '../Context/Theme';

export default function NavBar() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(prev => !prev);
  };

  return (
    <>
  <nav className="backdrop-blur-md bg-custom-mylight/60 dark:bg-black/40 text-black dark:text-white shadow sticky top-0 z-50 w-full font-custom">
   <div className="  px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className=" font-bold text-4xl text-custom-myblack dark:text-custom-txt">
            SK
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 text-custom-myblack dark:text-custom-txt ">
            <a href="#home" className="  dark:hover:bg-custom-lightgray hover:rounded-lg px-2 transition">Home</a>
            <a href="#about" className="  dark:hover:bg-custom-lightgray hover:rounded-lg px-2 transition">About Me</a>
            <a href="#skills" className="  dark:hover:bg-custom-lightgray hover:rounded-lg px-2 transition">Skills</a>
            <a href="#projects" className="  dark:hover:bg-custom-lightgray hover:rounded-lg px-2 transition">Projects</a>
            <a href="#contact" className="  dark:hover:bg-custom-lightgray hover:rounded-lg px-2 transition">Contact</a>
            <button
              onClick={toggleDarkMode}
              className="ml-4 p-3 rounded  transition-all duration-500 flex items-center justify-between w-12 relative overflow-hidden"
            >
              <span
                className={`absolute transition-all duration-500 transform ${
                  darkMode ? 'translate-x-20 opacity-0' : 'translate-x-0 opacity-100'
                }`}
              >
                🌙
              </span>
              <span
                className={`absolute transition-all duration-500 transform ${
                  darkMode ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
                }`}
              >
                ☀️
              </span>
            </button>

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
          <button
            onClick={toggleDarkMode}
            className="mt-2  text-white px-3 py-1 rounded "
          >
            {darkMode ? "☀️ " : " 🌙"}
          </button>
            <button
              onClick={handleMobileMenuToggle}
              className="text-xl text-custom-myblack dark:text-custom-txt focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 py-3  bg-custom-mylight dark:bg-custom-myblack text-black dark:text-custom-mylight space-y-2">
          <a href="#home" onClick={handleMobileMenuToggle} className="block ">Home</a>
          <a href="#about" onClick={handleMobileMenuToggle} className="block ">About Me</a>
          <a href="#skills" onClick={handleMobileMenuToggle} className="block ">Skills</a>
          <a href="#projects" onClick={handleMobileMenuToggle} className="block ">Projects</a>
          <a href="#contact" onClick={handleMobileMenuToggle} className="block ">Contact</a>
          
        </div>
      )}
    </nav>





    </>
    
  );
}
