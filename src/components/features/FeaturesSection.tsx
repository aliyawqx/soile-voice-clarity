import { Card, CardContent } from "@/components/ui/card";
import { Mic, MessageSquare, Video, Bot, Users, Heart } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Speech Recognition",
    description: "Advanced AI that understands unclear speech patterns from various conditions",
    color: "primary"
  },
  {
    icon: MessageSquare,
    title: "Text & Audio Conversion",
    description: "Instantly converts unclear speech into clear, understandable text and audio",
    color: "primary-light"
  },
  {
    icon: Video,
    title: "Training Programs",
    description: "Interactive video training programs to improve speech clarity over time",
    color: "primary-dark"
  },
  {
    icon: Users,
    title: "Expert Consultations",
    description: "Book online sessions with qualified speech therapists and psychologists",
    color: "primary"
  },
  {
    icon: Bot,
    title: "AI Assistant",
    description: "24/7 AI assistant available anytime for support and practice",
    color: "primary-light"
  },
  {
    icon: Heart,
    title: "End Isolation",
    description: "Restore communication confidence and rebuild social connections",
    color: "primary-dark"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive Speech Support Platform
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to regain clear communication and reconnect with the world around you
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elevated transition-all duration-300 bg-gradient-card border-0 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;