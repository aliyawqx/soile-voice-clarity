import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <Card className="bg-gradient-hero border-0 shadow-elevated mb-16 overflow-hidden relative animate-scale-in">
            {/* Background Animation */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full animate-float blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full animate-float blur-3xl" style={{ animationDelay: '2s' }}></div>
            </div>

            <CardContent className="p-12 text-center relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Join thousands who have already improved their communication and reconnected with loved ones.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="hero" size="lg" className="group">
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="heroSecondary" size="lg">
                    Schedule Consultation
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Contact Options */}
          <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up">
            <Card className="hover:shadow-card transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-card-foreground mb-4">
                  Email Support
                </h3>
                <p className="text-muted-foreground mb-4">
                  Get in touch with our support team for any questions
                </p>
                <Link to="mailto:contact@soile.net">
                  <Button variant="outline" className="group">
                    contact@soile.net
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-card transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-card-foreground mb-4">
                  Phone Support
                </h3>
                <p className="text-muted-foreground mb-4">
                  Speak directly with our specialists for personalized help
                </p>
                <Link to="/contact">
                  <Button variant="outline" className="group">
                    Schedule Call
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;