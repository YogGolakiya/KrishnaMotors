import React, { useState, useEffect } from 'react';
import { Menu, Settings } from 'lucide-react';

const Navigation = ({ scrollToSection, activeSection, mobileMenuOpen, setMobileMenuOpen }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'gallery', 'contact'];
      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 font-poppins ${
        scrollY > 50
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-navy-100'
          : 'bg-white/90 backdrop-blur-md'
      }`}
    >
<div className="max-w-7xl mx-auto px-6 lg:px-8">
  <div className="flex items-center justify-between h-20">
    <div className="flex items-center space-x-4 group cursor-pointer">
      <div className="relative">
        <img
          src="/Logo.png" 
          alt="Krishna Workshop Logo"
          className="w-12 h-12 rounded-full object-cover shadow-lg group-hover:shadow-xl transition-all duration-300"
        />
        <div className="absolute -inset-1 bg-gradient-to-br from-navy-600 to-blue-600 rounded-full opacity-20 group-hover:opacity-30 blur-sm transition-all duration-300"></div>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-navy-900">Krishna Motors</h1>
        <p className="text-sm text-navy-600 font-medium">Premium Automotive Care</p>
      </div>
    </div>

          <div className="hidden lg:block">
            <div className="flex items-center space-x-2">
              {["home", "about", "services", "gallery", "contact"].map((id) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeSection === id
                      ? 'bg-navy-600 text-white shadow-lg'
                      : 'text-navy-700 hover:bg-navy-50 hover:text-navy-900'
                  }`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              ))}
            </div>
          </div>

        
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-3 rounded-xl bg-navy-50 text-navy-600 hover:bg-navy-100 transition-all duration-300"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-navy-100">
          <div className="px-6 py-4 space-y-2">
            {["home", "about", "services", "gallery", "contact"].map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="block w-full text-left px-4 py-3 text-navy-700 hover:bg-navy-50 hover:text-navy-900 rounded-lg transition-all duration-300"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
