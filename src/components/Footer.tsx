import { profile } from '../config/profile';

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 py-12 text-center">
      <div className="container mx-auto px-6">
        <div className="font-mono text-xs text-gray-500 mb-4">
          PHYSICAL SYSTEMS + ENGINEERING DATA + AI + SIMULATION = INTELLIGENT SYSTEMS
        </div>
        <h3 className="text-2xl font-bold">{profile.name}</h3>
        <p className="text-gray-400 mt-2">AI/ML ENGINEER | DIGITAL TWIN DEVELOPER | ENGINEERING SYSTEMS BUILDER</p>
        <p className="text-sm text-gray-500 mt-4">Designing intelligence for complex physical systems.</p>
        <div className="mt-6 flex justify-center gap-4 text-sm text-gray-400">
          <a href="#top" className="hover:text-electric-cyan">Back to top</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
