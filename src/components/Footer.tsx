import { Radio } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer id="support" className="py-16 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Radio className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">ZamaTrack</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Enterprise-grade communication hardware and SaaS solutions for modern businesses.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Two-Way Radios</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">PTT Devices</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Rugged Devices</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">2D Scanners</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Accessories</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Cloud Platform</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Fleet Management</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Enterprise MDM</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">API Integration</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Training</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Contact Sales</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Partner Program</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Status Page</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 ZamaTrack. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
