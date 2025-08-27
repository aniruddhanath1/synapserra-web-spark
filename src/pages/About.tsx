// import { Users, Award, Lightbulb, HeartHandshake, Rocket } from "lucide-react";

// const team = [
//   {
//     name: "Priya Verma",
//     role: "CEO & Founder",
//     img: "https://randomuser.me/api/portraits/women/44.jpg",
//   },
//   {
//     name: "James Müller",
//     role: "CTO",
//     img: "https://randomuser.me/api/portraits/men/32.jpg",
//   },
//   {
//     name: "Sofia Rossi",
//     role: "Lead Designer",
//     img: "https://randomuser.me/api/portraits/women/65.jpg",
//   },
//   {
//     name: "Lucas Dubois",
//     role: "Head of Development",
//     img: "https://randomuser.me/api/portraits/men/76.jpg",
//   },
// ];

// const About = () => (
//   <div className="relative min-h-screen bg-gradient-to-br from-background to-secondary/30">
//     {/* Hero Section */}
//     <section className="max-w-5xl mx-auto px-6 py-16 text-center">
//       <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">About Us</h1>
//       <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
//         We are a passionate team of creators, strategists, and technologists dedicated to building digital experiences that drive innovation and growth. Our mission is to empower businesses with modern solutions and creative excellence.
//       </p>
//       <div className="flex flex-wrap justify-center gap-6 mb-12">
//         <div className="flex flex-col items-center p-6 bg-white/80 rounded-xl shadow border border-border w-56">
//           <Lightbulb className="w-8 h-8 text-primary mb-2" />
//           <span className="font-semibold text-lg mb-1">Innovation</span>
//           <span className="text-sm text-muted-foreground">We bring fresh ideas and creative solutions to every project.</span>
//         </div>
//         <div className="flex flex-col items-center p-6 bg-white/80 rounded-xl shadow border border-border w-56">
//           <HeartHandshake className="w-8 h-8 text-primary mb-2" />
//           <span className="font-semibold text-lg mb-1">Integrity</span>
//           <span className="text-sm text-muted-foreground">Honesty and transparency are at the core of our values.</span>
//         </div>
//         <div className="flex flex-col items-center p-6 bg-white/80 rounded-xl shadow border border-border w-56">
//           <Award className="w-8 h-8 text-primary mb-2" />
//           <span className="font-semibold text-lg mb-1">Excellence</span>
//           <span className="text-sm text-muted-foreground">We strive for the highest standards in everything we do.</span>
//         </div>
//         <div className="flex flex-col items-center p-6 bg-white/80 rounded-xl shadow border border-border w-56">
//           <Users className="w-8 h-8 text-primary mb-2" />
//           <span className="font-semibold text-lg mb-1">Collaboration</span>
//           <span className="text-sm text-muted-foreground">We work closely with our clients to achieve shared success.</span>
//         </div>
//         <div className="flex flex-col items-center p-6 bg-white/80 rounded-xl shadow border border-border w-56">
//           <Rocket className="w-8 h-8 text-primary mb-2" />
//           <span className="font-semibold text-lg mb-1">Growth</span>
//           <span className="text-sm text-muted-foreground">Empowering businesses to reach new heights.</span>
//         </div>
//       </div>
//     </section>

//     {/* Team Section */}
//     <section className="max-w-5xl mx-auto px-6 py-12">
//       <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
//         {team.map((member, idx) => (
//           <div key={idx} className="flex flex-col items-center bg-white/90 rounded-xl shadow-lg p-6 border border-border hover:shadow-xl transition-all duration-300">
//             <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-primary" />
//             <div className="font-semibold text-lg mb-1 text-foreground">{member.name}</div>
//             <div className="text-sm text-muted-foreground mb-2">{member.role}</div>
//           </div>
//         ))}
//       </div>
//     </section>

