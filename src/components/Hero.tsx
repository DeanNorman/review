import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-16 overflow-hidden bg-hero-gradient">
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-glow opacity-40 animate-pulse-glow" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass shadow-lg opacity-0 animate-fade-in"
              style={{ animationDelay: '0.1s' }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-foreground">Worxit Platform - Complete Workflow Control</span>
            </div>

            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              <span className="block mb-2">{SITE_CONFIG.tagline}</span>
              <span className="block text-gradient bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-shimmer">
                Facilities Management Solutions
              </span>
            </h1>

            <p 
              className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed opacity-0 animate-fade-in"
              style={{ animationDelay: '0.3s' }}
            >
              {SITE_CONFIG.description}
            </p>

            <div 
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              <Button variant="hero" size="xl" asChild className="group">
                <Link href="/solutions">
                  Explore Solutions
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild className="group">
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                </Link>
              </Button>
            </div>

            {/* Trust badges */}
            <div 
              className="flex flex-wrap items-center gap-6 pt-8 border-t border-border/50 opacity-0 animate-fade-in"
              style={{ animationDelay: '0.5s' }}
            >
              <div className="flex items-center gap-2 group cursor-default">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Shield className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Secure & Compliant</span>
              </div>
              <div className="flex items-center gap-2 group cursor-default">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Zap className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 group cursor-default">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Globe className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Multi-Site Operations</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div 
            className="relative flex justify-center lg:justify-end opacity-0 animate-slide-in-right"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="relative group">
              {/* Glow effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur-3xl transform scale-90 group-hover:scale-100 transition-transform duration-700" />
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <Image
                src="/hero-radio.png"
                alt="Professional Two-Way Radio"
                width={600}
                height={600}
                className="relative w-full max-w-lg rounded-2xl shadow-2xl animate-float transform group-hover:scale-[1.02] transition-transform duration-500"
                priority
              />
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
