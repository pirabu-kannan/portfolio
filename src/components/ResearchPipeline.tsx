const topics = [
  'Online condition monitoring',
  'Fault diagnosis',
  'Prognostics',
  'Intelligent optimization',
  'Engineering‑system data',
  'Simulation',
  'AI/ML workflows',
  'Automation interfaces',
];

const pipeline = [
  { label: 'PHYSICAL SYSTEM', desc: 'Real‑world asset or process' },
  { label: 'SENSORS', desc: 'Data acquisition from the asset' },
  { label: 'DATA', desc: 'Cleaned & structured engineering data' },
  { label: 'SIMULATION', desc: 'Physics‑based or data‑driven models' },
  { label: 'AI / ML', desc: 'Predictive models & pattern recognition' },
  { label: 'DIGITAL TWIN', desc: 'Synchronized digital replica' },
  { label: 'CONDITION ASSESSMENT', desc: 'Health, performance & anomalies' },
  { label: 'OPTIMIZATION', desc: 'Process tuning & decision variables' },
  { label: 'AUTOMATED PROCESS SUPPORT', desc: 'Closed‑loop or advisory control' },
];

const ResearchPipeline = () => {
  return (
    <div className="space-y-12">
      <div>
        <h3 className="text-2xl font-semibold mb-4">AI/ML‑based Digital Twin & Intelligent Systems Development</h3>
        <p className="text-gray-300 mb-6">
          My research focuses on building intelligent digital representations of physical systems that enable real‑time monitoring, diagnosis, and optimization across manufacturing and aerospace domains.
        </p>
        <div className="flex flex-wrap gap-2">
          {topics.map(topic => (
            <span key={topic} className="bg-gray-800 px-3 py-1 rounded-full text-sm text-gray-200">
              {topic}
            </span>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-9 gap-4">
        {pipeline.map((step, idx) => (
          <div key={step.label} className="flex flex-col items-center text-center">
            <div className="bg-graphite border border-gray-700 rounded-lg p-4 w-full min-h-[120px] flex flex-col justify-center hover:border-electric-cyan/50 transition">
              <span className="font-mono text-xs text-electric-cyan mb-1">STEP {idx + 1}</span>
              <h4 className="font-semibold text-sm">{step.label}</h4>
              <p className="text-xs text-gray-400 mt-1">{step.desc}</p>
            </div>
            {idx < pipeline.length - 1 && (
              <div className="hidden lg:block h-6 w-px bg-gray-600 my-2" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchPipeline;
