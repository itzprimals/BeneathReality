import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';
import ScrollToTopLink from './ScrollToTopLink';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <ScrollToTopLink to="/" className="text-2xl font-bold text-white hover:text-purple-400 transition-colors duration-200">
              <span className="text-purple-400">B</span>ENEATH
            </ScrollToTopLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <ScrollToTopLink 
              to="/teams" 
              className={`transition-colors duration-200 ${isActive('/teams') ? 'text-purple-400' : 'text-white hover:text-purple-400'}`}
            >
              Teams
            </ScrollToTopLink>
            <ScrollToTopLink 
              to="/news" 
              className={`transition-colors duration-200 ${isActive('/news') ? 'text-purple-400' : 'text-white hover:text-purple-400'}`}
            >
              News
            </ScrollToTopLink>
            <ScrollToTopLink 
              to="/about" 
              className={`transition-colors duration-200 ${isActive('/about') ? 'text-purple-400' : 'text-white hover:text-purple-400'}`}
            >
              About
            </ScrollToTopLink>
            <ScrollToTopLink 
              to="/roster" 
              className={`transition-colors duration-200 ${isActive('/roster') ? 'text-purple-400' : 'text-white hover:text-purple-400'}`}
            >
              Roster
            </ScrollToTopLink>
            <ScrollToTopLink 
              to="/contact" 
              className={`transition-colors duration-200 ${isActive('/contact') ? 'text-purple-400' : 'text-white hover:text-purple-400'}`}
            >
              Contact
            </ScrollToTopLink>
          </nav>

          {/* Right side icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Search className="w-5 h-5 text-white hover:text-purple-400 cursor-pointer transition-colors duration-200" />
            <ShoppingBag className="w-5 h-5 text-white hover:text-purple-400 cursor-pointer transition-colors duration-200" />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-purple-400 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-purple-500/20">
            <nav className="flex flex-col space-y-4">
              <ScrollToTopLink 
                to="/teams" 
                className={`transition-colors duration-200 ${isActive('/teams') ? 'text-purple-400' : 'text-white hover:text-purple-400'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Teams
              </ScrollToTopLink>
              <ScrollToTopLink 
                to="/news" 
                className={`transition-colors duration-200 ${isActive('/news') ? 'text-purple-400' : 'text-white hover:text-purple-400'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                News
              </ScrollToTopLink>
              <ScrollToTopLink 
                to="/about" 
                className={`transition-colors duration-200 ${isActive('/about') ? 'text-purple-400' : 'text-white hover:text-purple-400'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </ScrollToTopLink>
              <ScrollToTopLink 
                to="/roster" 
                className={`transition-colors duration-200 ${isActive('/roster') ? 'text-purple-400' : 'text-white hover:text-purple-400'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Roster
              </ScrollToTopLink>
              <ScrollToTopLink 
                to="/contact" 
                className={`transition-colors duration-200 ${isActive('/contact') ? 'text-purple-400' : 'text-white hover:text-purple-400'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </ScrollToTopLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;