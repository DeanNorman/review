import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Solution Not Found</h1>
            <p className="text-lg text-muted-foreground mb-8">
              The solution you're looking for doesn't exist.
            </p>
            <Button asChild>
              <Link href="/solutions">Back to Solutions</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
