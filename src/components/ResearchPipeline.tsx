const pipeline = [
  'PHYSICAL SYSTEM',
  'SENSORS',
  'DATA',
  'SIMULATION',
  'AI / ML',
  'DIGITAL TWIN',
  'CONDITION ASSESSMENT',
  'OPTIMIZATION',
  'AUTOMATED PROCESS SUPPORT',
];

const ResearchPipeline = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
      {pipeline.map((step, idx) => (
        <div key={step} className="flex flex-col items-center">
          <div className="bg-graphite border border-gray-700 rounded-lg px-4 py-3 text-center min-w-[120px]">
            <span className="text-sm font-medium">{step}</span>
          </div>
          {idx < pipeline.length - 1 && (
            <div className="hidden md:block h-6 w-px bg-gray-600 my-2" />
          )}
        </div>
      ))}
    </div>
  );
};

export default ResearchPipeline;
