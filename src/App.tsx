import { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSystem from './components/HeroSystem';
import SystemStatus from './components/SystemStatus';
import CommandPalette from './components/CommandPalette';
import SectionHeader from './components/SectionHeader';
import CapabilityMatrix from './components/CapabilityMatrix';
import ExperienceTimeline from './components/ExperienceTimeline';
import ProjectUniverse from './components/ProjectUniverse';
import EngineeringStack from './components/EngineeringStack';
import ResearchPipeline from './components/ResearchPipeline';
import EducationSection from './components/EducationSection';
import AchievementGrid from './components/AchievementGrid';
import WorkshopsSection from './components/WorkshopsSection';
import HowIThink from './components/HowIThink';
import VisualDataSection from './components/VisualDataSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CursorInteraction from './components/CursorInteraction';
import ScrollProgress from './components/ScrollProgress';
import { profile } from './config/profile';

function App() {
  return (
    <div className="bg-deep-space text-white min-h-screen font-sans relative">
      <CursorInteraction />
      <ScrollProgress />
      <SystemStatus />
      <CommandPalette />
      <Navbar />
      <main>
        <HeroSystem />
        <section id="about" className="py-24">
          <div className="container mx-auto px-6">
            <SectionHeader
              title="SYSTEM PROFILE"
              subtitle="Engineer. Builder. Problem Solver."
            />
            <div className="grid md:grid-cols-2 gap-12 mt-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4">{profile.name}</h3>
                <p className="text-gray-300 mb-4">{profile.summary}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-cyan-900/30 border border-cyan-500/30 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-cyan-900/30 border border-cyan-500/30 rounded-full text-sm">AI/ML</span>
                  <span className="px-3 py-1 bg-cyan-900/30 border border-cyan-500/30 rounded-full text-sm">Digital Twin</span>
                  <span className="px-3 py-1 bg-cyan-900/30 border border-cyan-500/30 rounded-full text-sm">Simulation</span>
                  <span className="px-3 py-1 bg-cyan-900/30 border border-cyan-500/30 rounded-full text-sm">Embedded</span>
                  <span className="px-3 py-1 bg-cyan-900/30 border border-cyan-500/30 rounded-full text-sm">Aerospace</span>
                </div>
                <p className="text-gray-400">
                  Works at the intersection of <span className="text-electric-cyan">AI</span> + <span className="text-electric-cyan">Simulation</span> + <span className="text-electric-cyan">Engineering Data</span> + <span className="text-electric-cyan">Physical Systems</span> + <span className="text-electric-cyan">Automation</span>.
                </p>
              </div>
              <div className="bg-graphite p-6 rounded-lg border border-gray-800">
                <h4 className="font-mono text-sm text-gray-400 mb-4">// CORE STACK</h4>
                <ul className="space-y-2 text-sm">
                  <li><span className="text-electric-cyan">Python</span> - Advanced AI/ML, FastAPI, Data</li>
                  <li><span className="text-electric-cyan">C / Embedded C</span> - Microcontrollers, Firmware</li>
                  <li><span className="text-electric-cyan">Docker / Linux</span> - Deployment & DevOps</li>
                  <li><span className="text-electric-cyan">AWS / Azure / GCP</span> - Cloud Infrastructure</li>
                  <li><span className="text-electric-cyan">MQTT / OPC UA</span> - Industrial IoT</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="capabilities" className="py-24 bg-graphite/30">
          <div className="container mx-auto px-6">
            <SectionHeader title="CAPABILITY MATRIX" subtitle="Technical domains and competencies" />
            <CapabilityMatrix />
          </div>
        </section>

        <section id="experience" className="py-24">
          <div className="container mx-auto px-6">
            <SectionHeader title="EXPERIENCE TIMELINE" subtitle="Professional trajectory" />
            <ExperienceTimeline />
          </div>
        </section>

        <section id="projects" className="py-24 bg-graphite/30">
          <div className="container mx-auto px-6">
            <SectionHeader title="PROJECT UNIVERSE" subtitle="Connected engineering systems" />
            <ProjectUniverse />
          </div>
        </section>

        <section id="stack" className="py-24">
          <div className="container mx-auto px-6">
            <SectionHeader title="ENGINEERING STACK" subtitle="Layered technology integration" />
            <EngineeringStack />
          </div>
        </section>

        <section id="research" className="py-24 bg-graphite/30">
          <div className="container mx-auto px-6">
            <SectionHeader title="RESEARCH & ENGINEERING THINKING" subtitle="From physical to intelligent systems" />
            <ResearchPipeline />
          </div>
        </section>

        <section id="how-i-think" className="py-24">
          <div className="container mx-auto px-6">
            <SectionHeader title="FROM ENGINEERING PROBLEM → INTELLIGENT SYSTEM" subtitle="My approach" />
            <HowIThink />
          </div>
        </section>

        <section id="education" className="py-24 bg-graphite/30">
          <div className="container mx-auto px-6">
            <SectionHeader title="ACADEMIC FOUNDATION" subtitle="Research lineage" />
            <EducationSection />
          </div>
        </section>

        <section id="achievements" className="py-24">
          <div className="container mx-auto px-6">
            <SectionHeader title="ACHIEVEMENTS & RECOGNITION" subtitle="Milestones" />
            <AchievementGrid />
          </div>
        </section>

        <section id="workshops" className="py-24 bg-graphite/30">
          <div className="container mx-auto px-6">
            <SectionHeader title="WORKSHOPS" subtitle="Hands-on learning" />
            <WorkshopsSection />
          </div>
        </section>

        <VisualDataSection />

        <section id="contact" className="py-24">
          <div className="container mx-auto px-6">
            <SectionHeader title="LET'S BUILD THE NEXT INTELLIGENT SYSTEM" subtitle="Get in touch" />
            <ContactSection />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
