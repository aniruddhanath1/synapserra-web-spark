import { useState, FormEvent } from "react";
import { Send, MapPin } from "lucide-react";

const locations = [
  {
    name: "Bangalore, India",
    address: "Prestige Tech Park, Outer Ring Road, Bangalore, Karnataka 560103",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.993073857956!2d77.6974200750737!3d12.93523898737259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13e7e2e2e2e3%3A0x2e2e2e2e2e2e2e2e!2sPrestige%20Tech%20Park!5e0!3m2!1sen!2sin!4v1691580000000!5m2!1sen!2sin",
  },
  {
    name: "San Francisco, USA",
    address: "600 California St, San Francisco, CA 94108",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019019145409!2d-122.4064176846817!3d37.79287297975659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d1e2e2e2%3A0x2e2e2e2e2e2e2e2e!2s600%20California%20St%2C%20San%20Francisco%2C%20CA%2094108!5e0!3m2!1sen!2sus!4v1691580000000",
  },
];

export default function Contact() {
  const [selected, setSelected] = useState(0);
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => setSending(false), 1000); // TODO: wire to backend
  };

  return (
    <section id="contact" className="bg-background">
      <div className="max-w-6xl mx-auto px-6 pt-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground text-center bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          Contact Us
        </h1>
        <p className="text-center text-muted-foreground mt-2 mb-8">
          Find us worldwide and drop a line—let’s get your project moving.
        </p>

        {/* ====== FULL-WIDTH MAP BANNER (visible on all screens) ====== */}
        <div className="mb-4 flex flex-wrap items-center justify-center gap-3">
          {locations.map((loc, i) => (
            <button
              key={loc.name}
              onClick={() => setSelected(i)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm border transition
                ${
                  selected === i
                    ? "bg-primary text-white border-primary"
                    : "bg-card text-foreground border-border hover:bg-primary/10"
                }`}
            >
              <MapPin className="h-4 w-4" />
              {loc.name}
            </button>
          ))}
        </div>

        <div className="rounded-2xl overflow-hidden border border-border/50 shadow-sm mb-10">
          <iframe
            key={selected} // force refresh on change
            src={locations[selected].mapSrc}
            title={`${locations[selected].name} Map`}
            className="w-full aspect-[16/9] md:aspect-[21/9]"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* ====== SPLIT: FORM (left) + MINI MAP (right, hidden on small) ====== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pb-16">
          {/* Form card with soft gradient */}
          <div className="relative rounded-2xl border border-border/50 shadow-sm overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-transparent" />
            <div className="relative p-6 md:p-8 bg-white/70 dark:bg-white">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Project Inquiry
              </h2>
              <p className="text-gray-700 mb-6">
                Share a few details and our team will respond within one
                business day.
              </p>

              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    className="rounded-lg border border-border/60 px-4 py-3 text-gray-900 text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="text-gray-400  rounded-lg border border-border/60 px-4 py-3 text-gray-900  focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Company / Website"
                  className="text-gray-400  w-full rounded-lg border border-border/60 px-4 py-3   focus:outline-none focus:ring-2 focus:ring-primary/40"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <select className="rounded-lg border border-border/60 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40">
                    <option>Budget (USD)</option>
                    <option>$5k – $15k</option>
                    <option>$15k – $50k</option>
                    <option>$50k+</option>
                  </select>
                  <select className="rounded-lg border border-border/60 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40">
                    <option>Timeline</option>
                    <option>ASAP</option>
                    <option>1–3 months</option>
                    <option>3–6 months</option>
                  </select>
                </div>

                <textarea
                  rows={6}
                  placeholder="Tell us about your project…"
                  required
                  className=" text-gray-400 w-full rounded-lg border border-border/60 px-4 py-3 text-gray-900  focus:outline-none focus:ring-2 focus:ring-primary/40"
                />

                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center justify-center gap-2 w-full md:w-auto rounded-lg px-6 py-3 font-semibold text-white bg-primary hover:brightness-110 disabled:opacity-70"
                >
                  <Send className="h-4 w-4" />
                  {sending ? "Sending…" : "Send Message"}
                </button>
              </form>
              <div className="h-[55px]" />
              <section className="mt-10 rounded-2xl border border-border/60 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-950 p-6 shadow-sm">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Why Choose{" "}
                  <span className="text-blue-600 dark:text-blue-400">Us</span>?
                </h3>

                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">✔</span> 8+ years of
                    industry experience
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">✔</span> Trusted by global
                    brands
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">✔</span> Transparent pricing
                    & timelines
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">✔</span> Dedicated
                    post-project support
                  </li>
                </ul>

                <div className="mt-4 text-sm text-muted-foreground">
                  Need help right away? <br />
                  <a
                    href="mailto:info@synapserra.com"
                    className="text-blue-600 hover:underline"
                  >
                    info@synapserra.com
                  </a>{" "}
                  |{" "}
                  <a
                    href="tel:+918792229643"
                    className="text-blue-600 hover:underline"
                  >
                    +91 80045 39892
                  </a>
                </div>
              </section>
            </div>
          </div>

          {/* Mini map – hidden on small screens, shows on md+ */}
          {/* <div className="hidden md:block rounded-2xl overflow-hidden border border-border/50 shadow-sm">
            <div className="px-6 pt-6">
              <h3 className="text-xl font-bold text-foreground">{locations[selected].name}</h3>
              <p className="text-muted-foreground mt-1 mb-4">{locations[selected].address}</p>
            </div>
            <iframe
              key={`mini-${selected}`}
              src={locations[selected].mapSrc}
              title={`${locations[selected].name} Mini Map`}
              className="w-full h-full"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div> */}
          <section className="py-16 bg-gradient-to-br from-background to-secondary/20">
            <div className="max-w-5xl mx-auto px-6">
              {/* FAQ Header */}
              <h2
                className="text-3xl font-bold text-center mb-10 
      bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
              >
                Frequently Asked Questions
              </h2>

              {/* FAQ Items */}
              <div className="space-y-6">
                {[
                  {
                    q: "How soon will I get a response?",
                    a: "We usually reply within 24 hours on business days.",
                  },
                  {
                    q: "Do you work with startups as well as enterprises?",
                    a: "Yes, our solutions scale from early-stage ventures to global enterprises.",
                  },
                  {
                    q: "What industries do you specialize in?",
                    a: "Finance, manufacturing, SaaS, and consumer products are our core industries.",
                  },
                  {
                    q: "Can you provide project cost estimates?",
                    a: "Absolutely — after consultation, we share transparent proposals with timelines and costs.",
                  },
                ].map((faq, i) => (
                  <div
                    key={i}
                    className="border border-border/50 rounded-xl p-5 hover:shadow-md transition bg-card/50"
                  >
                    <h3 className="font-semibold text-foreground">{faq.q}</h3>
                    <p className="text-muted-foreground mt-2">{faq.a}</p>
                  </div>
                ))}
              </div>

              {/* CTA Panel Below FAQ */}
              <div className="mt-16 text-center">
                <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-10 shadow-lg text-white">
                  <h3 className="text-2xl md:text-3xl font-bold">
                    Still have questions?
                  </h3>
                  <p className="mt-2 text-white/90 max-w-2xl mx-auto">
                    Let’s discuss your project and clear all your doubts in a
                    free consultation call.
                  </p>
                  <a href="#get-quote">
                    <button className="mt-6 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
                      Talk to an Expert
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
