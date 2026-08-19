import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Search,
  LineChart,
  Link2,
  MapPin,
  Gauge,
  FileText,
  Sparkles,
  CheckCircle2,
  GraduationCap,
  Briefcase,
  Linkedin,
} from "lucide-react";

const stats = [
  { value: "1+", label: "Years Experience" },
  { value: "12+", label: "SEO Disciplines" },
  { value: "3", label: "SEO Pillars" },
  { value: "100%", label: "Data-Driven" },
];

const services = [
  {
    icon: Gauge,
    title: "Technical SEO",
    desc: "Audits, crawlability, indexing, XML sitemaps, robots.txt, canonical tags and Core Web Vitals.",
  },
  {
    icon: Search,
    title: "On-Page SEO",
    desc: "Meta titles & descriptions, header tags, image alt text, internal linking and content structure.",
  },
  {
    icon: Link2,
    title: "Off-Page SEO",
    desc: "Backlink building via directory submissions, business listings, profiles and guest posting.",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    desc: "Google Business Profile optimization and local visibility to win the local pack.",
  },
  {
    icon: LineChart,
    title: "Analytics & Reporting",
    desc: "Google Search Console, GA4 monitoring, keyword ranking tracking and monthly SEO reports.",
  },
  {
    icon: FileText,
    title: "Content Optimization",
    desc: "Keyword research and competitor analysis to shape content that ranks and converts.",
  },
];

const skills = [
  { name: "Technical SEO", level: 92 },
  { name: "On-Page SEO", level: 95 },
  { name: "Off-Page SEO", level: 90 },
  { name: "Keyword Research & Analysis", level: 94 },
  { name: "GA4 & Search Console", level: 88 },
  { name: "WordPress SEO", level: 85 },
];

