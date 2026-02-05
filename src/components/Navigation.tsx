import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const navItems = [
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Experience', path: '/experience' },
];

const mobileNavItems = [
  { label: 'About Me', path: '/about' },
  { label: 'Professional Experience', path: '/experience' },
  { label: 'Personal Projects', path: '/projects' },
];

export function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1e1e1e]/95 backdrop-blur-sm border-b border-[#3a3a3a]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link 
          to="/"
          className="text-[#a3be8c] hover:text-[#b8d8a0] transition-colors"
        >
          &lt;lulazar.com /&gt;
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`transition-colors ${
                location.pathname === item.path
                  ? 'text-[#a3be8c]'
                  : 'text-[#808080] hover:text-[#d4d4d4]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5"
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-6 bg-[#d4d4d4] transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`h-0.5 w-6 bg-[#d4d4d4] transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`h-0.5 w-6 bg-[#d4d4d4] transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden text-center border-t border-[#3a3a3a] bg-[#1e1e1e] px-6 py-4">
          {mobileNavItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block py-2 transition-colors ${
                location.pathname === item.path
                  ? 'text-[#a3be8c]'
                  : 'text-[#808080] hover:text-[#d4d4d4]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
