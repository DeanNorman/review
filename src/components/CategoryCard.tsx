import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  ctaLabel?: string;
}

const CategoryCard = ({ icon: Icon, title, description, href, ctaLabel = "View Solution" }: CategoryCardProps) => {
  return (
    <Link
      href={href}
      className="group relative block p-8 rounded-2xl bg-card-gradient border border-border hover:border-primary/50 transition-all duration-500 cursor-pointer overflow-hidden"
    >
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 space-y-4">
        <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
          <Icon className="w-7 h-7 text-primary" />
        </div>

        <div>
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4">{description}</p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Solution</span>
          <div className="flex items-center gap-2 text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
            {ctaLabel}
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