//     {/* Mission & Values Section */}
//     <section className="max-w-5xl mx-auto px-6 py-12">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//         <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 shadow flex flex-col items-center">
//           <h2 className="text-2xl font-bold mb-4 text-center">Our Mission</h2>
//           <p className="text-center text-lg text-muted-foreground">
//             To shape the future of digital interactions through excellence, creativity, and user-centric design.
//           </p>
//         </div>
//         <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-xl p-8 shadow flex flex-col items-center">
//           <h2 className="text-2xl font-bold mb-4 text-center">Our Values</h2>
//           <ul className="list-disc pl-5 text-lg text-center">
//             <li>Innovation</li>
//             <li>Integrity</li>
//             <li>Collaboration</li>
//             <li>Excellence</li>
//             <li>Growth</li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   </div>
// );

// export default About;
import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";

import {
  Users,
  Award,
  Lightbulb,
  HeartHandshake,
  Rocket,
  TrendingUp,
  Database,
  ShieldCheck,
  Cloud,
  Cpu,
  GaugeCircle,
  Sparkles,
  Wrench,
  Lock,
  BarChart3,
} from "lucide-react";

const team = [
  {
    name: "Priya Verma",
    role: "CEO & Founder",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    linkedin: "#",
    email: "priya@synapserra.com",
  },
  {
    name: "James Müller",
    role: "CTO",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    linkedin: "#",
    email: "james@synapserra.com",
  },
  {
    name: "Sofia Rossi",
    role: "Lead Designer",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    linkedin: "#",
    email: "sofia@synapserra.com",
  },
  {
    name: "Lucas Dubois",
    role: "Head of Development",
    img: "https://randomuser.me/api/portraits/men/76.jpg",
    linkedin: "#",
    email: "lucas@synapserra.com",
  },
];

const ValueCard = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => (
  <div className="group bg-white dark:bg-white rounded-xl border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 p-6 w-full">
    <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
      {/* icon color is brand; inside white card we keep it vivid */}
      <div className="text-primary">{icon}</div>
    </div>
    <h3 className="text-lg font-semibold text-center text-gray-900">{title}</h3>
    <p className="mt-2 text-center text-sm leading-relaxed text-gray-700">
      {desc}
    </p>
  </div>
);

// const PersonCard = ({
//   name,
//   role,
//   img,
// }: {
//   name: string;
//   role: string;
//   img: string;
// }) => (
//   <div className="bg-white dark:bg-white rounded-xl border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 p-6 flex flex-col items-center">
//     <img
//       src={img}
//       alt={name}
//       className="w-24 h-24 rounded-full object-cover border-4 border-primary/70 shadow-sm mb-4"
//     />
//     <div className="text-lg font-semibold text-gray-900">{name}</div>
//     <div className="text-sm text-gray-700">{role}</div>
//   </div>
// );

const PersonCard = ({
  name,
  role,
  img,
  linkedin,
  email,
}: {
  name: string;
  role: string;
  img: string;
  linkedin?: string;
  email?: string;
}) => (
  <div className="group relative bg-white dark:bg-white rounded-2xl border border-border/50 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    {/* role badge */}
    <div className="absolute -top-3 left-6 rounded-full bg-gray-100 text-gray-800 text-[11px] font-semibold tracking-wide px-3 py-1 ring-1 ring-black/5">
      {role}
    </div>

    {/* avatar with techy ring + accent curve */}
    <div className="relative mx-auto mt-4 h-28 w-28">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/25 to-primary/5 blur-[2px]" />
      <img
        src={img}
        alt={name}
        className="relative z-10 h-28 w-28 rounded-full object-cover ring-2 ring-primary/30 shadow-md"
      />
      {/* small accent arc */}
      <svg
        className="absolute -bottom-1 -left-1 h-10 w-10"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          d="M2 38 C2 18 18 2 38 2"
          stroke="currentColor"
          className="text-primary/60"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>

    {/* name */}
    <div className="mt-4 text-center">
      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
        {name}
      </h3>
      <p className="text-sm text-gray-700/80 mt-0.5">{role}</p>
    </div>

    {/* actions */}
    <div className="mt-5 flex items-center justify-center gap-3">
      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-border/60 hover:ring-primary/40 hover:bg-primary/10 transition"
          aria-label={`${name} on LinkedIn`}
        >
          <Linkedin className="h-4 w-4 text-gray-900" />
        </a>
      )}
      {email && (
        <a
          href={`mailto:${email}`}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-border/60 hover:ring-primary/40 hover:bg-primary/10 transition"
          aria-label={`Email ${name}`}
        >
          <Mail className="h-4 w-4 text-gray-900" />
        </a>
      )}
    </div>
  </div>
);

