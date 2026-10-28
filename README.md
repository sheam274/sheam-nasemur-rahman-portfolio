# Sheam Nasemur Rahman — Portfolio

Professional portfolio built with **TanStack Start** (React 19 + Vite + Tailwind CSS v4 + GSAP).

## Deploying to Vercel

This project is Vercel‑ready — verified with `VERCEL=1 npm run build`. Nitro auto‑detects Vercel and emits the Build Output API in `.vercel/output`, including an SSR function and static assets. The verified build selected the Node.js 24 runtime; the `package.json` engine range supports Node.js 22 and newer. No extra Vercel configuration file is needed.

1. Make sure the latest project files are pushed to the GitHub repository.
2. Sign in to Vercel, choose **Add New → Project**, and import `sheam274/sheam-nasemur-rahman-portfolio`.
3. Use `sheam-nasemur-rahman-portfolio` as the Vercel project name if available. Vercel will provide a free `*.vercel.app` address; no Lovable domain or custom domain is needed.
4. Settings:
   - **Build command:** `npm run build` (or Vercel's auto‑detected command)
   - **Output directory:** leave unset — Nitro writes `.vercel/output` for Vercel
   - **Node.js version:** use 24.x, or leave Vercel's compatible version selection enabled
5. Environment variables (optional):
   - `VITE_CV_URL` — optional alternate CV URL. When unset, the app serves `public/Sheam-Nasemur-Rahman-CV.pdf` same-origin. For an external URL, its response must set `Content-Disposition: attachment` for the download buttons to work reliably.
6. Deploy. Vercel can deploy again automatically whenever you push to the connected GitHub repository. SSR, server functions, and every page route work out of the box; verify by opening and refreshing a nested route like `/projects`.

## Functional checklist

- All nav links, CTAs, and social buttons point to real destinations (email, WhatsApp, LinkedIn, GitHub, phone, maps).
- Contact form composes a pre‑filled email via `mailto:` — no backend needed; the visitor must have an email app or webmail handler configured.
- CV download links everywhere point to the hosted PDF (`profile.cvUrl`).
- Floating urgent‑contact dock opens WhatsApp / LinkedIn / Email / GitHub.

## Local development

```bash
npm install
npm run dev     # dev server
npm run build   # production build
```
# sheam-nasemur-rahman-portfolio
