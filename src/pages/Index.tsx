import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AnnouncementTicker from "@/components/AnnouncementTicker";
import QuickActions from "@/components/QuickActions";
import StatsCounter from "@/components/StatsCounter";
import AboutSection from "@/components/AboutSection";
import SchemesSection from "@/components/SchemesSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ComplaintSection from "@/components/ComplaintSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <AnnouncementTicker />
      <HeroSection />
      <QuickActions />
      <StatsCounter />
      <AboutSection />
      <SchemesSection />
      <ServicesSection />
      <ProjectsSection />
      <ComplaintSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
