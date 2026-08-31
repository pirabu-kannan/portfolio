import { useState } from 'react';

const SystemStatus = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center space-x-2 text-xs font-mono bg-graphite/80 border border-gray-700 rounded-full px-3 py-1.5 backdrop-blur-sm hover:border-electric-cyan/50 transition-colors"
        aria-label="System status"
      >
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-slow" />
        <span className="text-gray-300">SYSTEM STATUS</span>
        <span className="text-electric-cyan">●</span>
      </button>
      {open && (
        <div className="mt-2 bg-graphite/95 border border-gray-700 rounded-lg p-4 w-56 backdrop-blur-lg shadow-2xl">
          <div className="font-mono text-sm">
            <div className="flex justify-between mb-2">
              <span className="text-gray-400">AI / ML</span>
              <span className="text-green-400">READY</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-400">DIGITAL TWIN</span>
              <span className="text-green-400">READY</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-400">SIMULATION</span>
              <span className="text-green-400">READY</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">SYSTEMS</span>
              <span className="text-green-400">READY</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SystemStatus;
