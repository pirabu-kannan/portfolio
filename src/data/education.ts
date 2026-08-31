export interface Education {
  degree: string;
  field: string;
  institution: string;
  location?: string;
  year: string;
  cgpa?: string;
  coursework?: string[];
}

export const education: Education[] = [
  {
    degree: 'Master of Science',
    field: 'Mechanical Engineering',
    institution: 'Indian Institute of Technology Madras',
    year: '2026',
    cgpa: '9.00 / 10',
    coursework: [
      'Aerospace Propulsion',
      'Artificial Intelligence in Manufacturing',
      'Industrial Internet of Things',
      'Sensors for Intelligent Manufacturing and Condition Monitoring',
      'Prognostics and Health Management for Machine Tools',
    ],
  },
  {
    degree: 'Bachelor of Engineering',
    field: 'Mechatronics',
    institution: 'Kongu Engineering College',
    year: '2021',
    cgpa: '9.33 / 10',
  },
];
