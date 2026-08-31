export interface Capability {
  id: string;
  category: string;
  icon?: string;
  skills: string[];
  description: string;
}

export const capabilities: Capability[] = [
  {
    id: 'ai-ml',
    category: 'AI / MACHINE LEARNING',
    skills: ['Python', 'Machine Learning', 'AI/ML Model Development', 'Predictive Analytics', 'Condition Monitoring', 'Fault Diagnosis', 'Prognostics', 'Intelligent Optimization', 'Decision Support'],
    description: 'Building predictive models and intelligent algorithms for engineering systems.',
  },
  {
    id: 'llm-apps',
    category: 'LLM & INTELLIGENT APPLICATIONS',
    skills: ['LLM API Integration', 'Agentic AI', 'AI Application Development', 'AI-Assisted Workflows', 'Prompt / Model Integration'],
    description: 'Leveraging large language models for engineering workflows and automation.',
  },
  {
    id: 'software-backend',
    category: 'SOFTWARE & BACKEND',
    skills: ['Python', 'FastAPI', 'REST APIs', 'C', 'Embedded C', 'Git', 'Linux / SSH', 'Docker'],
    description: 'Robust software development for data pipelines and backend services.',
  },
  {
    id: 'cloud-infra',
    category: 'CLOUD & INFRASTRUCTURE',
    skills: ['AWS', 'Microsoft Azure', 'Google Cloud Platform', 'Containerized Applications'],
    description: 'Deploying and managing scalable cloud infrastructure.',
  },
  {
    id: 'industrial-data',
    category: 'INDUSTRIAL & DATA INTEGRATION',
    skills: ['MQTT', 'OPC UA', 'PLC Integration', 'Industrial IoT', 'Real-Time Data Processing', 'Sensor Data Integration', 'LabVIEW'],
    description: 'Connecting industrial hardware and sensors to data platforms.',
  },
  {
    id: 'digital-twin',
    category: 'DIGITAL TWIN & SIMULATION',
    skills: ['Digital Twin Development', 'Engineering-System Modeling', 'Simulation Integration', 'Real-Time Monitoring', 'Predictive Maintenance', 'Anomaly / Fault Analysis', 'Unity3D', 'MATLAB'],
    description: 'Creating digital replicas of physical systems for monitoring and optimization.',
  },
  {
    id: 'embedded-autonomous',
    category: 'EMBEDDED & AUTONOMOUS SYSTEMS',
    skills: ['Microcontrollers', 'Embedded Software', 'PCB Design & Debugging', 'Robotics', 'Automation', 'Sensor Integration', 'CAN', 'SPI', 'I2C', 'USART', 'RS232', 'RS485', 'USB'],
    description: 'Developing embedded control and autonomous systems for physical applications.',
  },
  {
    id: 'engineering-tools',
    category: 'ENGINEERING TOOLS',
    skills: ['ANSYS', 'COMSOL', 'SolidWorks', 'AutoCAD', 'MATLAB', 'LabVIEW', 'Unity3D'],
    description: 'Utilizing advanced engineering software for design, simulation, and analysis.',
  },
];
