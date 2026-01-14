import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  ctaLabel?: string;
  features?: string[];
}

const CategoryCard = ({ icon: Icon, title, description, href, ctaLabel = "View Solution", features }: CategoryCardProps) => {
  return (
    <Link
      href={href}
      className="group relative block p-8 rounded-2xl bg-card-gradient border border-border hover:border-primary/50 transition-all duration-500 cursor-pointer overflow-hidden hover:shadow-card-hover hover:-translate-y-1"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Glow effect on hover */}
      <div className="absolute -inset-px bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

      <div className="relative z-10 space-y-5">
        {/* Icon with enhanced animation */}
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative w-16 h-16 rounded-xl bg-secondary/80 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
            <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors">
            {description}
          </p>
          
          {/* Feature highlights */}
          {features && features.length > 0 && (
            <ul className="space-y-2 pt-2">
              {features.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground group-hover:text-foreground/70 transition-colors">
                  <Check className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Enhanced CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-border/50 group-hover:border-primary/30 transition-colors">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Solution</span>
          <div className="flex items-center gap-2 text-primary font-semibold text-sm translate-x-0 group-hover:translate-x-1 transition-all duration-300">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">{ctaLabel}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
