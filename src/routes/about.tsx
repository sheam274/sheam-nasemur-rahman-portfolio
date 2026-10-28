import { createFileRoute } from "@tanstack/react-router";
import { RevealSection, SectionHeading } from "../components/Section";
import { profile, skills, education, experience, certifications } from "../data/profile";
import { GraduationCap, Briefcase, Award, Download } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sheam Nasemur Rahman | Full‑Stack Software Developer" },
      {
        name: "description",
        content:
          "About MD. Sheam Nasemur Rahman — BSc in CSE (Graduated 2026), Full‑Stack Software Developer at ICT HAX skilled in React, TypeScript, Node.js, Express, PostgreSQL, and MongoDB.",
      },
      { property: "og:title", content: "About — Sheam Nasemur Rahman" },
      { property: "og:description", content: "CSE graduate and full‑stack software developer at ICT HAX." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <RevealSection className="relative pt-36 pb-20 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="About me" title="Career at a glance" sub={profile.summary} />

        <div className="text-center mb-14" data-reveal>
          <a
            href={profile.cvUrl}
            download
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--neon)] to-[var(--neon-cyan)] px-6 py-3 text-sm font-semibold text-background neon-glow"
          >
            <Download className="h-4 w-4" /> Download full CV (PDF)
          </a>
        </div>

        {/* Experience */}
        <Block icon={Briefcase} title="Commercial Experience">
          <div className="space-y-4">
            {experience.map((e) => (
              <div key={e.company} className="glass rounded-2xl p-6" data-reveal>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold">
                    {e.role} · <span className="text-[var(--neon-cyan)]">{e.company}</span>
                  </h3>
                  <span className="text-xs text-muted-foreground">
                    {e.period} · {e.location}
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {e.stack.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc pl-5">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Block>

        {/* Skills */}
        <Block icon={Award} title="Technical Skills">
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="glass rounded-2xl p-5" data-reveal>
                <div className="text-xs uppercase tracking-widest text-[var(--neon-cyan)] mb-3">{group}</div>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Block>

        {/* Education */}
        <Block icon={GraduationCap} title="Education">
          {education.map((ed) => (
            <div key={ed.school} className="glass rounded-2xl p-6" data-reveal>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">{ed.school}</h3>
                <span className="text-xs text-muted-foreground">{ed.period}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{ed.degree}</p>
              <p className="mt-2 text-sm font-semibold text-gradient">{ed.grade}</p>
              <p className="mt-3 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Academic Honors:</span> {ed.honors}
              </p>
              <div className="mt-4">
                <div className="text-xs uppercase tracking-widest text-[var(--neon-cyan)] mb-2">Key Coursework</div>
                <div className="flex flex-wrap gap-1.5">
                  {ed.coursework.map((c) => (
                    <Chip key={c}>{c}</Chip>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Block>

        {/* Certifications */}
        <Block icon={Award} title="Certifications">
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((c) => (
              <div key={c.title} className="glass rounded-2xl p-5" data-reveal>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold">{c.title}</h3>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{c.year}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{c.issuer}</p>
              </div>
            ))}
          </div>
        </Block>
      </div>
    </RevealSection>
  );
}

function Block({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-14">
      <h2 className="flex items-center gap-3 text-2xl font-bold mb-5" data-reveal>
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--neon)] to-[var(--neon-cyan)] text-background">
          <Icon className="h-4 w-4" />
        </span>
        {title}
      </h2>
      {children}
    </section>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground">
      {children}
    </span>
  );
}
