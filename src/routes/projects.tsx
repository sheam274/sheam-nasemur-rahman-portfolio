import { createFileRoute } from "@tanstack/react-router";
import { RevealSection, SectionHeading } from "../components/Section";
import { projects } from "../data/portfolio";
import { ExternalLink, Github, Star } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Sheam Nasemur Rahman | Full‑Stack Software Developer" },
      {
        name: "description",
        content:
          "Full‑stack projects by Sheam Nasemur Rahman: Talent BD career platform, Django e‑commerce engine, and production auth systems — React, TypeScript, PostgreSQL, Node.js.",
      },
      { property: "og:title", content: "Projects — Sheam Nasemur Rahman" },
      { property: "og:description", content: "Hand‑picked full‑stack web projects from a CSE engineer." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <RevealSection className="relative pt-36 pb-20 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Portfolio"
          title="All Projects"
          sub="Every project below was designed, built, and shipped end‑to‑end."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <article
              key={p.title}
              data-reveal
              className="group relative glass rounded-2xl p-6 overflow-hidden hover:-translate-y-1.5 transition-transform duration-300"
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[var(--neon)]/0 via-[var(--neon-cyan)]/0 to-[var(--neon)]/0 group-hover:from-[var(--neon)]/30 group-hover:via-transparent group-hover:to-[var(--neon-cyan)]/30 transition-all duration-500 pointer-events-none" />
              <div className={`relative h-36 rounded-xl bg-gradient-to-br ${p.color} mb-5 overflow-hidden`}>
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute bottom-3 left-4 text-[10px] uppercase tracking-widest text-white/80 font-semibold">
                  {p.tag}
                </div>
                {p.featured && (
                  <div className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-black/40 backdrop-blur px-2 py-0.5 text-[10px] font-semibold text-white">
                    <Star className="h-2.5 w-2.5" /> Featured
                  </div>
                )}
              </div>
              <h3 className="relative text-xl font-semibold leading-tight">{p.title}</h3>
              <p className="relative mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <div className="relative mt-4 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
              {(p.href || p.demo) && (
                <div className="relative mt-5 flex items-center gap-3 text-xs">
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-[var(--neon-cyan)] hover:gap-2 transition-all">
                      Live demo <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                  {p.href && (
                    <a href={p.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition">
                      Source <Github className="h-3 w-3" />
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
