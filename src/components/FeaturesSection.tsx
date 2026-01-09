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
    <section id="platform" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-gradient">ZamaTrack</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            More than just hardware. We provide complete solutions that integrate with your existing workflow.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
