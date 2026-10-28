import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Download, MapPin, Sparkles } from "lucide-react";
import { Avatar } from "./Avatar";
import { profile } from "../data/profile";

export function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      // fromTo with explicit end values — .from() can capture polluted inline
      // styles from a previous mount as its "end" state, leaving elements invisible.
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(".hero-orb", { scale: 0 }, { scale: 1, duration: 1.2, stagger: 0.15 })
        .fromTo(".hero-avatar", { scale: 0.5, opacity: 0, rotate: -20 }, { scale: 1, opacity: 1, rotate: 0, duration: 0.9 }, "-=0.8")
        .fromTo(".hero-eyebrow", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.4")
        .fromTo(".hero-letter", { yPercent: 120, opacity: 0 }, { yPercent: 0, opacity: 1, stagger: 0.03, duration: 0.7 }, "-=0.3")
        .fromTo(".hero-sub", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.3")
        .fromTo(".hero-cta", { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.5 }, "-=0.3")
        .fromTo(".hero-chip", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, stagger: 0.08, duration: 0.5 }, "-=0.4");

      gsap.to(".hero-orb", { y: "+=20", duration: 4, yoyo: true, repeat: -1, ease: "sine.inOut", stagger: 0.3 });
    }, root);
    return () => ctx.revert();
  }, []);

  const name = profile.shortName.split("");

  return (
    <section ref={root} className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      <div className="hero-orb absolute top-32 left-10 h-72 w-72 rounded-full bg-[var(--neon)] opacity-30 blur-[120px]" />
      <div className="hero-orb absolute top-40 right-10 h-80 w-80 rounded-full bg-[var(--neon-cyan)] opacity-25 blur-[120px]" />
      <div className="hero-orb absolute bottom-10 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-fuchsia-500 opacity-20 blur-[120px]" />

      <div className="relative max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        <div className="hero-avatar mb-8">
          <Avatar size={180} />
        </div>

        <span className="hero-eyebrow glass inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs">
          <Sparkles className="h-3.5 w-3.5 text-[var(--neon-cyan)]" /> {profile.tagline}
        </span>

        <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05]">
          <span className="inline-block overflow-hidden">
            {name.map((c, i) => (
              <span key={i} className="hero-letter inline-block">
                {c === " " ? "\u00A0" : c}
              </span>
            ))}
          </span>
          <br />
          <span className="text-gradient">I build reliable web products.</span>
        </h1>

        <p className="hero-sub mt-6 max-w-xl text-muted-foreground text-lg">
          {profile.summary}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/projects"
            className="hero-cta inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--neon)] to-[var(--neon-cyan)] px-6 py-3 text-sm font-semibold text-background neon-glow hover:scale-105 transition-transform"
          >
            See my work <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={profile.cvUrl}
            download
            className="hero-cta glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold hover:bg-white/10 transition"
          >
            <Download className="h-4 w-4 text-[var(--neon-cyan)]" /> Download CV
          </a>
          <Link
            to="/contact"
            className="hero-cta glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold hover:bg-white/10 transition"
          >
            Hire me <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground">
          <span className="hero-chip glass px-3 py-1 rounded-full inline-flex items-center gap-1.5">
            <MapPin className="h-3 w-3 text-[var(--neon-cyan)]" /> {profile.location}
          </span>
          <span className="hero-chip glass px-3 py-1 rounded-full">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 mr-2 align-middle animate-pulse" />
            Open to full‑time & freelance
          </span>
          <span className="hero-chip glass px-3 py-1 rounded-full">BSc in CSE · CGPA 3.41</span>
          <span className="hero-chip glass px-3 py-1 rounded-full">Vercel‑deployed full‑stack apps</span>
        </div>
      </div>
    </section>
  );
}
