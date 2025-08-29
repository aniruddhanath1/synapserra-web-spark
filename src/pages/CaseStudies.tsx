import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight, BarChart3, Clock4 } from "lucide-react";

type Study = {
  id: string;
  client: string;
  title: string;
  summary: string;
  metrics: { label: string; value: string }[];
  image: string;
  stack?: string[];
  body?: string;
  logo?: string;
};

const STUDIES: Study[] = [
  {
    id: "acme-cloud",
    client: "Acme Corp",
    title: "Optimized cloud infrastructure",
    summary: "Modernized infra + CI/CD. Cost down, performance up.",
    metrics: [
      { label: "efficiency increase", value: "50%" },
      { label: "cost reduction", value: "28%" },
    ],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    stack: ["AWS", "Terraform", "GitHub Actions"],
    body: "We re-platformed legacy workloads to containerized services on AWS, introduced IaC with Terraform, and implemented blue/green deploys. This reduced manual ops and improved release cadence.",
  },
  {
    id: "global-bank",
    client: "Global Bank",
    title: "Enterprise data migration",
    summary: "Zero-downtime migration from legacy DWH to modern stack.",
    metrics: [
      { label: "performance improvement", value: "3×" },
      { label: "downtime during cutover", value: "0 min" },
    ],
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600&auto=format&fit=crop",
    stack: ["Snowflake", "dbt", "Fivetran"],
    body: "Designed migration waves, validated data quality with automated tests, and trained internal teams for ongoing governance.",
  },
  {
    id: "mfg-analytics",
    client: "Manufacturing Co.",
    title: "AI-powered analytics",
    summary: "Predictive maintenance rolled out across 12 plants.",
    metrics: [
      { label: "downtime reduction", value: "40%" },
      { label: "payback period", value: "6 months" },
    ],
    image:
      "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1600&auto=format&fit=crop",
    stack: ["Python", "Kafka", "Databricks"],
    body: "Streaming telemetry, a feature store, and interpretable models delivered fast ROI while keeping operators in the loop.",
  },
];

export default function CaseStudies() {
  const [open, setOpen] = useState<Study | null>(null);

  const Card = ({ s }: { s: Study }) => (
    <article
      onClick={() => setOpen(s)}
      className="group cursor-pointer overflow-hidden rounded-2xl border border-border/60 bg-card/70 hover:bg-card transition-all shadow-sm hover:shadow-xl"
    >
      {/* Media */}
      <div className="aspect-[16/9] w-full overflow-hidden">
        <img
          src={s.image}
          alt={s.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>

      {/* Body */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground">{s.client}</h3>
        <p className="text-muted-foreground">{s.title}</p>

        <hr className="my-4 border-border/60" />

        <div className="grid grid-cols-2 gap-4">
          {s.metrics.map((m) => (
            <div key={m.label}>
              <div className="text-2xl font-bold text-foreground">
                {m.value}
              </div>
              <div className="text-xs uppercase tracking-wide text-muted-foreground">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        <button className="mt-5 inline-flex items-center gap-2 text-primary font-medium">
          Read More <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </article>
  );

  return (
    <section id="case-studies" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Gradient header band */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 px-6 py-12 text-center text-white shadow-lg">
          <h2 className="font-montserrat text-4xl md:text-5xl font-extrabold">
            Case Studies
          </h2>
          <p className="mt-2 opacity-90">
            See how we help teams hit KPIs with measurable impact.
          </p>
          <div className="mt-4 flex items-center justify-center gap-6 text-sm opacity-90">
            <span className="inline-flex items-center gap-2">
              <BarChart3 className="h-4 w-4" /> Outcomes first
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="inline-flex items-center gap-2">
              <Clock4 className="h-4 w-4" /> Faster time-to-value
            </span>
          </div>
        </div>

        {/* Grid for md+, carousel for mobile */}
        <div className="mt-10 hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {STUDIES.map((s) => (
            <Card key={s.id} s={s} />
          ))}
        </div>

        <div className="mt-10 md:hidden">
          <Carousel>
            <CarouselContent>
              {STUDIES.map((s) => (
                <CarouselItem key={s.id} className="basis-full px-2">
                  <Card s={s} />
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex items-center justify-between px-2">
              <CarouselPrevious />
              <CarouselNext />
            </div>

            {/* Simple dots (static) */}
            <div className="mt-3 flex items-center justify-center gap-2">
              {STUDIES.map((_, i) => (
                <span key={i} className="h-1.5 w-4 rounded-full bg-muted" />
              ))}
            </div>
          </Carousel>
        </div>
      </div>

      {/* Modal / drawer (click card) */}
      {open && (
        <div
          className="fixed inset-0 z-[70] bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(null)}
        >
          <div
            className="mx-auto my-10 max-w-5xl rounded-2xl bg-background p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
              <div>
                <img
                  src={open.image}
                  alt=""
                  className="mb-4 h-56 w-full rounded-xl object-cover"
                />
                <h3 className="font-montserrat text-3xl font-extrabold text-foreground">
                  {open.client}
                </h3>
                <p className="text-lg text-muted-foreground">{open.title}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {(open.stack ?? []).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border/60 px-3 py-1 text-xs text-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <p className="mt-6 text-foreground">{open.body}</p>
              </div>

              <aside className="rounded-xl border border-border/60 bg-card/70 p-4">
                <div className="mb-2 text-sm font-semibold text-muted-foreground">
                  Key metrics
                </div>
                <div className="space-y-3">
                  {open.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="flex items-baseline justify-between"
                    >
                      <span className="text-sm text-muted-foreground">
                        {m.label}
                      </span>
                      <span className="text-xl font-bold text-foreground">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              </aside>
            </div>

            <div className="mt-6 flex items-center justify-end">
              <button
                onClick={() => setOpen(null)}
                className="rounded-lg border border-border/60 px-4 py-2 text-sm text-foreground hover:bg-muted"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
