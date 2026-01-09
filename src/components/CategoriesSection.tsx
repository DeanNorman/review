import CategoryCard from "./CategoryCard";
import { solutions } from "@/lib/solutions";

const CategoriesSection = () => {
  return (
    <section id="solutions" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Platform <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose the modules you need to standardize operations, reduce risk, and prove compliance.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={solution.slug}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CategoryCard
                icon={solution.icon}
                title={solution.name}
                description={solution.shortDescription}
                href={`/solutions/${solution.slug}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
