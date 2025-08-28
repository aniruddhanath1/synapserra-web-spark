// import React from "react";

// const GetQuote = () => (
//   <div className="w-full h-screen flex flex-col items-center justify-center py-4 bg-white shadow-2xl">
//   <h1 className="text-5xl md:text-6xl font-extrabold mb-1 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent text-center">Get a Quote</h1>
//     <form className="w-full max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 space-y-6 flex flex-col items-center">
//       <input type="text" placeholder="Name" className="w-full border p-3 rounded text-lg" required />
//       <input type="email" placeholder="Email" className="w-full border p-3 rounded text-lg" required />
//       <input type="text" placeholder="Service Interested In" className="w-full border p-3 rounded text-lg" required />
//       <textarea placeholder="Project Details" className="w-full border p-3 rounded text-lg" rows={6} required />
//       <button type="submit" className="bg-green-600 text-white px-6 py-3 rounded text-lg font-semibold">Request Quote</button>
//     </form>
//   </div>
// );

// export default GetQuote;



import React, { useEffect, useRef, useState } from "react";
import { CheckCircle2, Phone, Mail, Building2 } from "lucide-react";

/** Reusable field wrapper */
const Field: React.FC<{ label: string; children: React.ReactNode; hint?: string }> = ({
  label,
  children,
  hint,
}) => (
  <label className="block">
    <div className="flex items-center justify-between mb-2">
      <span className="text-sm font-medium text-foreground/90">{label}</span>
      {hint ? <span className="text-[11px] text-muted-foreground">{hint}</span> : null}
    </div>
    {children}
  </label>
);

/** Simple in-view animation hook (no external libs) */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [reveal, setReveal] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setReveal(true),
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, reveal };
}

const GetQuote: React.FC = () => {
  const left = useReveal<HTMLDivElement>();
  const right = useReveal<HTMLDivElement>();

  return (
    <div className="relative min-h-screen">
      {/* Gradient canvas */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(80rem_40rem_at_20%_-10%,hsl(var(--primary)/0.25),transparent),radial-gradient(70rem_40rem_at_90%_10%,hsl(var(--accent)/0.25),transparent)]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/30 to-secondary/20" />

      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-8 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Get a Quote
          </span>
        </h1>
        <p className="mt-3 text-muted-foreground">
          Share a few details and our solution architects will get back within one business day.
        </p>
      </div>

      {/* Two-column card layout */}
      <div className="max-w-6xl mx-auto px-6 pb-20 grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* LEFT: What’s included / value list */}
        <div
          ref={left.ref}
          className={[
            "lg:col-span-2 rounded-2xl border border-border/50 bg-card/80 backdrop-blur p-6 md:p-8 shadow-xl",
            left.reveal ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6",
            "transition-all duration-700 ease-out",
          ].join(" ")}
        >
          <h2 className="text-2xl font-semibold text-foreground">What’s included</h2>

          <ul className="mt-6 space-y-4">
            {[
              "Transparent pricing",
              "Tailored solutions",
              "No hidden costs",
              "Security by default",
              "Post-launch support",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary shrink-0" />
                <span className="text-foreground/90">{item}</span>
              </li>
            ))}
          </ul>

          <hr className="my-8 border-border/60" />

          <h3 className="text-lg font-medium text-foreground mb-3">Prefer to talk?</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-primary" />
              <a className="hover:underline" href="mailto:info@synapserra.com">
                info@synapserra.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-primary" />
              <a className="hover:underline" href="tel:+911234567890">
                +91 12345 67890
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Building2 className="h-4 w-4 text-primary mt-0.5" />
              <span className="text-muted-foreground">
                Prestige Tech Park, Outer Ring Road, Bangalore 560103
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT: Form card with progress bar */}
        <div
          ref={right.ref}
          className={[
            "lg:col-span-3 rounded-2xl border border-border/50 bg-card/90 backdrop-blur p-6 md:p-8 shadow-xl",
            right.reveal ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6",
            "transition-all duration-700 ease-out",
          ].join(" ")}
        >
          {/* Progress bar (visual only) */}
          <div className="mb-6">
            <div className="h-2 w-full rounded-full bg-muted/50 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-primary/70"
                style={{ width: "35%" }}
              />
            </div>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="Name">
                <input
                  required
                  placeholder="Your full name"
                  className="w-full rounded-lg border border-border bg-white px-3 py-3 
             text-gray-900 placeholder:text-gray-500 
             focus:outline-none focus:ring-2 focus:ring-primary/60"
                />
              </Field>
              <Field label="Phone (optional)">
                <input
                  type="tel"
                  placeholder="+1 555 123 4567"
                  className="w-full rounded-lg border border-border bg-white px-3 py-3 
             text-gray-900 placeholder:text-gray-500 
             focus:outline-none focus:ring-2 focus:ring-primary/60"
                />
              </Field>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="Email">
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="w-full rounded-lg border border-border bg-white px-3 py-3 
             text-gray-900 placeholder:text-gray-500 
             focus:outline-none focus:ring-2 focus:ring-primary/60"
                />
              </Field>
              <Field label="Company / Website">
                <input
                  placeholder="Acme Inc. / acme.com"
                  className="w-full rounded-lg border border-border bg-white px-3 py-3 
             text-gray-900 placeholder:text-gray-500 
             focus:outline-none focus:ring-2 focus:ring-primary/60"
                />
              </Field>
            </div>

            <Field label="Service">
              <select
                defaultValue=""
                required
                className="w-full rounded-lg border border-border bg-white px-3 py-3 
             text-gray-900 placeholder:text-gray-500 
             focus:outline-none focus:ring-2 focus:ring-primary/60"
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option>Web Development</option>
                <option>Salesforce / CRM</option>
                <option>Cloud & DevOps</option>
                <option>Mobile App</option>
                <option>Cybersecurity</option>
                <option>Other (custom)</option>
              </select>
            </Field>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="Budget">
                <select
                  defaultValue=""
                  required
                  className="w-full rounded-lg border border-border bg-white px-3 py-3 
             text-gray-900 placeholder:text-gray-500 
             focus:outline-none focus:ring-2 focus:ring-primary/60"
                >
                  <option value="" disabled>
                    Select budget
                  </option>
                  <option>$5k–$15k</option>
                  <option>$15k–$40k</option>
                  <option>$40k–$100k</option>
                  <option>$100k+</option>
                </select>
              </Field>
              <Field label="Timeline">
                <select
                  defaultValue=""
                  required
                  className="w-full rounded-lg border border-border bg-white px-3 py-3 
             text-gray-900 placeholder:text-gray-500 
             focus:outline-none focus:ring-2 focus:ring-primary/60"
                >
                  <option value="" disabled>
                    Select timeline
                  </option>
                  <option>1–3 months</option>
                  <option>3–6 months</option>
                  <option>6–9 months</option>
                  <option>Flexible</option>
                </select>
              </Field>
            </div>

            <Field label="Message" hint="A few lines about goals, users, and deadlines">
              <textarea
                rows={6}
                required
                placeholder="Tell us about your project…"
                className="w-full rounded-lg border border-border bg-white px-3 py-3 
             text-gray-900 placeholder:text-gray-500 
             focus:outline-none focus:ring-2 focus:ring-primary/60"
              />
            </Field>

            <button
              type="submit"
              className="w-full md:w-auto rounded-lg bg-gradient-to-r from-primary to-primary/70 px-6 py-3 text-white font-semibold shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Request Quote
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetQuote;

