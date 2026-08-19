import {
  Gauge,
  FileText,
  Link2,
  MapPin,
  LineChart,
  Code2,
  Sparkles,
} from "lucide-react";

const skillGroups = [
  {
    icon: Gauge,
    title: "Technical SEO",
    items: [
      "Website audits & crawlability",
      "Indexing & rendering optimization",
      "XML sitemaps & robots.txt",
      "Canonical tags",
      "Core Web Vitals & page speed",
    ],
    level: 92,
  },
  {
    icon: FileText,
    title: "On-Page SEO",
    items: [
      "Meta titles & descriptions",
      "Header tag optimization",
      "Image alt text",
      "Internal linking",
      "SEO-friendly content structure",
    ],
    level: 95,
  },
  {
    icon: Link2,
    title: "Off-Page SEO",
    items: [
      "Backlink building",
      "Directory submissions",
      "Business listings & profiles",
      "Guest posting",
    ],
    level: 90,
  },
  {
    icon: MapPin,
    title: "Local SEO",
    items: [
      "Google Business Profile",
      "Local search visibility",
      "Location-based optimization",
    ],
    level: 87,
  },
  {
    icon: LineChart,
    title: "Analytics & Reporting",
    items: [
      "Google Search Console",
      "Google Analytics 4 (GA4)",
      "Keyword ranking tracking",
      "Competitor analysis",
      "Monthly SEO reports",
    ],
    level: 88,
  },
  {
    icon: Code2,
    title: "Platforms & Content",
    items: [
      "WordPress SEO",
      "Content optimization",
      "E-commerce SEO",
      "Search analysis",
    ],
    level: 85,
  },
];

const topSkills = ["Search Analysis", "E-commerce SEO", "Off-Page SEO"];

export default function Skills() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 space-y-14">
        <div className="space-y-4">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">
            My Skills
          </h2>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-white">
            A complete <span className="text-gradient">SEO toolkit</span>
          </h1>
          <div className="flex flex-wrap gap-3 pt-2">
            {topSkills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 text-sm font-medium text-primary"
              >
                <Sparkles className="h-4 w-4" />
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-card border border-white/10 rounded-2xl p-7 hover:border-primary/50 hover:bg-surface transition-all hover:-translate-y-1 flex flex-col"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <span className="h-11 w-11 rounded-xl bg-gradient-to-tr from-primary/20 to-accent/10 border border-primary/20 flex items-center justify-center text-primary">
                    <group.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-bold text-white">
                    {group.title}
                  </h3>
                </div>
                <span className="text-sm font-bold text-gradient">
                  {group.level}%
                </span>
              </div>

              <div className="h-2 w-full bg-surface rounded-full overflow-hidden mb-6">
                <div
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                  style={{ width: `${group.level}%` }}
                />
              </div>

              <ul className="space-y-2.5 flex-grow">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-muted"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {item}
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