import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-xl border-b border-white/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/fda40bdf-080f-48aa-a017-d7628622e8ea.png" 
              alt="Soile AI Logo" 
              className="h-10 w-10"
            />
            <span className="text-2xl font-bold text-primary-foreground">Soile AI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Features
            </a>
            <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              About
            </a>
            <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-primary-foreground hover:text-primary-foreground hover:bg-white/10">
              Sign In
            </Button>
            <Button variant="hero">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20 animate-fade-in-up">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Features
              </a>
              <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                About
              </a>
              <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="text-primary-foreground hover:text-primary-foreground hover:bg-white/10 justify-start">
                  Sign In
                </Button>
                <Button variant="hero" className="justify-start">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;