import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Globe, Handshake, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/navigation/Header";

const partnerships = [
  {
    name: "Ministry of Health",
    description: "Official partnership for healthcare accessibility initiatives",
    region: "CIS Region"
  },
  {
    name: "Medical Universities Network",
    description: "Collaboration with leading medical institutions for research and training",
    region: "International"
  },
  {
    name: "Speech Therapy Association",
    description: "Joint development of therapeutic protocols and standards",
    region: "Europe & CIS"
  },
  {
    name: "Rehabilitation Centers",
    description: "Implementation in over 200+ rehabilitation facilities",
    region: "CIS Countries"
  }
];

const cisLanguages = [
  "Russian", "Ukrainian", "Belarusian", "Kazakh", "Uzbek", 
  "Tajik", "Kyrgyz", "Turkmen", "Armenian", "Azerbaijani", 
  "Georgian", "Moldovan"
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
              <Link to="/" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Home
              </Link>
              <h1 className="text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                About Soile AI
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Breaking down communication barriers across the CIS region and beyond through innovative AI technology
              </p>
            </div>
          </div>
        </section>

        {/* CIS Languages Section */}
        <section className="py-20 bg-gradient-secondary">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 animate-fade-in-up">
                <Globe className="h-16 w-16 text-primary mx-auto mb-6" />
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Available in All CIS Languages
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Our platform supports comprehensive speech recognition and therapy in all Commonwealth of Independent States languages, 
                  ensuring no one is left behind due to language barriers.
                </p>
              </div>

              <Card className="bg-gradient-card shadow-elevated animate-scale-in">
                <CardContent className="p-12">
                  <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {cisLanguages.map((language, index) => (
                      <div 
                        key={index}
                        className="flex items-center space-x-3 p-4 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors animate-fade-in-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        <span className="font-medium text-foreground">{language}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-12 text-center">
                    <div className="inline-flex items-center space-x-4 p-6 bg-primary/5 rounded-xl">
                      <Users className="h-8 w-8 text-primary" />
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">300M+</h3>
                        <p className="text-muted-foreground">People can access Soile AI in their native language</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Partnerships Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 animate-fade-in-up">
                <Handshake className="h-16 w-16 text-primary mx-auto mb-6" />
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Trusted Partnerships
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  We collaborate with leading healthcare institutions, government agencies, and medical professionals 
                  to ensure the highest quality of care and accessibility.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {partnerships.map((partnership, index) => (
                  <Card 
                    key={index}
                    className="group hover:shadow-elevated transition-all duration-300 bg-gradient-card animate-scale-in"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Award className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {partnership.name}
                          </h3>
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {partnership.description}
                          </p>
                          <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                            <Globe className="mr-2 h-4 w-4" />
                            {partnership.region}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-16 animate-fade-in-up">
                <Card className="bg-gradient-primary border-0 shadow-elevated inline-block">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                      Interested in Partnership?
                    </h3>
                    <p className="text-primary-foreground/80 mb-6 max-w-md">
                      Join our mission to make speech therapy accessible to everyone
                    </p>
                    <Link to="/contact">
                      <Button variant="hero" size="lg">
                        Contact Us
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
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

export default About;