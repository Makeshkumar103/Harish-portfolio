import Link from "next/link";
import { Linkedin, TrendingUp, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 mt-auto py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-lg bg-gradient-to-tr from-primary to-accent flex items-center justify-center">
            <TrendingUp className="h-4 w-4 text-white" />
          </span>
          <div>
            <div className="text-sm font-bold text-white">Harish H</div>
            <div className="text-xs text-muted">SEO Analyst</div>
          </div>
        </div>

        <nav className="flex gap-6 text-sm text-muted">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/skills", label: "Skills" },
            { href: "/projects", label: "Services" },
            { href: "/contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/harish-h-63789a382"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="h-10 w-10 rounded-full bg-card border border-white/10 flex items-center justify-center text-muted hover:text-primary hover:border-primary/40 transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <Link
            href="/contact"
            aria-label="Contact"
            className="h-10 w-10 rounded-full bg-card border border-white/10 flex items-center justify-center text-muted hover:text-primary hover:border-primary/40 transition-colors"
          >
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-6 border-t border-white/5 text-center text-xs text-muted">
        © {new Date().getFullYear()} Harish H · SEO Analyst · Greater Madurai
        Area. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;