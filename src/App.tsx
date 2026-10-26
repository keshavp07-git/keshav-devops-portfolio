import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { FeaturedProjectsSection } from './components/FeaturedProjectsSection';
import { AdditionalProjectsSection } from './components/AdditionalProjectsSection';
import { CertificationsEducationSection } from './components/CertificationsEducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { RequestResumeModal } from './components/RequestResumeModal';
import { DiagramViewerModal } from './components/DiagramViewerModal';
import { personalInfo } from './data/portfolioData';

export function App() {
  // Enforce dark mode permanently
  useEffect(() => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('portfolio-theme', 'dark');
  }, []);

  // Modal states
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [diagramModalData, setDiagramModalData] = useState<{
    isOpen: boolean;
    imageUrl: string;
    title: string;
    description?: string;
    githubUrl?: string;
  }>({
    isOpen: false,
    imageUrl: '',
    title: '',
    description: '',
    githubUrl: ''
  });

  const handleOpenDiagram = (imageUrl: string, title: string, desc?: string, githubUrl?: string) => {
    setDiagramModalData({
      isOpen: true,
      imageUrl,
      title,
      description: desc,
      githubUrl: githubUrl || personalInfo.githubUrl
    });
  };

  const handleCloseDiagram = () => {
    setDiagramModalData((prev) => ({ ...prev, isOpen: false }));
  };

  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#111827] text-[#E2E8F0] selection:bg-[#4657C8]/20 selection:text-[#4657C8]">
      {/* Top Navbar */}
      <Navbar onRequestResume={() => setIsResumeModalOpen(true)} />

      {/* Main Content Area */}
      <main id="main-content">
        <HeroSection
          onRequestResume={() => setIsResumeModalOpen(true)}
          onExploreProjects={handleScrollToProjects}
          onOpenDiagram={handleOpenDiagram}
        />

        <AboutSection onRequestResume={() => setIsResumeModalOpen(true)} />

        <SkillsSection />

        <FeaturedProjectsSection
          onOpenDiagram={handleOpenDiagram}
        />

        <AdditionalProjectsSection onOpenDiagram={handleOpenDiagram} />

        <CertificationsEducationSection />

        <ContactSection onRequestResume={() => setIsResumeModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Request Resume Modal (Interactive Feature) */}
      <RequestResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        recipientEmail={personalInfo.email}
      />

      {/* Zoomable Diagram Viewer Modal */}
      <DiagramViewerModal
        isOpen={diagramModalData.isOpen}
        onClose={handleCloseDiagram}
        imageUrl={diagramModalData.imageUrl}
        title={diagramModalData.title}
        description={diagramModalData.description}
        githubUrl={diagramModalData.githubUrl}
      />
    </div>
  );
}

export default App;
