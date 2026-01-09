"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import SolutionVisual from "@/components/SolutionVisual";
import Link from "next/link";

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-[980px]">
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Contact <span className="text-gradient">Us</span>
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                  Get in touch with our team to learn how Worxit can help standardize your field operations, strengthen site security, and simplify compliance reporting.
                </p>

                <div className="mt-8 rounded-2xl border border-border bg-card shadow-card overflow-hidden">
                  <form
                    className="p-8 space-y-5"
                    onSubmit={(e) => {
                      e.preventDefault();
                      toast({
                        title: "Message sent",
                        description: "Thank you for contacting us. We'll get back to you shortly.",
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
                      <label className="text-sm font-medium">Phone Number</label>
                      <Input type="tel" placeholder="+27 123 456 789" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Message</label>
                      <Textarea
                        rows={5}
                        placeholder="Tell us about your requirements or ask us any questions…"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button type="submit" className="sm:w-auto">Send Message</Button>
                      <Button variant="outline" asChild>
                        <Link href="/solutions">View Solutions</Link>
                      </Button>
                    </div>
                  </form>
                </div>
              </div>

              <aside className="lg:w-[360px]">
                <div className="rounded-2xl border border-border bg-card shadow-card overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-3">Get in Touch</h3>
                    <div className="space-y-4 text-sm">
                      <div>
                        <p className="font-medium text-foreground mb-1">Phone</p>
                        <a href="tel:+27861987987" className="text-muted-foreground hover:text-primary transition-colors">
                          +27 (0)861 987 987
                        </a>
                      </div>
                      <div>
                        <p className="font-medium text-foreground mb-1">Email</p>
                        <a href="mailto:sales@zamatrack.co.za" className="text-muted-foreground hover:text-primary transition-colors">
                          sales@zamatrack.co.za
                        </a>
                      </div>
                      <div>
                        <p className="font-medium text-foreground mb-2">Office Hours</p>
                        <p className="text-muted-foreground">Monday - Friday</p>
                        <p className="text-muted-foreground">8:00 AM - 5:00 PM SAST</p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground mb-1">24/7 Support</p>
                        <p className="text-muted-foreground">Available for existing customers</p>
                      </div>
                    </div>
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
