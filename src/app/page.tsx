import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoriesSection from "@/components/CategoriesSection";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Home",
  description: "Solutions-driven technology provider specializing in innovative communication and workflow management tools. Worxit platform gives you complete control over your workflow processes.",
  path: "/",
});

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <CategoriesSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </div>
  );
}
