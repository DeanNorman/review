import { Cloud, Shield, Headphones, RefreshCw, Zap, Lock } from "lucide-react";

const features = [
  {
    icon: Cloud,
    title: "Cloud Integration",
    description: "Seamless connection to our SaaS platform for real-time fleet management and analytics.",
  },
  {
    icon: Shield,
    title: "Military-Grade Durability",
    description: "MIL-STD-810G certified devices built to withstand extreme conditions and heavy use.",
  },
  {
    icon: Headphones,
    title: "24/7 Enterprise Support",
    description: "Dedicated support team with guaranteed response times and on-site assistance.",
  },
  {
    icon: RefreshCw,
    title: "Lifecycle Management",
    description: "Complete device lifecycle from deployment to retirement with trade-in programs.",
  },
  {
    icon: Zap,
    title: "Extended Battery Life",
    description: "Hot-swappable batteries with all-day operation for non-stop productivity.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "End-to-end encryption and MDM compatibility for secure communications.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="platform" className="relative py-32 bg-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Why Choose <span className="text-gradient bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto]">ZamaTrack</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            More than just hardware. We provide complete solutions that integrate with your existing workflow.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 opacity-0 animate-fade-in-up hover:shadow-card-hover hover:-translate-y-1"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              
              <div className="relative z-10">
                {/* Icon with enhanced styling */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-primary/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <feature.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
