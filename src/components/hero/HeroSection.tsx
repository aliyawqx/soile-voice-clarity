import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/30 rounded-full animate-float blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-light/20 rounded-full animate-float blur-3xl" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary-dark/20 rounded-full animate-float blur-3xl" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            {/* Logo */}
            <div className="mb-8 flex justify-center lg:justify-start">
              <img 
                src="/lovable-uploads/fda40bdf-080f-48aa-a017-d7628622e8ea.png" 
                alt="Soile AI Logo" 
                className="h-16 w-16 animate-pulse-glow"
              />
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              AI That
              <span className="block bg-gradient-to-r from-white to-primary-light bg-clip-text text-transparent">
                Understands
              </span>
              Speech Disorders
            </h1>
            
            <p className="text-xl lg:text-2xl text-primary-foreground/80 mb-8 leading-relaxed max-w-2xl">
              After conditions like cerebral palsy, Parkinson's disease, or stroke, 
              our platform recognizes unclear speech and converts it into clear text and audio, 
              ending social isolation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="group">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button variant="heroSecondary" size="lg" className="group">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right Side - Interactive Visual */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-elevated animate-scale-in">
                <div className="space-y-6">
                  {/* Speech Waveform Visualization */}
                  <div className="flex items-center space-x-2 mb-6">
                    <div className="flex space-x-1">
                      {[...Array(20)].map((_, i) => (
                        <div 
                          key={i}
                          className="w-1 bg-primary-light rounded-full animate-pulse"
                          style={{
                            height: `${Math.random() * 40 + 10}px`,
                            animationDelay: `${i * 0.1}s`
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Speech Recognition Demo */}
                  <div className="space-y-4">
                    <div className="bg-white/5 rounded-lg p-4 border border-white/20">
                      <p className="text-primary-foreground/60 text-sm mb-2">Input Speech:</p>
                      <p className="text-primary-foreground italic">"I wnt t go hm"</p>
                    </div>
                    
                    <div className="flex justify-center">
                      <ArrowRight className="text-primary-light h-6 w-6 animate-pulse" />
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4 border border-primary-light/30">
                      <p className="text-primary-foreground/60 text-sm mb-2">AI Translation:</p>
                      <p className="text-primary-foreground font-medium">"I want to go home"</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-primary-light/20 backdrop-blur-xl rounded-full p-3 animate-float">
                <div className="w-3 h-3 bg-primary-light rounded-full animate-pulse"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary/20 backdrop-blur-xl rounded-full p-4 animate-float" style={{ animationDelay: '1s' }}>
                <div className="w-4 h-4 bg-primary rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;