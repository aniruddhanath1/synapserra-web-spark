import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Code, Database, Globe, Server, Star, Users, Award, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light to-background">
      {/* Header */}
      <header className="relative z-10 backdrop-blur-md bg-background/80 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/93703c00-d56c-4f8a-a80e-651da5c94058.png" 
                alt="Synapserra Logo" 
                className="h-12 w-auto"
              />
              <span className="text-2xl font-semibold text-foreground">Synapserra Inc.</span>
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
              <Button size="sm" className="shadow-soft">
                Get Quote
              </Button>
            </nav>
          </div>
        </div>
      </header>

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
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: "0.2s"}}>
              Empowering businesses with cutting-edge IT solutions. From web development to Salesforce CRM, we deliver innovation that drives growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up" style={{animationDelay: "0.4s"}}>
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: "0.6s"}}>
              <div className="flex flex-col items-center p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/30 hover:shadow-soft transition-all duration-300">
                <Globe className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-medium text-foreground">Web Dev</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/30 hover:shadow-soft transition-all duration-300">
                <Database className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-medium text-foreground">Salesforce</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/30 hover:shadow-soft transition-all duration-300">
                <Server className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-medium text-foreground">Cloud</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/30 hover:shadow-soft transition-all duration-300">
                <Code className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-medium text-foreground">Custom</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-background/80 backdrop-blur-md border-y border-border/30">
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
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-br from-background to-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-card to-card/80 border border-border/50 hover:shadow-large transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                  <Globe className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  Web Development
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Custom web applications built with Java, .NET, PHP, and Python. 
                Scalable, secure, and modern solutions that grow with your business.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">Java</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">.NET</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">PHP</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">Python</span>
              </div>
            </div>
            
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-card to-card/80 border border-border/50 hover:shadow-large transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                  <Database className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  Salesforce CRM Development
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Expert Salesforce customization and integration services 
                to optimize your customer relationship management and boost sales productivity.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">Sales Cloud</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">Service Cloud</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">Marketing Cloud</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section id="testimonials" className="py-24 bg-gradient-to-br from-secondary/30 to-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Trusted by businesses worldwide
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <div className="p-8 md:p-12 bg-gradient-to-br from-card to-card/80 border border-border/50 rounded-2xl text-center shadow-medium">
                    <div className="flex justify-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-lg md:text-xl text-muted-foreground mb-8 italic leading-relaxed">
                      "Synapserra transformed our business with their exceptional Salesforce implementation. 
                      Our CRM efficiency increased by 200% within the first quarter."
                    </p>
                    <div className="font-semibold text-foreground text-lg">Sarah Johnson</div>
                    <div className="text-sm text-muted-foreground">CEO, TechFlow Solutions</div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-8 md:p-12 bg-gradient-to-br from-card to-card/80 border border-border/50 rounded-2xl text-center shadow-medium">
                    <div className="flex justify-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-lg md:text-xl text-muted-foreground mb-8 italic leading-relaxed">
                      "Their Java web development team delivered our e-commerce platform ahead of schedule. 
                      Outstanding technical expertise and communication throughout the project."
                    </p>
                    <div className="font-semibold text-foreground text-lg">Michael Chen</div>
                    <div className="text-sm text-muted-foreground">CTO, RetailMax</div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-8 md:p-12 bg-gradient-to-br from-card to-card/80 border border-border/50 rounded-2xl text-center shadow-medium">
                    <div className="flex justify-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-lg md:text-xl text-muted-foreground mb-8 italic leading-relaxed">
                      "Professional, reliable, and innovative. Synapserra's .NET solutions 
                      streamlined our operations and reduced costs by 40%."
                    </p>
                    <div className="font-semibold text-foreground text-lg">Lisa Rodriguez</div>
                    <div className="text-sm text-muted-foreground">Director of IT, FinanceFirst</div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="shadow-medium" />
              <CarouselNext className="shadow-medium" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-gradient-to-br from-background to-secondary/20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/93703c00-d56c-4f8a-a80e-651da5c94058.png" 
                alt="Synapserra Logo" 
                className="h-8 w-auto"
              />
              <span className="text-lg font-semibold text-foreground">Synapserra Inc.</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 Synapserra Inc. All rights reserved.
            </div>
            <div className="flex gap-8">
              <a href="#privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;