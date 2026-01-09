import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

const CTASection = () => {
  return (
    <section id="enterprise" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">
            Ready to Upgrade Your
            <span className="block text-gradient">Enterprise Communications?</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of businesses worldwide who trust ZamaTrack for their mission-critical communications.
            Get a custom quote or speak with our solutions team today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link href="/request-demo">
                Request a Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link href="/solutions">
                <Phone className="w-5 h-5" />
                View Solutions
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 border-t border-border mt-12">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">10K+</div>
              <div className="text-muted-foreground text-sm mt-1">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">99.9%</div>
              <div className="text-muted-foreground text-sm mt-1">Uptime SLA</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">150+</div>
              <div className="text-muted-foreground text-sm mt-1">Countries Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
