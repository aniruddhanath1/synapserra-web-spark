import React from "react";


const services = [
  {
    title: "Web Development",
    desc: "Custom websites, e-commerce, CMS, and more.",
  },
  {
    title: "Digital Marketing",
    desc: "SEO, social media, branding, and online campaigns.",
  },
  {
    title: "App Development",
    desc: "Cross-platform, native, and UI/UX for mobile apps.",
  },
  {
    title: "Salesforce Development",
    desc: "Custom Salesforce solutions, integration, and automation.",
  },
  {
    title: "ServiceNow Development",
    desc: "ITSM, workflow automation, and ServiceNow platform expertise.",
  },
  {
    title: "Dynamics 365 Development",
    desc: "Microsoft Dynamics CRM, ERP, and business process automation.",
  },
  {
    title: "SAP & Other CRMs",
    desc: "SAP, Zoho, HubSpot, and other CRM platform development.",
  },
  {
    title: "Cyber Security",
    desc: "Vulnerability assessment, penetration testing, and security consulting.",
  },
  {
    title: "Identity & Access Management (IAM)",
    desc: "SSO, MFA, RBAC, and enterprise IAM solutions.",
  },
];

const Services = () => (
  <div className="container mx-auto py-12 flex flex-col items-center justify-center">
  <h1 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent text-center">Our Services</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full justify-items-center">
      {services.map((service, idx) => (
        <div key={idx} className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center border border-border hover:shadow-xl transition-all duration-300">
          <h2 className="text-xl font-bold mb-2 text-center text-primary-dark">{service.title}</h2>
          <p className="text-center text-muted-foreground">{service.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Services;
