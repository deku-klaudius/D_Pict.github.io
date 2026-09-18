import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import AOS from 'aos'
import 'aos/dist/aos.css'

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="bg-white dark:bg-darkBg text-gray-900 dark:text-gray-100 font-sans antialiased selection:bg-accentBlue selection:text-black min-h-screen relative overflow-x-hidden">
        {/* Static Backgrounds */}
        <div className="fixed inset-0 w-full h-full z-0 bg-cover bg-center bg-no-repeat hidden dark:block" style={{backgroundImage: "url('/img/dark_bg.jpg')"}}></div>
        <div className="fixed inset-0 w-full h-full z-0 bg-cover bg-center bg-no-repeat block dark:hidden" style={{backgroundImage: "url('/img/light_bg.jpg')"}}></div>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
