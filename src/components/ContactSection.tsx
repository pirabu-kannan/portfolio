import { profile } from '../config/profile';

const ContactSection = () => {
  return (
    <div className="grid md:grid-cols-2 gap-12">
      <div>
        <p className="text-lg text-gray-300 mb-6">
          Interested in AI/ML, Digital Twins, intelligent manufacturing, aerospace systems, simulation, robotics, or engineering automation?
          Let's connect.
        </p>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-electric-cyan">📧</span>
            <a href={`mailto:${profile.email}`} className="hover:text-electric-cyan">{profile.email}</a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-electric-cyan">📱</span>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="hover:text-electric-cyan">{profile.phone}</a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-electric-cyan">📍</span>
            <span>{profile.location}</span>
          </div>
        </div>
        <div className="mt-8 flex gap-4">
          {profile.github && <a href={profile.github} className="bg-gray-800 px-4 py-2 rounded-full hover:bg-gray-700">GitHub</a>}
          {profile.linkedin && <a href={profile.linkedin} className="bg-gray-800 px-4 py-2 rounded-full hover:bg-gray-700">LinkedIn</a>}
          {profile.scholar && <a href={profile.scholar} className="bg-gray-800 px-4 py-2 rounded-full hover:bg-gray-700">Google Scholar</a>}
          <a href={profile.resume} className="bg-electric-cyan text-deep-space px-4 py-2 rounded-full font-semibold" download>
            Download Resume
          </a>
        </div>
      </div>
      <div className="bg-graphite p-6 rounded-lg border border-gray-800">
        <h3 className="text-xl font-semibold mb-4">Direct Message</h3>
        <form className="space-y-4">
          <input type="text" placeholder="Your name" className="w-full bg-deep-space border border-gray-700 rounded px-4 py-2" />
          <input type="email" placeholder="Your email" className="w-full bg-deep-space border border-gray-700 rounded px-4 py-2" />
          <textarea rows={4} placeholder="Message" className="w-full bg-deep-space border border-gray-700 rounded px-4 py-2" />
          <button type="button" className="bg-electric-cyan/20 text-electric-cyan border border-electric-cyan px-6 py-2 rounded-full hover:bg-electric-cyan/30">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
