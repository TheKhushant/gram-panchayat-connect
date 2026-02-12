import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnnouncementTicker from "@/components/AnnouncementTicker";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <AnnouncementTicker />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
