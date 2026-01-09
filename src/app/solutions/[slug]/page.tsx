import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { solutions } from "@/lib/solutions";
import SolutionVisual from "@/components/SolutionVisual";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return solutions.map((solution) => ({
    slug: solution.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);

  if (!solution) {
    return pageMetadata({
      title: "Solution Not Found",
      description: "The solution you're looking for doesn't exist",
      path: `/solutions/${slug}`,
    });
  }

  return pageMetadata({
    title: solution.name,
    description: solution.shortDescription,
    path: `/solutions/${slug}`,
  });
}

export default async function SolutionDetailPage({ params }: Props) {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);

  if (!solution) {
    notFound();
  }

  const Icon = solution.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-24">
        <section className="relative">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-[1320px]">
              <div className="grid lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        {solution.name}
                      </h1>
                      <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                        {solution.valueProp}
                      </p>
                      {solution.supportingLine && (
                        <p className="mt-2 text-sm text-muted-foreground italic">
                          {solution.supportingLine}
                        </p>
                      )}
                      <div className="mt-7 flex flex-col sm:flex-row gap-3">
                        <Button asChild>
                          <Link href="/request-demo">Request a Demo</Link>
                        </Button>
                        <Button variant="outline" asChild>
                          <a href="#how-it-works">See How It Works</a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="group">
                    <SolutionVisual variant="dashboard" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-[1320px]">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="rounded-2xl border border-border bg-card shadow-card overflow-hidden">
                  <div className="p-8">
                    <h2 className="text-xl font-bold">Description</h2>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-card shadow-card overflow-hidden">
                  <div className="p-8">
                    <h2 className="text-xl font-bold">Key Features</h2>
                    <ul className="mt-4 space-y-3 text-muted-foreground">
                      {solution.highlights.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/80 shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="mt-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-[1320px]">
              <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {solution.howItWorks.map((step, idx) => {
                  const StepIcon = step.icon;
                  return (
                    <div key={idx} className="text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <StepIcon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-[1320px]">
              <h2 className="text-3xl font-bold text-center mb-12">Core Features</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {solution.coreFeatures.map((feature, idx) => {
                  const FeatureIcon = feature.icon;
                  return (
                    <div
                      key={idx}
                      className="rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-card-hover transition-all"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <FeatureIcon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-[1320px]">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="rounded-2xl border border-border bg-card shadow-card overflow-hidden">
                  <div className="p-8">
                    <h2 className="text-xl font-bold mb-4">Use Cases</h2>
                    <ul className="space-y-3 text-muted-foreground">
                      {solution.useCases.map((useCase) => (
                        <li key={useCase} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/80 shrink-0" />
                          <span className="leading-relaxed">{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-card shadow-card overflow-hidden">
                  <div className="p-8">
                    <h2 className="text-xl font-bold mb-4">Measurable Outcomes</h2>
                    <ul className="space-y-3 text-muted-foreground">
                      {solution.measurableOutcomes.map((outcome) => (
                        <li key={outcome} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/80 shrink-0" />
                          <span className="leading-relaxed">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 bg-card-gradient border-y border-border py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                See how {solution.name} can transform your operations
              </p>
              <Button size="lg" asChild>
                <Link href="/request-demo">Request a Demo</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