const responsibilities = [
  "Comprehensive keyword research & competitor analysis",
  "On-page optimization: meta tags, headers, alt text, internal linking",
  "Technical audits for crawlability, indexing & site performance",
  "GSC + GA4 performance monitoring",
  "XML sitemaps, robots.txt & canonical tags",
  "Local SEO via Google Business Profile",
  "High-quality backlink building",
  "WordPress SEO & Core Web Vitals improvements",
];

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute top-40 -right-32 w-[380px] h-[380px] rounded-full bg-accent/15 blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 w-full grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 text-sm text-primary font-medium animate-fade-up">
              <Sparkles className="h-4 w-4" />
              SEO Analyst · Greater Madurai Area
            </div>

            <h1 className="font-display text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.05] animate-fade-up">
              Hi, I&apos;m
              <br />
              <span className="text-gradient">Harish H</span>
            </h1>

            <p className="text-xl md:text-2xl text-foreground/90 font-medium leading-relaxed animate-fade-up">
              Helping businesses <span className="text-primary font-semibold">increase organic traffic</span> with data-driven SEO.
            </p>

            <p className="text-lg text-muted max-w-xl leading-relaxed animate-fade-up">
              Technical SEO · On-Page / Off-Page SEO · GA4 · Search Console ·
              Content Optimisation. I turn search insights into measurable
              rankings.
            </p>

            <div className="flex flex-wrap gap-4 pt-2 animate-fade-up">
              <Link
                href="/projects"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white px-7 py-3.5 rounded-xl font-semibold transition-opacity flex items-center gap-2 shadow-lg shadow-primary/25"
              >
                Explore My Work <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="border border-white/20 hover:bg-white/5 text-white px-7 py-3.5 rounded-xl font-semibold transition-colors"
              >
                Contact Me
              </Link>
              <a
                href="https://www.linkedin.com/in/harish-h-63789a382"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="h-13 w-13 p-3.5 rounded-xl border border-white/20 text-muted hover:text-primary hover:border-primary/40 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end animate-fade-up">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/40 to-accent/30 blur-2xl scale-110" />
              <div className="relative h-72 w-72 md:h-96 md:w-96 rounded-full border-4 border-primary/30 overflow-hidden shadow-2xl shadow-primary/20 animate-float">
                <Image
                  src="/profile.png"
                  alt="Harish H — SEO Analyst"
                  fill
                  priority
                  sizes="(max-width: 768px) 288px, 384px"
                  className="object-cover"
                />
              </div>

              <div className="absolute -left-6 top-10 glass rounded-xl px-4 py-3 hidden sm:block">
                <div className="flex items-center gap-2 text-sm font-medium text-white">
                  <Search className="h-4 w-4 text-primary" />
                  On-Page SEO
                </div>
              </div>
              <div className="absolute -right-4 bottom-16 glass rounded-xl px-4 py-3 hidden sm:block">
                <div className="flex items-center gap-2 text-sm font-medium text-white">
                  <LineChart className="h-4 w-4 text-accent" />
                  GA4 Tracking
                </div>
              </div>
              <div className="absolute -bottom-4 left-8 glass rounded-xl px-4 py-3 hidden sm:block">
                <div className="flex items-center gap-2 text-sm font-medium text-white">
                  <Gauge className="h-4 w-4 text-primary" />
                  Core Web Vitals
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl grid grid-cols-2 lg:grid-cols-4 gap-8 p-8 md:p-10">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div className="font-display text-4xl md:text-5xl font-extrabold text-gradient">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-muted font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl space-y-3 mb-12">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">
            What I Do
          </h2>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-white">
            SEO services that grow <span className="text-gradient">organic traffic</span>
          </h3>
          <p className="text-muted text-lg">
            Data-driven strategies across technical, on-page, off-page and
            local SEO — built to deliver measurable rankings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group bg-card border border-white/10 rounded-2xl p-7 hover:border-primary/50 hover:bg-surface transition-all hover:-translate-y-1"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-primary/20 to-accent/10 border border-primary/20 flex items-center justify-center text-primary mb-5 group-hover:from-primary group-hover:to-accent group-hover:text-white transition-all">
                <service.icon className="h-6 w-6" />
              </div>
              <h4 className="font-display text-xl font-bold text-white mb-2">
                {service.title}
              </h4>
              <p className="text-sm text-muted leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">
            My Expertise
          </h2>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-white">
            Skills built on real <span className="text-gradient">SEO results</span>
          </h3>
          <p className="text-muted text-lg leading-relaxed">
            From technical audits to link building, I combine search analysis
            and e-commerce SEO know-how to improve visibility and rankings.
          </p>
          <Link
            href="/skills"
            className="inline-flex items-center gap-2 text-primary font-semibold mt-4 hover:gap-3 transition-all"
          >
            View all skills <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="space-y-6">
          {skills.map((skill, i) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between text-sm font-medium">
                <span className="text-white">{skill.name}</span>
                <span className="text-muted">{skill.level}%</span>
              </div>
              <div className="h-2.5 w-full bg-card rounded-full overflow-hidden border border-white/5">
                <div
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl space-y-3 mb-12">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">
            Experience
          </h2>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-white">
            Where I&apos;ve been <span className="text-gradient">delivering</span>
          </h3>
        </div>

        <div className="relative pl-6 md:pl-0">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10" />
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="hidden md:block" />
            <div className="relative">
              <div className="absolute -left-[calc(2rem+0.5rem)] md:left-auto md:-right-3 top-6 h-6 w-6 rounded-full bg-gradient-to-tr from-primary to-accent border-4 border-background" />
              <div className="bg-card border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-11 w-11 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center text-primary">
                    <Briefcase className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="font-display text-lg font-bold text-white">
                      Niralsoft
                    </h4>
                    <p className="text-sm text-primary font-medium">
                      SEO Analyst
                    </p>
                  </div>
                </div>
                <p className="text-xs text-muted mb-5">
                  September 2025 – Present · Madurai
                </p>
                <ul className="space-y-2.5">
                  {responsibilities.slice(0, 5).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/20 via-surface to-accent/10 border border-white/10 p-10 md:p-16 text-center">
          <div className="absolute inset-0 bg-grid opacity-60" />
          <div className="relative space-y-5">
            <GraduationCap className="h-10 w-10 text-primary mx-auto" />
            <h3 className="font-display text-3xl md:text-4xl font-bold text-white">
              Looking to grow your organic traffic?
            </h3>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Let&apos;s work together on an SEO strategy tailored to your
              business goals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white px-8 py-4 rounded-xl font-semibold transition-opacity shadow-lg shadow-primary/25"
            >
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}