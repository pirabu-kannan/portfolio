const layers = [
  {
    name: 'PHYSICAL',
    items: ['Sensors', 'Motors', 'Microcontrollers', 'PCBs', 'Mechanical systems'],
    color: '#00e5ff',
  },
  {
    name: 'CONNECTIVITY',
    items: ['CAN', 'SPI', 'I2C', 'USART', 'RS232', 'RS485', 'USB', 'MQTT', 'OPC UA'],
    color: '#00b8d4',
  },
  {
    name: 'DATA',
    items: ['Real-time data', 'Sensor data', 'Engineering data', 'Simulation data'],
    color: '#0091ea',
  },
  {
    name: 'SOFTWARE',
    items: ['Python', 'FastAPI', 'REST', 'C', 'Embedded C', 'Docker', 'Linux'],
    color: '#ffab00',
  },
  {
    name: 'INTELLIGENCE',
    items: ['AI/ML', 'Predictive Analytics', 'Fault Diagnosis', 'Prognostics', 'Optimization', 'LLM', 'Agentic AI'],
    color: '#ff6d00',
  },
  {
    name: 'DIGITAL TWIN',
    items: ['System Modeling', 'Simulation', 'Monitoring', 'Prediction', 'Decision Support'],
    color: '#ffffff',
  },
  {
    name: 'APPLICATION',
    items: ['Aerospace', 'Manufacturing', 'Robotics', 'Automation', 'Autonomous Systems'],
    color: '#76ff03',
  },
];

const EngineeringStack = () => {
  return (
    <div className="space-y-8">
      {layers.map((layer, idx) => (
        <div key={layer.name} className="relative">
          <div className="flex items-center mb-2">
            <span className="font-mono text-sm mr-3" style={{ color: layer.color }}>
              LAYER {idx + 1}
            </span>
            <h3 className="font-semibold">{layer.name}</h3>
          </div>
          <div className="flex flex-wrap gap-2 pl-4 border-l-2" style={{ borderColor: layer.color }}>
            {layer.items.map(item => (
              <span key={item} className="bg-gray-800 px-3 py-1 rounded text-sm text-gray-200">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EngineeringStack;
