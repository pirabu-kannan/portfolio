import { useState } from 'react';

const steps = [
  { number: '01', title: 'UNDERSTAND THE PHYSICAL SYSTEM', description: 'Deep dive into mechanical, electrical, and operational characteristics.' },
  { number: '02', title: 'CAPTURE ENGINEERING DATA', description: 'Identify sensors and data sources to capture real-time and historical information.' },
  { number: '03', title: 'MODEL SYSTEM BEHAVIOR', description: 'Develop mathematical and computational models of the system.' },
  { number: '04', title: 'INTEGRATE SIMULATION', description: 'Connect simulation tools with real-world data for validation.' },
  { number: '05', title: 'BUILD AI/ML WORKFLOWS', description: 'Create predictive and diagnostic models using machine learning.' },
  { number: '06', title: 'CREATE DIGITAL TWIN', description: 'Synchronize the digital model with the physical asset.' },
  { number: '07', title: 'MONITOR / PREDICT / DIAGNOSE', description: 'Use the twin for condition monitoring, fault prediction, and diagnosis.' },
  { number: '08', title: 'ENABLE INTELLIGENT DECISION SUPPORT', description: 'Provide actionable insights for optimization and automation.' },
];

const HowIThink = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {steps.map((step, idx) => (
        <button
          key={step.number}
          className="text-left bg-graphite p-5 rounded-lg border border-gray-800 hover:border-electric-cyan/50 transition"
          onClick={() => setActive(active === idx ? null : idx)}
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-electric-cyan">{step.number}</span>
            <h3 className="font-semibold">{step.title}</h3>
          </div>
          {active === idx && (
            <p className="mt-2 text-sm text-gray-400">{step.description}</p>
          )}
        </button>
      ))}
    </div>
  );
};

export default HowIThink;
