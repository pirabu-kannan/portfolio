import { education } from '../data/education';

const EducationSection = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {education.map(edu => (
        <div key={edu.degree} className="bg-graphite p-6 rounded-lg border border-gray-800">
          <span className="font-mono text-sm text-electric-cyan">{edu.year}</span>
          <h3 className="text-xl font-semibold mt-1">{edu.degree}</h3>
          <p className="text-gray-400">{edu.field}</p>
          <p className="text-gray-400">{edu.institution}</p>
          {edu.cgpa && <p className="text-sm mt-2">CGPA: {edu.cgpa}</p>}
          {edu.coursework && (
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-gray-300">Relevant Coursework</h4>
              <ul className="mt-2 space-y-1 text-sm text-gray-400">
                {edu.coursework.map(course => (
                  <li key={course}>• {course}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default EducationSection;
