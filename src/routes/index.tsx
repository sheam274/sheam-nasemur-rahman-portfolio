import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "../components/Hero";
import { StatsSection } from "../components/StatsSection";
import { RevealSection, SectionHeading } from "../components/Section";
import { projects } from "../data/portfolio";
import { profile, skills, experience } from "../data/profile";
import { ArrowRight, ExternalLink, Briefcase } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${profile.shortName} — ${profile.role} & CSE Engineer` },
      {
        name: "description",
        content: `Portfolio of ${profile.shortName}, a Full‑Stack Software Developer and BSc CSE graduate. React, TypeScript, Node.js, Express, PostgreSQL, MongoDB — deployed on Vercel.`,
      },
      { property: "og:title", content: `${profile.shortName} — ${profile.role}` },
      {
        property: "og:description",
        content: "Full‑stack software developer and CSE graduate open to full‑time and freelance roles.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const skillGroups = Object.entries(skills).slice(0, 4);
  return (
    <>
      <Hero />
      <StatsSection />

      {/* Skills preview */}
      <RevealSection className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="What I work with" title="Core stack" sub="A modern, type‑safe toolkit for shipping web products end‑to‑end." />
          <div className="grid md:grid-cols-2 gap-4">
            {skillGroups.map(([group, items]) => (
              <div key={group} data-reveal className="glass rounded-2xl p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--neon-cyan)] mb-3">{group}</div>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((s) => (
                    <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/about" data-reveal className="inline-flex items-center gap-2 text-sm text-[var(--neon-cyan)] hover:gap-3 transition-all">
              See full skill set & education <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </RevealSection>

      {/* Experience */}
      <RevealSection className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeading eyebrow="Current role" title="Where I'm working" />
          {experience.map((e) => (
            <div key={e.company} data-reveal className="glass-strong rounded-2xl p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-[var(--neon-cyan)]" />
                  {e.role} · <span className="text-gradient">{e.company}</span>
                </h3>
                <span className="text-xs text-muted-foreground">{e.period}</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc pl-5">
                {e.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </RevealSection>

      {/* Recent work */}
      <RevealSection className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="Recent work"
            title="Selected projects"
            sub="Full‑stack web apps, CSE coursework, and product experiments — built end‑to‑end."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.slice(0, 6).map((p) => (
              <a
                key={p.title}
                href={p.href || "#"}
                target={p.href ? "_blank" : undefined}
                rel="noreferrer"
                data-reveal
                className="group glass rounded-2xl p-6 hover:-translate-y-1.5 transition-transform duration-300 block"
              >
                <div className={`h-32 rounded-xl bg-gradient-to-br ${p.color} mb-5 relative overflow-hidden`}>
                  <div className="absolute inset-0 grid-bg opacity-30" />
                </div>
                <div className="text-[10px] uppercase tracking-widest text-[var(--neon-cyan)] mb-1.5">{p.tag}</div>
                <h3 className="text-lg font-semibold leading-tight group-hover:text-gradient">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.slice(0, 4).map((s) => (
                    <span key={s} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>
                {p.href && (
                  <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-[var(--neon-cyan)]">
                    View on GitHub <ExternalLink className="h-3 w-3" />
                  </div>
                )}
              </a>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/projects" data-reveal className="inline-flex items-center gap-2 text-sm text-[var(--neon-cyan)] hover:gap-3 transition-all">
              View all projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </RevealSection>

      {/* CTA */}
      <RevealSection className="relative py-24 px-6">
        <div className="max-w-3xl mx-auto glass-strong rounded-3xl p-10 md:p-14 text-center">
          <h2 data-reveal className="text-3xl md:text-4xl font-bold">
            Looking to hire a <span className="text-gradient">reliable web developer?</span>
          </h2>
          <p data-reveal className="mt-4 text-muted-foreground">
            Open to full‑time roles, internships, and freelance projects worldwide.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              data-reveal
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--neon)] to-[var(--neon-cyan)] px-6 py-3 text-sm font-semibold text-background neon-glow"
            >
              Start a conversation <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={profile.cvUrl}
              download
              data-reveal
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold hover:bg-white/10 transition"
            >
              Download CV
            </a>
          </div>
        </div>
      </RevealSection>
    </>
  );
}
