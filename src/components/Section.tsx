import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export function RevealSection({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      const items = ref.current!.querySelectorAll("[data-reveal]");
      if (!items.length) return;
      gsap.fromTo(
        items,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.1,
          clearProps: "transform",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            once: true,
          },
        },
      );
    }, ref);
    // Make sure triggers recompute after fonts/images settle
    const t = setTimeout(() => ScrollTrigger.refresh(), 200);
    return () => {
      clearTimeout(t);
      ctx.revert();
    };
  }, []);
  return <section ref={ref} className={className}>{children}</section>;
}

export function SectionHeading({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <div className="mb-12 text-center max-w-2xl mx-auto">
      {eyebrow && (
        <span data-reveal className="inline-block text-xs uppercase tracking-[0.3em] text-[var(--neon-cyan)] mb-3">
          {eyebrow}
        </span>
      )}
      <h2 data-reveal className="text-4xl md:text-5xl font-bold">
        <span className="text-gradient">{title}</span>
      </h2>
      {sub && <p data-reveal className="mt-4 text-muted-foreground">{sub}</p>}
    </div>
  );
}
