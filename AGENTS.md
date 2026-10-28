# Project Conventions

- Use `gsap.fromTo()` with explicit end values for all entrance animations; never `gsap.from()` inside a timeline. Why: with React remounts, `.from()` can capture polluted inline styles as its "end" state, leaving elements permanently invisible (verified with the hero CTAs).
- Portfolio content is sourced only from the latest uploaded CV (`src/data/profile.ts`, `src/data/portfolio.ts`); do not re-add claims absent from the CV (e.g., ICPC).
- The CV is served same-origin from `public/Sheam-Nasemur-Rahman-CV.pdf` (`profile.cvUrl` → `/Sheam-Nasemur-Rahman-CV.pdf`); never point the download button at a cross-origin URL — the `download` attribute is ignored cross-origin and the click breaks in the preview. Override with `VITE_CV_URL` only to a URL that sets `Content-Disposition: attachment`.
