"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import SolutionVisual from "@/components/SolutionVisual";
import Link from "next/link";

export default function RequestDemoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-[980px]">
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Request a <span className="text-gradient">Demo</span>
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                  See how the platform standardizes field operations, strengthens site security, and simplifies
                  compliance reporting.
                </p>

                <div className="mt-8 rounded-2xl border border-border bg-card shadow-card overflow-hidden">
                  <form
                    className="p-8 space-y-5"
                    onSubmit={(e) => {
                      e.preventDefault();
                      toast({
                        title: "Request received",
                        description: "We'll reach out shortly to schedule your demo.",
                      });
                    }}
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Full name</label>
                        <Input required placeholder="Jane Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Work email</label>
                        <Input required type="email" placeholder="jane@company.com" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Company</label>
                        <Input placeholder="Company name" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Role</label>
                        <Input placeholder="Operations Manager" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">What do you want to achieve?</label>
                      <Textarea
                        rows={5}
                        placeholder="E.g., improve guard accountability, digitize visitor logs, reduce missed patrols, track inventory across sites…"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button type="submit" className="sm:w-auto">Submit request</Button>
                      <Button variant="outline" asChild>
                        <Link href="/solutions">Browse Solutions</Link>
                      </Button>
                    </div>
                  </form>
                </div>
              </div>

              <aside className="lg:w-[360px]">
                <div className="rounded-2xl border border-border bg-card shadow-card overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-3">What to expect</h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span>A personalized walkthrough of the platform</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span>Discussion of your specific use cases</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span>Live Q&A with our solutions team</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span>Custom pricing and implementation plan</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <SolutionVisual variant="dashboard" />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
