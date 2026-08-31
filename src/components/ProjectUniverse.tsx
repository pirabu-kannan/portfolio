import { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const ProjectUniverse = () => {
  const [filter, setFilter] = useState<string>('ALL');

  const filters = ['ALL', 'DIGITAL TWIN', 'AI/ML', 'AEROSPACE', 'MANUFACTURING', 'ROBOTICS', 'SENSORS', 'EMBEDDED', 'AUTOMATION'];

  const filtered = filter === 'ALL' ? projects : projects.filter(p => p.category === filter || p.domains.includes(filter));

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full text-sm border transition ${
              filter === f
                ? 'bg-electric-cyan/20 border-electric-cyan text-electric-cyan'
                : 'border-gray-700 text-gray-400 hover:border-electric-cyan/50'
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectUniverse;
