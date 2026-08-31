import { useState } from 'react';
import { capabilities } from '../data/capabilities';

const CapabilityMatrix = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {capabilities.map(cap => (
        <div
          key={cap.id}
          className="bg-graphite p-5 rounded-lg border border-gray-800 hover:border-electric-cyan/50 transition-all cursor-pointer"
          onMouseEnter={() => setActive(cap.id)}
          onMouseLeave={() => setActive(null)}
        >
          <h3 className="font-semibold text-lg mb-2">{cap.category}</h3>
          <p className="text-sm text-gray-400 mb-3">{cap.description}</p>
          <div className="flex flex-wrap gap-2">
            {cap.skills.slice(0, 5).map(skill => (
              <span key={skill} className="text-xs bg-gray-800 px-2 py-1 rounded">{skill}</span>
            ))}
            {cap.skills.length > 5 && <span className="text-xs text-gray-500">+{cap.skills.length - 5}</span>}
          </div>
          {active === cap.id && (
            <div className="mt-3 pt-3 border-t border-gray-700">
              <p className="text-xs text-gray-400">Click to explore</p>
              <ul className="mt-2 grid grid-cols-2 gap-1">
                {cap.skills.map(skill => (
                  <li key={skill} className="text-xs text-gray-300">• {skill}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CapabilityMatrix;
