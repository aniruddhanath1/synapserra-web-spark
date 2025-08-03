import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4">
        <div className="text-xl font-normal text-foreground">
          Synapserra Inc.
        </div>
        <nav className="flex items-center gap-6">
          <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Services
          </a>
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-[80vh] px-6">
        <div className="text-center max-w-2xl mx-auto">
          {/* Company Name */}
          <h1 className="text-6xl md:text-7xl font-normal text-foreground mb-8 tracking-tight">
            Synapserra
          </h1>
          
          {/* Tagline */}
          <p className="text-xl text-muted-foreground mb-12 max-w-lg mx-auto">
            Professional IT solutions for modern businesses
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="min-w-[160px] h-12 text-base font-normal"
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="min-w-[160px] h-12 text-base font-normal"
            >
              View Services
            </Button>
          </div>

          {/* Services */}
          <div id="services" className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 rounded-lg border border-border bg-card hover:shadow-sm transition-shadow">
              <h3 className="text-lg font-medium text-foreground mb-3">
                Web Development
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Custom web applications built with Java, .NET, PHP, and Python. 
                Scalable solutions tailored to your business needs.
              </p>
            </div>
            
            <div className="p-6 rounded-lg border border-border bg-card hover:shadow-sm transition-shadow">
              <h3 className="text-lg font-medium text-foreground mb-3">
                Salesforce CRM Development
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Expert Salesforce customization and integration services 
                to optimize your customer relationship management.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 Synapserra Inc. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
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