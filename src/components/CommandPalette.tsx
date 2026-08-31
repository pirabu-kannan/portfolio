import { useState, useEffect } from 'react';
import { profile } from '../config/profile';

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  const commands = [
    { name: 'Go to Projects', action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) },
    { name: 'Go to Experience', action: () => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }) },
    { name: 'Go to Research', action: () => document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' }) },
    { name: 'Open Resume', action: () => window.open(profile.resume, '_blank') },
    { name: 'Open GitHub', action: () => window.open(profile.github, '_blank') },
    { name: 'Open LinkedIn', action: () => window.open(profile.linkedin, '_blank') },
    { name: 'Contact', action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isOpen) return null;

  const filtered = commands.filter(cmd => cmd.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-start justify-center pt-20">
      <div className="bg-graphite border border-gray-700 rounded-lg w-full max-w-md overflow-hidden shadow-2xl">
        <div className="p-3 border-b border-gray-700">
          <input
            autoFocus
            type="text"
            placeholder="Type a command..."
            className="w-full bg-transparent outline-none text-white placeholder-gray-500"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="max-h-80 overflow-y-auto">
          {filtered.map((cmd, idx) => (
            <button
              key={idx}
              className="w-full text-left px-4 py-3 hover:bg-electric-cyan/10 flex items-center justify-between"
              onClick={() => { cmd.action(); setIsOpen(false); }}
            >
              <span>{cmd.name}</span>
              <span className="text-xs text-gray-500">↵</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
