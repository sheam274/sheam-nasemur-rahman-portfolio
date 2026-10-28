## Portfolio for Sheam Nasemur Rahman

Dark Neon Glass aesthetic (deep navy/black base, purple #7c3aed + cyan #06b6d4 accents) with glassmorphism navbar, GSAP-driven section reveals, and multiple TanStack routes.

### Pages (TanStack Start routes)

- `/` — Home: hero with circular avatar placeholder, animated name/title, key stats (1+ yr AI, 100 projects, 50 permanent clients, instant support), CTA buttons
- `/projects` — Project grid with 6 placeholder AI project cards (filterable), GSAP stagger reveal
- `/testimonials` — Client testimonial cards with marquee + glass cards
- `/contact` — Contact form + contact channels (WhatsApp, LinkedIn, Fiverr, Upwork, email) — placeholders the user can edit
- Urgent Contact: floating glass widget (always visible on every page) with quick WhatsApp/LinkedIn buttons + pulsing "Instant Support" indicator

### Visual system

- Palette tokens in `src/styles.css`: bg `#0a0a0f`, surface `#1a1a2e`, primary `#7c3aed`, accent `#06b6d4`
- Typography: Space Grotesk (display) + Inter (body), loaded via `<link>` in `__root.tsx`
- Glassmorphism: `backdrop-blur-xl bg-white/5 border border-white/10` for nav + cards
- Ambient gradient blobs + subtle grid background
- Sticky transparent glass navbar with active link underline animation

### Animations

- **Hero**: dribbble-style entrance — name letters split + stagger, avatar scale-in with glow, floating orbs
- **Post-hero sections (GSAP + ScrollTrigger)**:
  - Stats counters animate from 0
  - Project cards: stagger fade-up with rotateX
  - Testimonials: horizontal pinned scroll
  - Section headings: text reveal with mask
  - Hover micro-interactions (boxShadow glow, borderRadius morph) using the gsap.to pattern you shared
- Page transitions: fade + slide between routes

### Technical

- Add `gsap` package (includes ScrollTrigger)
- New components: `GlassNav`, `Hero`, `StatsSection`, `ProjectCard`, `TestimonialCard`, `UrgentContactDock`, `Footer`, `AnimatedHeading`, `GsapProvider`
- Routes: `src/routes/index.tsx`, `projects.tsx`, `testimonials.tsx`, `contact.tsx` — each with unique `head()` metadata (title, description, og tags)
- Shared layout (nav + urgent dock) in `__root.tsx`
- Contact links use placeholder `#` URLs with clear comments so you can drop in your real WhatsApp/LinkedIn/Fiverr/Upwork URLs later
- Avatar: stylized circular gradient placeholder (SVG/CSS) with your initials "SR"

### Out of scope (for now)

- Real photo, real project content, real contact URLs — all use polished placeholders
- Backend / contact form submission (form is UI-only; can wire to Lovable Cloud later)
