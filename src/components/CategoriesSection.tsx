import CategoryCard from "./CategoryCard";
import { solutions } from "@/lib/solutions";

const CategoriesSection = () => {
  return (
    <section id="solutions" className="relative py-32 bg-secondary/30 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              Our Solutions
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Platform <span className="text-gradient bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto]">Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Choose the modules you need to standardize operations, reduce risk, and prove compliance.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={solution.slug}
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <CategoryCard
                icon={solution.icon}
                title={solution.name}
                description={solution.shortDescription}
                href={`/solutions/${solution.slug}`}
                features={solution.highlights}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
