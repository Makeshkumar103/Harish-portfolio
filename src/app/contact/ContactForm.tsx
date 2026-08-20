"use client";

import { useState } from "react";
import { Send, CheckCircle2, Copy, Check, Mail } from "lucide-react";

const EMAIL = "ajayprajen175@gmail.com";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = (): boolean => {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) next.message = "Please write a short message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = form.subject.trim() || `SEO inquiry from ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSent(true);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy my email address:", EMAIL);
    }
  };

  const inputClasses = (hasError?: string) =>
    `w-full bg-surface border ${hasError ? "border-red-500/60" : "border-white/10"
    } rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted/70 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/25`;

  return (
    <div className="bg-card border border-white/10 rounded-3xl p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-6">
        <span className="h-11 w-11 rounded-xl bg-gradient-to-tr from-primary/20 to-accent/10 border border-primary/20 flex items-center justify-center text-primary">
          <Mail className="h-5 w-5" />
        </span>
        <div>
          <h3 className="font-display text-xl font-bold text-white">
            Send a message
          </h3>
          <p className="text-sm text-muted">
            Fill this out and it opens your email app — ready to send.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-foreground/90"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => updateField("name", e.target.value)}
              className={inputClasses(errors.name)}
            />
            {errors.name && (
              <p className="text-xs text-red-400">{errors.name}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-foreground/90"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => updateField("email", e.target.value)}
              className={inputClasses(errors.email)}
            />
            {errors.email && (
              <p className="text-xs text-red-400">{errors.email}</p>
            )}
          </div>
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-foreground/90"
          >
            Subject
          </label>
          <input
            id="subject"
            type="text"
            placeholder="SEO project, collaboration, job opportunity…"
            value={form.subject}
            onChange={(e) => updateField("subject", e.target.value)}
            className={inputClasses()}
          />
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-foreground/90"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Tell me about your project or goals…"
            value={form.message}
            onChange={(e) => updateField("message", e.target.value)}
            className={`${inputClasses(errors.message)} resize-none`}
          />
          {errors.message && (
            <p className="text-xs text-red-400">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white px-7 py-3.5 rounded-xl font-semibold transition-opacity shadow-lg shadow-primary/25"
        >
          <Send className="h-4 w-4" />
          Send Message
        </button>
      </form>

      {sent && (
        <div className="mt-5 flex items-start gap-2.5 bg-primary/10 border border-primary/25 rounded-xl px-4 py-3">
          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <p className="text-sm text-foreground/90">
            Your email app should have opened with everything filled in. If it
            didn&apos;t, email me directly at{" "}
            <a
              href={`mailto:${EMAIL}`}
              className="text-primary font-medium underline decoration-primary/40 underline-offset-2 hover:decoration-primary"
            >
              {EMAIL}
            </a>
            .
          </p>
        </div>
      )}

      <div className="mt-5 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-muted">
          Prefer email?{" "}
          <a
            href={`mailto:${EMAIL}`}
            className="text-primary font-medium hover:underline"
          >
            {EMAIL}
          </a>
        </p>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-muted hover:text-white transition-colors"
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-primary" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
          {copied ? "Copied!" : "Copy email"}
        </button>
      </div>
    </div>
  );
}