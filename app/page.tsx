import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { StatsSection } from "@/components/stats-section";
import { TeamSection } from "@/components/team-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <AboutSection />
      <TeamSection />
      <ContactSection />
    </main>
  );
}