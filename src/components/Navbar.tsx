import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code2, Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Code2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Bitcoding Solution</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center">
            <div className="flex space-x-4">
              {[
                ['Home', '/'],
                ['Services', '/services'],
                ['Portfolio', '/portfolio'],
                ['About', '/about'],
                ['Contact', '/contact'],
              ].map(([name, path]) => (
                <Link
                  key={name}
                  to={path}
                  className={`${
                    location.pathname === path
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-blue-50'
                  } px-3 py-2 rounded-md text-sm font-medium transition-colors`}
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-white shadow-md">
          <div className="space-y-1 px-4 pb-4">
            {[
              ['Home', '/'],
              ['Services', '/services'],
              ['Portfolio', '/portfolio'],
              ['About', '/about'],
              ['Contact', '/contact'],
            ].map(([name, path]) => (
              <Link
                key={name}
                to={path}
                onClick={() => setMobileMenuOpen(false)} // Close menu on link click
                className={`${
                  location.pathname === path
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-blue-50'
                } block px-3 py-2 rounded-md text-sm font-medium transition-colors`}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
