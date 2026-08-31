export interface Experience {
  period: string;
  title: string;
  organization: string;
  location?: string;
  highlights: string[];
  project?: string;
}

export const experiences: Experience[] = [
  {
    period: '2026 – Present',
    title: 'Senior Project Officer',
    organization: 'Indian Institute of Technology Madras',
    highlights: [
      'Python-based Digital Twin and AI/ML software for advanced manufacturing',
      'Process monitoring, prediction, and automation',
      'Intelligent workflows combining engineering/process data with AI/ML',
      'Real-time monitoring and decision-making',
      'AI/ML + process modeling + automation',
    ],
  },
  {
    period: '2025',
    title: 'Project Officer',
    organization: 'Indian Institute of Technology Madras',
    highlights: [
      'Python-based Digital Twin and AI/ML workflows',
      'Process-data analysis, condition monitoring, prediction',
      'Intelligent optimization and decision support',
      'Engineering-system data processing',
    ],
  },
  {
    period: '2022 – 2024',
    title: 'Project Associate',
    organization: 'Indian Institute of Technology Madras',
    project: 'AERO-ENGINE DIGITAL TWIN (GTRE-SPONSORED)',
    highlights: [
      'Digital Twin for an aero-engine system',
      'Simulation integration and data processing',
      'AI/ML workflows for engineering-system analysis',
      'Decision support',
    ],
  },
  {
    period: '2021 – 2022',
    title: 'Associate Engineer – Mechatronics',
    organization: 'System Control Technology Solutions Pvt. Ltd.',
    highlights: [
      'Embedded software and microcontroller programming',
      'Embedded control systems',
      'PCB design and debugging',
      'Hardware/software troubleshooting',
      'System integration',
      'Sensor/control/physical-system interfaces',
    ],
  },
];
