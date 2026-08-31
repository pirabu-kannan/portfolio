import { Project } from '../data/projects';
import { motion } from 'framer-motion';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetail = ({ project, onClose }: ProjectDetailProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 20, scale: 0.95 }}
        animate={{ y: 0, scale: 1 }}
        className="bg-graphite border border-gray-700 rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="text-xs font-mono text-gray-500">PROJECT ID: {project.id}</span>
              <h2 className="text-2xl font-bold mt-1">{project.title}</h2>
              <p className="text-gray-400">{project.category}</p>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-white">✕</button>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-electric-cyan">THE ENGINEERING CHALLENGE</h3>
              <p className="text-gray-300 mt-2">{project.fullDescription}</p>
            </div>
            {project.architecture && (
              <div>
                <h3 className="font-semibold text-electric-cyan">SYSTEM ARCHITECTURE</h3>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  {project.architecture.map((node, idx) => (
                    <div key={node} className="flex items-center">
                      <span className="bg-gray-800 px-3 py-1 rounded text-sm">{node}</span>
                      {idx < project.architecture!.length - 1 && <span className="mx-1 text-electric-cyan">→</span>}
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div>
              <h3 className="font-semibold text-electric-cyan">TECHNOLOGY</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="bg-gray-800 px-3 py-1 rounded text-sm">{tech}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-electric-cyan">ENGINEERING DOMAIN</h3>
              <p className="text-gray-300 mt-1">{project.domains.join(', ')}</p>
            </div>
            {project.github && (
              <div>
                <h3 className="font-semibold text-electric-cyan">GITHUB</h3>
                <a href={project.github} className="text-electric-cyan hover:underline" target="_blank" rel="noopener noreferrer">
                  {project.github}
                </a>
              </div>
            )}
            {project.publication && (
              <div>
                <h3 className="font-semibold text-electric-cyan">PUBLICATION</h3>
                <a href={project.publication} className="text-electric-cyan hover:underline" target="_blank" rel="noopener noreferrer">
                  {project.publication}
                </a>
              </div>
            )}
            <div className="text-sm text-gray-500">
              {project.status === 'Prototype' || project.status === 'Research' ? 'Technical details available upon request.' : ''}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetail;
