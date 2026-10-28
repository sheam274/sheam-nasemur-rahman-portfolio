import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "../data/profile";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-white/10 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} {profile.shortName} · Built with TanStack Start + GSAP</p>
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {profile.location}</span>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-foreground transition"><Mail className="h-4 w-4" /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-foreground transition"><Linkedin className="h-4 w-4" /></a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-foreground transition"><Github className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}
