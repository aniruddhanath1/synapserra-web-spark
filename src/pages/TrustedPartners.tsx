import React from "react";

const LOGOS = [
  { name: "Spotify",    src: "/synapserra-web-spark/partners/spotify.png",   href: "https://spotify.com" },
  { name: "IBM",        src: "/synapserra-web-spark/partners/ibm.png",       href: "https://ibm.com" },
  { name: "Uber",       src: "/synapserra-web-spark/partners/uber1.webp",      href: "https://uber.com" },
  { name: "Oracle",     src: "/synapserra-web-spark/partners/oraclelogo1.png",    href: "https://oracle.com" },
  { name: "Airbnb",     src: "/synapserra-web-spark/partners/airbnblogo1.png",    href: "https://airbnb.com" },
];



const TrustedPartners: React.FC = () => {
  return (
    <section
      id="trusted"
      className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 dark:to-muted/10"
      aria-labelledby="trusted-heading"
    >
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <h2
          id="trusted-heading"
          className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent text-center"
        >
          Trusted by
        </h2>

        {/* Subtle divider */}
        <div className="mx-auto mt-6 h-px w-24 bg-border/60" />

        {/* Marquee wrapper */}
        <div
          className="group relative mt-10 overflow-hidden"
          aria-label="Logos of clients who trust Synapserra"
        >
          <div className="marquee track flex items-center gap-12 md:gap-16">
            {/* First copy */}
            {LOGOS.map((logo, i) => (
              <Logo key={`a-${i}`} {...logo} />
            ))}
            {/* Second copy (for seamless loop) */}
            {LOGOS.map((logo, i) => (
              <Logo key={`b-${i}`} {...logo} />
            ))}
          </div>
        </div>

        {/* optional: a subtle note/CTA */}
        {/* <p className="mt-8 text-center text-sm text-muted-foreground">
          …and many more across finance, retail, and SaaS.
        </p> */}
      </div>

      {/* Local styles for the marquee animation */}
      <style>{`
        /* Continuous scroll */
        .marquee {
          width: max-content;
          will-change: transform;
        }
        .track {
          animation: scroll-x 28s linear infinite;
        }
        /* Pause on hover (desktop) */
        .group:hover .track { animation-play-state: paused; }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .track { animation: none; }
        }
        /* Keyframes: translate by half since we duplicated the list */
        @keyframes scroll-x {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

type LogoProps = {
  name: string;
  src: string;
  href?: string;
};

const Logo: React.FC<LogoProps> = ({ name, src, href }) => {
  const Img = (
    <img
      src={src}
      alt={name}
      loading="lazy"
      className="
        h-10 md:h-12 xl:h-14 w-auto
        opacity-80 grayscale contrast-125
        transition-all duration-300
        hover:opacity-100 hover:grayscale-0
        dark:opacity-90
      "
      onError={(e) => {
        // Fallback: show text badge if image fails to load
        const el = e.currentTarget;
        const parent = el.parentElement;
        if (!parent) return;
        const span = document.createElement("span");
        span.textContent = name;
        span.className =
          "px-4 py-2 rounded-md bg-card text-foreground border border-border text-sm font-medium";
        parent.replaceChild(span, el);
      }}
    />
  );

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-md"
      aria-label={name}
      title={name}
    >
      {Img}
    </a>
  ) : (
    <div aria-label={name} title={name}>
      {Img}
    </div>
  );
};

export default TrustedPartners;
