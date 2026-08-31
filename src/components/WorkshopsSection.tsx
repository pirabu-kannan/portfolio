import { workshops } from '../data/workshops';

const WorkshopsSection = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {workshops.map(ws => (
        <div key={ws.title} className="bg-graphite p-6 rounded-lg border border-gray-800">
          <h3 className="font-semibold text-lg">{ws.title}</h3>
          <p className="text-gray-400">{ws.organizer}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {ws.topics.map(topic => (
              <span key={topic} className="text-xs bg-gray-800 px-2 py-1 rounded">{topic}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkshopsSection;
