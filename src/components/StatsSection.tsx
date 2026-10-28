import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, Trophy, Code2, Briefcase } from "lucide-react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: GraduationCap, value: 3.41, suffix: "", label: "BSc CSE · CGPA", decimals: 2 },
  { icon: Briefcase, value: 50, suffix: "+", label: "Beta users served in production" },
  { icon: Code2, value: 10, suffix: "+", label: "Technologies mastered" },
  { icon: Trophy, value: 2026, suffix: "", label: "Graduated with Distinction honors", raw: true },
];

export function StatsSection() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      const cards = root.current!.querySelectorAll(".stat-card");
      gsap.fromTo(
        cards,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, ease: "power3.out", stagger: 0.12, clearProps: "transform",
          scrollTrigger: { trigger: root.current, start: "top 80%", once: true },
        },
      );
      root.current!.querySelectorAll<HTMLElement>(".stat-num").forEach((el) => {
        const target = Number(el.dataset.target || 0);
        const decimals = Number(el.dataset.decimals || 0);
        const raw = el.dataset.raw === "1";
        gsap.fromTo(
          { v: 0 },
          { v: 0 },
          {
            v: target,
            duration: 1.6,
            ease: "power1.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
            onUpdate: function () {
              const val = (this.targets()[0] as { v: number }).v;
              el.innerText = raw
                ? String(Math.round(val))
                : val.toFixed(decimals);
            },
          },
        );
      });

      cards.forEach((card) => {
        const enter = () => gsap.to(card, { borderRadius: "28px", boxShadow: "0 0 40px 0 rgba(124,58,237,0.45)", duration: 0.4 });
        const leave = () => gsap.to(card, { borderRadius: "16px", boxShadow: "0 0 0 0 rgba(0,0,0,0)", duration: 0.4 });
        card.addEventListener("mouseenter", enter);
        card.addEventListener("mouseleave", leave);
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="stat-card glass rounded-2xl p-6 flex flex-col gap-3" style={{ borderRadius: 16 }}>
            <s.icon className="h-6 w-6 text-[var(--neon-cyan)]" />
            <div className="text-4xl font-bold font-display">
              <span
                className="stat-num text-gradient"
                data-target={s.value}
                data-decimals={s.decimals ?? 0}
                data-raw={s.raw ? "1" : "0"}
              >
                0
              </span>
              <span className="text-gradient">{s.suffix}</span>
            </div>
            <div className="text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
