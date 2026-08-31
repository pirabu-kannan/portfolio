const VisualDataSection = () => {
  return (
    <section className="py-24 bg-graphite/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">SYSTEM VISUALIZATIONS</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {['SENSOR STREAM', 'AI CONFIDENCE', 'DIGITAL TWIN SYNC'].map(title => (
            <div key={title} className="bg-graphite p-4 rounded-lg border border-gray-800">
              <h3 className="font-mono text-sm text-gray-400 mb-2">{title}</h3>
              <div className="h-32 flex items-end justify-between gap-1">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-full bg-electric-cyan/20 rounded-t"
                    style={{ height: `${Math.random() * 100}%` }}
                  />
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-2">Illustrative visualization</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisualDataSection;
