import { useState, useEffect } from 'react';
import { profile } from '../config/profile';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Research', href: '#research' },
    { label: 'Stack', href: '#stack' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-40 transition-all ${scrolled ? 'bg-deep-space/90 backdrop-blur-lg border-b border-gray-800' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="font-mono text-sm text-electric-cyan">PIRABU KANNAN</a>
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map(item => (
            <a key={item.href} href={item.href} className="text-sm text-gray-300 hover:text-electric-cyan transition-colors">
              {item.label}
            </a>
          ))}
          <a
            href={profile.resume}
            className="text-sm bg-electric-cyan/10 border border-electric-cyan/50 text-electric-cyan px-4 py-2 rounded-full hover:bg-electric-cyan/20 transition-colors"
            download
          >
            Download Resume
          </a>
        </div>
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </nav>
      {mobileOpen && (
        <div className="md:hidden bg-deep-space/95 backdrop-blur-lg p-6 border-t border-gray-800">
          <div className="flex flex-col space-y-4">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="text-lg text-gray-200 hover:text-electric-cyan"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href={profile.resume} className="text-electric-cyan" download>Download Resume</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
