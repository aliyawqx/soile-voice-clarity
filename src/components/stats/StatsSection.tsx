import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    number: "1M+",
    label: "People Helped",
    description: "Users have improved their speech clarity"
  },
  {
    number: "95%",
    label: "Accuracy Rate",
    description: "Speech recognition precision achieved"
  },
  {
    number: "24/7",
    label: "AI Support",
    description: "Always available when you need help"
  },
  {
    number: "50+",
    label: "Languages",
    description: "Supported across multiple languages"
  }
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-float blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full animate-float blur-2xl" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Proven Results, Real Impact
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Join thousands who have already transformed their communication
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="bg-white/10 backdrop-blur-xl border-white/20 text-center group hover:bg-white/20 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <h3 className="text-xl font-semibold text-primary-foreground mb-2">
                  {stat.label}
                </h3>
                <p className="text-primary-foreground/70">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;