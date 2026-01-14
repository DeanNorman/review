import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

const CTASection = () => {
  return (
    <section id="enterprise" className="relative py-32 bg-secondary/30 overflow-hidden">
      {/* Dramatic background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-glow opacity-40 animate-pulse-glow" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Content */}
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Ready to Upgrade Your
              <span className="block text-gradient bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] mt-2">
                Enterprise Communications?
              </span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join thousands of businesses worldwide who trust ZamaTrack for their mission-critical communications.
              Get a custom quote or speak with our solutions team today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button variant="hero" size="xl" asChild className="group">
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild className="group">
                <Link href="/solutions">
                  View Solutions
                  <ArrowRight className="w-5 h-5 ml-2 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats with enhanced design */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-border/50">
            <div className="group text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card-hover">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative text-4xl md:text-5xl font-bold text-gradient bg-gradient-to-r from-primary to-accent bg-[length:200%_auto]">
                  10K+
                </div>
              </div>
              <div className="text-muted-foreground text-sm mt-3 font-medium">Enterprise Clients</div>
            </div>
            
            <div className="group text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card-hover">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative text-4xl md:text-5xl font-bold text-gradient bg-gradient-to-r from-primary to-accent bg-[length:200%_auto]">
                  99.9%
                </div>
              </div>
              <div className="text-muted-foreground text-sm mt-3 font-medium">Uptime SLA</div>
            </div>
            
            <div className="group text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card-hover">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative text-4xl md:text-5xl font-bold text-gradient bg-gradient-to-r from-primary to-accent bg-[length:200%_auto]">
                  150+
                </div>
              </div>
              <div className="text-muted-foreground text-sm mt-3 font-medium">Countries Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
