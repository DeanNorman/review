import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { pageMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Package, Truck, MapPin, BarChart3, Shield, Zap } from "lucide-react";

export const metadata = pageMetadata({
  title: "Solutions",
  description: "Explore our comprehensive tracking and monitoring solutions designed for modern businesses",
  path: "/solutions",
});

const solutions = [
  {
    slug: "fleet-tracking",
    title: "Fleet Tracking",
    description: "Real-time GPS tracking and fleet management for optimal efficiency",
    icon: Truck,
    features: ["Live GPS tracking", "Route optimization", "Fuel monitoring", "Driver behavior analysis"],
  },
  {
    slug: "asset-management",
    title: "Asset Management",
    description: "Track and manage your valuable assets with precision",
    icon: Package,
    features: ["Asset location tracking", "Maintenance scheduling", "Usage analytics", "Theft prevention"],
  },
  {
    slug: "geofencing",
    title: "Geofencing",
    description: "Create virtual boundaries and receive instant alerts",
    icon: MapPin,
    features: ["Custom zone creation", "Entry/exit alerts", "Historical data", "Multi-zone support"],
  },
  {
    slug: "analytics",
    title: "Analytics & Reporting",
    description: "Comprehensive insights and data-driven decision making",
    icon: BarChart3,
    features: ["Custom reports", "Real-time dashboards", "Predictive analytics", "Export capabilities"],
  },
  {
    slug: "security",
    title: "Security Solutions",
    description: "Advanced security features to protect your assets",
    icon: Shield,
    features: ["24/7 monitoring", "Instant alerts", "Tamper detection", "Emergency response"],
  },
  {
    slug: "integration",
    title: "API Integration",
    description: "Seamlessly integrate with your existing systems",
    icon: Zap,
    features: ["RESTful API", "Webhooks", "Custom integrations", "Developer support"],
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
              Our Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive tracking and monitoring solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <Link
                  key={solution.slug}
                  href={`/solutions/${solution.slug}`}
                  className="group"
                >
                  <div className="bg-card-gradient border border-border rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
                    <div className="mb-6">
                      <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                      <p className="text-muted-foreground">{solution.description}</p>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <ArrowRight className="w-4 h-4 mr-2 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button variant="ghost" className="w-full group-hover:bg-primary/10">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
