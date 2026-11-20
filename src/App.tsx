import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProfileBento } from './components/ProfileBento';
import { TimelineSection } from './components/TimelineSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsInventorySection } from './components/SkillsInventorySection';
import { MetricsAndFaqSection } from './components/MetricsAndFaqSection';
import { FooterSection, ContactModal } from './components/FooterSection';

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    if (!contactOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setContactOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [contactOpen]);

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#18181B]">
      <Navbar onOpenContact={() => setContactOpen(true)} />
      <main>
        <HeroSection onOpenContact={() => setContactOpen(true)} />
        <ProfileBento />
        <TimelineSection />
        <ProjectsSection />
        <SkillsInventorySection />
        <MetricsAndFaqSection />
      </main>
      <FooterSection onOpenContact={() => setContactOpen(true)} />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
