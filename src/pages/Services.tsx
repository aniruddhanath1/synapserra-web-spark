// import React from "react";

// const services = [
//   {
//     title: "Web Development",
//     desc: "Custom websites, e-commerce, CMS, and more.",
//   },
//   {
//     title: "Digital Marketing",
//     desc: "SEO, social media, branding, and online campaigns.",
//   },
//   {
//     title: "App Development",
//     desc: "Cross-platform, native, and UI/UX for mobile apps.",
//   },
//   {
//     title: "Salesforce Development",
//     desc: "Custom Salesforce solutions, integration, and automation.",
//   },
//   {
//     title: "ServiceNow Development",
//     desc: "ITSM, workflow automation, and ServiceNow platform expertise.",
//   },
//   {
//     title: "Dynamics 365 Development",
//     desc: "Microsoft Dynamics CRM, ERP, and business process automation.",
//   },
//   {
//     title: "SAP & Other CRMs",
//     desc: "SAP, Zoho, HubSpot, and other CRM platform development.",
//   },
//   {
//     title: "Cyber Security",
//     desc: "Vulnerability assessment, penetration testing, and security consulting.",
//   },
//   {
//     title: "Identity & Access Management (IAM)",
//     desc: "SSO, MFA, RBAC, and enterprise IAM solutions.",
//   },
// ];

// const Services = () => (
//   <div className="container mx-auto py-12 flex flex-col items-center justify-center">
//     <h1 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent text-center">
//       Our Services
//     </h1>
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full justify-items-center">
//       {services.map((service, idx) => (
//         <div
//           key={idx}
//           className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 flex flex-col items-center border border-border hover:shadow-xl transition-all duration-300"
//         >
//           <h2 className="text-2xl font-bold mb-2 text-center text-foreground">
//             {service.title}
//           </h2>
//           <p className="text-center text-muted-foreground">{service.desc}</p>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// export default Services;

// import React from "react";
// import {
//   Globe,
//   Megaphone,
//   Smartphone,
//   Landmark,
//   Workflow,
//   Building2,
//   CircuitBoard,
//   ShieldCheck,
//   Fingerprint
// } from "lucide-react";

// type Service = {
//   title: string;
//   desc: string;
//   icon: React.ElementType;
//   href?: string;
// };

// const services: Service[] = [
//   {
//     title: "Web Development",
//     desc: "Custom websites, e-commerce, headless CMS, performance & accessibility.",
//     icon: Globe,
//     href: "#contact",
//   },
//   {
//     title: "Digital Marketing",
//     desc: "SEO, paid ads, social, and brand systems geared for measurable growth.",
//     icon: Megaphone,
//     href: "#contact",
//   },
//   {
//     title: "App Development",
//     desc: "Cross-platform & native apps with modern UI/UX and CI/CD pipelines.",
//     icon: Smartphone,
//     href: "#contact",
//   },
//   {
//     title: "Salesforce Development",
//     desc: "Lightning, Apex, integrations, and automation tailored to your org.",
//     icon: Landmark,
//     href: "#contact",
//   },
//   {
//     title: "ServiceNow Development",
//     desc: "ITSM workflows, portals, and platform apps that reduce MTTR.",
//     icon: Workflow,
//     href: "#contact",
//   },
//   {
//     title: "Dynamics 365 Development",
//     desc: "CRM/ERP customizations, Power Platform & process automation.",
//     icon: Building2,
//     href: "#contact",
//   },
//   {
//     title: "SAP & Other CRMs",
//     desc: "SAP, Zoho, HubSpot — integrations, extensions, and data flows.",
//     icon: CircuitBoard,
//     href: "#contact",
//   },
//   {
//     title: "Cyber Security",
//     desc: "VAPT, threat modeling, remediation playbooks & security reviews.",
//     icon: ShieldCheck,
//     href: "#contact",
//   },
//   {
//     title: "Identity & Access (IAM)",
//     desc: "SSO, MFA, RBAC/ABAC, zero-trust patterns, and governance.",
//     icon: Fingerprint,
//     href: "#contact",
//   },
// ];

// const Services = () => (
//   <section aria-labelledby="services-title" className="container mx-auto py-16">
//     <div className="text-center mb-10">
//       <h2
//         id="services-title"
//         className="font-montserrat text-4xl md:text-5xl font-extrabold tracking-tight
//                    bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
//       >
//         Our Services
//       </h2>
//       <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
//         Product-grade delivery across web, cloud, and CRM — built for outcomes.
//       </p>
//     </div>

//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       {services.map(({ title, desc, icon: Icon, href }, i) => (
//         <a
//           key={title}
//           href={href ?? "#contact"}
//           aria-label={`${title} – learn more`}
//           className="
//             group relative rounded-2xl border border-border/60 bg-card/70
//             hover:bg-card transition-colors
//             shadow-sm hover:shadow-xl
//             focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60
//             "
//           style={{
//             animationDelay: `${i * 70}ms`,
//           }}
//         >
//           {/* subtle gradient border on hover */}
//           <span
//             className="pointer-events-none absolute inset-0 rounded-2xl
//                        opacity-0 group-hover:opacity-100 transition-opacity
//                        bg-gradient-to-br from-primary/10 via-transparent to-primary/10"
//           />

