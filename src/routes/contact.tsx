import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { RevealSection, SectionHeading } from "../components/Section";
import { MessageCircle, Linkedin, Github, Mail, Phone, MapPin, Send, Zap } from "lucide-react";
import { profile } from "../data/profile";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sheam Nasemur Rahman" },
      {
        name: "description",
        content: `Get in touch with MD. Sheam Nasemur Rahman — WhatsApp, LinkedIn, GitHub, or email ${profile.email}. Open to full‑time and freelance roles.`,
      },
      { property: "og:title", content: "Contact — Sheam Nasemur Rahman" },
      { property: "og:description", content: "Reach out for full‑time roles, internships, and freelance projects." },
    ],
  }),
  component: ContactPage,
});

const channels = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: MessageCircle, label: "WhatsApp", value: "Reply in minutes", href: profile.whatsapp },
  { icon: Linkedin, label: "LinkedIn", value: "sheam-nasemur-rahman", href: profile.linkedin },
  { icon: Github, label: "GitHub", value: "@sheam274", href: profile.github },
  { icon: MapPin, label: "Location", value: profile.location, href: "https://www.google.com/maps/place/Bogura,+Bangladesh" },
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <RevealSection className="relative pt-36 pb-20 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Let's talk"
          title="Get in touch"
          sub="Open to full‑time roles, internships, and freelance projects — I usually reply within a few hours."
        />

        <div className="grid lg:grid-cols-5 gap-6">
          <div data-reveal className="lg:col-span-2 space-y-3">
            <div className="glass-strong rounded-2xl p-5 flex items-center gap-3">
              <Zap className="h-5 w-5 text-[var(--neon-cyan)]" />
              <div className="text-sm">
                <div className="font-semibold">Fast response</div>
                <div className="text-muted-foreground text-xs">Average reply within a few hours</div>
              </div>
            </div>
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="glass rounded-2xl p-4 flex items-center gap-4 hover:bg-white/10 transition group"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--neon)] to-[var(--neon-cyan)] text-background">
                  <c.icon className="h-5 w-5" />
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold">{c.label}</div>
                  <div className="text-xs text-muted-foreground truncate">{c.value}</div>
                </div>
                <span className="text-[var(--neon-cyan)] opacity-0 group-hover:opacity-100 transition">→</span>
              </a>
            ))}
          </div>

          <form
            data-reveal
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              const data = new FormData(form);
              const subject = encodeURIComponent(String(data.get("subject") || "New enquiry from portfolio"));
              const body = encodeURIComponent(
                `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`,
              );
              window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
              setSent(true);
            }}
            className="lg:col-span-3 glass-strong rounded-3xl p-8 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Your name" name="name" placeholder="Jane Doe" />
              <Field label="Email" name="email" type="email" placeholder="jane@company.com" />
            </div>
            <Field label="Subject" name="subject" placeholder="Full‑stack developer role / project" />
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea
                required
                name="message"
                rows={6}
                placeholder="Tell me about the role or project..."
                className="mt-1.5 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-[var(--neon-cyan)] resize-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--neon)] to-[var(--neon-cyan)] px-6 py-3 text-sm font-semibold text-background neon-glow hover:scale-105 transition-transform"
            >
              <Send className="h-4 w-4" /> {sent ? "Opening your email…" : "Send message"}
            </button>
            <p className="text-xs text-muted-foreground">
              This form opens your email client pre‑filled. Prefer WhatsApp? Tap the floating button.
            </p>
          </form>
        </div>
      </div>
    </RevealSection>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-[var(--neon-cyan)]"
      />
    </div>
  );
}