const About = () => {
  return (
    <div className="relative bg-gradient-to-b from-background to-secondary/30">
      {/* Intro / split hero */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Copy block */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              About Us
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            We provide innovative tech solutions to help businesses succeed in
            the digital era. From product strategy to scalable engineering, we
            partner end-to-end to ship outcomes—securely, reliably, and fast.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" data-nav="true">
              <Button size="lg" className="min-w-[160px]">
                Read More
              </Button>
            </a>
            <a href="#services" data-nav="true">
              <Button size="lg" variant="outline" className="min-w-[160px]">
                Our Services
              </Button>
            </a>
          </div>
        </div>

        {/* Illustration (simple brand-friendly blob) */}
        <div className="relative">
          <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
          <div className="absolute -bottom-8 -right-8 h-28 w-28 rounded-full bg-accent/20 blur-2xl" />
          <div className="relative rounded-2xl border border-border/50 bg-white dark:bg-white p-6 shadow-sm">
            {/* replace with your own SVG/asset when ready */}
            <svg viewBox="0 0 400 220" className="w-full h-auto">
              <rect
                x="0"
                y="0"
                width="400"
                height="220"
                rx="16"
                fill="#F8FAFF"
              />
              <g transform="translate(24,24)">
                <rect width="150" height="14" rx="7" fill="#CBD5FF" />
                <rect y="28" width="260" height="10" rx="5" fill="#E2E8FF" />
                <rect y="46" width="220" height="10" rx="5" fill="#E2E8FF" />
              </g>
              <g transform="translate(24,90)">
                <rect width="110" height="80" rx="10" fill="#EEF2FF" />
                <rect x="130" width="110" height="80" rx="10" fill="#EEF2FF" />
                <rect x="260" width="110" height="80" rx="10" fill="#EEF2FF" />
                <circle cx="55" cy="40" r="18" fill="#6B8BFF" />
                <circle cx="185" cy="40" r="18" fill="#6B8BFF" />
                <circle cx="315" cy="40" r="18" fill="#6B8BFF" />
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
          What Makes Us Different?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <ValueCard
            icon={<Lightbulb className="w-7 h-7" />}
            title="Innovation"
            desc="Fresh ideas and smart delivery across every engagement."
          />
          <ValueCard
            icon={<HeartHandshake className="w-7 h-7" />}
            title="Integrity"
            desc="Transparent partnerships and accountable execution."
          />
          <ValueCard
            icon={<Award className="w-7 h-7" />}
            title="Excellence"
            desc="Engineering quality, design craft, and measurable impact."
          />
          <ValueCard
            icon={<Users className="w-7 h-7" />}
            title="Collaboration"
            desc="One team with our clients—shared goals, shared wins."
          />
          <ValueCard
            icon={<Rocket className="w-7 h-7" />}
            title="Growth"
            desc="Scale securely with proven architectures and playbooks."
          />
          <ValueCard
            icon={<Database className="w-7 h-7" />}
            title="Reliability"
            desc="Trusted delivery with robust systems, processes, and support."
          />
        </div>
      </section>

      {/* Team */}
      {/* <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center text-foreground mb-10">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((m, i) => (
            <PersonCard key={i} {...m} />
          ))}
        </div>
      </section> */}
      {/* Team */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-3 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
          Meet the Team
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          A cross-functional squad of builders, designers, and problem-solvers.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((m, i) => (
            <PersonCard key={i} {...m} />
          ))}
        </div>
      </section>

      {/* Mission & Values (compact) */}
      {/* <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-border/50 bg-white dark:bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 text-center mb-3">
              Our Mission
            </h3>
            <p className="text-center text-gray-700 text-lg">
              Build scalable, secure, and human-centered products that
              accelerate our clients’ growth.
            </p>
          </div>
          <div className="rounded-xl border border-border/50 bg-white dark:bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 text-center mb-3">
              Our Principles
            </h3>
            <ul className="text-gray-700 text-lg space-y-2 text-center">
              <li className="inline-block px-3 py-1 rounded-full bg-gray-100 mr-2 mb-2">
                Design for clarity
              </li>
              <li className="inline-block px-3 py-1 rounded-full bg-gray-100 mr-2 mb-2">
                Ship with quality
              </li>
              <li className="inline-block px-3 py-1 rounded-full bg-gray-100 mr-2 mb-2">
                Security by default
              </li>
              <li className="inline-block px-3 py-1 rounded-full bg-gray-100 mr-2 mb-2">
                Measure what matters
              </li>
            </ul>
          </div>
        </div>
      </section> */}

      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mission */}
          <div className="rounded-2xl border border-border/50 bg-white dark:bg-white p-8 shadow-sm">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Cpu className="h-5 w-5 text-primary" />
              <h3 className="text-2xl font-semibold text-gray-900 text-center">
                Our Mission
              </h3>
            </div>

            <p className="text-center text-gray-700 text-lg">
              Build scalable, secure, and human-centered products that
              accelerate our clients’ growth.
            </p>

            {/* tech bullets */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl border border-border/60 p-4 text-center">
                <Cloud className="mx-auto mb-2 h-5 w-5 text-primary" />
                <div className="text-sm font-medium text-gray-900">
                  Cloud-first
                </div>
                <div className="text-xs text-gray-700">AWS | Azure | GCP</div>
              </div>
              <div className="rounded-xl border border-border/60 p-4 text-center">
                <ShieldCheck className="mx-auto mb-2 h-5 w-5 text-primary" />
                <div className="text-sm font-medium text-gray-900">
                  Secure by design
                </div>
                <div className="text-xs text-gray-700">Zero-trust patterns</div>
              </div>
              <div className="rounded-xl border border-border/60 p-4 text-center">
                <GaugeCircle className="mx-auto mb-2 h-5 w-5 text-primary" />
                <div className="text-sm font-medium text-gray-900">
                  Built to scale
                </div>
                <div className="text-xs text-gray-700">SLO-driven</div>
              </div>
            </div>
          </div>

          {/* Principles */}
          <div className="rounded-2xl border border-border/50 bg-white dark:bg-white p-8 shadow-sm">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Sparkles className="h-5 w-5 text-primary" />
              <h3 className="text-2xl font-semibold text-gray-900 text-center">
                Engineering Principles
              </h3>
            </div>

            <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-2 text-sm text-gray-900">
                <Wrench className="h-4 w-4 text-primary" />
                Design for clarity
              </li>
              <li className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-2 text-sm text-gray-900">
                <BarChart3 className="h-4 w-4 text-primary" />
                Measure what matters
              </li>
              <li className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-2 text-sm text-gray-900">
                <Lock className="h-4 w-4 text-primary" />
                Security by default
              </li>
              <li className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-2 text-sm text-gray-900">
                <Users className="h-4 w-4 text-primary" />
                One team with clients
              </li>
            </ul>

            {/* gradient divider */}
            <div className="mt-6 h-[2px] w-full bg-gradient-to-r from-primary/40 via-primary/20 to-transparent rounded-full" />
            {/* trust badges */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="rounded-lg border border-border/60 p-3">
                <div className="text-xs font-semibold text-gray-900">
                  ISO-27001 Ready
                </div>
                <div className="text-[11px] text-gray-700">
                  Policies & controls aligned
                </div>
              </div>
              <div className="rounded-lg border border-border/60 p-3">
                <div className="text-xs font-semibold text-gray-900">
                  SOC 2 Mindset
                </div>
                <div className="text-[11px] text-gray-700">
                  Security • Availability
                </div>
              </div>
              <div className="rounded-lg border border-border/60 p-3">
                <div className="text-xs font-semibold text-gray-900">
                  99.9% Uptime Target
                </div>
                <div className="text-[11px] text-gray-700">
                  SLA & SLO monitored
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
