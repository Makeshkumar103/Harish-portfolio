import { Linkedin, MapPin, ArrowUpRight, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary/15 blur-[120px]" />
      <div className="absolute bottom-0 -right-24 w-96 h-96 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">
            Get in Touch
          </h2>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-white">
            Let&apos;s grow your <span className="text-gradient">organic traffic</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Open to SEO opportunities, collaborations, and connecting with
            recruiters and businesses looking to improve their search presence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-card border border-white/10 rounded-3xl p-8 md:p-10">
            <div className="flex items-start gap-4">
              <span className="h-14 w-14 shrink-0 rounded-2xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/25">
                <Linkedin className="h-7 w-7 text-white" />
              </span>
              <div>
                <h3 className="font-display text-2xl font-bold text-white">
                  Connect on LinkedIn
                </h3>
                <p className="text-muted mt-2 mb-6 leading-relaxed">
                  The best way to reach me. Send a message or connection request
                  — I&apos;m happy to chat about SEO, digital marketing, or
                  potential opportunities.
                </p>
                <a
                  href="https://www.linkedin.com/in/harish-h-63789a382"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white px-7 py-3.5 rounded-xl font-semibold transition-opacity shadow-lg shadow-primary/25"
                >
                  Visit My Profile <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-10 w-10 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center text-primary">
                  <MapPin className="h-5 w-5" />
                </span>
                <h4 className="font-display text-lg font-bold text-white">
                  Location
                </h4>
              </div>
              <p className="text-sm text-muted">
                Greater Madurai Area, Tamil Nadu, India
              </p>
            </div>

            <div className="bg-card border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-10 w-10 rounded-xl bg-accent/15 border border-accent/20 flex items-center justify-center text-accent">
                  <Mail className="h-5 w-5" />
                </span>
                <h4 className="font-display text-lg font-bold text-white">
                  Availability
                </h4>
              </div>
              <p className="text-sm text-muted">
                Open to SEO analyst roles and freelance projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}