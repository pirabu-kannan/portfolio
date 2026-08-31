import { achievements } from '../data/achievements';

const AchievementGrid = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {achievements.map(ach => (
        <div key={ach.title} className="bg-graphite p-6 rounded-lg border border-gray-800 text-center">
          <div className="text-4xl mb-3">🏆</div>
          <h3 className="font-semibold">{ach.title}</h3>
          <p className="text-sm text-gray-400 mt-1">{ach.organization}</p>
          <p className="text-xs text-gray-500 mt-2">{ach.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AchievementGrid;
