import { useState, useEffect } from 'react';
import Link from 'next/link';

const LoadingOverlay = () => (
  <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
    <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
    <style jsx>{`
      .loader {
        border-top-color: #f59e0b;
        animation: spin 1s linear infinite;
      }
      @keyframes spin {
        0% { transform: rotate(0deg);}
        100% { transform: rotate(360deg);}
      }
    `}</style>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (sectionId === 'about') {
      setLoading(true);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        setLoading(false);
        setIsOpen(false);
      }, 1500);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsOpen(false);
    }
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Projects', id: 'projects' },
    { name: 'About', id: 'about' },
    { name: 'Resources', id: 'resources' },
    { name: 'Blog', id: 'blog' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <>
      {loading && <LoadingOverlay />}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-sm py-2 border-b border-gray-800' : 'bg-black py-3'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Left aligned */}
            <div className="flex-shrink-0 flex items-center space-x-3">
              <button onClick={() => scrollToSection('home')} className="group flex items-center space-x-3">
                <h1 className="text-xl font-mono font-bold tracking-tight text-white">
                  <span className="text-amber-500 group-hover:text-amber-400 transition-colors">E</span>
                  <span className="group-hover:text-gray-300 transition-colors">cma</span>
                  <span className="text-amber-500 group-hover:text-amber-400 transition-colors">P</span>
                  <span className="group-hover:text-gray-300 transition-colors">rojects</span>
                </h1>
              </button>
            </div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex md:items-center md:justify-center flex-1 mx-8">
              <div className="flex space-x-1">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      if(item.id === 'blog') {
                        window.location.href = '/blog';
                      } else {
                        scrollToSection(item.id);
                      }
                    }}
                    className="relative px-4 py-2 group"
                  >
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                      {item.name}
                    </span>
                    <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-amber-500 group-hover:w-4/5 transition-all duration-300"></span>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Button - Right aligned */}
            <div className="hidden md:block">
              <Link href="/submit-project" legacyBehavior passHref>
                <a className="ml-4 relative overflow-hidden bg-amber-500 text-black px-4 py-2 rounded-md font-medium hover:bg-amber-400 transition-all duration-300 group flex items-center">
                  <span className="relative z-10">Submit Project</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </a>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 backdrop-blur-sm border-t border-gray-800">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  if(item.id === 'blog') {
                    window.location.href = '/blog';
                  } else {
                    scrollToSection(item.id);
                  }
                }}
                className="block w-full px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;