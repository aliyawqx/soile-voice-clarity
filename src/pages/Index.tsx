import HeroSection from "@/components/hero/HeroSection";
import FeaturesSection from "@/components/features/FeaturesSection";
import StatsSection from "@/components/stats/StatsSection";
import CTASection from "@/components/cta/CTASection";
import Header from "@/components/navigation/Header";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
        <CTASection />
      </main>
      
      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img 
                src="/lovable-uploads/fda40bdf-080f-48aa-a017-d7628622e8ea.png" 
                alt="Soile AI Logo" 
                className="h-8 w-8 filter invert"
              />
              <span className="text-xl font-bold">Soile AI</span>
            </div>
            <div className="flex items-center space-x-8 text-sm">
              <Link to="/privacy" className="hover:text-primary-light transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary-light transition-colors">Terms of Service</Link>
              <span>© 2024 Soile AI. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
