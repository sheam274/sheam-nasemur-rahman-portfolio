import { Link } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { profile } from "../data/profile";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function GlassNav() {
  return (
    <header className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[min(94%,1100px)]">
      <nav className="glass-strong rounded-full px-4 py-2.5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 pl-2 pr-3 group">
          <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[var(--neon)] to-[var(--neon-cyan)] text-[10px] font-bold text-background">
            {profile.initials}
            <span className="absolute inset-0 rounded-full neon-glow opacity-0 group-hover:opacity-100 transition-opacity" />
          </span>
          <span className="font-display font-semibold tracking-tight hidden sm:inline">
            Sheam<span className="text-gradient">.</span>
          </span>
        </Link>
        <ul className="flex items-center gap-1 text-sm">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="relative px-3 py-1.5 rounded-full text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground data-[status=active]:bg-white/5"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href={profile.cvUrl}
          download
          className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[var(--neon)] to-[var(--neon-cyan)] px-4 py-1.5 text-xs font-semibold text-background hover:opacity-90 transition"
        >
          <Download className="h-3.5 w-3.5" /> Resume
        </a>
      </nav>
    </header>
  );
}
