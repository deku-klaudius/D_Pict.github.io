import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check initial theme
    const savedTheme = localStorage.getItem('color-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
      setIsDark(true);
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-darkBg/50 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-xl sm:text-2xl font-black tracking-wider text-black dark:text-white">
          D_PICT<span className="text-accentBlue">.</span>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 lg:space-x-10 text-base font-semibold text-black dark:text-white">
          <Link to="/" className={`transition duration-300 relative group ${isActive('/') ? 'text-black dark:text-white' : 'text-gray-600 dark:text-gray-400 hover:text-accentBlue'}`}>
            Home
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-accentBlue rounded-full transition-all duration-300 ${isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
          <Link to="/about" className={`transition duration-300 relative group ${isActive('/about') ? 'text-black dark:text-white' : 'text-gray-600 dark:text-gray-400 hover:text-accentBlue'}`}>
            About
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-accentBlue rounded-full transition-all duration-300 ${isActive('/about') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
          <Link to="/contact" className={`transition duration-300 relative group ${isActive('/contact') ? 'text-black dark:text-white' : 'text-gray-600 dark:text-gray-400 hover:text-accentBlue'}`}>
            Contact
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-accentBlue rounded-full transition-all duration-300 ${isActive('/contact') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
        </div>

        {/* Theme Toggle Button Desktop */}
        <button
          onClick={toggleTheme}
          type="button"
          aria-label="Toggle theme"
          className="hidden md:inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-[#1e293b] border border-gray-300 dark:border-gray-700 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-accentBlue transition hover:scale-110 focus:outline-none shadow-lg cursor-pointer"
        >
          {isDark ? (
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
          )}
        </button>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden text-black dark:text-white focus:outline-none transition p-2 cursor-pointer"
        >
          <i className={`fa-solid ${isMobileOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMobileOpen && (
        <div className="md:hidden bg-white/90 dark:bg-darkBg/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800">
          <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col text-center">
            <Link to="/" onClick={() => setIsMobileOpen(false)} className={`font-semibold py-2 border-b border-gray-200 dark:border-gray-800 ${isActive('/') ? 'text-black dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>Home</Link>
            <Link to="/about" onClick={() => setIsMobileOpen(false)} className={`font-semibold py-2 border-b border-gray-200 dark:border-gray-800 ${isActive('/about') ? 'text-black dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>About</Link>
            <Link to="/contact" onClick={() => setIsMobileOpen(false)} className={`font-semibold py-2 border-b border-gray-200 dark:border-gray-800 ${isActive('/contact') ? 'text-black dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>Contact</Link>
            <button
              onClick={toggleTheme}
              type="button"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-[#1e293b] border border-gray-300 dark:border-gray-700 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-accentBlue transition focus:outline-none mx-auto mt-4 shadow-lg cursor-pointer"
            >
              {isDark ? (
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
