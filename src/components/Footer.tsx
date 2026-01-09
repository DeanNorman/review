import { Radio, MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";
import { SITE_CONFIG, OFFICE_LOCATIONS, SOCIAL_LINKS, ROUTES } from "@/lib/constants";

const Footer = () => {
  return (
    <footer id="support" className="py-16 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        {/* Office Locations */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {OFFICE_LOCATIONS.map((office) => (
            <div key={office.city} className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">{office.city}</h3>
              <div className="space-y-3">
                <a href={`tel:${office.phone}`} className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors group">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-primary" />
                  <span className="text-sm">{office.phone}</span>
                </a>
                <a href={`mailto:${office.email}`} className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors group">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-primary" />
                  <span className="text-sm">{office.email}</span>
                </a>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{office.address}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Links & Social */}
        <div className="grid md:grid-cols-4 gap-8 mb-12 pt-12 border-t border-border">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Radio className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">ZamaTrack</span>
            </div>
            <p className="text-muted-foreground text-sm">
              {SITE_CONFIG.tagline}
            </p>
            <p className="text-muted-foreground text-sm">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href={ROUTES.home} className="text-muted-foreground hover:text-foreground text-sm transition-colors">Home</Link></li>
              <li><Link href={ROUTES.solutions} className="text-muted-foreground hover:text-foreground text-sm transition-colors">Solutions</Link></li>
              <li><Link href={ROUTES.contact} className="text-muted-foreground hover:text-foreground text-sm transition-colors">Contact Us</Link></li>
              <li><Link href={ROUTES.support} className="text-muted-foreground hover:text-foreground text-sm transition-colors">Support</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><Link href="/solutions/custom-reports" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Custom Reports</Link></li>
              <li><Link href="/solutions/visitor-access-control" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Visitor Access Control</Link></li>
              <li><Link href="/solutions/time-attendance" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Time & Attendance</Link></li>
              <li><Link href="/solutions/asset-management" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Asset Management</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect With Us</h4>
            <div className="space-y-3 mb-6">
              <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm transition-colors">
                <Phone className="w-4 h-4" />
                {SITE_CONFIG.phone}
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm transition-colors">
                <Mail className="w-4 h-4" />
                {SITE_CONFIG.email}
              </a>
            </div>
            <div className="flex gap-4">
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} {SITE_CONFIG.company}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