//           <div
//             className="relative p-6 flex flex-col h-full
//                        motion-safe:animate-[fadeIn_0.5s_ease-out_forwards]
//                        transform-gpu group-hover:-translate-y-0.5 transition-transform"
//           >
//             {/* Icon pill */}
//             <div
//               className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl
//                          border border-border/60 bg-background text-primary
//                          group-hover:bg-primary/10 group-hover:text-primary"
//             >
//               <Icon className="h-6 w-6" />
//             </div>

//             <h3 className="text-xl font-semibold text-foreground">{title}</h3>
//             <p className="mt-2 text-sm text-muted-foreground">{desc}</p>

//             {/* CTA chevron */}
//             <div className="mt-5 inline-flex items-center gap-2 text-primary font-medium">
//               <span className="text-sm">Learn more</span>
//               <svg
//                 className="h-4 w-4 translate-x-0 group-hover:translate-x-1 transition-transform"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path d="M12.293 3.293a1 1 0 011.414 0l4.999 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L15.586 11H2a1 1 0 110-2h13.586l-3.293-3.293a1 1 0 010-1.414z" />
//               </svg>
//             </div>
//           </div>
//         </a>
//       ))}
//     </div>
//   </section>
// );

// export default Services;

import React, { useState } from "react";
import {
  Globe,
  Megaphone,
  Smartphone,
  Landmark,
  Workflow,
  Building2,
  CircuitBoard,
  ShieldCheck,
  Fingerprint,
} from "lucide-react";

type Service = {
  title: string;
  desc: string;
  more: string;
  icon: React.ElementType;
  href?: string;
};

const services: Service[] = [
  {
    title: "Web Development",
    desc: "Custom websites, e-commerce, CMS, and more.",
    more: "We deliver responsive, SEO-optimized sites with best practices in performance, accessibility, and security.",
    icon: Globe,
  },
  {
    title: "Digital Marketing",
    desc: "SEO, social media, branding, and campaigns.",
    more: "Our team crafts data-driven marketing strategies combining content, PPC, and analytics to fuel ROI.",
    icon: Megaphone,
  },
  {
    title: "App Development",
    desc: "Cross-platform and native apps with great UX.",
    more: "From ideation to publishing, we design and build apps with modern frameworks and CI/CD pipelines.",
    icon: Smartphone,
  },
  {
    title: "Salesforce Development",
    desc: "Custom Salesforce solutions and automation.",
    more: "Apex, Lightning, and integrations tailored for CRM growth and optimized workflows.",
    icon: Landmark,
  },
  {
    title: "ServiceNow Development",
    desc: "ITSM and workflow automation expertise.",
    more: "End-to-end ServiceNow consulting, from service portals to automated incident resolution.",
    icon: Workflow,
  },
  {
    title: "Dynamics 365 Development",
    desc: "Microsoft Dynamics CRM & ERP solutions.",
    more: "Boost business productivity with custom entities, Power Platform, and data automation.",
    icon: Building2,
  },
  {
    title: "SAP & Other CRMs",
    desc: "SAP, Zoho, HubSpot, and more.",
    more: "Integration and customization services to make your CRM work seamlessly with your stack.",
    icon: CircuitBoard,
  },
  {
    title: "Cyber Security",
    desc: "VAPT and security consulting.",
    more: "We run red-team tests, harden systems, and ensure compliance with global security standards.",
    icon: ShieldCheck,
  },
  {
    title: "Identity & Access (IAM)",
    desc: "SSO, MFA, RBAC, Zero Trust.",
    more: "Enterprise-grade IAM solutions to secure identities, manage roles, and enforce strong authentication.",
    icon: Fingerprint,
  },
];

const Services = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="container mx-auto py-16">
      <div className="text-center mb-10">
        <h2
          className="text-5xl md:text-6xl font-extrabold mb-8 
  bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent text-center"
        >
          Our Services
        </h2>

        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          Product-grade delivery across web, cloud, and CRM — built for
          outcomes.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  ">
        {services.map(({ title, desc, more, icon: Icon }, i) => (
          <div
  key={title}
  className="
    group relative rounded-2xl border border-border/60 
    bg-gradient-to-br from-blue-50 via-white to-blue-100 
    dark:from-blue-900/30 dark:via-gray-900 dark:to-blue-800/20
    hover:from-blue-100 hover:to-blue-200 dark:hover:from-blue-800/40 dark:hover:to-blue-700/30
    transition-all
    shadow-sm hover:shadow-xl p-6 flex flex-col
  "
>

            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border/60 bg-background text-primary">
              <Icon className="h-6 w-6" />
            </div>

            <h3 className="text-xl font-semibold text-foreground">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>

            {expanded === i && (
              <p className="mt-3 text-sm text-foreground animate-fadeIn">
                {more}
              </p>
            )}

            <button
              onClick={() => setExpanded(expanded === i ? null : i)}
              className="mt-4 text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
            >
              {expanded === i ? "Read Less ▲" : "Read More ▼"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
