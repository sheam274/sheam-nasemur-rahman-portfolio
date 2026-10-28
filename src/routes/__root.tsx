import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { GlassNav } from "../components/GlassNav";
import { UrgentContactDock } from "../components/UrgentContactDock";
import { Footer } from "../components/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center glass-strong rounded-3xl p-10">
        <h1 className="text-7xl font-bold text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">This route drifted into the void.</p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--neon)] to-[var(--neon-cyan)] px-5 py-2 text-sm font-semibold text-background">Go home</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center glass-strong rounded-3xl p-10">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-gradient-to-r from-[var(--neon)] to-[var(--neon-cyan)] px-5 py-2 text-sm font-semibold text-background"
          >Try again</button>
          <a href="/" className="rounded-full glass px-5 py-2 text-sm font-semibold">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sheam Nasemur Rahman — Full‑Stack Software Developer | React, TypeScript, Node.js" },
      { name: "description", content: "Portfolio of MD. Sheam Nasemur Rahman — Full‑Stack Software Developer, BSc in CSE. Skilled in React, TypeScript, Node.js, Express, PostgreSQL, MongoDB. Open to full‑time and freelance roles." },
      { name: "author", content: "MD. Sheam Nasemur Rahman" },
      { name: "keywords", content: "Sheam Nasemur Rahman, Full Stack Software Developer, Web Developer, React, TypeScript, Node.js, Express, PostgreSQL, MongoDB, Supabase, Vercel, CSE, Bangladesh" },
      { property: "og:title", content: "Sheam Nasemur Rahman — Full‑Stack Software Developer | React, TypeScript, Node.js" },
      { property: "og:description", content: "Portfolio of MD. Sheam Nasemur Rahman — Full‑Stack Software Developer, BSc in CSE. Open to full‑time and freelance roles." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sheam Nasemur Rahman — Full‑Stack Software Developer | React, TypeScript, Node.js" },
      { name: "twitter:description", content: "Portfolio of MD. Sheam Nasemur Rahman — Full‑Stack Software Developer, BSc in CSE. Open to full‑time and freelance roles." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/3643eadf-a24e-476c-a6cf-9473be68db0a/id-preview-753b37dd--9e6817c0-c31c-4eda-aa95-b1aa6ef3baa5.lovable.app-1783066576332.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/3643eadf-a24e-476c-a6cf-9473be68db0a/id-preview-753b37dd--9e6817c0-c31c-4eda-aa95-b1aa6ef3baa5.lovable.app-1783066576332.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: "https://sheam-nasemur-rahman.lovable.app/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <GlassNav />
      <main className="relative">
        <Outlet />
      </main>
      <Footer />
      <UrgentContactDock />
    </QueryClientProvider>
  );
}
