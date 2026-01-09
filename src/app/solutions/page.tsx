import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { pageMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ScanLine, Shield, Globe, RefreshCw, Lock, Zap, Headphones, Radio, Cloud } from "lucide-react";

export const metadata = pageMetadata({
  title: "Solutions",
  description: "Explore our comprehensive tracking and monitoring solutions designed for modern businesses",
  path: "/solutions",
});

const solutions = [
  {
    slug: "custom-reports",
    title: "Custom Reports",
    description: "Digitise, track, and verify field reporting in real time across all sites—even offline",
    icon: ScanLine,
    features: ["Scan Barcodes and QR Codes", "Photos and Videos", "Signatures", "GPS Location", "Reports by Site", "Works Offline"],
  },
  {
    slug: "visitor-access-control",
    title: "Visitor Access Control",
    description: "Digitise and verify every visitor entry with location-based access control",
    icon: Shield,
    features: ["Visitors Access Card", "Scan Drivers Licence & ID Cards", "Photo of Vehicle", "Limit Access to Locations"],
  },
  {
    slug: "visitor-management",
    title: "Visitor Management",
    description: "Invite, notify, and monitor visitors with secure access codes and real-time visibility",
    icon: Globe,
    features: ["Invite Guests with Codes", "Send Global Notices", "Visitors On-Site View", "Emergency Button"],
  },
  {
    slug: "time-attendance",
    title: "Time & Attendance",
    description: "Prevent buddy-clocking and get real-time time-on-duty visibility across all sites",
    icon: Zap,
    features: ["Facial Recognition & NFC", "T&A with Breaks", "Mobile On-Duty Live View", "Reports with Time Worked"],
  },
  {
    slug: "asset-management",
    title: "Asset Management",
    description: "Register, verify, and track assets across sites with check-in/out, transfers, and GPS proof",
    icon: Lock,
    features: ["Asset Register", "Check Assets In and Out", "Transfer Assets", "Scan NFC or Barcode Tags"],
  },
  {
    slug: "maintenance-rounds",
    title: "Maintenance Rounds",
    description: "Schedule, verify, and report maintenance checks with real-time oversight and proof of work",
    icon: RefreshCw,
    features: ["Maintenance Scheduling", "Picture, Text and Video Reporting", "Voice Notifications", "Reports with Complete Graph"],
  },
  {
    slug: "patrols",
    title: "Patrols",
    description: "Digitise, track, and verify security patrols in real time across all sites",
    icon: Headphones,
    features: ["Patrol Scheduling", "NFC Patrol Tags", "Picture, Text and Video Reporting", "Patrol Count per Shift"],
  },
  {
    slug: "inventory-management",
    title: "Inventory Management",
    description: "Track stock movement across sites with verified scans, timestamps, and audit-ready reporting",
    icon: Cloud,
    features: ["Track Inventory Movements", "Comprehensive Reporting", "Time Tracked Stock", "Track Branch Transfers"],
  },
  {
    slug: "gsm-poc-radios-with-patrols",
    title: "GSM POC Radios with Patrols",
    description: "Unify voice communications and verified patrol workflows—managed centrally from the cloud",
    icon: Radio,
    features: ["GSM PTT Radios", "Multi Site Group Talk", "Live GPS Locations", "Cloud Programming"],
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
              Our Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive tracking and monitoring solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <Link
                  key={solution.slug}
                  href={`/solutions/${solution.slug}`}
                  className="group"
                >
                  <div className="bg-card-gradient border border-border rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
                    <div className="mb-6">
                      <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                      <p className="text-muted-foreground">{solution.description}</p>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <ArrowRight className="w-4 h-4 mr-2 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button variant="ghost" className="w-full group-hover:bg-primary/10">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
