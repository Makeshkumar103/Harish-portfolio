import {
  Gauge,
  Search,
  Link2,
  MapPin,
  LineChart,
  FileText,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Gauge,
    title: "Technical SEO Audits",
    tagline: "Fix what's blocking search engines",
    points: [
      "Crawlability & indexing checks",
      "XML sitemaps & robots.txt setup",
      "Canonical tag implementation",
      "Core Web Vitals & page speed improvements",
    ],
  },
  {
    icon: Search,
    title: "On-Page Optimization",
    tagline: "Make every page earn its rank",
    points: [
      "Keyword research & mapping",
      "Meta titles & descriptions",
      "Header tags & image alt text",
      "Internal linking & content structure",
    ],
  },
  {
    icon: Link2,
    title: "Off-Page & Link Building",
    tagline: "Build authority that lasts",
    points: [
      "High-quality backlink building",
      "Directory submissions",
      "Business listings & profile creation",
      "Guest posting outreach",
    ],
  },
  {
    icon: MapPin,
    title: "Local SEO",
    tagline: "Win the local pack",
    points: [
      "Google Business Profile optimization",
      "Local search visibility growth",
      "Location-based keyword targeting",
    ],
  },
  {
    icon: LineChart,
    title: "Analytics, GA4 & GSC",
    tagline: "Decisions backed by data",
    points: [
      "Google Search Console monitoring",
      "Google Analytics 4 tracking",
      "Keyword ranking tracking",
      "Competitor analysis",
    ],
  },
  {
    icon: FileText,
    title: "WordPress & Content SEO",
    tagline: "Content that ranks and converts",
    points: [
      "WordPress on-page optimization",
      "SEO-friendly content structure",
      "Content optimization & briefs",
      "Monthly SEO reporting",
    ],
  },
];

export default function Projects() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/15 blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 space-y-14">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">
            Services
          </h2>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-white">
            SEO services built for <span className="text-gradient">organic growth</span>
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            Every engagement is powered by data — from technical fixes to
            content optimization — so rankings come from strategy, not guesswork.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card border border-white/10 rounded-2xl p-7 hover:border-primary/50 hover:bg-surface transition-all hover:-translate-y-1 flex flex-col"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-primary/20 to-accent/10 border border-primary/20 flex items-center justify-center text-primary mb-5 group-hover:from-primary group-hover:to-accent group-hover:text-white transition-all">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-1">
                {service.title}
              </h3>
              <p className="text-sm text-primary font-medium mb-5">
                {service.tagline}
              </p>
              <ul className="space-y-2.5 flex-grow">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm text-muted"
                  >
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}