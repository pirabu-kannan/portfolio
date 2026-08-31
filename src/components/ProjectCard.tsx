import { Project } from '../data/projects';
import { useState } from 'react';
import ProjectDetail from './ProjectDetail';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="text-left bg-graphite p-6 rounded-lg border border-gray-800 hover:border-electric-cyan/50 transition group"
        onClick={() => setOpen(true)}
      >
        <div className="flex justify-between items-start">
          <span className="text-xs font-mono text-gray-500">{project.category}</span>
          {project.featured && <span className="text-xs text-amber-accent">★ FLAGSHIP</span>}
        </div>
        <h3 className="text-xl font-semibold mt-2 group-hover:text-electric-cyan transition">{project.title}</h3>
        <p className="text-sm text-gray-400 mt-2">{project.shortDescription}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map(tech => (
            <span key={tech} className="text-xs bg-gray-800 px-2 py-1 rounded">{tech}</span>
          ))}
        </div>
      </button>
      {open && <ProjectDetail project={project} onClose={() => setOpen(false)} />}
    </>
  );
};

export default ProjectCard;
