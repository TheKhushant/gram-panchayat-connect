import MainLayout from "@/layouts/MainLayout";
import HeroSection from "@/components/HeroSection";
import QuickActions from "@/components/QuickActions";
import StatsCounter from "@/components/StatsCounter";

const Index = () => {
  return (
    <MainLayout>
      <HeroSection />
      <HeroSection />
      <QuickActions />
      <StatsCounter />
    </MainLayout>
  );
};

export default Index;
