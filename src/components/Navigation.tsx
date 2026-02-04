import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Experience', path: '/experience' },
];

export function Navigation() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1e1e1e]/95 backdrop-blur-sm border-b border-[#3a3a3a]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link 
          to="/"
          className="text-[#a3be8c] hover:text-[#b8d8a0] transition-colors"
        >
          &lt;lulazar.com /&gt;
        </Link>
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
      </div>
    </nav>
  );
}
