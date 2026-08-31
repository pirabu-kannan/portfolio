import { experiences } from '../data/experience';

const ExperienceTimeline = () => {
  return (
    <div className="relative">
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-gray-800" />
      <div className="space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className={`relative flex flex-col md:flex-row ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            <div className="md:w-1/2 md:px-8">
              <div className="bg-graphite p-6 rounded-lg border border-gray-800 hover:border-electric-cyan/50 transition">
                <span className="font-mono text-sm text-electric-cyan">{exp.period}</span>
                <h3 className="text-xl font-semibold mt-1">{exp.title}</h3>
                <p className="text-gray-400">{exp.organization}</p>
                {exp.project && <p className="text-sm text-amber-accent mt-1">{exp.project}</p>}
                <ul className="mt-3 space-y-1 text-sm text-gray-300">
                  {exp.highlights.map(h => (
                    <li key={h} className="flex items-start">
                      <span className="mr-2 text-electric-cyan">▹</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center w-8">
              <div className="w-3 h-3 rounded-full bg-electric-cyan border-2 border-deep-space" />
            </div>
            <div className="md:w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
