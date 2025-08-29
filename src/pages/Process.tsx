// src/pages/Process.tsx
import React, { useEffect, useRef, useState } from "react";
import {
  MessageSquare,
  ClipboardCheck,
  Rocket,
  LifeBuoy, // <-- correct Lucide name
  ChevronRight,
} from "lucide-react";

type Step = {
  title: string;
  desc: string;
  icon: React.ElementType;
};

const STEPS: Step[] = [
  {
    title: "Consultation",
    desc: "We understand your goals, constraints, and success metrics.",
    icon: MessageSquare,
  },
  {
    title: "Planning",
    desc: "Architecture, roadmap, and resourcing aligned to outcomes.",
    icon: ClipboardCheck,
  },
  {
    title: "Execution",
    desc: "Agile delivery with CI/CD, security, and quality baked in.",
    icon: Rocket,
  },
  {
    title: "Support",
    desc: "Monitoring, enhancements, and reliable post-go-live care.",
    icon: LifeBuoy,
  },
];

export default function Process() {
  // simple reveal-on-scroll
  const [seen, setSeen] = useState<boolean[]>(
    Array.from({ length: STEPS.length }, () => false)
  );
  const refs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number((entry.target as HTMLElement).dataset.index);
          if (entry.isIntersecting) {
            setSeen((prev) => {
              const next = [...prev];
              next[idx] = true;
              return next;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="process"
      className="scroll-mt-[84px] py-16 md:py-20 bg-gradient-to-br from-background to-secondary/30"
      aria-labelledby="how-it-works"
    >
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-10 md:mb-14">
          <h2
            id="how-it-works"
            className="font-montserrat text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent"
          >
            How It Works
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            A clear, outcomes-driven path—consultation to ongoing success.
          </p>
        </header>

        {/* Horizontal timeline on md+, vertical stack on mobile */}
        <div className="relative">
          {/* Horizontal arrows (md+) */}
          <div className="hidden md:flex items-center justify-between absolute left-0 right-0 top-1/2 -translate-y-1/2 pointer-events-none">
            {STEPS.slice(0, -1).map((_, i) => (
              <div
                key={`arrow-${i}`}
                className="flex-1 flex items-center justify-center"
              >
                <div className="h-[2px] w-full max-w-[140px] bg-border/70" />
                <div className="mx-2 rounded-full bg-primary/10 ring-1 ring-primary/20 p-2">
                  <ChevronRight className="h-5 w-5 text-primary" />
                </div>
                <div className="h-[2px] w-full max-w-[140px] bg-border/70" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            {STEPS.map(({ title, desc, icon: Icon }, i) => (
              <div
                key={title}
                data-index={i}
                ref={(el) => (refs.current[i] = el)}
                className={[
                  "relative rounded-2xl border border-border/60 bg-card/70 hover:bg-card",
                  "shadow-sm hover:shadow-xl transition-all p-6 text-center",
                  "backdrop-blur-sm",
                  // light blue gradient wash
                  "before:absolute before:inset-0 before:rounded-2xl before:pointer-events-none",
                  "before:bg-[radial-gradient(120px_120px_at_50%_-20%,rgba(59,130,246,0.08),transparent_60%)]",
                  // reveal animation
                  "opacity-0 translate-y-6",
                  seen[i] && "opacity-100 translate-y-0",
                  "duration-700 ease-out",
                ]
                  .filter(Boolean)
                  .join(" ")}
                style={{ transitionProperty: "opacity, transform, box-shadow" }}
              >
                <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border/60 bg-primary/10 text-primary ring-1 ring-primary/10">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>

                {/* Mobile connector chevron */}
                {i < STEPS.length - 1 && (
                  <div className="md:hidden mt-4 flex items-center justify-center">
                    <ChevronRight className="h-5 w-5 rotate-90 text-muted-foreground/70" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
