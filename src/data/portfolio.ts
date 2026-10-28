export type Project = {
  title: string;
  tag: string;
  desc: string;
  stack: string[];
  color: string;
  href?: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Talent BD — Full‑Stack Career Platform",
    tag: "Featured · 2026 · Full‑Stack",
    desc: "Full‑stack job platform with secure authentication, user roles, and optimized PostgreSQL database queries. CI/CD deployment pipelines on Vercel deliver high uptime and responsive performance.",
    stack: ["React", "TypeScript", "PostgreSQL", "Supabase Auth", "Vercel"],
    color: "from-violet-500 to-fuchsia-500",
    href: "https://github.com/sheam274",
    demo: "https://sheamportfolio.lovable.app",
    featured: true,
  },
  {
    title: "Scalable E‑Commerce Engine",
    tag: "Featured · 2025 · Backend",
    desc: "E‑commerce backend built with Django featuring custom session‑based cart logic and dynamic product filtering. OOP design patterns keep the code modular with clean data flow.",
    stack: ["Python", "Django", "SQL", "HTML5/CSS3"],
    color: "from-fuchsia-500 to-pink-500",
    href: "https://github.com/sheam274",
    featured: true,
  },
  {
    title: "Learn & Earn Hub — Skill‑to‑Income Platform",
    tag: "React · Full‑Stack",
    desc: "Learning platform where users complete courses, take quizzes, and unlock earning opportunities — with dashboard, auth, and progress tracking.",
    stack: ["React", "TypeScript", "Tailwind", "Supabase"],
    color: "from-cyan-400 to-sky-500",
    href: "https://github.com/sheam274/learn-earn-hub-55244ee1",
  },
  {
    title: "Production Auth System — ICT HAX",
    tag: "Commercial · Authentication",
    desc: "Production authentication module serving 50+ active beta users with secure Supabase session handling, built on React and TypeScript at ICT HAX.",
    stack: ["React", "TypeScript", "Supabase Auth", "PostgreSQL"],
    color: "from-pink-400 to-rose-500",
  },
];
