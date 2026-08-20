import type { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  ArrowUpRight,
  Clock3,
  CalendarCheck,
  type LucideIcon,
} from "lucide-react";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | Harish H — SEO Analyst",
  description:
    "Get in touch with Harish H, SEO Analyst. Open to SEO opportunities, collaborations, and connecting with recruiters and businesses looking to improve their search presence.",
};

type ContactInfoItem = {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
};

const contactInfo: ContactInfoItem[] = [
  {
    icon: Phone,
    label: "Call Me",
    value: "7871961114",
    href: "tel:+917871961114",
    external: false,
  },
  {
    icon: Mail,
    label: "Email Me",
    value: "hari@gmail.com",
    href: "mailto:hari@gmail.com",
    external: false,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Greater Madurai Area, Tamil Nadu, India",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "in/harish-h-63789a382",
    href: "https://www.linkedin.com/in/harish-h-63789a382",
    external: true,
  },
];

export default function Contact() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary/15 blur-[120px]" />
      <div className="absolute bottom-0 -right-24 w-96 h-96 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="text-center space-y-4 mb-14">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">
            Get in Touch
          </h2>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-white">
            Let&apos;s grow your{" "}
            <span className="text-gradient">organic traffic</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Open to SEO opportunities, collaborations, and connecting with
            recruiters and businesses looking to improve their search presence.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-2 space-y-6">
            <div className="glass rounded-2xl p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Available for new opportunities
                  </p>
                  <p className="text-xs text-muted flex items-center gap-1 mt-0.5">
                    <Clock3 className="h-3.5 w-3.5" /> Usually responds within
                    24 hours
                  </p>
                </div>
              </div>
              <CalendarCheck className="h-6 w-6 text-primary shrink-0" />
            </div>

            {contactInfo.map((item) => {
              const content = (
                <>
                  <div className="flex items-center gap-4">
                    <span className="h-12 w-12 rounded-xl bg-gradient-to-tr from-primary/20 to-accent/10 border border-primary/20 flex items-center justify-center text-primary group-hover:from-primary group-hover:to-accent group-hover:text-white transition-all shrink-0">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <h4 className="font-display text-sm font-semibold text-muted uppercase tracking-wider">
                        {item.label}
                      </h4>
                      <p className="text-sm text-white font-medium truncate">
                        {item.value}
                      </p>
                    </div>
                  </div>
                  {item.href && (
                    <ArrowUpRight className="h-5 w-5 text-muted group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                  )}
                </>
              );

              const classes =
                "group flex items-center justify-between gap-3 bg-card border border-white/10 rounded-2xl p-6 hover:border-primary/50 hover:bg-surface transition-all hover:-translate-y-0.5";

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  className={classes}
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {content}
                </a>
              ) : (
                <div key={item.label} className={classes}>
                  {content}
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
