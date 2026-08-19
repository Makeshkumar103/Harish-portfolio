import {
  GraduationCap,
  Briefcase,
  Sparkles,
  CheckCircle2,
  Search,
  Link2,
  LineChart,
  MapPin,
  Gauge,
  FileText,
  Code2,
  Compass,
} from "lucide-react";

const expertise = [
  "Technical SEO",
  "On-Page SEO",
  "Off-Page SEO",
  "Local SEO",
  "Keyword Research",
  "Competitor Analysis",
  "Google Search Console",
  "Google Analytics 4 (GA4)",
  "Website Audits",
  "SEO Reporting",
  "WordPress SEO",
  "Content Optimization",
];

const highlightIcons = [
  { icon: Search, label: "Search Analysis" },
  { icon: LineChart, label: "E-commerce SEO" },
  { icon: Link2, label: "Off-Page SEO" },
];

export default function About() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/15 blur-[120px]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 space-y-16">
        <div className="space-y-4">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">
            About Me
          </h2>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-white">
            Turning search insights into <span className="text-gradient">rankings</span>
          </h1>
        </div>

        <div className="glass rounded-3xl p-8 md:p-12 space-y-6 text-lg text-muted leading-relaxed">
          <p>
            I&apos;m <strong className="text-white">Harish H</strong>, an SEO
            Analyst based in the Greater Madurai Area, passionate about
            improving website visibility, organic traffic, and search engine
            rankings through <strong className="text-white">data-driven SEO strategies</strong>.
          </p>
          <p>
            My expertise spans technical SEO, on-page and off-page SEO, local
            SEO, keyword research, competitor analysis, Google Search Console,
            Google Analytics 4, website audits, SEO reporting, and WordPress
            SEO. I enjoy solving website performance challenges and
            continuously learning the latest search engine optimization
            techniques to deliver measurable results.
          </p>
          <p>
            I&apos;m always open to connecting with SEO professionals,
            recruiters, and businesses looking to grow their online presence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlightIcons.map((item) => (
            <div
              key={item.label}
              className="bg-card border border-white/10 rounded-2xl p-6 flex items-center gap-4 hover:border-primary/50 transition-colors"
            >
              <span className="h-11 w-11 rounded-xl bg-gradient-to-tr from-primary/20 to-accent/10 border border-primary/20 flex items-center justify-center text-primary">
                <item.icon className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs text-muted uppercase tracking-wider">
                  Top Skill
                </div>
                <div className="text-white font-semibold">{item.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white">
            Areas of Expertise
          </h2>
          <div className="flex flex-wrap gap-3">
            {expertise.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 bg-card border border-white/10 rounded-full px-4 py-2 text-sm text-muted hover:border-primary/50 hover:text-white transition-colors"
              >
                <CheckCircle2 className="h-4 w-4 text-primary" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white">
            Journey
          </h2>

          <div className="space-y-6">
            <div className="bg-card border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="h-12 w-12 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center text-primary">
                  <Briefcase className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-white">
                    Search Engine Optimization Analyst
                  </h3>
                  <p className="text-primary font-medium">
                    Niralsoft · Madurai
                  </p>
                  <p className="text-xs text-muted">
                    September 2025 – Present
                  </p>
                </div>
              </div>
              <p className="text-muted leading-relaxed">
                Performing keyword research, on-page optimization, technical
                audits, local SEO, backlink building, and performance reporting
                to grow organic visibility for client websites.
              </p>
            </div>

            <div className="bg-card border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="h-12 w-12 rounded-xl bg-accent/15 border border-accent/20 flex items-center justify-center text-accent">
                  <GraduationCap className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-white">
                    Bachelor of Commerce
                  </h3>
                  <p className="text-accent font-medium">
                    KLN Arts &amp; Science College
                  </p>
                  <p className="text-xs text-muted">
                    Marketing / Marketing Management · June 2022 – May 2025
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: Compass, label: "Marketing" },
                  { icon: Sparkles, label: "Digital Strategy" },
                  { icon: LineChart, label: "Consumer Analytics" },
                ].map((tag) => (
                  <span
                    key={tag.label}
                    className="inline-flex items-center gap-1.5 text-xs text-muted bg-surface border border-white/10 rounded-full px-3 py-1.5"
                  >
                    <tag.icon className="h-3.5 w-3.5 text-accent" />
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}