import { Navbar } from "@/components/layout/Navbar";
import { IntroAnimation } from "@/components/scrapbook/IntroAnimation";
import { CoverSection } from "@/components/sections/CoverSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { OrganizationSection } from "@/components/sections/OrganizationSection";
import { CommitteeSection } from "@/components/sections/CommitteeSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { CertificateSection } from "@/components/sections/CertificateSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#FDFBF7]">
      {/* Cute Colorful Scrapbook Intro Entrance Animation */}
      <IntroAnimation />

      {/* Scrapbook Navigation */}
      <Navbar />

      {/* A. Intro / Cover */}
      <CoverSection />

      {/* B. About Me — "Get to Know Me!" */}
      <AboutSection />

      {/* C. Skills & Experiences */}
      <SkillsSection />

      {/* D. Organizational Experience */}
      <OrganizationSection />

      {/* E. Committee Experience */}
      <CommitteeSection />

      {/* F. Creative Gallery — "My Little Creations" */}
      <GallerySection />

      {/* G. Achievements & Certificates */}
      <CertificateSection />

      {/* H. Education */}
      <EducationSection />

      {/* I. Contact / Closing */}
      <ContactSection />
    </main>
  );
}
