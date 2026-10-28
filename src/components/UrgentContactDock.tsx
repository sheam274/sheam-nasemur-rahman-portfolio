import { useState } from "react";
import { MessageCircle, Linkedin, Mail, Github, X, Zap } from "lucide-react";
import { profile } from "../data/profile";

const channels = [
  { icon: MessageCircle, label: "WhatsApp", href: profile.whatsapp, color: "from-green-400 to-emerald-500" },
  { icon: Linkedin, label: "LinkedIn", href: profile.linkedin, color: "from-sky-400 to-blue-600" },
  { icon: Mail, label: "Email", href: `mailto:${profile.email}`, color: "from-violet-400 to-fuchsia-500" },
  { icon: Github, label: "GitHub", href: profile.github, color: "from-slate-400 to-slate-600" },
];

export function UrgentContactDock() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="glass-strong rounded-2xl p-3 flex flex-col gap-2 animate-fade-in min-w-[240px]">
          <div className="px-2 pb-1 flex items-center gap-2 text-xs text-muted-foreground">
            <Zap className="h-3.5 w-3.5 text-[var(--neon-cyan)]" />
            <span>Reach me instantly</span>
          </div>
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/5 transition"
            >
              <span className={`inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${c.color} text-white`}>
                <c.icon className="h-4 w-4" />
              </span>
              <span className="text-sm font-medium">{c.label}</span>
            </a>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Quick contact"
        className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[var(--neon)] to-[var(--neon-cyan)] text-background neon-glow hover:scale-110 transition-transform"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        {!open && (
          <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--neon)] opacity-60 animate-ping" />
        )}
      </button>
    </div>
  );
}
