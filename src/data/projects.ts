export interface Project {
  id: string;
  title: string;
  category: 'Aerospace' | 'Manufacturing' | 'Digital Twin' | 'Robotics' | 'AI/ML' | 'Sensors' | 'Embedded' | 'Autonomous';
  year?: string;
  organization?: string;
  shortDescription: string;
  fullDescription: string;
  domains: string[];
  technologies: string[];
  architecture?: string[];
  status: 'Completed' | 'Ongoing' | 'Research' | 'Prototype';
  github?: string;
  publication?: string;
  images?: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'aero-engine-digital-twin',
    title: 'Aero-Engine Digital Twin',
    category: 'Aerospace',
    year: '2022-2024',
    organization: 'IIT Madras, GTRE Sponsored',
    shortDescription: 'Digital Twin for an aero-engine system with simulation integration, data processing, and AI/ML workflows.',
    fullDescription: 'Developed a Digital Twin for an aero-engine system and integrated simulation, data processing, and AI/ML workflows for engineering analysis and decision support.',
    domains: ['Digital Twin', 'Simulation', 'AI/ML', 'Aerospace', 'Data Processing'],
    technologies: ['Python', 'MATLAB', 'Simulation', 'AI/ML', 'Data Analysis'],
    architecture: ['Engine', 'Simulation', 'Data Processing', 'AI/ML', 'Digital Twin', 'Decision Support'],
    status: 'Completed',
    featured: true,
  },
  {
  id: 'diamond-growth-digital-twin',
  title: 'Digital Twin for Diamond Growth Process (MPCVD & HPHT)',
  category: 'Manufacturing',
  year: '2026',
  organization: 'Indian Institute of Technology Madras',
  shortDescription: 'Developing Digital Twin for diamond growth process monitoring and optimization in MPCVD and HPHT systems.',
  fullDescription: 'Developed a Digital Twin framework for diamond growth processes using MPCVD and HPHT methods, integrating real‑time data, simulation, and AI/ML for process monitoring and optimisation.',
  domains: ['Digital Twin', 'Manufacturing', 'Process Monitoring', 'AI/ML', 'Simulation'],
  technologies: ['Python', 'Digital Twin', 'Simulation', 'AI/ML', 'Data Processing', 'Condition Monitoring'],
  architecture: ['MPCVD/HPHT System', 'Sensors', 'Data Acquisition', 'Simulation Model', 'AI/ML Models', 'Digital Twin', 'Process Optimization'],
  status: 'Ongoing',
  featured: true,
}
  {
    id: 'cnc-milling-digital-twin',
    title: 'Digital Twin for CNC Milling Machine',
    category: 'Manufacturing',
    organization: 'IIT Madras',
    shortDescription: 'Digital Twin concepts for machine-system monitoring and intelligent analysis.',
    fullDescription: 'Developed Digital Twin concepts for machine-system monitoring and intelligent analysis in manufacturing.',
    domains: ['Digital Twin', 'Manufacturing', 'Machine Monitoring', 'AI/ML'],
    technologies: ['Python', 'Digital Twin', 'Monitoring', 'AI/ML'],
    status: 'Prototype',
    featured: false,
  },
  {
    id: 'cnc-drilling-digital-twin',
    title: 'Digital Twin for CNC Drilling Machine',
    category: 'Manufacturing',
    organization: 'IIT Madras',
    shortDescription: 'Digital Twin-based approaches for engineering-system monitoring and analysis.',
    fullDescription: 'Developed Digital Twin-based approaches for engineering-system monitoring and analysis in drilling processes.',
    domains: ['Digital Twin', 'Manufacturing', 'Monitoring', 'Simulation'],
    technologies: ['Python', 'Digital Twin', 'Simulation', 'Monitoring'],
    status: 'Prototype',
    featured: false,
  },
  {
    id: 'three-axis-pedestal',
    title: 'Three-Axis Surveillance Pedestal',
    category: 'Robotics',
    organization: 'System Control Technology Solutions',
    shortDescription: 'Mechanical/electronic system integration of a three-axis surveillance pedestal.',
    fullDescription: 'Integrated mechanical and electronic systems for a three-axis surveillance pedestal, involving control and embedded systems.',
    domains: ['Mechatronics', 'Control', 'Embedded Systems', 'Mechanical Systems'],
    technologies: ['Embedded C', 'Microcontrollers', 'Control Systems', 'PCB'],
    status: 'Completed',
    featured: false,
  },
  {
    id: 'pan-tilt-thermal',
    title: 'Pan-Tilt Pedestal with Thermal Monitoring',
    category: 'Embedded',
    organization: 'System Control Technology Solutions',
    shortDescription: 'Pan-tilt pedestal system incorporating thermal monitoring capabilities.',
    fullDescription: 'Developed a pan-tilt pedestal system that includes thermal monitoring for surveillance and tracking applications.',
    domains: ['Thermal Monitoring', 'Mechatronics', 'Embedded Systems', 'Automation'],
    technologies: ['Embedded C', 'Microcontrollers', 'Thermal Sensors', 'Servo Control'],
    status: 'Completed',
    featured: false,
  },
  {
    id: 'oil-spill-robot',
    title: 'Autonomous Oil Spill Removal Robot',
    category: 'Autonomous',
    shortDescription: 'Autonomous robot for oil spill removal, demonstrating robotics and automation.',
    fullDescription: 'Designed and developed an autonomous robot for oil spill removal, integrating navigation, sensing, and actuation.',
    domains: ['Robotics', 'Automation', 'Autonomous Systems'],
    technologies: ['Arduino', 'Raspberry Pi', 'Sensors', 'Motors', 'Control'],
    status: 'Prototype',
    featured: false,
  },
  {
    id: 'ai-manufacturing-surfaces',
    title: 'AI/ML for Manufacturing Surfaces',
    category: 'AI/ML',
    organization: 'IIT Madras',
    shortDescription: 'AI/ML models for micro-machined patterned surfaces and machining surfaces.',
    fullDescription: 'Developed AI/ML models for analysis of micro-machined patterned surfaces and machining surfaces in manufacturing.',
    domains: ['AI/ML', 'Manufacturing', 'Surface Analysis', 'Data Science'],
    technologies: ['Python', 'Machine Learning', 'Data Analysis', 'Image Processing (basic)'],
    status: 'Research',
    featured: false,
  },
  {
    id: 'heavy-metal-sensor',
    title: 'Heavy-Metal Detection Sensor System',
    category: 'Sensors',
    shortDescription: 'Sensor development for heavy-metal detection with portable potentiostat.',
    fullDescription: 'Developed a sensor system for heavy-metal detection, including portable potentiostat development for electrochemical measurements.',
    domains: ['Sensors', 'Instrumentation', 'Electrochemistry', 'Embedded Systems'],
    technologies: ['Electrochemistry', 'Potentiostat', 'Embedded C', 'Analog Circuits'],
    status: 'Prototype',
    featured: false,
  },
  {
    id: 'embedded-control-automation',
    title: 'Embedded Control & Automation',
    category: 'Embedded',
    shortDescription: 'Projects involving Arduino, Raspberry Pi, ATmega series, and industrial protocols.',
    fullDescription: 'Multiple embedded control and automation projects using Arduino, Raspberry Pi, ATmega2560, ATmega128, AT90CAN128, with protocols like MQTT, USART, SPI, I2C, CAN, etc.',
    domains: ['Embedded', 'Automation', 'IoT', 'Robotics'],
    technologies: ['Arduino', 'Raspberry Pi', 'ATmega2560', 'ATmega128', 'AT90CAN128', 'MQTT', 'CAN', 'SPI', 'I2C', 'USART', 'RS232', 'RS485'],
    status: 'Completed',
    featured: false,
  },
];
