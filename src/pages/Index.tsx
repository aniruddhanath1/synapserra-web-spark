import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Code,
  Database,
  Globe,
  Server,
  Star,
  Users,
  Award,
  TrendingUp,
} from "lucide-react";
import Services from "./Services";
import About from "./About";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import GetQuote from "./GetQuote";
import { useState, useEffect } from "react";
import TrustedPartners from "./TrustedPartners";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
   const year = new Date().getFullYear();
  const Counter = ({
    end,
    duration = 2000,
  }: {
    end: number;
    duration?: number;
  }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const stepTime = Math.abs(Math.floor(duration / end));
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) clearInterval(timer);
      }, stepTime);
      return () => clearInterval(timer);
    }, [end, duration]);

    return <>{count}</>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light to-background">
      {/* Header */}
      {/* <header className="relative z-10 backdrop-blur-md bg-background/80 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="/synapserra-web-spark/lovable-uploads/93703c00-d56c-4f8a-a80e-651da5c94058.png" 
                alt="Synapserra Logo" 
                className="h-32 w-auto"
              />
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Testimonials
              </a>
              <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <a href="#get-quote">
                <Button size="sm" className="shadow-soft">
                  Get Quote
                </Button>
              </a>
              <button
                type="button"
                className="ml-4 px-3 py-2 rounded bg-muted text-foreground hover:bg-primary/10 border border-border transition-colors"
                onClick={() => {
                  const isDark = document.documentElement.classList.contains('dark');
                  (window as any).setDarkMode?.(!isDark);
                }}
                aria-label="Toggle dark mode"
              >
                🌙 / ☀️
              </button>
            </nav>
          </div>
        </div>
      </header> */}

      <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/synapserra-web-spark/lovable-uploads/93703c00-d56c-4f8a-a80e-651da5c94058.png"
              alt="Synapserra Logo"
              className="h-20 w-auto  object-contain "
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center gap-8">
            {["Services", "About", "Testimonials", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}

            <a href="#get-quote">
              <Button size="sm" className="shadow-soft text-base">
                Get Quote
              </Button>
            </a>

            {/* Dark Mode Toggle */}
            <button
              type="button"
              className="ml-4 px-3 py-2 rounded bg-muted text-foreground hover:bg-primary/10 border border-border transition-colors"
              onClick={() => {
                const isDark =
                  document.documentElement.classList.contains("dark");
                (window as any).setDarkMode?.(!isDark);
              }}
              aria-label="Toggle dark mode"
            >
              🌙 / ☀️
            </button>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 rounded hover:bg-muted transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span
              className={`block h-0.5 w-6 bg-foreground transition-all ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-foreground transition-all ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-foreground transition-all ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/50 shadow-lg animate-slide-down">
            <nav className="flex flex-col p-4 gap-4">
              {["Services", "About", "Testimonials", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a href="#get-quote" onClick={() => setIsMenuOpen(false)}>
                <Button size="sm" className="shadow-soft w-full">
                  Get Quote
                </Button>
              </a>
            </nav>
          </div>
        )}
      </header>
      <div className="h-[80px]" />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute top-40 -left-32 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-primary/20 rounded-full blur-2xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 tracking-tight animate-fade-in-up">
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Synapserra
              </span>
            </h1>

            <p
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Empowering businesses with cutting-edge IT solutions. From web
              development to Salesforce CRM, we deliver innovation that drives
              growth.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                size="lg"
                className="min-w-[180px] h-14 text-lg font-medium shadow-large hover:shadow-glow transition-all duration-300"
              >
                Start Your Project
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="min-w-[180px] h-14 text-lg font-medium border-2 hover:bg-primary/5 transition-all duration-300"
              >
                Explore Services
              </Button>
            </div>

            {/* Technology Icons */}
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="flex flex-col items-center p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/30 shadow-lg hover:shadow-2xl transition-all duration-300">
                <Globe className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-medium text-foreground">
                  Web Dev
                </span>
              </div>
              <div className="flex flex-col items-center p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/30 shadow-lg hover:shadow-2xl transition-all duration-300">
                <Database className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-medium text-foreground">
                  Salesforce
                </span>
              </div>
              <div className="flex flex-col items-center p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/30 shadow-lg hover:shadow-2xl transition-all duration-300">
                <Server className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-medium text-foreground">
                  Cloud
                </span>
              </div>
              <div className="flex flex-col items-center p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/30 shadow-lg hover:shadow-2xl transition-all duration-300">
                <Code className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-medium text-foreground">
                  Custom
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      {/* <section className="py-20 bg-background/80 backdrop-blur-md border-y border-border/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in-up">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">150+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{animationDelay: "0.1s"}}>
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">8+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{animationDelay: "0.2s"}}>
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">300+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{animationDelay: "0.3s"}}>
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="py-20 bg-background/80 backdrop-blur-md border-y border-border/30">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent text-center">
            Our Achievements
          </h2>
          <p className="text-muted-foreground mt-2">
            Trusted by clients worldwide with a proven track record of
            excellence.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Happy Clients */}
            <div className="text-center animate-fade-in-up">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">
                <Counter end={150} />+
              </div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>

            {/* Years Experience */}
            <div
              className="text-center animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">
                <Counter end={8} />+
              </div>
              <div className="text-sm text-muted-foreground">
                Years Experience
              </div>
            </div>

            {/* Projects Delivered */}
            <div
              className="text-center animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">
                <Counter end={300} />+
              </div>
              <div className="text-sm text-muted-foreground">
                Projects Delivered
              </div>
            </div>

            {/* Success Rate */}
            <div
              className="text-center animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">
                <Counter end={98} />%
              </div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="scroll-mt-[38px] py-6 bg-gradient-to-br from-background to-secondary/30"
      >
        <Services />
      </section>

      {/* About Section */}
      <section
        id="about"
        className="scroll-mt-[38px] py-6 bg-gradient-to-br from-secondary/30 to-background"
      >
        <About />
      </section>
      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="scroll-mt-[38px] py-6 bg-gradient-to-br from-secondary/30 to-background"
      >
        <Testimonials />
      </section>
      {/* Contact Section */}
      <section
        id="contact"
        className="scroll-mt-[38px] py-6 bg-gradient-to-br from-background to-secondary/30"
      >
        <Contact />
      </section>
      {/* Footer */}
      {/* Get Quote Section */}
      <section
        id="get-quote"
        className="scroll-mt-[38px] py-6 bg-gradient-to-br from-secondary/30 to-background"
      >
        <GetQuote />
      </section>

       <section
        id="trusted-partners"
        className="scroll-mt-[38px] py-6 bg-gradient-to-br from-secondary/30 to-background"
      >
        <TrustedPartners />
      </section>


      {/* <footer className="border-t border-border/50 bg-gradient-to-br from-background to-secondary/20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img
                src="/synapserra-web-spark/lovable-uploads/93703c00-d56c-4f8a-a80e-651da5c94058.png"
                alt="Synapserra Logo"
                className="h-28 w-auto"
              />
              <span className="text-lg font-semibold text-foreground">
                Synapserra Inc.
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Synapserra Inc. All rights reserved.
            </div>
            <div className="flex gap-8">
              <a
                href="#privacy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer> */}

       <footer className="relative border-t border-border/50">
      {/* Gradient panel */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 dark:from-slate-950 dark:via-slate-900 dark:to-cyan-950 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="/synapserra-web-spark/lovable-uploads/93703c00-d56c-4f8a-a80e-651da5c94058.png"
                  alt="Synapserra"
                  className="h-20 w-auto rounded-lg ring-1 ring-white/10 bg-white/5 p-1"
                />
                <span className="text-xl font-semibold tracking-tight">
                  Synapserra
                </span>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                Scalable IT services across web, cloud, and CRM—engineered for
                growth and reliability.
              </p>

              {/* Socials */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  aria-label="GitHub"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition"
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <nav aria-labelledby="footer-quicklinks">
              <h3 id="footer-quicklinks" className="text-lg font-semibold mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3 text-white/80">
                <li>
                  <a href="#top" className="hover:text-white transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-white transition">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#get-quote" className="hover:text-white transition">
                    Get a Quote
                  </a>
                </li>
              </ul>
            </nav>

            {/* Services */}
            <nav aria-labelledby="footer-services">
              <h3 id="footer-services" className="text-lg font-semibold mb-4">
                Services
              </h3>
              <ul className="space-y-3 text-white/80">
                <li>
                  <a href="#services" className="hover:text-white transition">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition">
                    Salesforce & CRM
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition">
                    Cloud & DevOps
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition">
                    Cyber Security
                  </a>
                </li>
              </ul>
            </nav>

            {/* Contact */}
            <address
              aria-labelledby="footer-contact"
              className="not-italic space-y-4"
            >
              <h3 id="footer-contact" className="text-lg font-semibold mb-2">
                Contact Us
              </h3>
              <p className="flex items-start gap-3 text-white/80">
                <MapPin className="h-5 w-5 mt-0.5 shrink-0" />
                Prestige Tech Park Rd, Outer Ring Road, Bengaluru, 560103
              </p>
              <a
                href="mailto:info@synapserra.com"
                className="flex items-center gap-3 text-white/80 hover:text-white transition"
              >
                <Mail className="h-5 w-5" />
                info@synapserra.com
              </a>
              <a
                href="tel:+918004539892"
                className="flex items-center gap-3 text-white/80 hover:text-white transition"
              >
                <Phone className="h-5 w-5" />
                +91 8004539892
              </a>
            </address>
          </div>
        </div>
      </div>

      {/* Disclaimer + Copyright */}
      <div className="bg-slate-950 text-white/70">
        <div className="max-w-7xl mx-auto px-6 py-4 text-xs leading-relaxed">
          <p>
            Disclaimer: The information on this website is provided for general
            guidance. Projects, client names, and metrics may include composites
            or anonymized details. For verified case studies and proposals,{" "}
            <a href="#contact" className="text-primary-300 hover:underline">
              contact our team
            </a>
            .
          </p>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4 text-xs sm:text-sm flex flex-col sm:flex-row gap-3 sm:gap-6 items-center justify-between">
            <span>© {year} Synapserra Inc. All rights reserved.</span>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-white transition">
                Terms of Service
              </a>
              <a href="#cookies" className="hover:text-white transition">
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back-to-top (optional) */}
      <a
        href="#top"
        className="hidden md:flex items-center justify-center rounded-full h-10 w-10 bg-primary text-white shadow-lg ring-2 ring-white/20 hover:translate-y-[-2px] transition fixed bottom-6 right-6"
        aria-label="Back to top"
        title="Back to top"
      >
        ↑
      </a>
    </footer>
    </div>
  );
};

export default Index;
